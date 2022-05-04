import React from "react";

import Navbar from "./components/Navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Playing from "./components/Playing";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="grid">
        <div className="row no-gutters app-container">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />
      </div>
    </div>
  );
}

export default App;
