import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MAPBOX_TOKEN, WATERWAYS_STYLE } from "../constants";
import MapboxLanguage from "@mapbox/mapbox-gl-language";

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
    latitude: 19.8563,
    longitude: 102.4955,
    zoom: 8,
  });

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef && mapRef.current) {
      const map = mapRef.current.getMap();
      map.on("load", () => {
        const layers = map.getStyle().layers;
        console.log("map", layers);
        map.setLayoutProperty("country-label", "text-field", [
          "format",
          ["get", "name"],
        ]);

        map.setLayoutProperty("state-label", "text-field", [
          "format",
          ["get", "name"],
        ]);

        map.setLayoutProperty("settlement-label", "text-field", [
          "format",
          ["get", "name"],
        ]);

        map.setLayoutProperty("settlement-subdivision-label", "text-field", [
          "format",
          ["get", "name"],
        ]);
      });
    }
  }, [mapRef]);

  return (
    <Container>
      <ReactMapGL
        {...viewport}
        ref={mapRef}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </Container>
  );
};
