import React, { useState } from "react";
import TopBar from "../components/topbar/Topbar";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { setTheme } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { DATE_THEME } from "../db/database";
import { makeStyles } from "@material-ui/core/styles";
import ReplayIcon from "@material-ui/icons/Replay";

const SelectDateThemePage = () => {
  const [clickedOption, setClickedOption] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleReplay = () => {
    history.push("/date-time");
  };
  const selectedOption = useSelector((state) => state.datingInfoReducer);

  const chooseTheme = (seletedTheme) => {
    dispatch(setTheme(seletedTheme));
    setClickedOption(true);
    setTimeout(() => history.push("/map"), 1000);
  };

  const classes = useStyles();
  return (
    <Container>
      <div>
        <TopBar />
      </div>

      <div className={classes.replayIcon}>
        <ReplayIcon fontSize="large" onClick={handleReplay} />
      </div>

      <div>
        <Typography variant="h4" className={classes.question}>
          Let's meet up on{" "}
          <span className={classes.span}>
            {selectedOption.day} {selectedOption.time}{" "}
          </span>
          , and go to{" "}
          {clickedOption ? (
            <span className={classes.span}>{selectedOption.theme}</span>
          ) : (
            <span className={classes.span}>_____</span>
          )}
        </Typography>
      </div>

      <div>
        <Typography paragraph="true">
          Select a pre-filled data idea or suggest your own idea.
        </Typography>
      </div>

      <div className={classes.replayIcon}>
        {clickedOption ? (
          <ReplayIcon fontSize="large" onClick={handleReplay} />
        ) : null}
      </div>

      <Grid container spacing={3}>
        {DATE_THEME.map((item, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Paper
                elevation={1}
                className={
                  selectedOption.theme === item.type
                    ? `${classes.paper} ${classes.clickedOption}`
                    : `${classes.paper}`
                }
                onClick={() => chooseTheme(item.type)}
              >
                <Typography variant="h4">{item.type}</Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
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
    textAlign: "start",
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
  span: {
    color: theme.palette.primary.main,
  },
}));

export default SelectDateThemePage;
