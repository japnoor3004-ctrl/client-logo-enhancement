import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Building2,
  CircuitBoard,
  CloudRain,
  Cog,
  Droplets,
  Factory,
  Flame,
  Gauge,
  HardHat,
  Layers,
  Lightbulb,
  PaintRoller,
  PlugZap,
  Route as RouteIcon,
  Ruler,
  ShieldCheck,
  Sprout,
  Truck,
  Waves,
  Wrench,
  Zap,
} from "lucide-react";

import smelterHeroDomesSrc from "@/assets/smelter-hero-domes.jpg";
const smelterHeroDomesAsset = { url: smelterHeroDomesSrc };
import smelterDomeLiftSrc from "@/assets/smelter-dome-lift.jpg";
const smelterDomeLiftAsset = { url: smelterDomeLiftSrc };
import tankDomesAerialSrc from "@/assets/tank-domes-aerial.jpg";
const tankDomesAerialAsset = { url: tankDomesAerialSrc };
import valeASrc from "@/assets/vale-a.jpg";
const valeAAsset = { url: valeASrc };
import valeBSrc from "@/assets/vale-b.jpg";
const valeBAsset = { url: valeBSrc };
import valeCSrc from "@/assets/vale-c.jpg";
const valeCAsset = { url: valeCSrc };
import valeFSrc from "@/assets/vale-f.jpg";
const valeFAsset = { url: valeFSrc };
import yibalKilnSrc from "@/assets/yibal-kiln.jpg";
const yibalKilnAsset = { url: yibalKilnSrc };
import barkaRack1Src from "@/assets/barka-swro-rack1.jpg";
const barkaRack1Asset = { url: barkaRack1Src };
import barkaRack2Src from "@/assets/barka-swro-rack2.jpg";
const barkaRack2Asset = { url: barkaRack2Src };
import barkaRack3Src from "@/assets/barka-swro-rack3.jpg";
const barkaRack3Asset = { url: barkaRack3Src };
import duqmEpc1ProcessImg from "@/assets/duqm-epc1-process-units.jpg";
import duqmEpc1SteelImg from "@/assets/duqm-epc1-steel-structure.jpg";
import duqmEpc1PiperackImg from "@/assets/duqm-epc1-piperack.jpg";
import duqmEpc1PiperackWideImg from "@/assets/duqm-epc1-piperack-wide.jpg";
import duqmEpc1SwitchgearImg from "@/assets/duqm-epc1-switchgear.jpg";
import duqmEpc2OffsitesImg from "@/assets/duqm-epc2-offsites.jpg";
import duqmEpc2DerrickImg from "@/assets/duqm-epc2-derrick.jpg";
import duqmEpc2BulletLiftImg from "@/assets/duqm-epc2-bullet-lift.jpg";
import duqmEpc2BulletTransportImg from "@/assets/duqm-epc2-bullet-transport.jpg";
import duqmEpc2PiperackRoadImg from "@/assets/duqm-epc2-piperack-road.jpg";
import duqmEpc2SwitchgearImg from "@/assets/duqm-epc2-switchgear.jpg";
import telcoNedcBuildingImg from "@/assets/telco-nedc-substation-building.jpg";
import telcoNedcTransformerBayImg from "@/assets/telco-nedc-transformer-bay.jpg";
import telcoNedc33kvImg from "@/assets/telco-nedc-33kv-switchgear.jpg";
import telcoNedc11kvImg from "@/assets/telco-nedc-11kv-switchgear.jpg";
import telcoNedcRelayPanelsImg from "@/assets/telco-nedc-control-relay-panels.jpg";
import telcoNedcBatteryImg from "@/assets/telco-nedc-battery-bank.jpg";
import telcoMarafiqLiftImg from "@/assets/telco-marafiq-transformer-lift.jpg";
import telcoMarafiqDeliveryImg from "@/assets/telco-marafiq-transformer-delivery.jpg";
import telcoMarafiqGlandingImg from "@/assets/telco-marafiq-cable-glanding.jpg";
import telcoMarafiqRelayImg from "@/assets/telco-marafiq-relay-panel.jpg";
import telcoCableLayingTrenchImg from "@/assets/telco-cable-laying-trench.jpg";
import telcoCableLayingRouteImg from "@/assets/telco-cable-laying-route.jpg";
import telcoCableEntryDuctImg from "@/assets/telco-cable-entry-duct.jpg";
import telcoCableTrayRunImg from "@/assets/telco-cable-tray-run.jpg";
import telcoCableTrayInstallImg from "@/assets/telco-cable-tray-install.jpg";
import telcoTrayCoverFittingImg from "@/assets/telco-tray-cover-fitting.jpg";
import telcoTrayCoverCompleteImg from "@/assets/telco-tray-cover-complete.jpg";

import pipelineImg from "@/assets/pipeline.jpg";
import fabricationImg from "@/assets/fabrication.jpg";
import fabrication2Img from "@/assets/fabrication2.jpg";
import rusaylCableRouteImg from "@/assets/rusayl-132kv-cable-route.jpg";
import rusaylSubstationLayoutImg from "@/assets/rusayl-220-132kv-substation-layout.jpg";
import supremeCourtImg from "@/assets/tcc-supreme-court-complex.jpg";
import tccJotunConstructionImg from "@/assets/tcc-jotun-factory-construction.jpg";
import tccJotunEntranceImg from "@/assets/tcc-jotun-factory-entrance.jpg";
import tccJotunAerialImg from "@/assets/tcc-jotun-factory-aerial.jpg";
import tccValeAerialImg from "@/assets/tcc-vale-pelletising-aerial.jpg";
import tccValeInteriorImg from "@/assets/tcc-vale-pelletising-interior.jpg";
import tccValePlantImg from "@/assets/tcc-vale-pelletising-plant.jpg";
import tccSandanImg from "@/assets/tcc-sandan-industrial-city.jpg";

import waterPlantImg from "@/assets/water-plant.jpg";
import refineryImg from "@/assets/refinery.jpg";
import mudhaibiWaterImg from "@/assets/mudhaibi-water.jpg";
import careersImg from "@/assets/careers.jpg";
import balajiImg from "@/assets/balaji.jpg";

/* Project photography (local files bundled with the repo). */
import liwaTownshipImg from "@/assets/liwa-township.jpg";
import liwaIrrigationImg from "@/assets/liwa-irrigation.jpg";
import liwaPumpStationImg from "@/assets/liwa-pump-station.jpg";
import liwaReservoirImg from "@/assets/liwa-reservoir.jpg";
import liwaLiftStationImg from "@/assets/liwa-lift-station.jpg";
import liwaPipeline1Img from "@/assets/liwa-pipeline-1.jpg";
import liwaPipeline2Img from "@/assets/liwa-pipeline-2.jpg";
import liwaChambersImg from "@/assets/liwa-chambers.jpg";
import mudhaibiTeamImg from "@/assets/mudhaibi-team.jpg";
import mudhaibiWorksImg from "@/assets/mudhaibi-works.jpg";
import bidbidPourImg from "@/assets/bidbid-pour.jpg";
import bidbidQuarryImg from "@/assets/bidbid-quarry.jpg";
import bidbidRoadsideImg from "@/assets/bidbid-roadside.jpg";
import bidbidFormworkImg from "@/assets/bidbid-formwork.jpg";
import bidbidPumpImg from "@/assets/bidbid-pump.jpg";
import soharPiperackImg from "@/assets/sohar-piperack.jpg";
import soharPipingImg from "@/assets/sohar-piping.jpg";
import soharPlantImg from "@/assets/sohar-plant.jpg";
import soharFoundationsImg from "@/assets/sohar-foundations.jpg";
import soharTankPadsImg from "@/assets/sohar-tankpads.jpg";
import soharScaffoldImg from "@/assets/sohar-scaffold.jpg";
import soharSteelImg from "@/assets/sohar-steel.jpg";

const liwaHeroAsset = { url: liwaPumpStationImg };
const liwaReservoirAsset = { url: liwaReservoirImg };
const liwaLiftStationAsset = { url: liwaLiftStationImg };
const liwaTownshipAsset = { url: liwaTownshipImg };
const liwaIrrigationAsset = { url: liwaIrrigationImg };
const liwaPipeline1Asset = { url: liwaPipeline1Img };
const liwaPipeline2Asset = { url: liwaPipeline2Img };
const liwaChambersAsset = { url: liwaChambersImg };
const concretePourAsset = { url: bidbidPourImg };
const mudhaibiTeamHqAsset = { url: mudhaibiTeamImg };
const mudhaibiExcavatorAsset = { url: mudhaibiWorksImg };
const bidbidReservoirAsset = { url: bidbidQuarryImg };
const bidbidRoadsideAsset = { url: bidbidRoadsideImg };
const bidbidFormworkAsset = { url: bidbidFormworkImg };
const bidbidPumpAsset = { url: bidbidPumpImg };
const soharPipeRackAsset = { url: soharPiperackImg };
const soharTankPadsAsset = { url: soharTankPadsImg };
const soharPipingAsset = { url: soharPipingImg };
const soharFoundationsAsset = { url: soharFoundationsImg };
const soharPlantAsset = { url: soharPlantImg };
const soharScaffoldAsset = { url: soharScaffoldImg };
const soharSteelAsset = { url: soharSteelImg };
const ppAerialPlantAsset = { url: duqmEpc1ProcessImg };
const ppPipingTowerAsset = { url: duqmEpc2PiperackRoadImg };
const ppLoopReactorAsset = { url: duqmEpc1SteelImg };
const ppKoDrumLiftAsset = { url: duqmEpc2BulletLiftImg };
const ppSiloStructureAsset = { url: duqmEpc2OffsitesImg };
const ppPiperackAsset = { url: duqmEpc1PiperackImg };

