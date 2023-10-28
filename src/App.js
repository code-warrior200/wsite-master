import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

const  App = () => {
  return (
    <div>
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/Ter" component={Terms} />
          <Route  path="/Contact" component={Contact} />
          <Route  path="/Privacy" component={Privacy} />
        </Switch>
      </Router>
      {/* <Footer/> */}
    </div>
  ); 
}

export default App;
