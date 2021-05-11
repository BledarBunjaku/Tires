import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles, Box } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
        resize: "none",
        width: "100%",
        border: "none",
        borderColor: "grey",
        "&:focus": {
            outline: "none"
        }
    },
    div: {
        maxWidth: 450,
        overflow: "hidden",
        boxShadow: "0 0 3px grey",
        "&  *": {
            boxSizing: "border-box"
        }
    }
});

export default function EmptyTextarea() {

     const classes  = useStyles()

    return <Box className={classes.div} component="div" display="flex" flexDirection="column" borderRadius={7} m={5}>
        <Box>
            <TextareaAutosize className={classes.root} rows="4" placeholder="Empty" />
        </Box>        
        <Box component="div" height="30px" borderTop={1}> </Box>
    </Box>
}









// const test2 = () => {


//     return <div>
//         Bledar
//     </div>

// }
 
// export default test2