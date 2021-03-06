import React from 'react';
import Main_1 from './Main_1/Main_1';
import Footer from './Footer'
import Navbar from '../Components/Main_1/Navbar';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import AboutPage from '../Pages/AboutPage';
import Error from '../Pages/Error';
import ContactPage from '../Pages/ContactPage';
import Payments from '../Pages/Payments';
import PlansPage from '../Pages/PlansPage';
import Subscribe from '../Pages/Subscribe'
import OrderNow from '../Pages/OrderNow';
import Ordered from '../Pages/Ordered';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component = {Home}>
          </Route>
          <Route exact path="/About" component = {AboutPage}>
          </Route>
          <Route exact path="/Register" component = {Register}>
          </Route>
          <Route exact path="/Contact" component = {ContactPage}>
          </Route>
          <Route exact path="/OrderNow" component = {OrderNow}>
          </Route>
          <Route exact path="/Plans" component = {PlansPage}>
          </Route>
          <Route exact path="/Payment" component = {Payments}>
          </Route>
          <Route exact path="/Subscribe" component = {Subscribe}>
          </Route>
          <Route path="/OrderComplete" component = {Ordered}>
          </Route>
          <Route path="*" component = {Error}>
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
