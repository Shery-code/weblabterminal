import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./components/navbar";
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import NotFound from "./components/notfound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products/:page?" component={Products} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
