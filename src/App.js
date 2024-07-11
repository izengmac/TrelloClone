import React from 'react';
import Wrapper from './components/Wrapper';
import TopBar from './components/nav/TopBar';
import { makeStyles } from "@mui/styles";
import Navigation from './components/nav/Navigation';


const useStyle = makeStyles((theme) => ({
  root:{
    backgroundColor:"green"
  }
}));


export default function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navigation/>
      <Wrapper/>
    </div>
  )
}
