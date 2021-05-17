import React,{useState} from "react"
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Rewards } from "./rewards";
import { AddTier } from "./Tier/addTier";
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

interface TierTypes {
  id: number;
  name: string | null;
}
export const App = () => {
  const classes = useStyles();
  const [tierName, setTierName] = React.useState<string>();
  const [tier, setTier] = useState<TierTypes[]>([]);

  let enteredName: string | null

  const addTier = () => {
    enteredName = prompt("Please enter your name");
    let obj = {
      id: tier.length,
      name: enteredName,
    };
    setTier([...tier, { ...obj }]);
  };

  const deleteTire = (id: number) => {
    let array = tier.filter((obj) => obj.id !== id);
    setTier([...array]);
  };
  console.log("tierName", tierName)

  const setName = (param: string) => {
    setTierName(param)
  }
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
          <AddTier setName={setName} deleteTire={deleteTire} addTier={addTier} tier={tier} />
        </Route>
        <Route path="/tier1">
          <Rewards  name={tierName} />
        </Route>
      </Switch>
    </Router>
  );
};