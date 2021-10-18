import React from "react";
import ReactMapboxGl, { MapContext } from "react-mapbox-gl";
import { MapControl } from "../ReactLeafletApp/MapControl";
import {
  TOM_MAPBOX_ACCESS_KEY,
  STYLE_URL,
  MAPBOX_MAP_CENTER,
  LAYERS,
} from "../constants";

const Map = ReactMapboxGl({
  accessToken: TOM_MAPBOX_ACCESS_KEY,
});

const defaultState = LAYERS.reduce(
  (state, { name }) => ({
    ...state,
    [name]: true,
  }),
  {}
);

export const App = () => {
  const [state, setState] = React.useState(defaultState);

  const handleChange = (layer, checked, map) => {
    setState({ ...state, [layer]: checked });
    const layerNames = LAYERS.find((l) => l.name === layer).layersNames;
    const newVisibility = checked ? "visible" : "none";
    layerNames.forEach((l) => {
      map.setLayoutProperty(l, "visibility", newVisibility);
    });
  };

  return (
    <Map
      center={MAPBOX_MAP_CENTER}
      style={STYLE_URL}
      containerStyle={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <MapContext.Consumer>
        {(map) => (
          <MapControl
            controls={LAYERS}
            values={state}
            onChange={(name, checked) => handleChange(name, checked, map)}
          />
        )}
      </MapContext.Consumer>
    </Map>
  );
};
