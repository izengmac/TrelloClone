import React from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Title from "./Title";
import Card from "./Card";
import InputContainer from "../input/InputContainer"

const theme = createTheme({
    spacing: 8,
});

const useStyle = makeStyles({
  root: {
    width: "300px",
    backgroundColor: "#EBECFO",
    marginLeft: theme.spacing(2),
  },
});

function List() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div>
        < Paper className = {classes.root}>
          <CssBaseline/>
          <Typography>
          <Title/>
          <Card/>
          <Card/>
          <Card/>
          <InputContainer/>
          </Typography>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default List;