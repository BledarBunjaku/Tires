import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { Button, Box, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TierComponent } from "./tierComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: 600,
      margin: "0 auto",
      display: "flex",
      backgroundColor: "#fff",
    },
    tierBar: {
      width: "100%",
      display: "flex",
      padding: 2,
      overflow: "hidden",
      boxShadow: "0 1px 3px #b5b5b5",
      borderRadius: 5,
    },
    tierBarName: {
      flexBasis: 100,
      display: "flex",
      alignItems: "center",
      flex: 1,
    },
    tierBarButtons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& button": {
        padding: 5,
      },
    },
    editTier: {
      color: "black",
    },
    deleteTire: {
      color: "red",
    },
    addReward: {
      marginLeft: 5,
      height: "100%",
      "& button": {
        width: " max-content",
        textTransform: "capitalize",
        backgroundColor: "#00CBB0",
        color: "#fff",
        "&:hover": {
          color: "#fff",
          background: "#00CBB0",
        },
      },
    },
    addTire: {
      margin: "0 auto",
      paddingTop: 20,
      width: "max-content",
      "& button": {
        paddingLeft: 15,
        paddingRight: 15,
        width: " max-content",
        textTransform: "capitalize",
        backgroundColor: "#00CBB0",
        color: "#fff",
        "&:hover": {
          color: "#fff",
          background: "#00CBB0",
        },
        "& span": {
          "& svg": {
            paddingRight: 3,
          },
        },
      },
    },
  })
);

interface TierProps {
  id: number;
  name: string | null;
}

export const Tier: React.FC = () => {
  const classes = useStyles();
  const [tier, setTier] = useState<TierProps[]>([]);

  console.log("tier", tier);

  const addTier = () => {
    const enteredName = prompt("Please enter your name");
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

  return (
    <>
      {tier
        ? tier.map((x: any) => (
            <TierComponent
              name={x.name}
              key={x.id}
              deleteTire={() => deleteTire(x.id)}
            />
          ))
        : null}
      <Box className={classes.addTire}>
        <Button onClick={addTier}>
          <AddCircleIcon fontSize="small" />
          Add Tier!
        </Button>
      </Box>
    </>
  );
};
