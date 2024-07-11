import React from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { Toolbar, Button } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  appBar: {
    height: "10vh",
    backgroundColor: "None",
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  background: "none",
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
  color: "white",
  background: "#000",
}));

export default function TopBar({setOpenSideMenu}) {
  const classes = useStyle();
  return (
    <div>
      <AppBarWrapper position="static" className={classes.appBar}>
        <Toolbar>
          <h1 className={classes.title}> Daily Todo </h1>
          <ButtonWrapper 
          className={classes.btn} 
          onClick={() => setOpenSideMenu(true)}
          >
            Change background
          </ButtonWrapper>
        </Toolbar>
      </AppBarWrapper>
    </div>
  );
}
