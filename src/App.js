import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./component/AboutUs/About";
// import Navbar from './component/Navbar/Navbar';
// import TopSection from './component/Navbar/TopSection/TopSection';
// import Manage from './component/Manage/Manage';
import Blog from './component/Blog/Blog';
// import Contact from './component/Contact/Contact';
import Home from "./component/Home/Home";
// import About from "./component/AboutUs/About";

function App() {
  return (
    <div className="App">

 <Router>

<Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
         <Blog />
          </Route>
        </Switch>
      
    </Router>
     
    </div>
  );
}

export default App;
