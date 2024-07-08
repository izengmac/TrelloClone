import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import store from "../src/utils/store";
import StoreApi from "../src/utils/storeApi";

function App() {
  const [data, setData] = useState(store);

  return (
    <StoreApi.Provider>
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
