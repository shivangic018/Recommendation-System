import React from "react";
import "./App.css";
import TextArea from "./Components/TextArea";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <div className="title">
        <h1>Email Recommendation System</h1>
      </div>
      <div className="container">
        <TextArea />
        <Button />
      </div>
    </>
  );
}

export default App;

