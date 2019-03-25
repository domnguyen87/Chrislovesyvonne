import React from 'react'

class HeadWrapper extends React.Component {
    render() {
        return (
            <div section-scroll='0' className="wd_scroll_wrap">
                <div className="wd_slider_wrapper wd_single_index_menu">
                    <div className="wd_header_wrapper">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 visible-xs visible-sm">
                            <div className="wd_logo">
                                <img src="images/header/logo.png" alt="Logo" title="Logo" className="img-responsive" />
                                    <button className="wd_menu_btn"><i className="fa fa-bars" aria-hidden="true"></i></button>
			                </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="wd_mainmenu_wrapper">
                                <div className="wd_main_menu_wrapper">
                                    <div className="wd_main_menu wd_single_index_menu">
                                        <ul>
                                            <li><a href="0">Home</a></li>
                                            <li><a href="1">About Us</a></li>
                                            <li><a href="2">Love Story</a></li>
                                            <li><a href="3">Events</a></li>
                                            <li className="hidden-xs hidden-sm"><a href="#">
                                                <img id="logo-navbar-middle" src="images/header/logo2.png" className="img-responsive" alt="logo" /></a></li>
                                            <li><a href="4">Rsvp</a></li>
                                            <li><a href="5">Family</a></li>
                                            <li><a href="6">Gallery</a></li>
                                            <li><a href="7">Blog</a></li>
                                            <li><a href="8">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default HeadWrapper
