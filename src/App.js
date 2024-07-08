import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import store from "../src/utils/store";

function App() {
  const [data, setData] = useState(store);

  return (
    <div className="App">
      {data.listIds.map((listId) => {
        const list = data.lists[listId];
        console.log(list);
        return <List list={list} key={listId} />;
      })}
    </div>
  );
}

export default App;
