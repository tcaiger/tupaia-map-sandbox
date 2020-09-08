export const MAPBOX_ACCESS_KEY =
  "pk.eyJ1IjoiY2FpZ2VydG9tIiwiYSI6ImNrN2luY3Q2NTBsczUzZXF2NzBjcDMyZnIifQ.5j-7bo9L6dzC0VGqeUmsmA";

const TUPAIA_MAPBOX_ACCESS_KEY =
  "pk.eyJ1Ijoic3Vzc29sIiwiYSI6ImNqNHMwOW02MzFhaGIycXRjMnZ1dXFlN2gifQ.1sAg5w7hYU7e3LtJM0-hSg";

export const STYLE_URL = "mapbox://styles/caigertom/ckenpd1130k8d19megiz3cupj";

export const MAP_CENTER = [-36.8483, 174.7625];
export const MAPBOX_MAP_CENTER = [174.7625, -36.8483];

export const OSM_MAP_URL = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";

export const SATELLITE_MAP_URL = `https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=${TUPAIA_MAPBOX_ACCESS_KEY}`;

export const LAYERS = [
  {
    name: "hillshade",
    label: "Hillshade",
    layersNames: ["custom-hillshade"],
  },
  {
    name: "ferry",
    label: "Ferry",
    layersNames: ["ferry", "ferry-auto"],
  },
];
