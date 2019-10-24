import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PhotoOfTheDay from "./components/PhotoOfTheDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/picoftheday" component={PhotoOfTheDay} />
      </div>
    </BrowserRouter>
  );
}

export default App;
