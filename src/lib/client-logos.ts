import agilityLogo from "@/assets/clients/agility.png.asset.json";
import alMahaPetroleumLogo from "@/assets/clients/al-maha-petroleum.png.asset.json";
import albaLogo from "@/assets/clients/alba.png.asset.json";
import bechtelLogo from "@/assets/clients/bechtel.png.asset.json";
import carillionLogo from "@/assets/clients/carillion.png.asset.json";
import consolidatedContractorsLogo from "@/assets/clients/consolidated-contractors.png.asset.json";
import daelimLogo from "@/assets/clients/daelim.png.asset.json";
import daewooEcLogo from "@/assets/clients/daewoo-ec.png.asset.json";
import daleelPetroleumLogo from "@/assets/clients/daleel-petroleum.png.asset.json";
import diwanOfRoyalCourtLogo from "@/assets/clients/diwan-of-royal-court.png.asset.json";
import dodsalLogo from "@/assets/clients/dodsal.png.asset.json";
import eclLogo from "@/assets/clients/ecl.png.asset.json";
import emalLogo from "@/assets/clients/emal.png.asset.json";
import eversendaiLogo from "@/assets/clients/eversendai.png.asset.json";
import hyundaiEngineeringConstructionLogo from "@/assets/clients/hyundai-engineering-construction.png.asset.json";
import jindalShadeedLogo from "@/assets/clients/jindal-shadeed.png.asset.json";
import jotunLogo from "@/assets/clients/jotun.png.asset.json";
import larsenToubroLogo from "@/assets/clients/larsen-toubro.png.asset.json";
import maadenAluminiumLogo from "@/assets/clients/maaden-aluminium.png.asset.json";
import macchiLogo from "@/assets/clients/macchi.png.asset.json";
import majisIndustrialServicesLogo from "@/assets/clients/majis-industrial-services.png.asset.json";
import ministryOfDefenceOmanLogo from "@/assets/clients/ministry-of-defence-oman.png.asset.json";
import ministryOfHousingOmanLogo from "@/assets/clients/ministry-of-housing-oman.png.asset.json";
import ministryOfTransportOmanLogo from "@/assets/clients/ministry-of-transport-oman.png.asset.json";
import mitsubishiHeavyIndustriesLogo from "@/assets/clients/mitsubishi-heavy-industries.png.asset.json";
import muscatHillsLogo from "@/assets/clients/muscat-hills.png.asset.json";
import omanDrydockLogo from "@/assets/clients/oman-drydock.png.asset.json";
import omanGasCompanyLogo from "@/assets/clients/oman-gas-company.png.asset.json";
import omanIndiaFertiliserLogo from "@/assets/clients/oman-india-fertiliser.png.asset.json";
import omanLngLogo from "@/assets/clients/oman-lng.png.asset.json";
import omanOilCompanyLogo from "@/assets/clients/oman-oil-company.png.asset.json";
import omanPowerWaterProcurementLogo from "@/assets/clients/oman-power-water-procurement.png.asset.json";
import omanoilLogo from "@/assets/clients/omanoil.png.asset.json";
import omranLogo from "@/assets/clients/omran.png.asset.json";
import orpicLogo from "@/assets/clients/orpic.png.asset.json";
import oxyLogo from "@/assets/clients/oxy.png.asset.json";
import petrofacLogo from "@/assets/clients/petrofac.png.asset.json";
import petroleumDevelopmentOmanLogo from "@/assets/clients/petroleum-development-oman.png.asset.json";
import publicAuthorityElectricityWaterLogo from "@/assets/clients/public-authority-electricity-water.png.asset.json";
import royalCourtAffairsLogo from "@/assets/clients/royal-court-affairs.png.asset.json";
import sAndTLogo from "@/assets/clients/s-and-t.png.asset.json";
import sepcoiiiLogo from "@/assets/clients/sepcoiii.png.asset.json";
import sncLavalinLogo from "@/assets/clients/snc-lavalin.png.asset.json";
import soharAluminiumLogo from "@/assets/clients/sohar-aluminium.png.asset.json";
import tecnimontLogo from "@/assets/clients/tecnimont.png.asset.json";
import valeLogo from "@/assets/clients/vale.png.asset.json";

