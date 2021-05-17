import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Button, Box, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: 600,
      margin: "10px auto",
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
      "& a":{
        textDecoration: "none",
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
      }
      
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
interface PropType {
  name: string;
  deleteTire: () => void;
  enteredName: string | null| undefined
}

export const Tier: React.FC<PropType> = ({
  name,
  deleteTire,
  enteredName
}: PropType) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.tierBar}>
        <Box className={classes.tierBarName}>{enteredName}</Box>
        <Box className={classes.tierBarButtons}>
          <IconButton>
            <EditIcon className={classes.editTier} fontSize="small" />
          </IconButton>
          <IconButton onClick={deleteTire}>
            <DeleteIcon className={classes.deleteTire} fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.addReward}>
        <Link to="/tier1">
          <Button  >Manage Rewards</Button>
        </Link>
      </Box>
    </Box>
  );
};
