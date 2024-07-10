import React, { useState } from "react";
import {v4 as uuid} from "uuid"
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";



function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCradId = uuid();
    const newCard = {
      id: newCradId,
      title,
    }
  
    const list = data.lists[listId];
    list.cards = [...list.cards,newCard];
  
    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      }
    };
    setData(newState);
  };

  return (
    <StoreApi.Provider value={{addMoreCard}}>
    <div className="App">
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        console.log(list);
        return <List list={list} key={listId} />;
      })}
    </div>
    </StoreApi.Provider>
  );
}

export default App;
