import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List/List';
import store  from "../src/utils/store";

function App() {
  const [data, setData] = useState(store);
  console.log(data.map())
  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;
