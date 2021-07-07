import React, { useState } from "react";
import { RESTAURANTS } from "../../db/database";
import { useDispatch, useSelector } from "react-redux";
import { setLoaction, setSearchFiled } from "../../store/actions/actions";
import { useHistory } from "react-router-dom";

import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  FilledInput,
  Paper,
  Button,
} from "@material-ui/core";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const RestaurantDrawer = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const selectLocation = (seletedLocation) => {
    dispatch(setLoaction(seletedLocation));
    setTimeout(() => history.push("/confirm-detail"), 1000);
  };
  const isClickedSearchField = useSelector(
    (state) => state.datingInfoReducer.chooseLocation
  );
  const selectedOption = useSelector((state) => state.datingInfoReducer);
  const classes = useStyles();
  const [locationInput, setLocationInput] = useState("Ribs near me...");
  const handleChange = (e) => {
    setLocationInput(e.target.value);
  };

  const toggleLocationChoices = () => {
    dispatch(setSearchFiled(!isClickedSearchField));
  };

  return (
    <div className={classes.window}>
      <Container>
        <div className={classes.form} onClick={toggleLocationChoices}>
          <form noValidate autoComplete="off">
            <FormControl variant="filled" fullWidth>
              <InputLabel
                htmlFor="component-filled"
                className={classes.inputLable}
              >
                Search Location
              </InputLabel>

              <FilledInput
                fullWidth
                id="component-filled"
                value={locationInput}
                onChange={handleChange}
                onClick={toggleLocationChoices}
              />
            </FormControl>
          </form>
        </div>
        {RESTAURANTS.map((restaurant) => {
          return (
            <Paper
              className={classes.paper}
              elevation={1}
              key={restaurant.name}
            >
              <div className={classes.selection}>
                <div>
                  <div className={classes.title}>
                    <RestaurantIcon className={classes.icon} fontSize="large" />
                    <Typography variant="h6" style={{ marginLeft: "10px" }}>
                      {restaurant.name}
                    </Typography>
                  </div>
                  <div className={classes.restaurantTypeandLocation}>
                    <div>
                      <Typography paragraph="true">
                        {restaurant.type}
                      </Typography>
                    </div>
                    <div>
                      <Typography paragraph="true">
                        {restaurant.location}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="contained"
                    className={
                      selectedOption.location === restaurant.name
                        ? classes.selectedButton
                        : classes.selectButton
                    }
                    onClick={() => selectLocation(restaurant.name)}
                  >
                    Select
                  </Button>
                </div>
              </div>
            </Paper>
          );
        })}
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    border: "1px solid grey",
    borderRadius: 15,
  },
  inputLable: {
    color: theme.palette.primary.main,
    fontSize: 25,
    fontWeight: "bold",
  },
  icon: {
    background: orange[500],
    color: "white",
    borderRadius: "50%",
  },
  paper: {
    marginTop: 5,
  },
  restaurantTypeandLocation: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  selection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectButton: {
    marginRight: 3,
    borderRadius: "18px",
  },
  selectedButton: {
    marginRight: 3,
    borderRadius: 18,
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: "white",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
  },
  window: {
    maxHeight: "300px",
    overflow: "auto",
  },
}));

export default RestaurantDrawer;
