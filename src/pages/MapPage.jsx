import React, { useState } from "react";
import RestaurantDrawer from "../components/drawers/RestaurantDrawer";
import Topbar from "../components/topbar/Topbar";
import InfoDrawer from "../components/drawers/InfoDrawer";
import { TextField, List, SwipeableDrawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../assets/photos/Fortitude-Valley-to-NFC.jpeg";

const MapPage = () => {
  const [state, setState] = useState(false);

  const classes = useStyles();
  const toggleDrawer = (state) => (event) => {
    setState(!state);
  };

  const infoDrawers = () => {
    return (
      <div>
        <List>
          <InfoDrawer />
        </List>
      </div>
    );
  };
  const restaurantDrawers = () => {
    return (
      <div>
        <List>
          <RestaurantDrawer />
        </List>
      </div>
    );
  };

  return (
    <div className={classes.backgroundStyle}>
      <div
        onClick={toggleDrawer(state)}
        style={{ zIndex: 2, backgroundColor: "white", marginBottom: "2px" }}
      >
        <Topbar />
      </div>
      <div style={{ zIndex: 2, backgroundColor: "white" }}>
        <TextField
          className={classes.textField}
          fullWidth
          label="Search Location"
          defaultValue="Ribs near me..."
          variant="outlined"
          onClick={toggleDrawer(state)}
        />
      </div>
      <SwipeableDrawer
        BackdropProps={{ invisible: true }}
        anchor={"top"}
        open={state}
        onClose={toggleDrawer(state)}
      >
        {infoDrawers()}
      </SwipeableDrawer>
      <SwipeableDrawer
        BackdropProps={{ invisible: true }}
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer(state)}
      >
        {restaurantDrawers()}
      </SwipeableDrawer>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "80%",
    position: "absolute",
    bottom: "4%",
    left: "10%",
    zIndex: 2,
  },
  backgroundStyle: {
    width: "100%",
    height: "800px",
    backgroundImage: `url(${Map})`,
    backgroundSize: "fill",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    zIndex: 1,
  },
}));

export default MapPage;
