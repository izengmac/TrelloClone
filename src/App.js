import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";
import InputContainer from "./components/input/InputContainer";
import { makeStyles } from "@mui/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "green",
    overflow: "auto",
  },
}));

function App() {
  const [data, setData] = useState(store);
  const classes = useStyle();

  const addMoreCard = (title, listId) => {
    const newCradId = uuid();
    const newCard = {
      id: newCradId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    console.log("destinataion", destination, "source", source, draggableId);

    if (!destination) {
      return;
    }
    if(type === "list"){
      const newListids = data.listIds;
      newListids.splice(source.index, 1);
      newListids.splice(destination.index, 0, draggableId);
    }

    if (type ==="list"){
      return;
    }
    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"id"} type="list" direction="horizintal">
          {(provided) => (
            <div
              className={classes.root}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.listIds.map((listId,index) => {
                const list = data.lists[listId];
                console.log(list);
                return <List list={list} key={listId + "button"} index={index} />;
              })}
              <InputContainer type="list" />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default App;
