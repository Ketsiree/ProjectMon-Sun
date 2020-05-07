import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Home from './Component/Home';
import fire from './Config/fire';
import Mon from './Component/Mon';
import Tues from './Component/Tues';
import Wed from './Component/Wed';
import Thurs from './Component/Thurs';
import Fri from './Component/Fri';
import Satur from './Component/Satur';
import Sun from './Component/Sun';
import Topbar from './Component/Topbar';
import { BrowserRouter} from 'react-router-dom';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {}

    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }

    })
  }

  render() {

    if (this.state.user == null) {
      return (
        <div>
          <LoginPage />
        </div>
      );
    }

      return (
        <div>
          <div>
            <Topbar />       
          </div> 
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/loginPage" component={LoginPage} />
            <Route path="/Mon" component={Mon} />
            <Route path="/Tues" component={Tues} />
            <Route path="/Wed" component={Wed} />
            <Route path="/Thurs" component={Thurs} />
            <Route path="/Fri" component={Fri} />
            <Route path="/Satur" component={Satur} />
            <Route path="/Sun" component={Sun} />
           
          </BrowserRouter>
        </div>
          );
    }
  }
  
  export default App
  