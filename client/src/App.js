import React, { Fragment } from "react";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import History from "./pages/History";
import Edit from "./pages/Edit";
import Navbar from "./Navbar";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/history" element={<History />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
