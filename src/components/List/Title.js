import { Typography, InputBase } from "@mui/material";
import React, { useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    textAlign: "start",
    fontSize: "1.2rem",
    fontWeight: "bold",
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
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

export default function Title({ title, listId }) {
  const [open, setOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const classes = useStyle();


  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <div className={classes.InputValue}>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleBlur}
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
