import React from 'react' 

export default class Rsvp extends React.Component {
    render() {
        return (
            <div section-scroll='4' class="wd_scroll_wrap" id="wd_contect_wrapper">
                <div class="wd_guest_wrapper wd_toppadder90">
                    <div class="wd_overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                    <h4>Rsvp</h4>
                                    <h1>Be our guest!</h1>
                                    <img src="images/content/heading.png" alt="Heading" class="img-responsive" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="wd_guest_infobox">
                                    <h2>You’re Invited <span>Yvonne & Chris</span> Wedding</h2>
                                    <h4>Please Rsvp Before 15 May 2017</h4>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor This is Photoshop's version  of Lorem Ipsum.</p>
                                    <h2><span>Gift Registry</span></h2>
                                    <p>What we want most for our wedding is to have our friends and family there to celebrate the occasion with us. If you would like to get us something, w’d love that too. you can find our registries here :</p>
                                </div>
                                <div class="wd_guest_slider">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item"><img src="images/content/gue1.png" alt="Slider" class="img-responsive" /></div>
                                        <div class="item"><img src="images/content/gue2.png" alt="Slider" class="img-responsive" /></div>
                                        <div class="item"><img src="images/content/gue3.png" alt="Slider" class="img-responsive" /></div>
                                        <div class="item"><img src="images/content/gue1.png" alt="Slider" class="img-responsive" /></div>
                                        <div class="item"><img src="images/content/gue2.png" alt="Slider" class="img-responsive" /></div>
                                        <div class="item"><img src="images/content/gue3.png" alt="Slider" class="img-responsive" /></div>
                                        <div class="item"><img src="images/content/gue1.png" alt="Slider" class="img-responsive" /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="wd_guest_formbox">
                                    <span>Are You Attending?</span>
                                    <h4>Rsvp Here!</h4>
                                    <div class="wd_guest_form">
                                        <div class="row">
                                            <form>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label>Full Name :</label>
                                                    <input type="text" name="full_name" placeholder="Full Name" class="require" />
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <label>Email :</label>
                                                    <input type="text" name="email" placeholder="Email" class="require" data-valid="email" data-error="Email should be valid." />
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label>Guests :</label>
                                                    <select name="guest_no" class="require">
                                                        <option value="0">00</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <label>Event :</label>
                                                    <select name="event_name" class="require">
                                                        <option value="all">All Events</option>
                                                        <option value="party">Party Events</option>
                                                        <option value="marriage">Marriage Events</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="response"></div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div class="wd_btn">
                                                        <button type="button" class="submitForm" form-type="inquiry">Send a Message</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wd_testimonial_wrapper wd_toppadder70 wd_bottompadder70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_testimonial_slider">
                                    <div class="owl-carousel owl-theme">
                                        <div class="item">
                                            <div class="wd_testimo_box">
                                                <img src="images/content/heart.png" alt="Testimonial" />
                                                <p>“ Better to have loved and lost, than to have never loved ”</p>
                                                <h4>~ Akshay H ~</h4>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="wd_testimo_box">
                                                <img src="images/content/heart.png" alt="Testimonial" />
                                                <p>“ I look at you and see the rest of my life in front of my eyes. ”</p>
                                                <h4>~ Ajay S ~</h4>
                                            </div>
                                        </div>
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