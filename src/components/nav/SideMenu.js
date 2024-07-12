import React, { useState } from "react";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Drawer } from "@mui/material";

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

const useStyles = makeStyles({
  drawer: {
    width: "400px",
  },
  menu: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
  },
  box: {
    width: "45%",
    height: "90px",
    backgroundColor: "blue",
    borderRadius:"9px"
  },
});

function SideMenu({ openSideMenu, setOpenSideMenu }) {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        open={openSideMenu}
        anchor="right"
        onClose={() => setOpenSideMenu(false)}
      >
        <div className={classes.drawer}>
          <div className={classes.menu}>
            <div 
            className={classes.box}
            style= {{
              backgroundImage:'url(https://thumbs.dreamstime.com/b/spring-summer-landscape-blue-sky-clouds-river-boat-green-trees-narew-countryside-grass-poland-water-leaves-58070004.jpg)',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover'
            }}
            ></div>
            <div 
            className={classes.box}
            style= {{
              backgroundImage:'url(https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-metro-ui-colors.png)',
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover'
            }}
            ></div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
