import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Rewards } from "./rewards";
import { AddTier } from "./Tier/addTier";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import axios from "axios";

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
      "& span": {
        display: "flex",
        "& svg": {
          padding: 0,
        },
      },
    },
    navBar: {
      boxShadow: "0 1px 3px #b5b5b5",
      height: 40,
      background: "#fff",
      color: "5c5e5c",
      flex: 1,
      "& div": {
        padding: 10,
        "& a": {
          textTransform: "uppercase",
          textDecoration: "none",
          borderBottom: "3px solid #00CBB0",
        },
      },
    },
  })
);

interface TierTypes {
  id: number;
  name: string | null;
  objs: any;
}

interface ArrayProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const App = () => {
  const classes = useStyles();
  const [tierName, setTierName] = React.useState<string>();
  const [tier, setTier] = useState<TierTypes[]>([]);

  const [personName, setPersonName] = React.useState<string[]>([]);
  const [selectAll, setSelectAll] = React.useState<boolean>(false);
  const [users, setUsers] = React.useState<ArrayProps[]>();
  const [names, setNames] = React.useState<string[]>([]);
  const [objSelected, setObjSelected] = React.useState<ArrayProps[]>([]);
  const [ids, setIds] = useState<number>();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (event.target.value == "aaa") {
      setPersonName([...names]);
      return;
    }
    setPersonName(event.target.value as string[]);
  };

  useEffect(() => {
    let newUsers: any;
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      newUsers = [...res.data.slice(0, 10)];
      setUsers(newUsers);
      setNames(newUsers.map((user: any) => user.title.substr(0, 11)));
    });
  }, []);

  let newArray: any[] = [];
  const selectedObjs = () => {
    if (users) {
      users.forEach((user) => {
        personName.forEach((person) => {
          if (person && person === user.title.substr(0, 11)) {
            newArray = [...newArray, user];
            console.log("newArray1", newArray);
            setPersonName([]);
          }
        });
      });
    }
    setObjSelected([...newArray]);
    const object = tier.filter((tier) => ids === tier.id);
    object[0].objs = [...newArray];
    newArray = [];
  };

  const deleteObjectSelected = (id: number) => {
    let filteredObjects = objSelected.filter((obj) => id !== obj.id);
    setObjSelected(filteredObjects);
    const object = tier.filter((tier) => ids === tier.id);
    object[0].objs = [...filteredObjects];
  };

  console.log("personName", personName);

  let enteredName: string | null;

  const addTier = () => {
    enteredName = prompt("Please enter your name");
    let obj = {
      id: tier.length,
      name: enteredName,
      objs: [],
    };
    setTier([...tier, { ...obj }]);
  };

  const deleteTire = (id: number) => {
    let array = tier.filter((obj) => obj.id !== id);
    setTier([...array]);
  };

  const selectReward = (id: number) => {
    setIds(id);
    const object = tier.filter((tier) => id === tier.id);
    setObjSelected([...object[0].objs]);
  };

  console.log("tierName", tierName);

  const setName = (param: string) => {
    setTierName(param);
  };
  return (
    <Router>
      <Box className={classes.mainHeader}>
        <Box className={classes.backButton}>
          <span>
            <KeyboardBackspaceIcon />
          </span>{" "}
          Back to Tribe
        </Box>
        <Box className={classes.navBar}>
          <Box>
            <Link to="/">TIRES</Link>
          </Box>
        </Box>
      </Box>
      <Switch>
        <Route exact path="/">
          <AddTier
            selectReward={selectReward}
            setName={setName}
            deleteTire={deleteTire}
            addTier={addTier}
            tier={tier}
          />
        </Route>
        <Route path="/tier1">
          <Rewards
            handleChange={handleChange}
            objSelected={objSelected}
            personName={personName}
            users={users}
            names={names}
            deleteObjectSelected={deleteObjectSelected}
            selectedObjs={selectedObjs}
            selectAll={selectAll}
          />
        </Route>
      </Switch>
    </Router>
  );
};
