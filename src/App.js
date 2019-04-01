import React, { Component } from 'react';
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Invitation from './components/Invitation'
import LoveStory from './components/LoveStory'
import WeddingEvent from './components/WeddingEvent'
import Rsvp from './components/Rsvp'
import Family from './components/Family'
import PhotoGallery from './components/PhotoGallery'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div id="preloader">
          <div id="status">
            <img src="images/header/preloader.gif" id="preloader_image" alt="loader" />
	        </div>
        </div>

        <Header />
        
        <ImageSlider />

        <Invitation />

        <LoveStory />
       
        <WeddingEvent />

        <Rsvp />
        
        <Family />
        
        <PhotoGallery />
        
        <Blog />
        
        <ContactUs />

      </React.Fragment>
        
    );
  }
}

export default App;
