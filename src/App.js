import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { message } from 'antd';

import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import MoodChoice from './Components/MoodChoice';
import MoodChoice_temp from './Components/MoodChoice_temp';
import TimeRecord from './Components/TimeRecord';
import PostShare from './Components/PostShare';
import LightBulb from './Components/LightBulb';
import NorthSucks from './Components/NorthSucks';
import PositivePost from './Components/PositivePost';
import Notee from './Containers/Notee';
import Blank from './Components/Blank';

function App() {
//const App = () => {
  const [me, setMe] = useState("");

  const displayStatus = (payload) => {
    if (payload.msg) {
      const { type, msg } = payload;
      const content = {
        content: msg, duration: 1.5 }
      switch (type) {
        case 'success':
          message.success(content)
          break
        case 'error':
        default:
          message.error(content)
          break
      }
    }
  }
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/'><LogIn setMe={setMe} displayStatus={displayStatus}/></Route>
            <Route path="/sign-in"><LogIn setMe={setMe} displayStatus={displayStatus}/></Route>
            <Route path="/sign-up"><SignUp setMe={setMe} displayStatus={displayStatus} /></Route>  
            <Route path='/mood-choice' component={MoodChoice} />
            <Route path='/time-record'><TimeRecord me={me} displayStatus={displayStatus}/></Route> 
            <Route path='/post-share'><PostShare me={me} displayStatus={displayStatus}/></Route>
            <Route path='/light-bulb'><LightBulb/></Route>
            <Route path='/north-sucks'><NorthSucks me={me} displayStatus={displayStatus}/></Route>
            <Route path='/positive-post'><PositivePost me={me}/></Route>
            <Route path='/blank-mind'><Blank/></Route>
          </Switch>
      </div>
    </Router>
  );
};

export default App;