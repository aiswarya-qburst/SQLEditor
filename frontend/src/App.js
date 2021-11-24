import React from 'react';
// import { useQuery } from "react-query";
import './App.css';
import Editor from './components/Editor';
import Button from './components/Button';
import Result from './components/Result';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [query, updateQuery] = useState("");
  const [result, updateResult] = useState([]);
  const [fetched, updateFetched] = useState(false);

  // const response = useQuery("users", fetchUsers);

  const handleChange = data => updateQuery(data);

  const handleClick = () => {
    fetch(`/users?sqlquery='${query}'`)
      .then(res => res.json())
      .then(data => {
        updateResult(data);
        updateFetched(true);
      })
      .catch(e => console.warn(e));
  }

  return (
    <div className="App">
      <div className="sidenav">
        <Sidebar handleMenuClick={updateResult} />
      </div>
      <div className="main">
        <Editor handleChange={handleChange} />
        <Button handleClick={handleClick} />
        <Result result={result} fetched={fetched} />
      </div>
    </div>
  );
}

export default App;
