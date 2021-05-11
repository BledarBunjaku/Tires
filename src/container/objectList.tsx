import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core/styles";
import {Box, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      maxWidth: 1000,
      margin: "0 auto",
      padding: " 5px 10px",
      borderRadius: 4,
      boxShadow: "0 1px 3px #b5b5b5",

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
      flexBasis: 100,
    },
    deleteTire: {
        color: "red",
      },
  })
);


interface PropTypes {
    name: string,
    price: string,
    fileDelivered: string
}



export const Test3: React.FC<PropTypes> = ({name, price, fileDelivered}) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.name}>{name}</Box>
      <Box className={classes.price}>{price}</Box>
      <Box className={classes.fileDelivered}>{fileDelivered}</Box>
      <Box className={classes.actions}><IconButton>
              <DeleteIcon className={classes.deleteTire} fontSize="small" />
            </IconButton></Box>
    </Box>
  );
};