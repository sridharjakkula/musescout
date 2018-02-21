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
    //  backGroundImage: "./MSband.jpg"

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
      //  <BackgroundImage src="./MSband.jpeg" placeholder="./MSgig.jpg">

        <div className="App"  className="App-background"  >
        <div className="App-heading-space">
          <div >
          <div className="text-center">
            <h1 >Musescout</h1>
            </div>
            <div className="App-up-padding"/>
            <div className="text-right">
            <h3 ><a href="#story">The Story</a>|<a href="#how-it-works"> How it Works </a>| <a href="#contact">Contact Us</a></h3>
            </div>
            <div>
            <div className="App-up-padding"/>
            <div className="text-center">
            <h2 > love music, live music</h2>
            </div>
            </div>

          </div>


         <div   className="text-right" onClick={this.showLogin} >
                  {this.state.showLogin ? this.state.label_home : this.state.label_login}

          </div>


          {this.state.showLogin ?   this.state.loginPage : null}

          </div>
          <a name="story">
          <div className="App-up-padding"/>
          <div className="App-up-padding"/>
          <div className="App-the-story-space" className="App-text-color-white" className="text1">
          <h2  > The Story </h2>

<h3  >We’ve seen too many talented musicians forced to stop their love.  We believe everyone should be able to make a living from their passion.  MuseScout allows you to make it happen.  We’ve got buckets of features beyond what you see here that will make you love music and live music.

Our vision is to build and nurture the music talent across the globe.  We want to help you flourish.
</h3>
</div>
</a>
<a name="how-it-works" >
<div className="App-how-it-works-space">

        </div></a>

<a name="contact" >
<div className="App-contact-space" >
  <div className="App-up-padding" />
  <div className="App-up-padding" >
  </div>
  <div className="text-center">
        <h2> Get Involved </h2>
        <h3> Want to keep updated?  You must be 18 or over.  We do not sell or share your information with anyone else.
        </h3>

        <div>
        <h3 >Music Lover Radio button</h3>
        </div>
        <div  >
        <h3>Act Radio button</h3>
        </div>
        <div >
        <h3>Email:</h3>
        </div>
  </div>

  </div>
  </a>


</div>
        //</BackgroundImage>
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
