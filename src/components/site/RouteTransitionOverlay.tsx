import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import {
  TOWELL_MARK_DETAILS,
  TOWELL_MARK_PATHS,
  TOWELL_MARK_TRANSFORM,
  TOWELL_MARK_VIEWBOX,
} from "./towell-mark";

/**
 * RouteTransitionOverlay
 *
 * Premium route loader: neon-green engineering lines draw the official
 * Towell crest (SVG stroke animation), the mark then fills while the glow
 * blooms, the group wordmark rises in and the overlay dissolves into the
 * page.
 *
 * Smoothness notes:
 * - The whole sequence is ONE declarative CSS timeline (keyframes + delays),
 *   so the compositor runs it uninterrupted. React only mounts/unmounts the
 *   overlay — no per-phase re-renders, which is what caused the old jitter.
 * - Only `stroke-dashoffset`, `opacity` and `transform` animate, all of which
 *   stay off the layout/paint path, keeping the sequence at 60fps.
 * - `prefers-reduced-motion` collapses it to a single calm cross-fade.
 */

/** Timeline (ms) — kept in sync with the keyframes in styles.css. */
const DRAW_MS = 720;
const STAGGER_MS = 95;
/** Small breath so the outline is visibly complete before the fill starts. */
const DRAW_SETTLE_MS = 70;
const FILL_MS = 380;
const WORDMARK_MS = 430;
const EXIT_MS = 460;

const DRAW_END = DRAW_MS + STAGGER_MS * (TOWELL_MARK_PATHS.length - 1) + DRAW_SETTLE_MS;
const HOLD_END = DRAW_END + FILL_MS + 140;
const TOTAL_MS = HOLD_END + EXIT_MS;


const REDUCED_TOTAL_MS = 420;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function RouteTransitionOverlay() {
  // Trigger on every navigation, not only on slow ("pending") ones — fast
  // client-side transitions (mobile / embedded previews) never reach
  // "pending", which is why the loader used to be invisible there.
  // Keyed on the destination path only: router status flips
  // (idle -> pending -> idle) and hydration-time URL normalisation must not
  // open or restart the sequence.
  const navKey = useRouterState({ select: (s) => s.location.pathname });

  const [run, setRun] = useState<{ id: number; reduced: boolean } | null>(null);
  const active = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const seq = useRef(0);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  // The first paint is skipped: hydration finishes after the page is already
  // visible, so an overlay there would cover content the visitor can see.
  // The sequence belongs to real navigations.
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === null) {
      lastPath.current = navKey;
      return;
    }
    if (lastPath.current === navKey) return;
    lastPath.current = navKey;
    if (active.current) return;
    active.current = true;

    const reduced = prefersReducedMotion();
    seq.current += 1;
    setRun({ id: seq.current, reduced });

    timer.current = setTimeout(
      () => {
        setRun(null);
        active.current = false;
      },
      reduced ? REDUCED_TOTAL_MS : TOTAL_MS,
    );
  }, [navKey]);



  if (!run) return null;

  const { reduced } = run;

  /** Shared easing: fast, confident start, long settle — no abrupt stops. */
  const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

  const overlayAnim = reduced
    ? `towell-overlay-simple ${REDUCED_TOTAL_MS}ms ease-in-out both`
    : `towell-overlay ${TOTAL_MS}ms linear both`;

  return (
    <div
      key={run.id}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-7"
      style={{
        backgroundColor: "#0F1A2E",
        animation: overlayAnim,
        willChange: "opacity",
        contain: "strict",
        // keeps the layer promoted for the whole sequence — no mid-run repaint
        backfaceVisibility: "hidden",
      }}
    >
      {/* Soft engineering glow that blooms in sync with the fill */}
      <div
        className="pointer-events-none absolute size-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(151,203,70,0.20) 0%, rgba(151,203,70,0) 70%)",
          animation: reduced
            ? undefined
            : `towell-bloom ${FILL_MS + 260}ms ${EASE} ${DRAW_END - 120}ms both`,
          opacity: reduced ? 1 : undefined,
          willChange: "opacity, transform",
        }}
      />

      <svg
        viewBox={TOWELL_MARK_VIEWBOX}
        className="relative size-32 md:size-40"
        style={{
          filter: "drop-shadow(0 0 22px rgba(151,203,70,0.32))",
          overflow: "visible",
          animation: reduced ? undefined : `towell-mark-settle ${TOTAL_MS}ms ${EASE} both`,
          willChange: "transform, opacity",
        }}
      >
        <g transform={TOWELL_MARK_TRANSFORM}>
          {TOWELL_MARK_PATHS.map((d, i) => (
            <path
              key={i}
              d={d}
              pathLength={1}
              stroke="#97CB46"
              strokeWidth={1.6}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="#97CB46"
              style={
                reduced
                  ? { fillOpacity: 1, strokeOpacity: 0 }
                  : {
                      strokeDasharray: 1,
                      animation: [
                        `towell-draw ${DRAW_MS}ms cubic-bezier(0.33, 0.02, 0.2, 1) ${i * STAGGER_MS}ms both`,
                        `towell-fill ${FILL_MS}ms ${EASE} ${DRAW_END}ms both`,
                      ].join(", "),
                      willChange: "stroke-dashoffset, fill-opacity",
                    }
              }
            />
          ))}
          {TOWELL_MARK_DETAILS.map((d, i) => (
            <path
              key={`d-${i}`}
              d={d}
              fill="#97CB46"
              style={
                reduced
                  ? { opacity: 1 }
                  : {
                      animation: `towell-detail ${FILL_MS}ms ${EASE} ${DRAW_END + 80 + i * 40}ms both`,
                      willChange: "opacity",
                    }
              }
            />
          ))}
        </g>
      </svg>

      <p
        className="relative text-center text-sm font-semibold tracking-[0.32em] text-white/90 uppercase md:text-base"
        style={
          reduced
            ? { opacity: 1 }
            : {
                animation: `towell-wordmark ${WORDMARK_MS}ms ${EASE} ${DRAW_END + 160}ms both`,
                willChange: "opacity, transform",
              }
        }
      >
        Towell Engineering Group
      </p>
    </div>
  );
}
