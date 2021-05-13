import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      maxWidth: 1000,
      margin: "0 auto",
      padding: " 5px 10px",
      borderRadius: 4,
      boxShadow: "0 1px 3px #b5b5b5",
      backgroundColor: "#fff",
    },
    name: {
      flexBasis: 150,
      flex: 2,
    },
    price: {
      flexBasis: 150,
      flex: 1,
    },
    fileDelivered: {
      flexBasis: 150,
      flex: 1.5,
    },
    actions: {
      display: "flex",
      "& button": {
        padding: 4,
      },
    },
    editTier: {
      color: "#403F41",
    },
    deleteTire: {
      color: "red",
    },
    visibilityTier: {
      color: "#403F41",
    },
  })
);

interface PropTypes {
  name: string;
  price: string;
  fileDelivered: string;
  deleteObjectSelected: () => void;
}

export const Test3: React.FC<PropTypes> = ({
  name,
  price,
  fileDelivered,
  deleteObjectSelected,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.name}>{name}</Box>
      <Box className={classes.price}>{price}</Box>
      <Box className={classes.fileDelivered}>{fileDelivered}</Box>
      <Box className={classes.actions}>
        <IconButton>
          <VisibilityIcon className={classes.visibilityTier} fontSize="small" />
        </IconButton>
        <IconButton>
          <EditIcon className={classes.editTier} fontSize="small" />
        </IconButton>
        <IconButton onClick={deleteObjectSelected}>
          <DeleteIcon className={classes.deleteTire} fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};