/* TIEL — Towell Engineering India Ltd. project photography. */
import teilCokeHeroImg from "@/assets/teil-coke-feeding-hero.jpg";
import teilCokeErectionImg from "@/assets/teil-coke-feeding-erection.jpg";
import teilCokeConveyorImg from "@/assets/teil-coke-feeding-conveyor.jpg";
import teilDcplHeroImg from "@/assets/teil-dcpl-hero.jpg";
import teilDcplErectionImg from "@/assets/teil-dcpl-erection.jpg";
import teilDcplStructuresImg from "@/assets/teil-dcpl-structures.jpg";
import teilWarehouseHeroImg from "@/assets/teil-warehouse-hero.jpg";
import teilWarehouseErectionImg from "@/assets/teil-warehouse-erection.jpg";
import teilWarehouseCompleteImg from "@/assets/teil-warehouse-complete.jpg";
import teilSilosHeroImg from "@/assets/teil-silos-hero.jpg";
import teilSilosConeImg from "@/assets/teil-silos-cone.jpg";

export type CompanyCode = "TIPCO" | "TESCO" | "TELCO" | "UNISCO" | "TCC" | "TEIL";

export type ShowcaseStat =
  | { value: number; prefix?: string; suffix?: string; label: string }
  | { text: string; label: string };

export type ShowcaseProject = {
  slug: string;
  company: CompanyCode;
  companyPath: "/tipco" | "/tesco" | "/telco" | "/unisco" | "/tcc" | "/teil";
  flagship?: boolean;
  /** Shown only on the owning company page — excluded from the main Projects listing. */
  companyOnly?: boolean;
  title: string;
  /** One line used on cards. */
  summary: string;
  /** Hero sub-headline. */
  tagline: string;
  client: string;
  location: string;
  years: string;
  value?: string;
  /** 60–80 words. */
  overview: string;
  overviewHeading: string;
  stats: ShowcaseStat[];
  scope: { icon: LucideIcon; title: string; text: string }[];
  image: string;
  gallery: { src: string; alt: string; caption: string }[];
};

