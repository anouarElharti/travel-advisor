import React from "react";
import googleMapReact from "google-map-react";
import { Paper, Typofraphy, useMediaQuery } from "@material-ui/core";
import { LocationCityOutlined } from "@material-ui/icons";
import Rating from "@material-ui/lab";

import useStyles from "./style.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  return <div>Map</div>;
};

export default Map;
