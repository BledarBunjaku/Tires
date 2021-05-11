import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from "./logo512.png"
import {Box} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
   <>
    

    
    <Box component="div" border={3} margin={4} position="relative" borderRadius="borderRadius"> 
    <Box component="div" width="100%" boxSizing="border-box"> 
        <img width="100%" height="100%" src={Logo}></img>
        <Box display="flex" justifyContent="space-between" alignItems="center" position="absolute" width="100%" top={5}>
          <VisibilityIcon color="primary" />
          <DeleteIcon color="secondary"/>
        </Box>
    </Box>
    <Box component="div" width="100%" bgcolor="yellow"> 
          <Typography variant="h5" component="p" align="center" >
            lorem ipsum 
          </Typography>
    </Box>
    </Box></> 
  );
}