import { useLang } from "@/contexts/language";
import { Quote } from "lucide-react";
import SplitText from "./SplitText";

export function CeoMessage() {
  const { isArabic } = useLang();

  return (
    <section
      aria-labelledby="ceo-message-heading"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "كلمة القيادة" : "Leadership voice"}</p>
          <SplitText
            tag="h2"
            text={isArabic ? "كلمة من المدير العام" : "Message from the Managing Director"}
            id="ceo-message-heading"
            className="mt-3 text-3xl md:text-5xl"
            textAlign="left"
            delay={35}
            duration={0.9}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
          <div>
            <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
              <div className="flex h-80 w-full items-center justify-center bg-[image:var(--gradient-primary)]">
                <span className="font-display text-5xl font-bold text-primary-foreground/90">
                  BS
                </span>
              </div>
              <figcaption className="border-t border-border p-5">
                <p className="font-display text-base font-bold text-primary">
                  {isArabic ? "السيد بالاجي سرينيفاسان" : "Mr. Balaji Srinivasan"}
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-accent-strong uppercase">
                  {isArabic
                    ? "المؤسس · الرئيس التنفيذي للمجموعة والمدير العام"
                    : "Founder · Group CEO & Managing Director"}
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="relative">
            <Quote aria-hidden className="absolute -top-2 -left-2 size-12 text-accent/25" />
            <div className="relative space-y-5 text-base leading-relaxed text-muted-foreground">
              {isArabic ? (
                <>
                  <p>
                    لأكثر من عقدين من الزمن، كانت مجموعة تويل للهندسة مدفوعة بقناعة واحدة — وهي أن
                    التميز الهندسي، الذي يتم تقديمه بأمان وفي الوقت المحدد، هو الأساس الذي تبنى عليه
                    ثقة العملاء الدائمة. ما بدأ كمشروع من غرفة واحدة في مسقط أصبح اليوم مجموعة من
                    الشركات المتخصصة التي تنفذ مشاريع معقدة في عمان والخليج والهند.
                  </p>
                  <p>
                    الابتكار والتحسين المستمر أمران غير قابلين للتفاوض بالنسبة لنا. نحن نستثمر في
                    الأساليب الحديثة، والتسليم الرقمي، وقدرات التصنيع الداخلي، والأهم من ذلك — في
                    موظفينا — بحيث يستفيد كل مشروع ننفذه من أفضل ما في الهندسة الحديثة وفكر الغد.
                  </p>
                  <p>
                    علاقاتنا الطويلة مع المالكين ومقاولي التوريد والبناء والعملاء الحكوميين تعكس
                    وعداً بسيطاً: نحن نفعل ما نقول أننا سنفعله. السلامة والجودة والإدارة البيئية
                    تعامل كمعايير للمجموعة، وليست خيارات للمشروع، وهي توجه كل قرار في كل موقع نعمل
                    فيه.
                  </p>
                  <p>
                    بينما نتطلع إلى المستقبل، رؤيتنا هي أن نبقى الشريك المفضل لمشاريع الهندسة
                    والبناء والطاقة في المنطقة — مجموعة تجمع بين طموح الأعمال الشابة ومصداقية السجل
                    الحافل. شكراً لثقتكم المستمرة في مجموعة تويل للهندسة.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    For more than two decades, Towell Engineering Group has been driven by a single
                    conviction — that engineering excellence, delivered safely and on time, is the
                    foundation on which lasting client trust is built. What began as a one-room
                    venture in Muscat is today a group of specialised companies executing complex
                    projects across Oman, the GCC and India.
                  </p>
                  <p>
                    Innovation and continuous improvement are non-negotiable for us. We invest in
                    modern methods, digital delivery, in-house fabrication capacity and — most
                    importantly — in our people, so that every project we take on benefits from the
                    best of today's engineering discipline and tomorrow's thinking.
                  </p>
                  <p>
                    Our long-standing relationships with owners, EPC contractors and government
                    clients reflect a simple promise: we do what we say we will do. Safety, quality
                    and environmental stewardship are treated as group standards, not project
                    options, and they guide every decision on every site we work on.
                  </p>
                  <p>
                    As we look ahead, our vision is to remain the partner of choice for engineering,
                    construction and energy projects in the region — a group that combines the
                    ambition of a young business with the credibility of a proven track record.
                    Thank you for your continued trust in Towell Engineering Group.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-display text-2xl text-primary italic">
                {isArabic ? "بالاجي سرينيفاسان" : "Balaji Srinivasan"}
              </p>
              <p className="mt-1 text-[11px] font-bold tracking-[0.18em] text-accent-strong uppercase">
                {isArabic
                  ? "المؤسس · الرئيس التنفيذي للمجموعة والمدير العام"
                  : "Founder · Group CEO & Managing Director"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
