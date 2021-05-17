import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import { Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      maxWidth: 1000,
      margin: "0 auto",
      padding: " 5px 10px",
    },
    name: {
      flexBasis: 150,
      background: "red",
      flex: 2,
    },
    price: {
      flexBasis: 150,
      background: "yellow",
      flex: 1,
    },
    fileDelivered: {
      flexBasis: 150,
      background: "green",
      flex: 1.5,
    },
    actions: {
      flexBasis: 100,
      background: "grey",
    },
  })
);

export const SelectedObjectsHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.name}>Name</Box>
      <Box className={classes.price}>Price</Box>
      <Box className={classes.fileDelivered}>File Delivered</Box>
      <Box className={classes.actions}>Actions</Box>
    </Box>
  );
};
