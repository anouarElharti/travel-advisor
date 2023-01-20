import React from "react";
import googleMapReact from "google-map-react";
import { Paper, Typofraphy, useMediaQuery } from "@material-ui/core";
import { LocationCityOutlined } from "@material-ui/icons";
import Rating from "@material-ui/lab";

import useStyles from "./style.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lon: 0 };

  return (
    <div className={classes.mapContainer}>
      <googleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></googleMapReact>
    </div>
  );
};

export default Map;
