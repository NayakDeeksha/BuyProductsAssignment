import React from "react";
import Home from "./components/Home";
import AddProduct from "./components/AddProducts";
import BuyProduct from "./components/BuyProducts";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Main = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/addProduct" component={AddProduct} />
      <Route path="/buyProduct" component={BuyProduct} />
      <Route path="/orders" component={Orders} />
    </Router>
  );
};

export default Main;
