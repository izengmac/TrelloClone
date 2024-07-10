import { Typography, Paper, colors } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import { styled } from "@mui/system";
import InputCard from "./InputCard";
import { useState } from "react";
import { Collapse } from '@mui/material';

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#FF5733",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated fro // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
  

});

console.log("theme" , theme.spacing)
const useStyle = makeStyles(({theme}) => ({
  root: {
      width: '300px',
    
  },
}));

const PaperWrapper = styled(Paper)(({ theme }) => ({
  padding:theme.spacing(1, 1, 1, 2),
  margin:theme.spacing(0, 1, 1, 1),
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));
export default function InputContainer({listId}) {
  const [open, setOpen] = useState(false)
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
        <div className={classes.root}>
      <Collapse in={open}>
      <InputCard setOpen={setOpen} listId={listId} />
      </Collapse>
    <Collapse in={!open}>
    <PaperWrapper elevation={0} onClick={() => setOpen(!open)}>
        <Typography>+ Add a card</Typography>
      </PaperWrapper>
    </Collapse>
    </div>
    </ThemeProvider>
  
  );
}
