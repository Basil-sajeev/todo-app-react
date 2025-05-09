import React from "react";
import Todoapp from "./component/todoapp/todoapp/todoapp";
import About from "./component/about/about";
import Header from "./component/header/header";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact Component={Todoapp} />
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
};
