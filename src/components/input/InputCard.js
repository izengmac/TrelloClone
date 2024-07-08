import React, {useState} from "react";
import { Paper, InputBase, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";

const theme = createTheme({
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

const useStyle = makeStyles((theme) => ({
  card: {
    textAlign: "start",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2)
  },
  confirm:{
    margin: theme.spacing(0, 1, 1, 1),
    display:"flex",
    alignItems: "start",
    
  },
  input:{
    backgroundColor:"#fff"
  }
}));

const ButtonWrapper = styled(Button)(({theme}) => ({
    color:"#fff",
    background:"green",
    "&:hover":{
        background: "#000",
        color:"#fff"
    }
   
}))


export default function InputCard({setOpen}) {
  const [cardTitle, setCardTitle] = useState("");


  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  }
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            fullwidth
            onBlur={() => setOpen(false)}
            inputProps={{
              classes: classes.input,
            }}
            placeholder="Enter a title for this card"
            value={cardTitle}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <ButtonWrapper onClick={() => setOpen(false)} > Add Cart</ButtonWrapper>
        <IconButton>
          <ClearIcon onClick={() => setOpen(false)}/>
        </IconButton>
      </div>
    </div>
  );
}
