import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import StartPage from "./pages/StartPage";
import SelectDateTimePage from "./pages/SelectDateTimePage";
import SelectDateThemePage from "./pages/SelectDateThemePage";
import MapPage from "./pages/MapPage";
import ConfirmDetailsPage from "./pages/ConfirmDetailsPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route exact path="/date-time">
              <SelectDateTimePage />
            </Route>
            <Route exact path="/date-theme">
              <SelectDateThemePage />
            </Route>
            <Route exact path="/confirm-detail">
              <ConfirmDetailsPage />
            </Route>
            <Route exact path="/map">
              <MapPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
