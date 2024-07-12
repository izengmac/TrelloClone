import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme, alpha } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { Drawer, Grow } from "@mui/material";
import colors from "../../utils/color";
import { TroubleshootOutlined } from "@mui/icons-material";
import { getImages } from "../../utils/ImageApi";

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
  optionContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing(2),
  },
  box: {
    width: "45%",
    height: "90px",
    backgroundColor: "blue",
    borderRadius: "9px",
    marginBottom: theme.spacing(2),
  },
});

function SideMenu({ openSideMenu, setOpenSideMenu }) {
  const classes = useStyles();
  const [openOptionColor, setOpenOptionColor] = useState(false);
  const [openOptionImage, setOpenOptionImage] = useState(false);
  const [images, setImages] = useState([]);

  const getListOfImage = async () => {
    const listOfImages = await getImages();
    setImages(listOfImages);
  };

  useEffect(() => {
    getListOfImage();
  }, []);

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
              style={{
                backgroundImage:
                  "url(https://thumbs.dreamstime.com/b/spring-summer-landscape-blue-sky-clouds-river-boat-green-trees-narew-countryside-grass-poland-water-leaves-58070004.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setOpenOptionImage(true);
                setOpenOptionColor(false);
                
              }}
            ></div>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url(https://digitalsynopsis.com/wp-content/uploads/2017/06/beautiful-color-palettes-combinations-schemes-metro-ui-colors.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setOpenOptionColor(true);
                setOpenOptionImage(false);
              }}
            ></div>
          </div>
          {openOptionImage ? (
            <Grow in={openOptionImage}>
              <div className={classes.optionContainer}>
                {images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundImage: `url(${image.thumb})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          ) : (
            <Grow in={openOptionColor}>
              <div className={classes.optionContainer}>
                {colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundColor: color,
                      }}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          )}
        </div>
      </Drawer>
    </div>
  );
}

export default SideMenu;
