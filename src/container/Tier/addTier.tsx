import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Tier } from "./tier";

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
  setName: (x: string) => void;
  deleteTire: (x: number) => void;
  addTier: () => void;
  tier: any;
  selectReward: (id: number) => void;
}

export const AddTier: React.FC<TierProps> = ({
  deleteTire,
  addTier,
  tier,
  selectReward,
}: TierProps) => {
  const classes = useStyles();

  console.log("tier", tier);

  return (
    <>
      {tier
        ? tier.map((x: any) => (
            <Tier
              selectReward={() => selectReward(x.id)}
              enteredName={x.name}
              name={x.name}
              key={x.id}
              deleteTire={() => deleteTire(x.id)}
            />
          ))
        : null}
      <Box className={classes.addTire}>
        <Button onClick={() => addTier()}>
          <AddCircleIcon fontSize="small" />
          Add Tier!
        </Button>
      </Box>
    </>
  );
};
