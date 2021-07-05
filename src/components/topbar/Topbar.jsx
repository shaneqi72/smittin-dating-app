import React from "react";
import PhotoOne from "../../assets/photos/photo1.jpg";
import PhotoTwo from "../../assets/photos/photo2.jpg";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Container, Fab, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const Topbar = (path) => {
  const classes = useStyles();
  const history = useHistory();

  const goToPrevPage = () => {
    history.push(path);
  };
  return (
    <Container className={classes.container}>
      <div>
        <Fab aria-label="edit" onClick={goToPrevPage} size="medium">
          <ArrowBackIcon fontSize="large" />
        </Fab>
      </div>

      <div className={classes.group}>
        <AvatarGroup max={5} spacing="small">
          <Avatar alt="Remy Sharp" src={PhotoOne} className={classes.avatar} />
          <Avatar
            alt="Travis Howard"
            src={PhotoTwo}
            className={classes.avatar}
          />
        </AvatarGroup>
        <Typography variant="h5" className={classes.name}>
          Charlotte King
        </Typography>
      </div>

      <div></div>
    </Container>
  );
};
const useStyles = makeStyles({
  avatar: {
    width: 50,
    height: 50,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 80,
  },
  group: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
  },
});

export default Topbar;
