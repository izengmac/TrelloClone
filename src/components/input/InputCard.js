import React, {useContext, useState} from "react";
import { Paper, InputBase, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";
import storeApi from "../../utils/storeApi";

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


export default function InputCard({setOpen, listId, type}) {
  const [title, setTitle] = useState("");
  const classes = useStyle();

  const {addMoreCard, addMoreList} = useContext(storeApi);
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirmed = () => {
    if(type ==="card"){
      addMoreCard(title,listId); 
      setOpen(false)
      setTitle("")  
    }
    else{
      addMoreList(title); 
    setOpen(false)
    setTitle("")  //
    }
     // reset input field after add card
  }

 const handleBlur = () => {
    setOpen(false);
    // setTitle("")  // reset input field after cancel add card
  }
  
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            fullwidth
            onBlur={handleBlur}
            inputProps={{
              classes: classes.input,
            }}
            placeholder={type === "card"?"Enter a title for this card...":"Enter list title"}
            value={title}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <ButtonWrapper onClick={handleBtnConfirmed} > 
        {type === "card"? "Add Cart": "Add List" }
        </ButtonWrapper>
        <IconButton>
          <ClearIcon onClick={() => setOpen(false)}/>
        </IconButton>
      </div>
    </div>
  );
}
