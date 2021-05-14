import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Tiers } from "./tiers";
import { Tier } from "./Tier/tier";
import {Test2} from "./test2"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainHeader: {
      display: "flex",
    },
    backButton: {
      height: 40,
      background: "#383738",
      color: "#fff",      
      display: "inline-flex",
      alignItems: "center",
      width: "max-content",
      padding: "0 2px",
      "& span":{
        display: "flex",
        "& svg":{
          padding: 0
        }
      }
    },
    navBar: {
      boxShadow: "0 1px 3px #b5b5b5",
      height: 40,
      background: "#fff",
      color: "5c5e5c",
      flex: 1,
      "& div": {
        padding: 10,
        "& a":{
          textTransform: "uppercase",
          textDecoration: "none",
          borderBottom: "3px solid #00CBB0",
        }
      }      
    },
  })
);

export const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Box className={classes.mainHeader}>
        <Box className={classes.backButton}>
          <span><KeyboardBackspaceIcon/></span> Back to Tribe
        </Box>
        <Box className={classes.navBar}>
          <Box>
            <Link to="/">TIRES</Link>
          </Box>          
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
