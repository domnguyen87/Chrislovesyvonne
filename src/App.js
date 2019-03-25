import React, { Component } from 'react';
// import './App.css';
import HeadWrapper from './components/HeadWrapper'

class App extends Component {
  render() {
    return (
        <React.Fragment>
        <div id="preloader">
          <div id="status">
            <img src="images/header/preloader.gif" id="preloader_image" alt="loader" />
	        </div>
        </div>
        <HeadWrapper />
        </React.Fragment>
    );
  }
}

export default App;
