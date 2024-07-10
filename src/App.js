import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";
import InputContainer from "./components/input/InputContainer";
import { makeStyles } from "@mui/styles";
import { DragDropContext } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "green",
    overflow: "auto"
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
    const list =  data.lists[listId];
    list.title = title;

    const newState={
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,

      }
    };
    setData(newState)
  }
  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
    <DragDropContext>
    <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          console.log(list);
          return <List list={list} key={listId} />;
        })}  
        <InputContainer type="list" />
      </div>
    </DragDropContext>

    </StoreApi.Provider>
  );
}

export default App;
