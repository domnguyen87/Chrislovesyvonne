import React from 'react'

export default class WeddingEvent extends React.Component {
    render() {
        return (
            <div section-scroll='3' class="wd_scroll_wrap">
                <div class="wd_event_wrapper wd_toppadder90 wd_bottompadder50">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                    <h4>Ceremony & party</h4>
                                    <h1>THE WEDDING EVENT</h1>
                                    <img src="images/content/heading.png" alt="Heading" class="img-responsive" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="wd_event_infobox">
                                    <h2>Main Ceremony</h2>
                                    <h1>7:30 pm</h1>
                                    <span>St. Thomas's Church, London, U.K.</span>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor vel velit auctor aliquet. Aenean sollicitudin, lorem quis <a href="#">Read More...</a></p>
                                    <div class="clearfix"></div>
                                    <a href="#"><img src="images/content/map.png" alt="Map" class="img-responsive" /></a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-push-4 col-md-push-4 col-sm-push-0">
                                <div class="wd_event_infobox">
                                    <h2>Wedding Party</h2>
                                    <h1>7:30 pm</h1>
                                    <span>St. Thomas's Church, London, U.K.</span>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor vel velit auctor aliquet. Aenean sollicitudin, lorem quis <a href="#">Read More...</a></p>
                                    <div class="clearfix"></div>
                                    <a href="#"><img src="images/content/map.png" alt="Map" class="img-responsive" /></a>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-lg-pull-4 col-md-pull-4 col-sm-pull-0">
                                <div class="wd_event_infobox">
                                    {/* <img src="images/content/event_img.gif" alt="Event Image" /> */}
                                    <div class="wd_btn wd_single_index_menu_rsvp">
                                        <a href="4">rsvp</a>
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