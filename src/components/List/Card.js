import React from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    
  },
}));
export default function Card() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.card}>Write a newsletter</Paper>
    </div>
  );
}
