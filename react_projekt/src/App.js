import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import About from './components/About';
import Create from './components/Create';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Note from './components/Note';
// import Test from './components/Test';
import { useState } from 'react';
import React from 'react';
function App() {

  const[s, setS] = useState(77);

  function butHen() {

    setS(s + 1);
  }

  return (
    <>
     <div className="main pb-5">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/create" component={Create}/>
            <Route exact path="/note/" component={Note}/>
            <Route exact path="/note/:noteURL" component={Note}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </Router>
      {/* <Test arg={s}/>
      <div>{s}</div> */}
      {/* <button onClick={butHen}>AppBtn</button> */}
      
    </div>
    
       

     <Footer></Footer>
    </>
  );
}

export default App;
