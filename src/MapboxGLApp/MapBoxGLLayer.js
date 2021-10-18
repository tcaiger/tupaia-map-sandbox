import L from "leaflet";
import {} from "mapbox-gl-leaflet";
import PropTypes from "prop-types";
import { GridLayer, withLeaflet } from "react-leaflet";

class MapBoxGLLayerComponent extends GridLayer {
  createLeafletElement(props) {
    const { onMouseover, ...rest } = props;
    const map = L.mapboxGL(rest);
    this.mapbox = map;

    if (onMouseover) {
      this.onMouseover = onMouseover;
    }

    return map;
  }

  componentDidMount() {
    super.componentDidMount();

    const mapboxMap = this.mapbox.getMapboxMap();

    if (mapboxMap) {
      mapboxMap.on("load", () => {
        this.onMouseover(mapboxMap);
      });
    }
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
