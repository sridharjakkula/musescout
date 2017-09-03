import React, { Component } from 'react';
import BackgroundImage from 'react-background-image-loader';
import logo from './logo.svg';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './App.css';
import Loginscreen from './Loginscreen';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.showLogin = this.showLogin.bind(this);
    this.state={
      loginPage:[],
      uploadScreen:[],
      showLogin: false,
      label_login: "Login/Register",
      label_home: "Home",
      backGroundImage: "./MSgig.jpg"

    }

  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage

                    })
  }
  render() {


      return (
    //    <BackgroundImage src="./MSband.jpeg" placeholder="./MSband.jpeg">
        <div className="App" className="App-background">
          <div >
            <h2>Musescout</h2>
          </div>
         <div   className="text-align-right" onClick={this.showLogin} >
                  {this.state.showLogin ? this.state.label_home : this.state.label_login}

          </div>
          {this.state.showLogin ?   this.state.loginPage : null}

        </div>
      //  </BackgroundImage>
      );

  }

  showLogin(){
   this.setState ({showLogin : !this.state.showLogin})


  }



}

const style = {
  margin: 15,
};

export default App;
