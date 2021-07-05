import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Paper } from "@material-ui/core";
import Topbar from "../components/topbar/Topbar";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import ReplayIcon from "@material-ui/icons/Replay";
import { useHistory } from "react-router-dom";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const ConfirmDetailsPage = () => {
  const selectedOption = useSelector((state) => state.datingInfoReducer);
  const classes = useStyles();
  const history = useHistory();

  const confirmSection = [
    {
      title: "Date & Time",
      content: `0${selectedOption.time} ${selectedOption.day}`,
    },
    {
      title: "Date Theme",
      content: selectedOption.theme,
    },
    {
      title: "Location",
      content: selectedOption.location,
    },
  ];

  const handleReplay = () => {
    history.push("/map");
  };

  return (
    <Container>
      <div className={classes.container}>
        <div>
          <div>
            <Topbar />
          </div>
          <div className={classes.replayIcon}>
            <ReplayIcon fontSize="large" onClick={handleReplay} />
          </div>
        </div>

        <div>
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
              at the{" "}
              <span className={classes.spanColor}>
                {selectedOption.location}
              </span>
            </Typography>
          </div>
          <div>
            {confirmSection.map((eachSection, index) => {
              return (
                <Paper elevation="0" className={classes.paper} key={index}>
                  <div className={classes.confirmSectionBar}>
                    <Typography className={classes.title}>
                      {eachSection.title}
                    </Typography>
                    <div className={classes.confirmInfoAndIcon}>
                      <div className={classes.content}>
                        <Typography>{eachSection.content}</Typography>
                      </div>
                      <div>
                        <CreateIcon />
                      </div>
                    </div>
                  </div>
                </Paper>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <Paper elevation="0" className={classes.slideBar}>
              <ExitToAppIcon fontSize="large" className={classes.slideIcon} />
            </Paper>
          </div>
        </div>
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
    height: "100vh",
  },
  confirmSectionBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  confirmInfoAndIcon: {
    display: "flex",
    alignItems: "center",
    padding: 5,
    marginRight: 5,
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: 15,
  },

  replayIcon: {
    position: "absolute",
    left: 50,
    top: 90,
    cursor: "pointer",
  },
  paper: {
    marginTop: 20,
    border: "2px solid lightgrey",
    borderRadius: 30,
    boxShadow: "0 2px 5px #888888",
  },
  question: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "start",
  },
  spanColor: {
    color: theme.palette.primary.main,
  },
  slideBar: {
    border: "1px solid lightgrey",
    borderRadius: 30,
    width: "90vw",
    marginBottom: 150,
    marginTop: 100,
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
  },
  slideIcon: {
    fontSize: 60,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    padding: 5,
    marginLeft: 5,
  },
}));

export default ConfirmDetailsPage;
