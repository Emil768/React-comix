import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Cart from "./components/Cart/Cart";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Content} />
      <Route exact path="/cart" component={Cart} />
    </div>
  );
}

export default App;
