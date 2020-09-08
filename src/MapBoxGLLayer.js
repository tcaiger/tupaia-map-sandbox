import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import PropTypes from "prop-types";
import { GridLayer, withLeaflet } from "react-leaflet";

class MapBoxGLLayerComponent extends GridLayer {
  createLeafletElement(props) {
    const map = L.mapboxGL(props);
    this.mapbox = map;
    return map;
  }
}

/*
 * Props are the options supported by Mapbox Map object
 * Find options here:https://www.mapbox.com/mapbox-gl-js/api/#new-mapboxgl-map-options-
 */
MapBoxGLLayerComponent.propTypes = {
  accessToken: PropTypes.string.isRequired,
  style: PropTypes.string,
};

MapBoxGLLayerComponent.defaultProps = {
  style: "mapbox://styles/mapbox/streets-v9",
};

export const MapBoxGLLayer = withLeaflet(MapBoxGLLayerComponent);
