export const TOM_MAPBOX_ACCESS_KEY =
  "pk.eyJ1IjoiY2FpZ2VydG9tIiwiYSI6ImNrN2luY3Q2NTBsczUzZXF2NzBjcDMyZnIifQ.5j-7bo9L6dzC0VGqeUmsmA";

const TUPAIA_TOM_MAPBOX_ACCESS_KEY =
  "pk.eyJ1Ijoic3Vzc29sIiwiYSI6ImNqNHMwOW02MzFhaGIycXRjMnZ1dXFlN2gifQ.1sAg5w7hYU7e3LtJM0-hSg";

export const STYLE_URL = "mapbox://styles/caigertom/ckenpd1130k8d19megiz3cupj";

export const MAP_CENTER = [-36.8483, 174.7625];
export const MAPBOX_MAP_CENTER = [174.7625, -36.8483];

export const OSM_MAP_URL = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

export const SATELLITE_MAP_URL = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=${TUPAIA_TOM_MAPBOX_ACCESS_KEY}`;

export const LAYERS = [
  {
    name: "ethnicity",
    label: "Ethnicity",
    layerNames: ["Ethnicity Makeup"],
  },
  {
    name: "roads",
    label: "Roads",
    layerSegment: ["road"],
  },
];

export const LAOS_MAP_CENTER = [18.505, 102.418];

// MAPBOX STYLES
export const TOM_WATERWAYS_ROAD =
  "mapbox://styles/caigertom/ckexmd0e30lm619lxeu6za5yt";

export const GERRY_ACCESS_KEY =
  "pk.eyJ1IjoiZ2VkY2tlbGx5IiwiYSI6ImNrY3BsZ2RwYTB3N20yc3FyaTZlNzhzNDUifQ.N61FIOcE-3RTksi9Tlm5ow#10.25/17.9782/102.6277";

export const WATERWAYS_STYLE =
  "mapbox://styles/gedckelly/ckemdct811px619qklzgvvg53";

export const ROAD_STYLE = "mapbox://styles/gedckelly/ckenp4uq10dfq1anzert7iot7";

export const WATERWAYS_ROADS_STYLE =
  "mapbox://styles/gedckelly/ckenllwim05jv19mdd6szrsu6";

export const TERRAIN_STYLE =
  "mapbox://styles/gedckelly/ckenu2thw0ibl1anzk5aarzu6";

export const ATTRIBUTION =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
