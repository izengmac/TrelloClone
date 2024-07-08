import { Typography, InputBase } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";


const useStyle = makeStyles((theme) => ({

  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    textAlign: "start",
    fontSize: '1.2rem',
    fontWeight: 'bold',
    
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


const UnsetTypography = styled(Typography)({
  "&.MuiTypography-root": {
    fontSize:   "1.2rem",
    fontWeight: "bold",
  }
});

export default function Title({title}) {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return (
      <div>
        {open ? (
          <div className={classes.InputValue}>
            <InputBase
              autoFocus
              value={title}
              inputProps={{
                className: classes.input,
              }}
              fullWidth
              onBlur ={() => setOpen(!open)}
            />
          </div>
        ) : (
          <div className={classes.editableTitleContainer}>
            <UnsetTypography
              onClick={() => setOpen(!open)}
              className={classes.editableTitle}
            >
              {title}
            </UnsetTypography>
            <MoreHorizIcon />
          </div>
        )}
      </div>
    
  );
}
