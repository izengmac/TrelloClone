import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Drawer } from "@mui/material";

const useStyles = makeStyles({
  drawer: {
    width: "400px",
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
          <h1>Hello World</h1>
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
