import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js'; 
import Home from './components/Home.js'; 
import Footer from './components/Footer.js'; 
import Cart from './components/Cart.js'; 
import Register from './components/Register.js'; 
import Login from './components/Login.js'; 
import ProductDetails from './components/ProductDetails.js'; 
import AdminPanel from './components/AdminPanel.js'; 
import ManageUsers from './components/ManageUsers';
import ManageProducts from './components/ManageProducts';
import AddProduct from './components/AddProduct';


function App() {
  return (
    <div className="app">

    <Router>
    <Header />
    <AdminPanel />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>

      <Switch>
        <Route path="/product/:id" component={ProductDetails}>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/manageusers">
          <ManageUsers />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/manageproducts">
          <ManageProducts />
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/addproduct">
          <AddProduct />
        </Route>
      </Switch>

      <Footer />

    </Router>
    </div>
  );
}

export default App;
