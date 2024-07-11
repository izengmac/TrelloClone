import React from "react";
import { Paper, Typography, CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Title from "./Title";
import Card from "./Card";
import InputContainer from "../input/InputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

const theme = createTheme({
  spacing: 8,
});

const useStyle = makeStyles({
  root: {
    minWidth: "300px",
    backgroundColor: "#EBECFO",
    marginLeft: theme.spacing(2),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
});

function List({ list, index }) {
  const classes = useStyle();

  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <ThemeProvider theme={theme}>
          <div {...provided.draggableProps} ref={provided.innerRef}>
            <Paper className={classes.root} {...provided.dragHandleProps}>
              <CssBaseline />
              <Typography>
                <Title title={list.title} listId={list.id} />
                <Droppable droppableId={list.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={classes.cardContainer}
                    >
                      {list.cards.map((card, index) => (
                        <Card
                          key={card.id + "-button"}
                          card={card}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                <InputContainer listId={list.id} type="card" />
              </Typography>
            </Paper>
          </div>
        </ThemeProvider>
      )}
    </Draggable>
  );
}

export default List;
