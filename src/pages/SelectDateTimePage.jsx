import React, { useState } from "react";
import { DAY_TIME } from "../db/database";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import TopBar from "../components/topbar/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { setDateAndTime } from "../store/actions/actions";
import { useHistory } from "react-router-dom";
import ReplayIcon from "@material-ui/icons/Replay";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

const SelectDateTimePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const [clickedOption, setClickedOption] = useState(false);

  const selectedOption = useSelector((state) => state.datingInfoReducer);

  const chooseDayAndTime = (chosenOption) => {
    if (chosenOption.day !== "Select" && chosenOption.time !== "Enter") {
      dispatch(setDateAndTime(chosenOption.day, chosenOption.time));
    }

    setClickedOption(true);
    if (chosenOption.day !== "Select" && chosenOption.time !== "Enter") {
      setTimeout(() => history.push("/date-theme"), 1000);
    }
  };

  const handleReplay = () => {
    history.push("/");
  };

  return (
    <Container>
      <div>
        <TopBar />
      </div>

      <div className={classes.replayIcon}>
        <ReplayIcon fontSize="large" onClick={handleReplay} />
      </div>

      <div className={classes.replayIcon}>
        {clickedOption ? (
          <ReplayIcon fontSize="large" onClick={handleReplay} />
        ) : null}
      </div>

      <div>
        <Typography variant="h4" className={classes.question}>
          Let's meet up on
          {clickedOption ? null : (
            <span
              style={{
                color: ` ${theme.palette.primary.main}`,
                marginLeft: "10px",
              }}
            >
              ______
            </span>
          )}
        </Typography>
        {clickedOption ? (
          <Typography
            variant="h4"
            className={`${classes.question} ${classes.selectedOption}`}
          >{`${selectedOption.day} 0${selectedOption.time}`}</Typography>
        ) : null}
        <Typography paragraph="true">
          Select a pre-filled time slot or suggest your own.
        </Typography>
      </div>

      <Grid container spacing={3}>
        {DAY_TIME.map((item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Paper
                elevation={1}
                className={
                  selectedOption.day === item.day &&
                  selectedOption.time === item.time
                    ? `${classes.paper} ${classes.clickedOption}`
                    : `${classes.paper}`
                }
                onClick={() => chooseDayAndTime(item)}
              >
                <Typography variant="h6">{item.day}</Typography>
                <Typography variant="h5">{item.time}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  clickedOption: {
    background: theme.palette.primary.main,
    color: "white",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    height: 80,
    borderRadius: 30,
    paddingLeft: 2,
    paddingRight: 2,
    marginLeft: 2,
    marginRight: 2,
    boxShadow: "1px 2px 10px 1px #888888;",
    cursor: "pointer",
  },
  question: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  replayIcon: {
    position: "absolute",
    left: 50,
    top: 90,
    cursor: "pointer",
  },
  selectedOption: {
    color: theme.palette.primary.main,
  },
  typo_day: {
    fontSize: 10,
  },
}));

export default SelectDateTimePage;