/** Client logos bundled with the site, served from the Lovable CDN. */
export type ClientLogo = { id: string; name: string; logo_url: string };

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "agility", name: "Agility", logo_url: agilityLogo.url },
  { id: "al-maha-petroleum", name: "Al Maha Petroleum", logo_url: alMahaPetroleumLogo.url },
  { id: "alba", name: "Aluminium Bahrain (Alba)", logo_url: albaLogo.url },
  { id: "bechtel", name: "Bechtel", logo_url: bechtelLogo.url },
  { id: "carillion", name: "Carillion", logo_url: carillionLogo.url },
  { id: "consolidated-contractors", name: "Consolidated Contractors Company", logo_url: consolidatedContractorsLogo.url },
  { id: "daelim", name: "Daelim", logo_url: daelimLogo.url },
  { id: "daewoo-ec", name: "Daewoo E&C", logo_url: daewooEcLogo.url },
  { id: "daleel-petroleum", name: "Daleel Petroleum", logo_url: daleelPetroleumLogo.url },
  { id: "diwan-of-royal-court", name: "Diwan of Royal Court", logo_url: diwanOfRoyalCourtLogo.url },
  { id: "dodsal", name: "Dodsal", logo_url: dodsalLogo.url },
  { id: "ecl", name: "ECL", logo_url: eclLogo.url },
  { id: "emal", name: "EMAL", logo_url: emalLogo.url },
  { id: "eversendai", name: "Eversendai", logo_url: eversendaiLogo.url },
  { id: "hyundai-engineering-construction", name: "Hyundai Engineering & Construction", logo_url: hyundaiEngineeringConstructionLogo.url },
  { id: "jindal-shadeed", name: "Jindal Shadeed", logo_url: jindalShadeedLogo.url },
  { id: "jotun", name: "Jotun", logo_url: jotunLogo.url },
  { id: "larsen-toubro", name: "Larsen & Toubro", logo_url: larsenToubroLogo.url },
  { id: "maaden-aluminium", name: "Ma'aden Aluminium", logo_url: maadenAluminiumLogo.url },
  { id: "macchi", name: "Macchi", logo_url: macchiLogo.url },
  { id: "majis-industrial-services", name: "Majis Industrial Services", logo_url: majisIndustrialServicesLogo.url },
  { id: "ministry-of-defence-oman", name: "Ministry of Defence, Oman", logo_url: ministryOfDefenceOmanLogo.url },
  { id: "ministry-of-housing-oman", name: "Ministry of Housing, Oman", logo_url: ministryOfHousingOmanLogo.url },
  { id: "ministry-of-transport-oman", name: "Ministry of Transport, Oman", logo_url: ministryOfTransportOmanLogo.url },
  { id: "mitsubishi-heavy-industries", name: "Mitsubishi Heavy Industries", logo_url: mitsubishiHeavyIndustriesLogo.url },
  { id: "muscat-hills", name: "Muscat Hills", logo_url: muscatHillsLogo.url },
  { id: "oman-drydock", name: "Oman Drydock Company", logo_url: omanDrydockLogo.url },
  { id: "oman-gas-company", name: "Oman Gas Company", logo_url: omanGasCompanyLogo.url },
  { id: "oman-india-fertiliser", name: "Oman India Fertiliser", logo_url: omanIndiaFertiliserLogo.url },
  { id: "oman-lng", name: "Oman LNG", logo_url: omanLngLogo.url },
  { id: "oman-oil-company", name: "Oman Oil Company", logo_url: omanOilCompanyLogo.url },
  { id: "oman-power-water-procurement", name: "Oman Power & Water Procurement", logo_url: omanPowerWaterProcurementLogo.url },
  { id: "omanoil", name: "OmanOil", logo_url: omanoilLogo.url },
  { id: "omran", name: "Omran", logo_url: omranLogo.url },
  { id: "orpic", name: "Orpic", logo_url: orpicLogo.url },
  { id: "oxy", name: "Occidental Oman", logo_url: oxyLogo.url },
  { id: "petrofac", name: "Petrofac", logo_url: petrofacLogo.url },
  { id: "petroleum-development-oman", name: "Petroleum Development Oman", logo_url: petroleumDevelopmentOmanLogo.url },
  { id: "public-authority-electricity-water", name: "Public Authority for Electricity & Water", logo_url: publicAuthorityElectricityWaterLogo.url },
  { id: "royal-court-affairs", name: "Royal Court Affairs", logo_url: royalCourtAffairsLogo.url },
  { id: "s-and-t", name: "S&T", logo_url: sAndTLogo.url },
  { id: "sepcoiii", name: "SEPCOIII", logo_url: sepcoiiiLogo.url },
  { id: "snc-lavalin", name: "SNC-Lavalin", logo_url: sncLavalinLogo.url },
  { id: "sohar-aluminium", name: "Sohar Aluminium", logo_url: soharAluminiumLogo.url },
  { id: "tecnimont", name: "Tecnimont", logo_url: tecnimontLogo.url },
  { id: "vale", name: "Vale", logo_url: valeLogo.url },
];

const BY_FILENAME = new Map(CLIENT_LOGOS.map((l) => [`${l.id}.png`, l.logo_url]));

/**
 * Swaps a stored logo URL for the bundled CDN copy when we ship the same file.
 * Keeps managed logos working even if the stored URL no longer resolves.
 */
export function resolveClientLogoUrl(url?: string | null): string | null {
  if (!url) return null;
  const name = url.split("?")[0].split("/").pop()?.toLowerCase();
  return (name && BY_FILENAME.get(name)) ?? url;
}
