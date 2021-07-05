import React from "react";
import RestaurantDrawer from "../components/drawers/RestaurantDrawer";
import InfoDrawer from "../components/drawers/InfoDrawer";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import clsx from "clsx";
// import { Sring } from "react-spring";

// import {
//   Container,
//   Typography,
//   FormControl,
//   InputLabel,
//   FilledInput,
//   Paper,
//   Button,
//   TextField,
// } from "@material-ui/core";

const MapPage = () => {
  // const [state, setState] = useState({
  //   top: false,
  //   bottom: false,
  // });

  // const classes = useStyles();

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  // const list = (anchor) => (
  //   <div
  //     className={clsx(classes.list, {
  //       [classes.fullList]: anchor === "top" || anchor === "bottom",
  //     })}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //   </div>
  // );

  // {
  //   /* {["top", "bottom"].map((anchor) => (
  //       <div key={anchor}>
  //         <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
  //         <SwipeableDrawer
  //           anchor={anchor}
  //           open={state[anchor]}
  //           onClose={toggleDrawer(anchor, false)}
  //           onOpen={toggleDrawer(anchor, true)}
  //         >
  //           {list(anchor)}
  //         </SwipeableDrawer>
  //       </div>
  //     ))} */
  // }

  // {
  //   /* {
  //       <div>
  //         <Button onClick={toggleDrawer("bottom", true)}>
  //           <h1>click me</h1>
  //         </Button>
  //         <SwipeableDrawer
  //           anchor="bottom"
  //           open="bottom"
  //           onClose={toggleDrawer("bottom", false)}
  //           onOpen={toggleDrawer("bottom", true)}
  //         >
  //           {list("bottom")}
  //         </SwipeableDrawer>
  //       </div>
  //     } */
  // }

  // {
  //   /* <div>
  //       <InfoDrawer />
  //     </div>
  //     <div>
  //       <RestaurantDrawer />
  //     </div> */
  // }

  return (
    <div>
      <div>
        <InfoDrawer />
      </div>
      <div>
        <RestaurantDrawer />
      </div>
    </div>
  );
};

export default MapPage;
