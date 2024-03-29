import React from "react";
import styled from "styled-components";
import { Map, LayersControl, TileLayer, Popup } from "react-leaflet";
import { MapControl } from "./MapControl";
import { MapBoxGLLayer } from "../MapboxGLApp/MapBoxGLLayer";
import {
  LAYERS,
  TOM_MAPBOX_ACCESS_KEY,
  STYLE_URL,
  MAP_CENTER,
  SATELLITE_MAP_URL,
  TOM_WATERWAYS_ROAD,
  OSM_MAP_URL,
  LAOS_MAP_CENTER,
  GERRY_ACCESS_KEY,
  WATERWAYS_STYLE,
  ROAD_STYLE,
  WATERWAYS_ROADS_STYLE,
  TERRAIN_STYLE,
  ATTRIBUTION,
} from "../constants";
const { BaseLayer } = LayersControl;

const StyledMap = styled(Map)`
  height: 100vh;
`;

const defaultState = LAYERS.reduce(
  (state, { name }) => ({
    ...state,
    [name]: true,
  }),
  {}
);

export const App = () => {
  const mapboxLayer = React.useRef(null);
  const [state, setState] = React.useState(defaultState);
  const [name, setName] = React.useState(null);

  const handleMouseOver = (mapboxMap) => {
    mapboxMap.on("mousemove", "Ethnicity Makeup", (event) => {
      setName(event.features[0].properties.G1SHORTNAM);
    });

    mapboxMap.on("mouseleave", "Ethnicity Makeup", () => {
      setName(null);
    });
  };

  const handleChange = (layer, checked) => {
    const map = mapboxLayer.current.mapbox.getMapboxMap();

    if (!map) {
      return;
    }

    setState({ ...state, [layer]: checked });

    const newVisibility = checked ? "visible" : "none";
    const activeLayer = LAYERS.find((l) => l.name === layer);

    if ("layerNames" in activeLayer) {
      activeLayer.layerNames.forEach((l) => {
        map.setLayoutProperty(l, "visibility", newVisibility);
      });
    }

    if ("layerSegment" in activeLayer) {
      map.getStyle().layers.map(function (layer) {
        if (layer.id.indexOf(activeLayer.layerSegment) >= 0) {
          map.setLayoutProperty(layer.id, "visibility", newVisibility);
        }
      });
    }
  };

  return (
    <StyledMap center={LAOS_MAP_CENTER} zoom={7}>
      <LayersControl collapsed={false}>
        <BaseLayer name="satellite">
          <TileLayer url={SATELLITE_MAP_URL} attribution={ATTRIBUTION} />
        </BaseLayer>
        <BaseLayer name="open street maps">
          <TileLayer url={OSM_MAP_URL} attribution={ATTRIBUTION} />
        </BaseLayer>
        <BaseLayer name="waterways">
          <MapBoxGLLayer
            accessToken={GERRY_ACCESS_KEY}
            style={WATERWAYS_STYLE}
          />
        </BaseLayer>
        <BaseLayer name="roads">
          <MapBoxGLLayer accessToken={GERRY_ACCESS_KEY} style={ROAD_STYLE} />
        </BaseLayer>
        <BaseLayer checked name="waterways-roads">
          <MapBoxGLLayer
            ref={mapboxLayer}
            accessToken={TOM_MAPBOX_ACCESS_KEY}
            style={TOM_WATERWAYS_ROAD}
            interactive={true}
            onMouseover={handleMouseOver}
          />
          {name && (
            <Popup
              autoClose={false}
              closeButton={false}
              closeOnClick={false}
              position={LAOS_MAP_CENTER}
            >
              {name}
            </Popup>
          )}
        </BaseLayer>
        <BaseLayer name="terrain">
          <MapBoxGLLayer accessToken={GERRY_ACCESS_KEY} style={TERRAIN_STYLE} />
        </BaseLayer>
        <MapControl controls={LAYERS} values={state} onChange={handleChange} />
      </LayersControl>
    </StyledMap>
  );
};
