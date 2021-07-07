import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Container, Typography } from "@material-ui/core";
import TopBar from "../topbar/Topbar";
import ReplayIcon from "@material-ui/icons/Replay";
import { useHistory } from "react-router-dom";

const InfoDrawer = () => {
  const classes = useStyles();
  const selectedOption = useSelector((state) => state.datingInfoReducer);
  const history = useHistory();

  const handleReplay = () => {
    history.push("/date-theme");
  };

  return (
    <div className={classes.window}>
      <Container>
        <div>
          <TopBar />
        </div>
        <div className={classes.replayIcon}>
          <ReplayIcon fontSize="large" onClick={handleReplay} />
        </div>
        <div>
          <Typography variant="h4" className={classes.question}>
            Let's meet up on <br></br>
            <span
              className={classes.spanColor}
            >{`${selectedOption.day} 0${selectedOption.time}`}</span>
            , and go to{" "}
            <span
              className={classes.spanColor}
            >{`${selectedOption.theme}`}</span>{" "}
            at the <span className={classes.spanColor}>_____</span>
          </Typography>
        </div>
        <div>
          <Typography paragraph="true">
            Select a pre-filled data idea or suggest your own idea.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
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
  spanColor: {
    color: theme.palette.primary.main,
  },
  window: {
    maxHeight: "330px",
    overflow: "auto",
  },
}));

export default InfoDrawer;
