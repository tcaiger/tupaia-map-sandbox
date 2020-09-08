import React from "react";
import styled from "styled-components";
import { Map, LayersControl, TileLayer } from "react-leaflet";
import { MapControl } from "./MapControl";
import { MapBoxGLLayer } from "./MapBoxGLLayer";
import {
  LAYERS,
  MAPBOX_ACCESS_KEY,
  STYLE_URL,
  MAP_CENTER,
  SATELLITE_MAP_URL,
  OSM_MAP_URL,
} from "./constants";
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

  const handleChange = (layer, checked) => {
    setState({ ...state, [layer]: checked });
    const map = mapboxLayer.current.mapbox.getMapboxMap();

    const layerNames = LAYERS.find((l) => l.name === layer).layersNames;
    const newVisibility = checked ? "visible" : "none";
    layerNames.forEach((l) => {
      map.setLayoutProperty(l, "visibility", newVisibility);
    });
  };

  return (
    <StyledMap center={MAP_CENTER} zoom={11}>
      <LayersControl collapsed={false}>
        <BaseLayer checked name="satellite">
          <TileLayer
            url={SATELLITE_MAP_URL}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        <BaseLayer name="osm">
          <TileLayer
            url={OSM_MAP_URL}
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        <BaseLayer name="project">
          <MapBoxGLLayer
            ref={mapboxLayer}
            accessToken={MAPBOX_ACCESS_KEY}
            style={STYLE_URL}
          />
          {/* Todo: only show controls when this layer is shown*/}
          <MapControl
            controls={LAYERS}
            values={state}
            onChange={handleChange}
          />
        </BaseLayer>
      </LayersControl>
    </StyledMap>
  );
};