export const PROJECTS: ShowcaseProject[] = [
  /* ── TIPCO ─────────────────────────────────────────────── */
  {
    slug: "liwa-residential-infrastructure",
    company: "TIPCO",
    companyPath: "/tipco",
    flagship: true,
    title: "Construction of Infrastructure for Liwa Residential Area",
    summary: "Full utility and civil backbone for Oman's largest modern township.",
    tagline:
      "Oman's largest modern township infrastructure programme, delivered for the Ministry of Housing beside the Sohar Industrial Port.",
    client: "Ministry of Housing (MOH)",
    location: "Liwa, Sultanate of Oman",
    years: "2016 – 2018",
    value: "RO 75 Million",
    overviewHeading: "A township built from the ground up",
    overview:
      "Liwa is the largest modern township programme undertaken by the Government of Oman, serving 2,500 homes across 800 hectares beside the Sohar Industrial Port. TIPCO delivered the complete civil and utility backbone — water, sewerage, irrigation, electrical, storm water and roads — as a single integrated contract, awarded ahead of five competing contractors on delivery record alone.",
    stats: [
      { value: 800, label: "Hectares developed" },
      { value: 2500, label: "Homes served" },
      { value: 75, prefix: "RO ", suffix: "M", label: "Contract value" },
      { text: "6", label: "Networks delivered" },
      { text: "Government", label: "Ministry of Housing" },
    ],
    scope: [
      {
        icon: Droplets,
        title: "Potable Water",
        text: "Township-wide mains, reservoirs and booster capacity.",
      },
      {
        icon: Waves,
        title: "Sewerage",
        text: "Gravity collection with lift and main pumping stations.",
      },
      {
        icon: Sprout,
        title: "Irrigation",
        text: "Dedicated reservoir and reticulation for landscaped zones.",
      },
      {
        icon: Zap,
        title: "Electrical",
        text: "Primary distribution, cabling and street lighting.",
      },
      {
        icon: CloudRain,
        title: "Storm Water",
        text: "Surface drainage and flood-flow protection.",
      },
      { icon: RouteIcon, title: "Roads", text: "Road formation, paving and public realm works." },
    ],
    image: liwaTownshipAsset.url,
    gallery: [
      {
        src: liwaTownshipAsset.url,
        alt: "Aerial view of completed community facilities at the Liwa residential area",
        caption: "Liwa residential area",
      },
      {
        src: liwaIrrigationAsset.url,
        alt: "Aerial view of the completed irrigation reservoir at Liwa",
        caption: "Irrigation reservoir",
      },
      {
        src: liwaHeroAsset.url,
        alt: "Aerial view of the completed sewage main pumping station at Liwa",
        caption: "Sewage main pumping station",
      },
      {
        src: liwaReservoirAsset.url,
        alt: "Aerial view of the completed potable water reservoir at Liwa",
        caption: "Potable water reservoir",
      },
      {
        src: liwaLiftStationAsset.url,
        alt: "Aerial view of the completed sewage lift station at Liwa",
        caption: "Sewage lift station",
      },
      {
        src: liwaPipeline1Asset.url,
        alt: "Water transmission pipeline being laid across the Liwa site",
        caption: "Transmission pipeline",
      },
      {
        src: liwaPipeline2Asset.url,
        alt: "Pipeline trench and bedding works crossing rocky terrain at Liwa",
        caption: "Pipeline trenching",
      },
      {
        src: liwaChambersAsset.url,
        alt: "Precast sewerage manhole chambers stored on site at Liwa",
        caption: "Precast manhole chambers",
      },
    ],
  },
  {
    slug: "mudhaibi-water-distribution-network",
    company: "TIPCO",
    companyPath: "/tipco",
    title: "Al Mudhaibi Water Distribution Network",
    summary: "An RO 65 million distribution network completed months ahead of schedule.",
    tagline:
      "A design-build-finance water network for Nama Water Services, operational four months ahead of programme.",
    client: "Nama Water Services (NWS)",
    location: "Al Mudhaibi, Al Sharqiyah North",
    years: "2021 – 2023",
    value: "RO 65 Million",
    overviewHeading: "Water security, delivered early",
    overview:
      "TIPCO built the reverse-osmosis fed distribution network serving Al Mudhaibi and its surrounding villages under a design-build-finance model. Originally programmed for March 2024, the network became operational in November 2023. It carries treated water to homes, businesses and industry across the wilayat and is projected to serve 130,000 residents by 2025, rising to 154,000 by 2040.",
    stats: [
      { value: 820, label: "Kilometres of network" },
      { value: 14000, label: "Household connections" },
      { value: 65, prefix: "RO ", suffix: "M", label: "Contract value" },
      { value: 130000, label: "Residents served by 2025" },
      { text: "4 months", label: "Ahead of schedule" },
    ],
    scope: [
      {
        icon: Droplets,
        title: "Distribution Mains",
        text: "820 km of transmission and distribution pipeline.",
      },
      {
        icon: Gauge,
        title: "Booster Pumping",
        text: "Booster pump stations and pressure management.",
      },
      {
        icon: Layers,
        title: "Storage Tanks",
        text: "Reservoir capacity feeding the wilayat network.",
      },
      {
        icon: PlugZap,
        title: "Connections",
        text: "Household, commercial and industrial service connections.",
      },
      {
        icon: ShieldCheck,
        title: "Fire Hydrants",
        text: "Hydrant network and emergency shutdown valves.",
      },
      { icon: CircuitBoard, title: "SCADA", text: "Telemetry and remote control of the network." },
    ],
    image: mudhaibiExcavatorAsset.url,
    gallery: [
      {
        src: mudhaibiTeamHqAsset.url,
        alt: "Project team on site at the Al Mudhaibi water distribution works",
        caption: "Site team at Al Mudhaibi",
      },
      {
        src: mudhaibiExcavatorAsset.url,
        alt: "Pipe laying works for the water distribution mains at Al Mudhaibi",
        caption: "Distribution mains installation",
      },
    ],
  },
  {
    slug: "musannah-water-supply-scheme",
    company: "TIPCO",
    companyPath: "/tipco",
    title: "Water Distribution Networks for Wilayat Bid Bid",
    summary: "583 km of DI and HDPE distribution serving the Wilayat of Bid Bid.",
    tagline:
      "A modern water distribution network for the Wilayat of Bid Bid, with reservoirs, pumping and reticulation.",
    client: "Public Authority for Electricity & Water (PAEW)",
    location: "Bid Bid, A'Dakhiliyah",
    years: "2009 – 2011",
    value: "RO 17.5 Million",
    overviewHeading: "A network built for a growing wilayat",
    overview:
      "TIPCO delivered 583 km of ductile iron and HDPE distribution pipeline across the Wilayat of Bid Bid, together with reservoir structures, pumping facilities and full reticulation to the villages of the wilayat. One of the larger schemes in PAEW's distribution programme, the works were completed ahead of programme while supplying a rapidly urbanising population.",
    stats: [
      { value: 583, label: "Kilometres of pipeline" },
      { value: 17, prefix: "RO ", suffix: ".5M", label: "Contract value" },
      { value: 20, label: "Km main transmission line" },
      { text: "100%", label: "Village coverage" },
      { text: "Early", label: "Completed before deadline" },
    ],
    scope: [
      {
        icon: Droplets,
        title: "DI Pipeline",
        text: "Ductile iron transmission and distribution mains.",
      },
      {
        icon: Waves,
        title: "HDPE Network",
        text: "HDPE reticulation across residential districts.",
      },
      {
        icon: Gauge,
        title: "Valve Chambers",
        text: "Sectional valves, chambers and washout assemblies.",
      },
      {
        icon: Building2,
        title: "Reservoirs",
        text: "Reinforced concrete reservoirs and valve houses.",
      },
      {
        icon: HardHat,
        title: "Road Crossings",
        text: "Trenchless and open-cut highway crossings.",
      },
      {
        icon: ShieldCheck,
        title: "Testing",
        text: "Pressure testing, disinfection and commissioning.",
      },
    ],
    image: bidbidFormworkAsset.url,
    gallery: [
      {
        src: concretePourAsset.url,
        alt: "Concrete pumps placing a reservoir base slab",
        caption: "Reservoir concrete pour",
      },
      {
        src: bidbidReservoirAsset.url,
        alt: "Excavated reservoir platform cut into the hillside at Bid Bid",
        caption: "Reservoir platform excavation",
      },
      {
        src: bidbidFormworkAsset.url,
        alt: "Reservoir roof slab formwork and reinforcement at Bid Bid",
        caption: "Reservoir roof slab formwork",
      },
      {
        src: bidbidRoadsideAsset.url,
        alt: "Pipeline laid along the roadside corridor at Bid Bid",
        caption: "Roadside pipeline corridor",
      },
      {
        src: bidbidPumpAsset.url,
        alt: "Concrete boom pump placing the reservoir base slab at Bid Bid",
        caption: "Base slab concrete placement",
      },
    ],
  },
  {
    slug: "sohar-refinery-cmei-works",
    company: "TIPCO",
    companyPath: "/tipco",
    title: "CMEI Works for Sohar Refinery Improvement Project",
    summary:
      "Complete civil, mechanical, electrical and instrumentation works for the Sohar Refinery Improvement Project.",
    tagline:
      "Civil, mechanical, electrical and instrumentation delivery for ORPIC, executed on behalf of the Daelim–Petrofac joint venture.",
    client: "Daelim Petrofac JV (ORPIC)",
    location: "Sohar, Sultanate of Oman",
    years: "2015",
    value: "USD 31.10 Million",
    overviewHeading: "One contractor, four disciplines",
    overview:
      "TIPCO executed the complete civil, mechanical, electrical and instrumentation scope of the Sohar Refinery Improvement Project for the Daelim–Petrofac joint venture. The works covered foundations for pipe sleepers, pumps, the MTBE tank, bullets and tank pads, full piping fabrication and installation with NDT and commissioning, erection of rotary and static equipment, transformers, switchgears and MCC panels, and installation of field instruments and control valves.",
    stats: [
      { value: 31, prefix: "USD ", suffix: ".1M", label: "Contract value" },
      { text: "2015", label: "Execution year" },
      { text: "4", label: "Disciplines delivered" },
      { text: "ORPIC", label: "End client" },
      { text: "Daelim–Petrofac", label: "Joint venture" },
    ],
    scope: [
      {
        icon: Building2,
        title: "Foundations",
        text: "Pipe sleeper, pump, MTBE tank, bullet and tank pad foundations.",
      },
      {
        icon: Wrench,
        title: "Piping",
        text: "Spool fabrication, installation, tie-ins, painting, NDT and testing.",
      },
      {
        icon: Cog,
        title: "Equipment Erection",
        text: "Bullets, desalter package, pumps and static equipment.",
      },
      {
        icon: Zap,
        title: "Electrical",
        text: "Transformers, switchgears, MCC panels and cabling works.",
      },
      {
        icon: CircuitBoard,
        title: "Instrumentation",
        text: "Field instruments, control valves and loop checking.",
      },
      {
        icon: ShieldCheck,
        title: "Commissioning",
        text: "Testing, pre-commissioning and handover to operations.",
      },
    ],
    image: soharPipeRackAsset.url,
    gallery: [
      {
        src: soharPipeRackAsset.url,
        alt: "Completed pipe rack structure at the Sohar refinery",
        caption: "Interconnecting pipe rack",
      },
      {
        src: soharPipingAsset.url,
        alt: "Rows of installed process piping at the Sohar refinery",
        caption: "Process piping installation",
      },
      {
        src: soharPlantAsset.url,
        alt: "Refinery plant piping and structures at Sohar",
        caption: "Plant piping and structures",
      },
      {
        src: soharFoundationsAsset.url,
        alt: "Foundation and civil works in progress at the Sohar refinery",
        caption: "Foundation and civil works",
      },
      {
        src: soharTankPadsAsset.url,
        alt: "Completed tank pad foundations at the Sohar refinery",
        caption: "Tank pad foundations",
      },
      {
        src: soharScaffoldAsset.url,
        alt: "Scaffolding and access works alongside refinery units at Sohar",
        caption: "Scaffolding and access works",
      },
      {
        src: soharSteelAsset.url,
        alt: "Structural steel frame erection with mobile crane at the Sohar refinery",
        caption: "Structural steel erection",
      },
    ],
  },

  /* ── TESCO ─────────────────────────────────────────────── */
  {
    slug: "duqm-refinery-area-0-electromechanical",
    company: "TESCO",
    companyPath: "/tesco",
    flagship: true,
    title: "Electro-Mechanical Works — Duqm Refinery EPC-1, Area 0",
    summary: "Complete electro-mechanical delivery on the largest package of the Duqm refinery.",
    tagline:
      "Cooling tower and interconnecting pipe rack works for the Duqm Refinery, executed for the Técnicas Reunidas – Daewoo joint venture.",
    client: "Técnicas Reunidas (TR) – Daewoo JV",
    location: "Duqm, Sultanate of Oman",
    years: "2019 – 2021",
    value: "USD 52.15 Million",
    overviewHeading: "The refinery's central utilities, built end to end",
    overview:
      "Duqm Refinery is a lump-sum turnkey development for DRPIC, the OQ and Kuwait Petroleum joint venture. TESCO delivered the complete electro-mechanical scope for Area 0 — the cooling tower and interconnecting pipe rack — covering piping, structural steel, equipment erection, painting, insulation and full electrical and instrumentation works, across roughly 2.9 million project man-hours.",
    stats: [
      { value: 52, prefix: "USD ", suffix: ".15M", label: "Contract value" },
      { value: 350000, label: "Inch-dia of piping" },
      { value: 12325, suffix: " MT", label: "Steel erected" },
      { value: 600, suffix: " MT", label: "Pipe supports" },
      { value: 2900000, label: "Man-hours worked" },
    ],
    scope: [
      { icon: Wrench, title: "Piping Erection", text: "350,000 inch-dia of piping with supports." },
      {
        icon: Boxes,
        title: "Structural Steel",
        text: "12,325 MT of steel fabrication and erection.",
      },
      { icon: Cog, title: "Equipment", text: "Cooling tower, pumps and rotating equipment." },
      {
        icon: PaintRoller,
        title: "Painting & Insulation",
        text: "Surface protection and thermal insulation.",
      },
      { icon: Zap, title: "Electrical", text: "Switchgear, transformers, UPS and panels." },
      {
        icon: CircuitBoard,
        title: "Instrumentation",
        text: "MV/LV and control cabling, loop checks.",
      },
    ],
    image: duqmEpc1ProcessImg,
    gallery: [
      {
        src: duqmEpc1ProcessImg,
        alt: "Duqm refinery process units and pipe racks in Area 0",
        caption: "Process units and pipe racks",
      },
      {
        src: duqmEpc1SteelImg,
        alt: "Structural steel frames erected in Area 0 of the Duqm refinery",
        caption: "Structural steel works",
      },
      {
        src: duqmEpc1PiperackImg,
        alt: "Interconnecting pipe rack under construction at the Duqm refinery",
        caption: "Interconnecting pipe rack",
      },
      {
        src: duqmEpc1PiperackWideImg,
        alt: "Completed multi-tier pipe rack running through the refinery",
        caption: "Piping and pipe supports",
      },
      {
        src: duqmEpc1SwitchgearImg,
        alt: "LV switchgear line-up installed in the Area 0 substation",
        caption: "Electrical and instrumentation works",
      },
    ],
  },
  {
    slug: "duqm-refinery-flare-area-package-2",
    company: "TESCO",
    companyPath: "/tesco",
    title: "MEI Works — Duqm Refinery EPC-2, Flare Area",
    summary: "Mechanical, electrical and instrumentation works for the refinery flare package.",
    tagline:
      "Package 2 offsites and utilities works delivered for the Petrofac – Samsung joint venture.",
    client: "Petrofac – Samsung JV",
    location: "Duqm, Sultanate of Oman",
    years: "2020 – 2022",
    overviewHeading: "A 180 metre flare, safely erected",
    overview:
      "For the offsites and utilities package of Duqm Refinery, TESCO executed the complete mechanical, electrical and instrumentation scope of the Flare Area. Works centred on a 180 metre flare and its derrick structure, together with LPG bullet and drum erection, structural steel, piping and full E&I installation — a high-risk lift and erection programme completed without compromise to schedule or safety.",
    stats: [
      { value: 180, suffix: " m", label: "Flare stack height" },
      { text: "Package 2", label: "Offsites & utilities" },
      { text: "LPG bullets", label: "Erected and tested" },
      { text: "Full E&I", label: "Scope delivered" },
      { text: "Zero", label: "Lost-time incidents target" },
    ],
    scope: [
      {
        icon: Flame,
        title: "Flare & Derrick",
        text: "180 m flare with supporting derrick structure.",
      },
      {
        icon: Boxes,
        title: "Structural Steel",
        text: "Fabrication and erection of steel structures.",
      },
      { icon: Wrench, title: "Piping", text: "Flare header and utility piping systems." },
      { icon: Cog, title: "Vessels", text: "LPG bullet and knock-out drum erection." },
      { icon: Zap, title: "Electrical", text: "Power distribution and cabling works." },
      {
        icon: CircuitBoard,
        title: "Instrumentation",
        text: "Field instruments, loops and commissioning.",
      },
    ],
    image: duqmEpc2DerrickImg,
    gallery: [
      {
        src: duqmEpc2DerrickImg,
        alt: "Red flare derrick structure being erected in the Duqm refinery flare area",
        caption: "Flare derrick erection",
      },
      {
        src: duqmEpc2BulletLiftImg,
        alt: "LPG bullet vessel lifted into position by crawler cranes at night",
        caption: "LPG bullet erection",
      },
      {
        src: duqmEpc2BulletTransportImg,
        alt: "LPG bullet vessel delivered to the Duqm refinery site",
        caption: "Bullet vessel delivery",
      },
      {
        src: duqmEpc2OffsitesImg,
        alt: "Offsites and utilities units in the Duqm refinery flare package",
        caption: "Offsites and utilities",
      },
      {
        src: duqmEpc2PiperackRoadImg,
        alt: "Pipe rack spanning the site access road at the Duqm refinery",
        caption: "Piping and piperack works",
      },
      {
        src: duqmEpc2SwitchgearImg,
        alt: "Technician with electrical switchgear panels in the flare area substation",
        caption: "Electrical and instrumentation works",
      },
    ],
  },
  {
    slug: "polypropylene-utilities-mechanical-works",
    company: "TESCO",
    companyPath: "/tesco",
    title: "Mechanical Works for Polypropylene & Utilities Area",
    summary: "Piping, equipment erection and structural works for a polypropylene plant.",
    tagline:
      "323,000 inch-dia of piping and 7,136 MT of structures delivered for Tecnimont across the polypropylene and utilities areas.",
    client: "Tecnimont",
    location: "Sultanate of Oman",
    years: "2017 – 2019",
    value: "USD 60.0 Million",
    overviewHeading: "Six and a half million man-hours",
    overview:
      "TESCO executed the mechanical scope for the polypropylene and utilities area, covering CS, SS, DSS and GRP piping from 1\" to 44\" totalling 323,000 inch-dia, static erection of 2,705 MT and rotary erection of 659 MT of equipment, and 7,136 MT of structural works. The programme included loop reactor, pipe rack, silo, knock-out drum and GRP erection, and was completed over roughly 6,500,000 total project man-hours.",
    stats: [
      { value: 60, prefix: "USD ", suffix: "M", label: "Contract value" },
      { value: 323000, label: "Inch-dia of piping" },
      { value: 7136, suffix: " MT", label: "Structure works" },
      { value: 2705, suffix: " MT", label: "Static erection" },
      { text: "6.5M", label: "Total man-hours" },
    ],
    scope: [
      {
        icon: Wrench,
        title: "Piping",
        text: "CS, SS, DSS and GRP piping, 1\" to 44\", 323,000 inch-dia.",
      },
      { icon: Cog, title: "Static Erection", text: "2,705 MT of static equipment erected." },
      { icon: Gauge, title: "Rotary Erection", text: "659 MT of rotary equipment erected." },
      { icon: Boxes, title: "Structure Works", text: "7,136 MT of structural steel works." },
      {
        icon: Factory,
        title: "Loop Reactor & Silo",
        text: "Loop reactor, silo and knock-out drum erection.",
      },
      {
        icon: Layers,
        title: "Pipe Rack & GRP",
        text: "Pipe rack erection and GRP line installation.",
      },
    ],
    image: ppAerialPlantAsset.url,
    gallery: [
      {
        src: ppAerialPlantAsset.url,
        alt: "Aerial view of the polypropylene and utilities area under construction",
        caption: "Polypropylene and utilities area",
      },
      {
        src: ppPipingTowerAsset.url,
        alt: "Large insulated piping and steel structure viewed from below",
        caption: "Large-bore piping installation",
      },
      {
        src: ppLoopReactorAsset.url,
        alt: "Loop reactor structure erected at the polypropylene plant",
        caption: "Loop reactor erection",
      },
      {
        src: ppKoDrumLiftAsset.url,
        alt: "Knock-out drum lifted into position by crawler cranes",
        caption: "Knock-out drum lift",
      },
      {
        src: ppSiloStructureAsset.url,
        alt: "Silo and concrete structure under construction at the plant",
        caption: "Silo and structure works",
      },
      {
        src: ppPiperackAsset.url,
        alt: "Pipe rack steel erection in progress with mobile cranes",
        caption: "Pipe rack erection",
      },
    ],
  },


  /* ── TELCO ─────────────────────────────────────────────── */
  {
    slug: "rusayl-power-plant-electrical-works",
    company: "TELCO",
    companyPath: "/telco",
    flagship: true,
    title: "Rusayl Power Plant — Electrical & Instrumentation Works",
    summary: "High and low voltage electrical delivery for a gas-fired generation plant.",
    tagline:
      "Switchyard, MV/LV distribution and control systems for gas-fired generation at Rusayl Industrial Estate.",
    client: "Power sector client, Sultanate of Oman",
    location: "Rusayl, Muscat Governorate",
    years: "Completed",
    overviewHeading: "Power delivered to the grid",
    overview:
      "TELCO executed the electrical and instrumentation scope for gas-fired generation at Rusayl, covering the switchyard interface, medium and low voltage distribution, transformer and switchgear installation, cabling, earthing and lightning protection, plus control and protection systems. The programme was delivered under live-plant constraints with rigorous testing and commissioning before grid synchronisation.",
    stats: [
      { text: "HV / MV / LV", label: "Full voltage scope" },
      { text: "Switchyard", label: "Termination and protection" },
      { text: "SCADA", label: "Control and monitoring" },
      { text: "Live plant", label: "Executed under constraints" },
      { text: "Grid", label: "Synchronised and handed over" },
    ],
    scope: [
      {
        icon: PlugZap,
        title: "Switchgear",
        text: "MV and LV switchgear installation and testing.",
      },
      {
        icon: Zap,
        title: "Transformers",
        text: "Transformer placement, terminations and oil testing.",
      },
      {
        icon: CircuitBoard,
        title: "Protection",
        text: "Relay configuration and protection coordination.",
      },
      { icon: Cog, title: "Cabling", text: "Power, control and instrument cable systems." },
      { icon: ShieldCheck, title: "Earthing", text: "Earthing grid and lightning protection." },
      {
        icon: Gauge,
        title: "Commissioning",
        text: "Testing, energisation and grid synchronisation.",
      },
    ],
    image: rusaylCableRouteImg,
    gallery: [
      {
        src: rusaylCableRouteImg,
        alt: "Satellite route of the 132kV 1Cx1000 sqmm double-circuit cable to Al Rusail Power Plant",
        caption: "132kV double-circuit cable route — 3 km",
      },
      {
        src: rusaylSubstationLayoutImg,
        alt: "Aerial layout of the 220/132kV substation showing control building, switchgear building and 500MVA transformer bay",
        caption: "220/132kV substation layout",
      },
    ],
  },
  {
    slug: "hellat-al-nahadah-primary-substation",
    company: "TELCO",
    companyPath: "/telco",
    companyOnly: true,
    title:
      "Construction of New Hellat Al Nahadah 3×20 MVA Primary Substation & Connecting 33kV Feeders",
    summary: "A 3×20 MVA primary substation with connecting 33kV feeders from Ibri station.",
    tagline:
      "Construction, installation, testing and commissioning of a 3×20 MVA primary substation and its 33kV feeder network for NEDC.",
    client: "NEDC",
    location: "Ibri, Al Dhahirah Governorate, Oman",
    years: "Completed",
    overviewHeading: "A primary substation built end to end",
    overview:
      "TELCO delivered the construction, installation, testing and commissioning of a 3×20 MVA primary substation with associated 33kV feeder infrastructure at Hellat Al Nahadah. The programme covered power transformers, 33kV and 11kV switchgear, SCADA integration, control and relay panels, MV cable laying and terminations, earthing and lightning protection, and the civil foundations and substation buildings that house them.",
    stats: [
      { text: "3 × 20 MVA", label: "Power transformers" },
      { text: "33 / 11 kV", label: "Switchgear installed" },
      { text: "SCADA", label: "Control and monitoring" },
      { text: "3 feeders", label: "33kV from Ibri station" },
      { text: "Turnkey", label: "Civil to commissioning" },
    ],
    scope: [
      {
        icon: Zap,
        title: "Transformers",
        text: "3 × 20 MVA transformer installation and testing.",
      },
      {
        icon: PlugZap,
        title: "Switchgear",
        text: "33kV and 11kV switchgear supply and installation.",
      },
      { icon: CircuitBoard, title: "SCADA", text: "SCADA system integration and interfacing." },
      {
        icon: Gauge,
        title: "Control & Relay",
        text: "Control and relay panels with protection setup.",
      },
      { icon: Cog, title: "MV Cabling", text: "MV cable laying, jointing and termination." },
      {
        icon: ShieldCheck,
        title: "Earthing",
        text: "Earthing grid and lightning protection systems.",
      },
      {
        icon: Building2,
        title: "Civil Works",
        text: "Foundations and substation building construction.",
      },
    ],
    image: telcoNedcBuildingImg,
    gallery: [
      {
        src: telcoNedcTransformerBayImg,
        alt: "Transformer bay and canopy at the Hellat Al Nahadah primary substation",
        caption: "Transformer bay",
      },
      {
        src: telcoNedc33kvImg,
        alt: "Row of 33kV switchgear panels inside the substation switchgear hall",
        caption: "33kV switchgear hall",
      },
      {
        src: telcoNedc11kvImg,
        alt: "11kV switchgear panels installed inside the substation building",
        caption: "11kV switchgear",
      },
      {
        src: telcoNedcRelayPanelsImg,
        alt: "Control and relay panels installed in the substation control room",
        caption: "Control and relay panels",
      },
      {
        src: telcoNedcBatteryImg,
        alt: "Substation DC battery bank installed and connected",
        caption: "DC battery bank",
      },
    ],
  },
  {
    slug: "marafiq-duqm-interconnection-works",
    company: "TELCO",
    companyPath: "/telco",
    companyOnly: true,
    title: "Marafiq Interconnection Works at Duqm Power Plant",
    summary: "Transformer, 33kV and 11kV interconnection works between Marafiq and Duqm.",
    tagline:
      "Electrical interconnection between Marafiq and the Duqm Power Plant for Tanweer, from transformer installation to energisation.",
    client: "Tanweer",
    location: "Duqm, Al Wusta Governorate, Oman",
    years: "Completed",
    overviewHeading: "Linking two power networks",
    overview:
      "TELCO executed the electrical interconnection works between Marafiq and the Duqm Power Plant for Tanweer. The scope covered supply and installation of 6 MVA transformers with HV and LV cable box arrangements, 33kV and 11kV XLPE cable laying and testing between existing spare feeders and the new transformers, modification and integration of the existing control and relay panels, and full testing and commissioning to improve distribution reliability.",
    stats: [
      { text: "6 MVA", label: "Transformer installation" },
      { text: "33 kV", label: "Cable laying and testing" },
      { text: "11 kV", label: "Cable laying and testing" },
      { text: "C&R panels", label: "Modification and integration" },
      { text: "Commissioned", label: "Tested and energised" },
    ],
    scope: [
      {
        icon: Zap,
        title: "Transformers",
        text: "6 MVA 33/11kV transformers with cable box arrangements.",
      },
      { icon: Cog, title: "33kV Cabling", text: "3C × 300 sq.mm XLPE cable laying and testing." },
      {
        icon: Layers,
        title: "11kV Cabling",
        text: "3C × 240 and 1C × 630 sq.mm cable routes.",
      },
      {
        icon: CircuitBoard,
        title: "Control & Relay",
        text: "Modification and integration of existing panels.",
      },
      {
        icon: Gauge,
        title: "Testing & Commissioning",
        text: "Pre-commissioning checks and energisation.",
      },
      {
        icon: ShieldCheck,
        title: "Terminations",
        text: "HV and LV glanding, terminations and protection.",
      },
    ],
    image: telcoMarafiqLiftImg,
    gallery: [
      {
        src: telcoMarafiqDeliveryImg,
        alt: "Transformer delivered on a trailer and lifted by crawler crane at Duqm",
        caption: "Transformer delivery",
      },
      {
        src: telcoMarafiqGlandingImg,
        alt: "Technicians carrying out 33kV cable glanding and termination works",
        caption: "33kV glanding and terminations",
      },
      {
        src: telcoMarafiqRelayImg,
        alt: "Site team energising the control and relay panel",
        caption: "Control and relay panel energisation",
      },
      {
        src: telcoCableLayingTrenchImg,
        alt: "1C × 630 sq.mm cables laid in an open trench",
        caption: "1C × 630 sq.mm cable laying",
      },
      {
        src: telcoCableLayingRouteImg,
        alt: "Cable route laid across the site towards the power plant",
        caption: "Interconnection cable route",
      },
      {
        src: telcoCableEntryDuctImg,
        alt: "Cables entering ducts at the building interface",
        caption: "Duct entry and pulling",
      },
    ],
  },
  {
    slug: "sandan-halban-primary-substation",
    company: "TELCO",
    companyPath: "/telco",
    companyOnly: true,
    title: "Construction of 3×6 MVA Primary Substation & 33kV Feeders — Sandan, Halban",
    summary: "A 3×6 MVA primary substation and 33kV feeders supplying the Sandan development.",
    tagline:
      "Primary substation, package substations and MV network for the Sandan development at Halban.",
    client: "Sandan Development LLC",
    location: "Sandan, Halban, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "Power for a new development",
    overview:
      "TELCO constructed and commissioned a 3×6 MVA primary substation with connecting 33kV feeders to supply the Sandan development at Halban. Works included fifteen 1 MVA package substations combining RMU, transformer and feeder pillar, 11kV and 33kV cable networks, 11kV 5 MVAr capacitor banks, SCADA and DC systems, protection metering relays, and earthing, lighting and small power distribution across the site.",
    stats: [
      { text: "3 × 6 MVA", label: "Primary substation" },
      { value: 15, label: "1 MVA package substations" },
      { text: "11 / 33 kV", label: "Cable networks" },
      { text: "5 MVAr", label: "11kV capacitor banks" },
      { text: "SCADA & DC", label: "Systems integrated" },
    ],
    scope: [
      {
        icon: Zap,
        title: "Primary Substation",
        text: "3 × 6 MVA transformers, testing and commissioning.",
      },
      {
        icon: Boxes,
        title: "Package Substations",
        text: "15 × 1 MVA units with RMU, trafo and feeder pillar.",
      },
      { icon: Cog, title: "MV Cabling", text: "11kV and 33kV cable network and terminations." },
      { icon: CircuitBoard, title: "SCADA & DC", text: "SCADA, DC systems and 11kV CT, PT, ABS." },
      {
        icon: PlugZap,
        title: "Capacitor Banks",
        text: "11kV 5 MVAr capacitor bank installation.",
      },
      {
        icon: ShieldCheck,
        title: "Earthing & Power",
        text: "Earthing, lighting and small power distribution.",
      },
    ],
    image: telcoCableTrayRunImg,
    gallery: [
      {
        src: telcoCableTrayInstallImg,
        alt: "Cable tray support structure installed across the site",
        caption: "Cable tray installation",
      },
      {
        src: telcoTrayCoverFittingImg,
        alt: "Technician fitting cable tray covers over installed cable routes",
        caption: "Tray cover installation",
      },
      {
        src: telcoTrayCoverCompleteImg,
        alt: "Completed cable tray covers protecting the MV cable route",
        caption: "Completed tray covers",
      },
    ],
  },

  /* ── UNISCO ────────────────────────────────────────────── */
  {
    slug: "ras-al-khair-aluminium-smelter",
    company: "UNISCO",
    companyPath: "/unisco",
    flagship: true,
    title: "Ras Al Khair Aluminium Smelter",
    summary: "Pot shells, superstructures and heavy steel for a world-scale aluminium smelter.",
    tagline:
      "Heavy steel fabrication for one of the world's largest aluminium smelters, delivered for the Ma'aden & Alcoa joint venture.",
    client: "Ma'aden & Alcoa JV",
    location: "Ras Al Khair, Saudi Arabia",
    years: "Completed",
    overviewHeading: "Precision fabrication at smelter scale",
    overview:
      "UNISCO contributed to one of the world's largest aluminium smelter developments by delivering heavy steel fabrication for critical production facilities. The package covered pot shell fabrication, pot superstructures and heavy steel structures built to international quality standards — a demonstration of precision engineering and large-scale industrial manufacturing on an international mega project.",
    stats: [
      { text: "World-scale", label: "Aluminium smelter" },
      { text: "Pot shells", label: "Fabricated in workshop" },
      { text: "Superstructures", label: "Pot line steelwork" },
      { text: "International", label: "Mega project" },
      { text: "Heavy steel", label: "Precision fabrication" },
    ],
    scope: [
      {
        icon: Factory,
        title: "Pot Shell Fabrication",
        text: "Reduction cell shells fabricated to tight tolerance.",
      },
      {
        icon: Boxes,
        title: "Pot Superstructures",
        text: "Superstructure assemblies for the pot lines.",
      },
      {
        icon: Layers,
        title: "Heavy Steel Structures",
        text: "Primary and secondary heavy steel packages.",
      },
      {
        icon: Cog,
        title: "Smelter Components",
        text: "Aluminium smelter components and supports.",
      },
      {
        icon: ShieldCheck,
        title: "Quality Assurance",
        text: "Fabrication to international quality standards.",
      },
      {
        icon: Ruler,
        title: "Precision Engineering",
        text: "Dimensional control through every stage.",
      },
    ],
    image: smelterHeroDomesAsset.url,
    gallery: [
      {
        src: smelterDomeLiftAsset.url,
        alt: "Heavy lift of a fabricated steel roof structure at the smelter site",
        caption: "Heavy lift operations",
      },
      {
        src: tankDomesAerialAsset.url,
        alt: "Aerial view of large fabricated steel dome structures under construction",
        caption: "Large-scale steel assembly",
      },
    ],
  },
  {
    slug: "vale-iron-ore-pelletizing-plant",
    company: "UNISCO",
    companyPath: "/unisco",
    title: "Vale Iron Ore Pelletizing Plant",
    summary: "Approximately 23,000 MT of structural steel and plate works for a mining mega plant.",
    tagline:
      "Large-scale structural steel and plate fabrication for Oman's iron ore pelletizing complex.",
    client: "Vale",
    location: "Sultanate of Oman",
    years: "Completed",
    overviewHeading: "Mining infrastructure, built in steel",
    overview:
      "UNISCO supplied and fabricated approximately 23,000 MT of structural steel and plate works for the Vale Iron Ore Pelletizing Plant. The scope showcases the company's capability to execute large-scale steel fabrication and material supply for heavy industrial and mining infrastructure, sequenced to keep a continuous plant construction programme supplied.",
    stats: [
      { value: 23000, suffix: " MT", label: "Structural steel and plate" },
      { text: "Pelletizing", label: "Iron ore plant" },
      { text: "Plate works", label: "Fabricated in-house" },
      { text: "Mining", label: "Heavy industrial sector" },
      { text: "Supply", label: "Material sourcing included" },
    ],
    scope: [
      {
        icon: Factory,
        title: "Structural Steel Fabrication",
        text: "Workshop fabrication of primary steelwork.",
      },
      { icon: Layers, title: "Plate Works", text: "Heavy plate fabrication and assembly." },
      {
        icon: Boxes,
        title: "Heavy Industrial Structures",
        text: "Process building and conveyor support steel.",
      },
      { icon: Truck, title: "Material Supply", text: "Certified material sourcing and delivery." },
      { icon: ShieldCheck, title: "Inspection", text: "NDT and dimensional verification." },
      { icon: PaintRoller, title: "Blast & Paint", text: "Protective coatings before dispatch." },
    ],
    image: valeAAsset.url,
    gallery: [
      {
        src: valeCAsset.url,
        alt: "Steel structures around the pelletizing plant induration furnace under construction",
        caption: "Induration furnace structures",
      },
      {
        src: valeBAsset.url,
        alt: "Conveyor gallery and pipe bridge steelwork at the pelletizing plant",
        caption: "Conveyor gallery steelwork",
      },
      {
        src: valeFAsset.url,
        alt: "Fabricated steel hoppers supported on heavy structural frames",
        caption: "Fabricated hoppers and supports",
      },
    ],
  },
  {
    slug: "yibal-khuff-project-pdo",
    company: "UNISCO",
    companyPath: "/unisco",
    title: "Yibal Khuff Project (PDO)",
    summary: "More than 10,500 MT of structural steel for a major Omani oil and gas development.",
    tagline:
      "Pipe racks, pipe bridges and equipment support structures fabricated for Petroleum Development Oman.",
    client: "Petroleum Development Oman (PDO)",
    location: "Yibal Khuff, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "Steel for a sour gas landmark",
    overview:
      "Executed for Petroleum Development Oman, the Yibal Khuff Project involved the fabrication of more than 10,500 MT of structural steel, including pipe racks, pipe bridges and equipment support structures for one of Oman's major oil and gas developments. Every member was fabricated, coated and released to the site erection sequence.",
    stats: [
      { text: "10,500+ MT", label: "Structural steel fabricated" },
      { text: "PDO", label: "National operator" },
      { text: "Pipe racks", label: "Primary structures" },
      { text: "Oil & gas", label: "Sector" },
      { text: "Sequenced", label: "To erection programme" },
    ],
    scope: [
      {
        icon: Boxes,
        title: "Pipe Rack Structures",
        text: "Multi-tier racks across the plant footprint.",
      },
      { icon: RouteIcon, title: "Pipe Bridges", text: "Long-span crossings and support trestles." },
      {
        icon: Building2,
        title: "Equipment Buildings",
        text: "Framed buildings and equipment enclosures.",
      },
      {
        icon: Factory,
        title: "Structural Steel Fabrication",
        text: "Cutting, welding and assembly to code.",
      },
      { icon: PaintRoller, title: "Coating", text: "Blasting and protective paint systems." },
      { icon: Truck, title: "Delivery", text: "Marking, load-out and phased site supply." },
    ],
    image: yibalKilnAsset.url,
    gallery: [
      {
        src: duqmEpc1PiperackWideImg,
        alt: "Fabricated pipe rack structures on an oil and gas site",
        caption: "Pipe rack structures",
      },
      {
        src: pipelineImg,
        alt: "Process piping across an oil and gas facility",
        caption: "Process piping interfaces",
      },
    ],
  },
  {
    slug: "barka-independent-water-plant",
    company: "UNISCO",
    companyPath: "/unisco",
    title: "Barka Independent Water Plant (IWP)",
    summary: "Structural steel and SWRO skid frames for a landmark Omani desalination plant.",
    tagline:
      "Supply, fabrication and installation of structural steel for Oman's Barka desalination development.",
    client: "SUEZ / TIPCO – OPWP",
    location: "Barka, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "Water infrastructure, fabricated to fit",
    overview:
      "UNISCO supplied, fabricated and installed structural steel for the Barka Independent Water Plant, supporting one of Oman's key desalination and water infrastructure developments. The scope included pipe rack structures, equipment buildings and SWRO skid frames — detail engineered, painted, trial assembled and dismantled in the workshop before delivery to site.",
    stats: [
      { text: "281,000", label: "m³/day plant capacity" },
      { text: "Phase 4", label: "Barka IWP development" },
      { text: "SWRO racks", label: "Skid frames delivered" },
      { text: "Trial assembly", label: "Verified before dispatch" },
      { text: "Desalination", label: "Water sector" },
    ],
    scope: [
      { icon: Boxes, title: "Structural Steel", text: "Supply, fabrication and installation." },
      { icon: Layers, title: "Pipe Rack Structures", text: "Racks and supports across the plant." },
      {
        icon: Building2,
        title: "Equipment Buildings",
        text: "Framed structures for plant equipment.",
      },
      { icon: Droplets, title: "SWRO Skid Frames", text: "Membrane rack frames for the RO trains." },
      { icon: Ruler, title: "Detail Engineering", text: "Design, detailing and trial assembly." },
      { icon: PaintRoller, title: "Painting", text: "Surface preparation and coating systems." },
    ],
    image: barkaRack1Asset.url,
    gallery: [
      {
        src: barkaRack2Asset.url,
        alt: "SWRO membrane rack frame under trial assembly with scaffolding",
        caption: "SWRO rack trial assembly",
      },
      {
        src: barkaRack3Asset.url,
        alt: "Completed SWRO skid frame ready for dismantling and delivery",
        caption: "Completed skid frame",
      },
    ],
  },
  /* ── TCC ───────────────────────────────────────────────── */
  {
    slug: "supreme-court-complex",
    company: "TCC",
    companyPath: "/tcc",
    flagship: true,
    title: "Supreme Court Complex",
    summary: "A landmark civil and electro-mechanical build for Oman's judiciary.",
    tagline:
      "Civil construction and allied electro-mechanical works for a national judicial landmark in Muscat.",
    client: "Government of the Sultanate of Oman",
    location: "Muscat, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "A civic landmark, finished to grade",
    overview:
      "TCC delivered the civil construction and allied electro-mechanical works for the Supreme Court complex in Muscat. The build combined traditional Omani stone architecture with contemporary courtroom technology — structural frame, stone cladding, domes, interior fit-out, MEP services, security systems and landscaped public plaza — executed to the finish standard expected of a national institution.",
    stats: [
      { text: "Excellent", label: "Contractor grade" },
      { text: "Civil + MEP", label: "Combined scope" },
      { text: "Stone", label: "Traditional Omani facade" },
      { text: "Courtrooms", label: "Technology fit-out" },
      { text: "Landmark", label: "National judicial building" },
    ],
    scope: [
      { icon: Building2, title: "Structure", text: "Reinforced concrete frame and substructure." },
      { icon: Layers, title: "Stone Facade", text: "Stone cladding, arches and dome works." },
      { icon: HardHat, title: "Fit-Out", text: "Courtroom and office interior finishes." },
      { icon: Zap, title: "Electrical", text: "Power distribution, lighting and standby supply." },
      { icon: Droplets, title: "Mechanical", text: "HVAC, plumbing and drainage systems." },
      { icon: Sprout, title: "Landscaping", text: "Plaza paving, planting and external works." },
    ],
    image: supremeCourtImg,
    gallery: [
      {
        src: supremeCourtImg,
        alt: "Completed Supreme Court complex in Muscat with sandstone facade and central dome",
        caption: "Completed complex",
      },
    ],
  },
  {
    slug: "sandan-industrial-light-city",
    company: "TCC",
    companyPath: "/tcc",
    title: "Sandan Industrial Light City",
    summary: "A 170,000 m² light industrial development at Halban.",
    tagline:
      "Warehousing, workshops and supporting infrastructure across a large industrial estate.",
    client: "Sandan",
    location: "Halban, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "An industrial city, built out",
    overview:
      "TCC constructed Sandan Industrial Light City, a 170,000 m² development of warehouses, workshops and light industrial units at Halban. The programme covered foundations, structural steel buildings, roads, drainage, utilities and external works, delivered in phases so completed units could be handed to tenants while later blocks were still under construction.",
    stats: [
      { value: 170000, suffix: " m²", label: "Built-up area" },
      { text: "Phased", label: "Handover programme" },
      { text: "Warehouses", label: "And workshop units" },
      { text: "Full estate", label: "Roads and utilities" },
      { text: "Halban", label: "Industrial zone" },
    ],
    scope: [
      { icon: Building2, title: "Buildings", text: "Warehouse and workshop unit construction." },
      { icon: Boxes, title: "Steel Structures", text: "Portal frames, roofing and cladding." },
      { icon: RouteIcon, title: "Roads", text: "Internal roads, parking and hardstanding." },
      { icon: CloudRain, title: "Drainage", text: "Storm-water and foul drainage networks." },
      { icon: PlugZap, title: "Utilities", text: "Power, water and telecom distribution." },
      { icon: Sprout, title: "External Works", text: "Boundary walls, gates and landscaping." },
    ],
    image: tccSandanImg,
    gallery: [
      {
        src: tccSandanImg,
        alt: "Sandan Industrial Light City under construction at Halban with formwork and scaffolding",
        caption: "Estate construction",
      },
    ],
  },
  {
    slug: "vale-pelletising-plant-civil-works",
    company: "TCC",
    companyPath: "/tcc",
    title: "Civil Works for Vale Pelletising Plant",
    summary: "Heavy civil works for a 9 million tonne per annum pelletising plant at Sohar.",
    tagline: "Foundations, structures and civil infrastructure for Vale's Sohar iron ore facility.",
    client: "Vale, Brazil",
    location: "Sohar, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "Heavy civils for heavy industry",
    overview:
      "TCC executed the civil works package for Vale's iron ore pelletising plant at Sohar, a facility rated at nine million tonnes per annum. Works included deep foundations, heavy machine bases, retaining structures, conveyor and stacker foundations, plant roads and drainage — all engineered for the dynamic loads and continuous operation of bulk material handling.",
    stats: [
      { value: 9, suffix: " Mtpa", label: "Plant capacity" },
      { text: "Heavy civils", label: "Machine foundations" },
      { text: "Conveyors", label: "Foundation systems" },
      { text: "Vale", label: "International client" },
      { text: "Sohar", label: "Port industrial zone" },
    ],
    scope: [
      { icon: Building2, title: "Foundations", text: "Deep and heavy machine foundations." },
      { icon: Layers, title: "Structures", text: "Retaining walls and concrete structures." },
      { icon: Truck, title: "Material Handling", text: "Conveyor and stacker bases." },
      { icon: RouteIcon, title: "Plant Roads", text: "Heavy-duty roads and hardstanding." },
      { icon: CloudRain, title: "Drainage", text: "Site drainage and water management." },
      { icon: ShieldCheck, title: "Quality", text: "Concrete testing and survey control." },
    ],
    image: tccValeAerialImg,
    gallery: [
      {
        src: tccValeAerialImg,
        alt: "Aerial view of the Vale pelletising plant complex at Sohar Port",
        caption: "Plant overview",
      },
      {
        src: tccValeInteriorImg,
        alt: "Completed interior hall of the Vale pelletising plant with services and equipment bases",
        caption: "Completed interior",
      },
      {
        src: tccValePlantImg,
        alt: "Vale iron ore pelletising process plant at Sohar",
        caption: "Process plant",
      },
    ],
  },
  {
    slug: "jotun-new-factory",
    company: "TCC",
    companyPath: "/tcc",
    title: "Jotun New Factory",
    summary: "A 22,000 m² paint manufacturing facility at Rusayl.",
    tagline:
      "Production halls, tank farm and support buildings for Jotun's Oman manufacturing base.",
    client: "Jotun, Norway",
    location: "Rusayl, Sultanate of Oman",
    years: "Completed",
    overviewHeading: "A factory to international standards",
    overview:
      "TCC built Jotun's new 22,000 m² paint manufacturing facility at Rusayl. The scope combined production halls, warehousing, a solvent tank farm, laboratory and administration buildings, together with fire protection, bunding and specialist floor finishes required for chemical manufacturing — delivered to the client's international HSE and quality standards.",
    stats: [
      { value: 22000, suffix: " m²", label: "Built-up area" },
      { text: "Tank farm", label: "Bunded solvent storage" },
      { text: "Laboratory", label: "And admin buildings" },
      { text: "Fire systems", label: "Chemical-grade protection" },
      { text: "Jotun", label: "International standards" },
    ],
    scope: [
      { icon: Factory, title: "Production Halls", text: "Manufacturing and blending buildings." },
      { icon: Boxes, title: "Warehousing", text: "Raw material and finished goods stores." },
      { icon: Droplets, title: "Tank Farm", text: "Bunded solvent storage and pipework." },
      { icon: ShieldCheck, title: "Fire Protection", text: "Foam and sprinkler systems." },
      { icon: Layers, title: "Special Floors", text: "Chemical-resistant floor finishes." },
      {
        icon: Building2,
        title: "Support Buildings",
        text: "Laboratory and administration blocks.",
      },
    ],
    image: tccJotunEntranceImg,
    gallery: [
      {
        src: tccJotunEntranceImg,
        alt: "Completed Jotun factory entrance and administration building at Rusayl",
        caption: "Completed facility",
      },
      {
        src: tccJotunConstructionImg,
        alt: "Jotun paint factory under construction at Rusayl with tower crane and production halls",
        caption: "Factory construction",
      },
      {
        src: tccJotunAerialImg,
        alt: "Aerial view of the completed Jotun manufacturing facility at Rusayl",
        caption: "Aerial view",
      },
    ],
  },

  /* ── TIEL ──────────────────────────────────────────────── */
  {
    slug: "jsw-dolvi-coke-feeding-system",
    company: "TEIL",
    companyPath: "/teil",
    flagship: true,
    title: "Coke Feeding System",
    summary: "Design-to-erection delivery of a coke feeding and raw material handling system.",
    tagline:
      "A complete coke feeding and raw material handling system delivered for JSW Steel at Dolvi.",
    client: "JSW Steel Ltd",
    location: "Dolvi, India",
    years: "6 Months",
    overviewHeading: "Heavy industrial steel for India's largest steelmaker",
    overview:
      "Towell Engineering India successfully delivered the complete design, detailing, fabrication and erection of the Coke Feeding System for JSW Steel at Dolvi. The project demonstrates expertise in heavy industrial steel structures and raw material handling infrastructure for one of India's leading steel manufacturers.",
    stats: [
      { text: "6 Months", label: "Delivery duration" },
      { text: "JSW Steel", label: "Client" },
      { text: "Dolvi", label: "Project location" },
      { text: "EPC", label: "Design to erection" },
      { text: "Raw material", label: "Handling infrastructure" },
    ],
    scope: [
      {
        icon: Ruler,
        title: "Design & Engineering",
        text: "Full structural engineering of the feeding system.",
      },
      {
        icon: Layers,
        title: "Structural Steel Detailing",
        text: "Shop and erection drawings for every assembly.",
      },
      { icon: Factory, title: "Fabrication", text: "Shop fabrication of heavy steel members." },
      { icon: HardHat, title: "Erection", text: "Site erection, alignment and bolting." },
      {
        icon: Cog,
        title: "Coke Feeding System",
        text: "Feeding structures, chutes and support frames.",
      },
      {
        icon: Truck,
        title: "Raw Material Handling",
        text: "Conveyor galleries and transfer infrastructure.",
      },
    ],
    image: teilCokeHeroImg,
    gallery: [
      {
        src: teilCokeHeroImg,
        alt: "Completed coke feeding system structure at the JSW Steel Dolvi works",
        caption: "Coke feeding structure",
      },
      {
        src: teilCokeErectionImg,
        alt: "Steel erection works in progress on the coke feeding system at Dolvi",
        caption: "Erection in progress",
      },
      {
        src: teilCokeConveyorImg,
        alt: "Conveyor gallery steelwork for the raw material handling system at Dolvi",
        caption: "Conveyor gallery steelwork",
      },
    ],
  },
  {
    slug: "dcpl-industrial-structural-works",
    company: "TEIL",
    companyPath: "/teil",
    title: "DCPL Industrial Structural Works",
    summary: "Structural steel for ETP, recovery plants, battery buildings and platforms.",
    tagline:
      "Structural steel fabrication and erection across multiple processing facilities at the Dolvi Coke Plant.",
    client: "Dolvi Coke Plant Ltd (DCPL)",
    location: "Dolvi, India",
    years: "8 Months",
    overviewHeading: "Structures across an entire coke plant",
    overview:
      "Towell Engineering India executed structural steel fabrication and erection works for multiple processing facilities, including ETP, ammonia recovery, sulphur recovery, benzol, waste heat recovery, battery buildings, platforms and associated industrial structures.",
    stats: [
      { text: "8 Months", label: "Delivery duration" },
      { text: "DCPL", label: "Client" },
      { text: "Dolvi", label: "Project location" },
      { text: "Multi-unit", label: "Processing facilities" },
      { text: "Platforms", label: "Industrial access steel" },
    ],
    scope: [
      {
        icon: Ruler,
        title: "Structural Steel Design",
        text: "Engineering of process plant steelwork.",
      },
      { icon: Layers, title: "Detailing", text: "Connection design and fabrication drawings." },
      { icon: Factory, title: "Fabrication", text: "Workshop fabrication of plant structures." },
      { icon: HardHat, title: "Erection", text: "Crane-assisted erection across live areas." },
      {
        icon: Building2,
        title: "Process Plant Structures",
        text: "ETP, ammonia, sulphur, benzol and WHR units.",
      },
      {
        icon: Boxes,
        title: "Industrial Platforms",
        text: "Battery buildings, platforms and walkways.",
      },
    ],
    image: teilDcplHeroImg,
    gallery: [
      {
        src: teilDcplHeroImg,
        alt: "Pipe rack and process structures at the Dolvi Coke Plant",
        caption: "Process plant pipe racks",
      },
      {
        src: teilDcplErectionImg,
        alt: "Crane lifting structural steel during erection at the Dolvi Coke Plant",
        caption: "Structural steel erection",
      },
      {
        src: teilDcplStructuresImg,
        alt: "Erected steel frames and process equipment at the Dolvi Coke Plant",
        caption: "Erected process structures",
      },
    ],
  },
  {
    slug: "jsw-jaigarh-peb-warehouse",
    company: "TEIL",
    companyPath: "/teil",
    title: "Warehouse (PEB Building)",
    summary: "A pre-engineered warehouse designed, fabricated and erected at Jaigarh Port.",
    tagline:
      "A pre-engineered building warehouse delivered end to end for JSW Jaigarh at Ratnagiri.",
    client: "JSW Jaigarh Ltd",
    location: "Jaigarh Port, Ratnagiri, India",
    years: "8 Months",
    overviewHeading: "A port warehouse, engineered end to end",
    overview:
      "Towell Engineering India designed, fabricated and erected a Pre-Engineered Building (PEB) warehouse for JSW Jaigarh Ltd., showcasing expertise in industrial warehouse construction and structural steel solutions.",
    stats: [
      { text: "8 Months", label: "Delivery duration" },
      { text: "JSW Jaigarh", label: "Client" },
      { text: "Jaigarh Port", label: "Ratnagiri" },
      { text: "PEB", label: "Building system" },
      { text: "Turnkey", label: "Design to erection" },
    ],
    scope: [
      { icon: Ruler, title: "PEB Design", text: "Portal frame design and cladding engineering." },
      {
        icon: Factory,
        title: "Structural Steel Fabrication",
        text: "Built-up sections, purlins and bracings.",
      },
      {
        icon: Building2,
        title: "Warehouse Construction",
        text: "Sheeting, roofing and building envelope.",
      },
      { icon: HardHat, title: "Steel Erection", text: "Frame erection, alignment and handover." },
    ],
    image: teilWarehouseHeroImg,
    gallery: [
      {
        src: teilWarehouseHeroImg,
        alt: "Pre-engineered warehouse steel frame erected at Jaigarh Port",
        caption: "PEB steel frame",
      },
      {
        src: teilWarehouseErectionImg,
        alt: "Cranes erecting the warehouse portal frames at Jaigarh Port",
        caption: "Portal frame erection",
      },
      {
        src: teilWarehouseCompleteImg,
        alt: "Completed and clad PEB warehouse building at Jaigarh Port",
        caption: "Completed warehouse",
      },
    ],
  },
  {
    slug: "chambal-silos-structural-works",
    company: "TEIL",
    companyPath: "/teil",
    title: "Silos & Structural Works",
    summary: "Specialised silo and heavy steel fabrication for a fertiliser industry project.",
    tagline:
      "Precision silo fabrication and heavy structural steel for Thyssenkrupp and Toyo Engineering in Rajasthan.",
    client: "Thyssenkrupp / Toyo Engineering",
    location: "Rajasthan, India",
    years: "Fertiliser industry project",
    overviewHeading: "Precision fabrication for the fertiliser industry",
    overview:
      "Towell Engineering India fabricated specialised silos and heavy structural steel components for a major fertilizer industry project, demonstrating precision manufacturing and industrial fabrication capabilities.",
    stats: [
      { text: "Rajasthan", label: "Project location" },
      { text: "Thyssenkrupp", label: "Toyo Engineering" },
      { text: "Silos", label: "Specialised fabrication" },
      { text: "Fertiliser", label: "Industry sector" },
      { text: "Precision", label: "Manufacturing standard" },
    ],
    scope: [
      {
        icon: Boxes,
        title: "Silo Fabrication",
        text: "Rolled shells, cones and stiffener assemblies.",
      },
      {
        icon: Layers,
        title: "Heavy Structural Steel",
        text: "Heavy sections and support structures.",
      },
      {
        icon: Wrench,
        title: "Industrial Equipment Fabrication",
        text: "Equipment components to client specification.",
      },
      {
        icon: Gauge,
        title: "Precision Manufacturing",
        text: "Dimensional control, welding QA and NDT.",
      },
    ],
    image: teilSilosHeroImg,
    gallery: [
      {
        src: teilSilosHeroImg,
        alt: "Fabricated silo shell with stiffener rings in the workshop",
        caption: "Silo shell fabrication",
      },
      {
        src: teilSilosConeImg,
        alt: "Fabricated conical silo hopper section ready for dispatch",
        caption: "Conical hopper section",
      },
    ],
  },
];


export const COMPANY_LABEL: Record<CompanyCode, string> = {
  TIPCO: "Towell Infrastructure Projects Co. L.L.C",
  TESCO: "Towell Engineering Services Co. L.L.C",
  TELCO: "Towell Electrical Projects Co. L.L.C",
  UNISCO: "United Industrial Services Co. L.L.C",
  TCC: "Towell Construction & Co. L.L.C",
  TEIL: "Towell Engineering India Ltd.",
};

export function getShowcaseProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function companyProjects(code: CompanyCode) {
  return PROJECTS.filter((p) => p.company === code);
}

/** The three non-flagship projects shown on a company page. */
export function companyFeatured(code: CompanyCode) {
  return PROJECTS.filter((p) => p.company === code && !p.flagship);
}

export function flagshipProjects() {
  return PROJECTS.filter((p) => p.flagship);
}
