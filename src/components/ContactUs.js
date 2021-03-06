import React from 'react'

export default class ContactUs extends React.Component{
    render() {
        return (
            <div section-scroll='8' class="wd_scroll_wrap">
                <div class="wd_contact_wrapper wd_toppadder90 wd_bottompadder90">
                    <div class="wd_overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                    <h4>If Any Query</h4>
                                    <h1>Contact Us</h1>
                                    <img src="images/content/heading.png" alt="Heading" class="img-responsive" />
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-10 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">
                                <div class="wd_contact_form">
                                    <div class="row">
                                        <form>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="full_name" placeholder="Full Name" class="require" />
                                                <input type="text" name="email" placeholder="Email" class="require" data-valid="email" data-error="Email should be valid." />
                                                <input type="text" name="contact_no" placeholder="Phone" class="require" />
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <textarea rows="7" name="message" placeholder="Message" class="require"></textarea>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="response"></div>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="wd_btn">
                                                    <button type="button" class="submitForm" form-type="contact">Send a Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wd_footer_wrapper wd_toppadder90 wd_bottompadder100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="wd_footer_infobox">
                                    <div class="wd_footicon">
                                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                    <h2>Home</h2>
                                    <p>928 Sunny St, Sacramento, CA 92093</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="wd_footer_infobox">
                                    <div class="wd_footicon">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                    <h2>Phone</h2>
                                    <p>949-209-0292 <br /> 714-203-0390</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                <div class="wd_footer_infobox">
                                    <div class="wd_footicon">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                    <h2>Email Us</h2>
                                    <p>yvonne@chrisandyvonne.com <br />chris@chrisandyvonne.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div class="wd_footer_bottom_wrapper wd_toppadder50 wd_bottompadder50">
                    <a href="javascript:void(0);" id="scroll" title="Scroll to Top" style={{ display: "none" }}><i class="fa fa-long-arrow-up" aria-hidden="true"></i></a>
                    <div class="col-md-12">
                        <div class="wd_footer_section">
                            <img src="images/header/flogo.png" alt="Logo" class="img-responsive" />
                            <p>@ Copyright 2017 All Rights Reserved. By Webstrot</p>
                        </div>
                    </div>
                </div> */}
            </div>

        )
    }
}