import React from 'react'

export default class Invitation extends React.Component {
    render() {
        return (
            <div section-scroll='1' id="down" class="wd_scroll_wrap">
                <div class="wd_about_wrapper wd_toppadder90 wd_bottompadder70">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                    <h4>are getting married!</h4>
                                    <h1>Groom and Bride</h1>
                                    <img src="images/content/heading.png" alt="Heading" class="img-responsive" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="wd_about_infobox wd_toppadder20">
                                    <div class="wd_about_infobox_img">
                                        <span><img src="images/content/line.png" alt="Line" class="img-responsive" /></span>
                                        <img src="images/content/groom.png" alt="Groom" class="img-responsive" />
                                    </div>
                                    <h2>Chris Tan</h2>
                                    <p>(S/o Mrs. Jeniffer & Mr. Clark Wills)</p>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-21 col-xs-12 col-lg-push-4 col-md-push-4 col-sm-push-0">
                                <div class="wd_about_infobox wd_toppadder20">
                                    <div class="wd_about_infobox_img">
                                        <span><img src="images/content/line.png" alt="Line" class="img-responsive" /></span>
                                        <img src="images/content/bride.png" alt="Groom" class="img-responsive" />
                                    </div>
                                    <h2>Yvonne Nguyen</h2>
                                    <p>(D/o Mrs. Merry & Mr. Jhon Bellucci)</p>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-pull-4 col-md-pull-4 col-sm-pull-0">
                                <div class="wd_about_infobox">
                                    <h1>Invitation</h1>
                                    <div class="wd_about_infobox_date">
                                        <p>We inviting you and your family on</p>
                                        <h3>Saturday</h3>
                                        <h2>05 October 2019</h2>
                                        <p>At St. Thomas's Church, London, U.K.</p>
                                    </div>
                                    <div class="wd_btn wd_single_index_menu_rsvp">
                                        <a href="4">rsvp</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_timer_wrapper">
                                    <div class="wd_center_words">
                                        <h4>Don't miss it!</h4>
                                    </div>
                                    <div id="clockdiv">
                                        <div><span class="days"></span><div class="smalltext">Days</div></div>
                                        <div><span class="hours"></span><div class="smalltext">Hours</div></div>
                                        <div><span class="minutes"></span><div class="smalltext">Minutes</div></div>
                                        <div><span class="seconds"></span><div class="smalltext">Seconds</div></div>
                                    </div>
                                    <div class="wd_center_words">
                                        <h4>until we get married!</h4>
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