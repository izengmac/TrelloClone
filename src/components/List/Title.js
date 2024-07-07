import { Typography, InputBase } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const useStyle = makeStyles((theme) => ({

  editableTitleContainer: {
    margin: theme.spacing(2),
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    textAlign: "start",
    margin: theme.spacing(2)
  },
  InputValue: {
    textAlign: "start",
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));

export default function Title() {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return (
      <div>
        {open ? (
          <div className={classes.InputValue}>
            <InputBase
              value="Todo"
              inputProps={{
                className: classes.input,
              }}
              fullWidth
              onBlur ={() => setOpen(!open)}
            />
          </div>
        ) : (
          <div className={classes.editableTitleContainer}>
            <Typography
              onClick={() => setOpen(!open)}
              className={classes.editableTitle}
            >
              TODO
            </Typography>
            <MoreHorizIcon />
          </div>
        )}
      </div>
    
  );
}
