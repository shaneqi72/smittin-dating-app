import { createMuiTheme } from "@material-ui/core";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },

  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Comic Sans MS",
  },
  props: {
    MuiTextField: {
      variant: "outline",
    },
  },
});

export { theme };
