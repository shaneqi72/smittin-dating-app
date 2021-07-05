import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Container, Fab, Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PhotoOne from "../assets/photos/photo1.jpg";
import PhotoTwo from "../assets/photos/photo2.jpg";

import { useHistory } from "react-router-dom";

const StartPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleBeginButton = () => {
    history.push("/date-time");
  };

  return (
    <Container className={classes.container}>
      <div className={classes.topBar}>
        <div>
          <Fab aria-label="edit" size="medium">
            <ArrowBackIcon fontSize="large" />
          </Fab>
        </div>
        <div>
          <Typography variant="h4" className={classes.name}>
            Charlotte King
          </Typography>
        </div>
        <div></div>
      </div>

      <div className={classes.content}>
        <div>
          <AvatarGroup max={5} spacing="small">
            <Avatar
              alt="Remy Sharp"
              src={PhotoOne}
              className={classes.avatar}
            />
            <Avatar
              alt="Travis Howard"
              src={PhotoTwo}
              className={classes.avatar}
            />
          </AvatarGroup>
        </div>
        <div className={classes.typo}>
          <Typography
            color="secondary"
            variant="h2"
            style={{ "margin-bottom": "20px" }}
          >
            It's A Match!
          </Typography>
          <Typography paragraph="true">
            Let's start creating a date with Charlotte and you.
          </Typography>
        </div>

        <div>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleBeginButton}
          >
            Begain!
          </Button>
        </div>
      </div>
    </Container>
  );
};

const useStyles = makeStyles({
  avatar: {
    width: 150,
    height: 150,
  },
  button: {
    borderRadius: 50,
    width: 180,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    boxSizing: "border-box",
    margin: 0,
  },
  content: {
    display: "flex",
    marginTop: 150,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
  },
  topBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  typo: {
    marginTop: 30,
    marginBottom: 30,
  },
});

export default StartPage;
