import { Typography, Paper, colors, } from "@mui/material";
import React from "react";
import { makeStyles,} from "@mui/styles";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";
import { lime, purple } from '@mui/material/colors';
import { styled } from '@mui/system';


const theme = createTheme({
    palette: {
      primary: {
        main: '#FF5733',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  });
  

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

const PaperWrapper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    '&:hover' : {
        backgroundColor: theme.palette.secondary.main,
        color: '#fff'
        
    }
}))
export default function InputContainer() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <PaperWrapper >
       <Typography>
        + Add a card
       </Typography>
      </PaperWrapper>
    </div>
  );
}
