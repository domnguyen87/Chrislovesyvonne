import React, { Component } from 'react';
import HeadWrapper from "./components/HeadWrapper"
import RevolutionSlider from './components/RevolutionSlider'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <div id="preloader">
            <div id="status">
              <img src="images/header/preloader.gif" id="preloader_image" alt="loader" />
	          </div>
          </div>
          {/* <!-- Header Wrapper Start --> */}
          <HeadWrapper />
          {/* <RevolutionSlider /> */}

        </React.Fragment>
    );
  }
}

export default App;
