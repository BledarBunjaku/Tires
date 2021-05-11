import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tiers } from "./tiers";
import { Tier } from "./tier";
import {Test2} from "./test2"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainHeader: {
      display: "flex",
    },
    backButton: {
      height: 40,
      background: "red",
      minWidth: "max-content",
      width: 60,
    },
    navBar: {
      height: 40,
      background: "green",
      flex: 1,
    },
  })
);

export const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Box className={classes.mainHeader}>
        <Box className={classes.backButton}></Box>
        <Box className={classes.navBar}>
          <Link to="/">Tiersaaaaaaa</Link>
        </Box>
      </Box>
      <Switch>
        <Route exact path="/">
          <Tier />
        </Route>
        <Route path="/tier1">
          <Tiers />
        </Route>
      </Switch>
    </Router>
  );
};
