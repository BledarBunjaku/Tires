import React, { useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Select,
  Checkbox,
  ListItemText,
  Input,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { ObjectSelected } from "./Selected-Objects/object-list";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        background: "#EFEEEF",
      },
    },

    tierWrapper: {
      maxWidth: 1000,
      margin: "0 auto",
    },
    months: {
      textTransform: "capitalize",
      border: "2px solid #00C4A8",
      marginRight: 5,
      padding: "2px 12px",
      "&:hover": {
        backgroundColor: "#00C4A8",
        color: "#fff",
      },
    },

    //width 100%
    monthWrapper: {
      width: "100%",
      margin: "0 auto",
      overflow: "hidden",
      paddingBottom: 20,
      "& p": {
        paddingBottom: 10,
        fontSize: "2rem",
        textAlign: "center",
        color: "#656465",
      },
    },

    selectWrapper: {
      "& p": {
        paddingBottom: 15,
        textAlign: "center",
        fontSize: "2rem",
        color: "#656465",
      },
    },

    selectObjectBar: {
      display: "flex",
      width: "100%",
      margin: "0 auto",
    },
    selectObjects: {
      background: "white",
      flexBasis: 100,
      flexGrow: 1,
      overflow: "hidden",
      boxShadow: "0 1px 3px #b5b5b5",
      borderRadius: 4,
    },
    addObjects: {
      background: "green",
      flexBasis: "max-content",
      marginLeft: 5,
      borderRadius: 4,
      overflow: "hidden",
      "& button": {
        backgroundColor: "#00CBB0",
        color: "#fff",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "#00CBB0",
        },
      },
    },
    select: {
      placeholder: "Objects",
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      "& > *": {
        boxSizing: "border-box",
      },
    },
    //ajsajsaks

    wrapper: {
      display: "flex",
      width: "100%",
      margin: "20px auto 10px auto",
      boxSizing: "border-box",
      padding: " 5px 10px",
      backgroundColor: "#B0AEB0",
      borderRadius: 5,
      color: "#FFF",
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
      flexBasis: 85,
      textAlign: "right",
    },
  })
);

// const GreenCheckbox = withStyles({
//   root: {
//     "&$checked": {
//       color: "green",
//     },
//     "& svg": {
//       "& path": {
//         background: "yellow",
//       },
//     },
//   },
//   checked: {},
// })((props: CheckboxProps) => <Checkbox {...props} />);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface ArrayProps {
  body: string;
  id: number;
  title: string;
  userId: number;
}
interface TiersProps {
  personName: any;
  users: any;
  names: string[];
  objSelected: any[];
  deleteObjectSelected: (id: number) => void;
  selectedObjs: () => void;
  handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  selectAll: boolean;
}

export const Rewards: React.FC<TiersProps> = ({
  personName,
  names,
  users,
  objSelected,
  deleteObjectSelected,
  selectedObjs,
  handleChange,
  selectAll,
}: TiersProps) => {
  const classes = useStyles();
  // const [personName, setPersonName] = React.useState<string[]>([]);
  // const [selectAll, setSelectAll] = React.useState<boolean>(false);
  // const [users, setUsers] = React.useState<ArrayProps[]>();
  // const [names, setNames] = React.useState<string[]>([]);
  // const [objSelected, setObjSelected] = React.useState<ArrayProps[]>([]);

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setPersonName(event.target.value as string[]);
  // };

  // useEffect(() => {
  //   let newUsers: any;
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     newUsers = [...res.data.slice(0, 10)];
  //     setUsers(newUsers);
  //     setNames(newUsers.map((user: any) => user.title.substr(0, 11)));
  //   });
  // }, []);

  // useEffect(() => {
  //   if (!selectAll) {
  //     setPersonName([]);
  //   }
  // }, [selectAll]);

  // let newArray: any[] = [];
  // const selectedObjs = () => {
  //   if (users) {
  //     users.forEach((user) => {
  //       personName.forEach((person) => {
  //         if (person && person === user.title.substr(0, 11)) {
  //           newArray = [...newArray, user];
  //           console.log("newArray1", newArray);
  //           setPersonName([]);
  //         } else if (selectAll) {
  //           newArray = [...users];
  //           setNames([]);
  //           console.log("newArray2", newArray);
  //         }
  //       });
  //     });
  //   }
  //   setObjSelected([...newArray]);
  //   newArray = [];
  // };

  // const deleteObjectSelected = (id: number) => {
  //   let filteredObjects = objSelected.filter((obj) => id !== obj.id);
  //   setObjSelected(filteredObjects);
  // };

  console.log("personName", personName);

  return (
    <Box className={classes.tierWrapper}>
      <Box className={classes.monthWrapper}>
        <Typography>{"name"}</Typography>
        <Box>
          {months.map((month) => (
            <Button className={classes.months}>{month}</Button>
          ))}
        </Box>
      </Box>
      <Box className={classes.selectWrapper}>
        <Typography>Give Access to</Typography>
        <Box className={classes.selectObjectBar}>
          <Box className={classes.selectObjects}>
            <Select
              className={classes.select}
              multiple
              value={personName}
              onChange={(e) => handleChange(e)}
              input={<Input disableUnderline={true} />}
              renderValue={(selected) => (selected as string[]).join(", ")}
              MenuProps={MenuProps}
            >
              <li value="aaa">
                <button>Select all!</button>
              </li>

              {names.map((name) => (
                <li value={name}>
                  <Box display="flex">
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </Box>
                </li>
              ))}
            </Select>
          </Box>
          <Box className={classes.addObjects}>
            <Button onClick={selectedObjs}>+ Add Files</Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <Box className={classes.name}>Name</Box>
        <Box className={classes.price}>Price</Box>
        <Box className={classes.fileDelivered}>File Delivered</Box>
        <Box className={classes.actions}>Actions</Box>
      </Box>
      {users
        ? objSelected.map((obj) => (
            <ObjectSelected
              name={obj.title.substr(0, 11)}
              price="price"
              fileDelivered={obj.body.substr(0, 10)}
              deleteObjectSelected={() => deleteObjectSelected(obj.id)}
            />
          ))
        : null}
    </Box>
  );
};

// <MenuItem
//   style={{
//     borderBottom: "1px solid",
//     padding: "0",
//     margin: "0",
//   }}
//   key={name}
//   value={name}
// >
//   <GreenCheckbox
//     // style={{
//     //   padding: "0",
//     //   margin: "0",
//     //   color: "grey",
//     // }}
//     inputProps={{ "aria-label": "indeterminate checkbox" }}
//     checked={personName.indexOf(name) > -1}
//   />
//   <ListItemText primary={name} />
//   <button>aaaaaaaaaa</button>
// </MenuItem>
