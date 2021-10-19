import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_TOKEN, WATERWAYS_STYLE } from "../constants";

const Container = styled.div`
  margin: 2rem;
  width: 90vw;
  height: 90vh;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.44),
    0 3px 3px -2px rgba(0, 0, 0, 0.22), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const App = () => {
  const [viewport, setViewport] = useState({
    height: "100%",
    width: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <Container>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/sussol/cj4s0gpc0865p2rpc2rry31jl"
        // mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </Container>
  );
};
