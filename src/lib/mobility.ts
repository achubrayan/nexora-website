// Mobility destinations and the dot-matrix map, computed once at build time.
// Destinations come from Nexora's contracted international partners (never named on the site) and
// Fabrice's instructions of 25 Oct 2026. No prices, pay or processing times are published.
// Every visa service is document assistance only: the decision belongs to the embassy.
import { geoMercator, geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import countries from 'world-atlas/countries-110m.json';
import land from 'world-atlas/land-110m.json';

export type Visa = 'work' | 'study' | 'visit';
export type Region = 'americas' | 'gulf' | 'europe';
export interface Destination {
  id: string; // ISO 3166 numeric, as used by world-atlas
  fr: string; en: string;
  city: [number, number]; // lon, lat of the marker
  region: Region;
  schengen?: boolean;
  visas: Visa[];
  programme?: { fr: string; en: string }; // partner programme available, in addition to document assistance
  label?: boolean; // labelled on the map
}

const eu = (id: string, fr: string, en: string, city: [number, number], schengen: boolean, programme: Destination['programme']): Destination =>
  ({ id, fr, en, city, region: 'europe', schengen, visas: ['work', 'study', 'visit'], programme });
const work = { fr: "Programme d'emploi", en: 'Employment programme' };
const seasonal = { fr: "Programme d'emploi saisonnier", en: 'Seasonal employment programme' };
const workStudy = { fr: "Programmes d'emploi et d'études", en: 'Employment and study programmes' };
const study = { fr: "Programme d'études", en: 'Study programme' };

export const destinations: Destination[] = [
  { id: '124', fr: 'Canada', en: 'Canada', city: [-79.38, 43.65], region: 'americas', visas: ['work', 'visit', 'study'], programme: work, label: true },
  { id: '784', fr: 'Émirats arabes unis', en: 'United Arab Emirates', city: [55.27, 25.2], region: 'gulf', visas: ['work', 'visit'], programme: work, label: true },
  eu('276', 'Allemagne', 'Germany', [13.4, 52.52], true, work),
  eu('528', 'Pays-Bas', 'Netherlands', [4.9, 52.37], true, work),
  eu('056', 'Belgique', 'Belgium', [4.35, 50.85], true, work),
  eu('616', 'Pologne', 'Poland', [21.01, 52.23], true, work),
  eu('203', 'République tchèque', 'Czech Republic', [14.44, 50.08], true, seasonal),
  eu('703', 'Slovaquie', 'Slovakia', [17.11, 48.15], true, work),
  eu('348', 'Hongrie', 'Hungary', [19.04, 47.5], true, seasonal),
  eu('440', 'Lituanie', 'Lithuania', [25.28, 54.69], true, work),
  eu('428', 'Lettonie', 'Latvia', [24.11, 56.95], true, work),
  eu('100', 'Bulgarie', 'Bulgaria', [23.32, 42.7], true, work),
  eu('620', 'Portugal', 'Portugal', [-9.14, 38.72], true, workStudy),
  eu('724', 'Espagne', 'Spain', [-3.7, 40.42], true, study),
  eu('688', 'Serbie', 'Serbia', [20.45, 44.79], false, work),
  eu('807', 'Macédoine du Nord', 'North Macedonia', [21.43, 42.0], false, work),
];

export const DOUALA: [number, number] = [9.7, 4.05];
const CAMEROON = '120';

// Map geometry: a Mercator view from Canada to the Gulf, fitted into the visual's map area.
let cache: ReturnType<typeof makeMap> | undefined;
export const buildMap = () => (cache ??= makeMap());
function makeMap(width = 560, height = 420, top = 56, pad = 14, step = 7) {
  const proj = geoMercator().fitExtent([[pad, top], [width - pad, height - pad]], { type: 'MultiPoint', coordinates: [[-98, -14], [63, 63]] } as any);
  const landF = feature(land as any, (land as any).objects.land) as any;
  const all = (feature(countries as any, (countries as any).objects.countries) as any).features as any[];
  const wanted = new Set(destinations.map((d) => d.id));
  const destF = all.filter((f) => wanted.has(f.id));
  const cmF = all.find((f) => f.id === CAMEROON);
  let base = '', dest = '', home = '';
  for (let y = top + step / 2; y < height - pad; y += step) {
    for (let x = pad + step / 2; x < width - pad; x += step) {
      const ll = proj.invert!([x, y]) as [number, number];
      if (!ll || !geoContains(landF, ll)) continue;
      const seg = `M${x.toFixed(1)} ${y.toFixed(1)}h0`;
      if (geoContains(cmF, ll)) home += seg;
      else if (destF.some((f) => geoContains(f, ll))) dest += seg;
      else base += seg;
    }
  }
  const [hx, hy] = proj(DOUALA)!;
  const arcs = destinations.map((d, i) => {
    const [x, y] = proj(d.city)!;
    // Long east-west arcs bow upwards; arcs heading north fan outwards so they do not cross.
    const dx = x - hx, dy = y - hy, len = Math.hypot(dx, dy);
    let px = -dy / len, py = dx / len;
    if (Math.abs(dx) > Math.abs(dy) ? py > 0 : Math.sign(px) !== Math.sign(dx || 1)) { px = -px; py = -py; }
    const bow = (Math.abs(dx) > Math.abs(dy) ? 0.26 : 0.16) * len;
    const cx = (hx + x) / 2 + px * bow, cy = (hy + y) / 2 + py * bow;
    return { ...d, x, y, i, path: `M${hx.toFixed(1)} ${hy.toFixed(1)}Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}` };
  });
  return { base, dest, home, hub: [hx, hy] as [number, number], arcs, proj };
}
