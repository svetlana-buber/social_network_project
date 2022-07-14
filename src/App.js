import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/appReducer";
// import {getAuthUserData} from "./redux/authReducer";
import {connect} from 'react-redux';
import { compose } from "redux";
import clock from "./assets/images/clock_black.gif"
import { startAsyncValidation } from "redux-form";

class App extends Component {
  componentDidMount = () => {
    this.props.initializeApp()
  }

  render () {
  // const App = (props) => {

    if (!this.props.initialized) {
      return <img src = {clock}/>
    }
    return(  
      <HashRouter basename={process.env.PUBLIC_URL}>
          <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                  <div class='app-wrapper-content'>
                      <Routes>
                          <Route path="/dialogs" element= {<DialogsContainer />}/>
                          <Route path="/profile/:userId" element={<ProfileContainer />}/>
                          <Route path="/users" element={<UsersContainer />}/>
                          <Route path="/login" element={<Login />}/>
                      </Routes>
                  </div>
          </div>
      </HashRouter>
    )
  }
}

// export default compose(
  
//   connect(null, {getAuthUserData}))(App);

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  userID: state.auth.userID
})

export default compose(
  
  connect(mapStateToProps, {initializeApp}))(App);

