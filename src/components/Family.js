import React from 'react'

export default class Family extends React.Component {
    render() {
        return (
            <div section-scroll='5' class="wd_scroll_wrap">
                <div class="wd_family_wrapper wd_toppadder90 wd_bottompadder90">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="wd_heading wow fadeInDown" data-wow-delay="0.3s">
                                    <h4>most imp. persons</h4>
                                    <h1>Lovable Family</h1>
                                    <img src="images/content/heading.png" alt="Heading" class="img-responsive" />
                                </div>
                            </div>
                            <div class="wd_family_tabbox">
                                {/* <!-- Nav tabs --> */}
                                <ul class="nav nav-tabs" role="tablist">
                                    <li role="presentation" class="active"><a href="#groom" aria-controls="groom" role="tab" data-toggle="tab"><img src="images/content/tab1.jpg" alt="Groom" /><p>Chris</p></a></li>
                                    <li role="presentation"><a href="#bride" aria-controls="bride" role="tab" data-toggle="tab"><img src="images/content/tab2.jpg" alt="Bride" /><p>Yvonne</p></a></li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane fade in active" id="groom">
                                        <div class="wd_family_slider">
                                            <div class="owl-carousel owl-theme">
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm1.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Mr. Clark Wills</h2>
                                                            <p>(Mark’s Father)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm2.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Jeniffer Wills</h2>
                                                            <p>(Mark’s Mother)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm3.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Carolyn</h2>
                                                            <p>(Mark’s Sister)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div class="item">
                                              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="wd_family_infobox">
                                                  <div class="wd_family_infobox_img">
                                  <span><img src="images/content/line2.png" alt="Line" /></span>
                                  <img src="images/content/fm4.jpg" alt="Family" />
											</div>
                                                      <h2>Donald</h2>
                                                      <p>(Mark’s Brother)</p>
                                                      <ul>
                                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                      </ul>
										</div>
                                                  </div>
                                                </div> */}
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm1.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Mr. Clark Wills</h2>
                                                            <p>(Mark’s Father)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="bride">
                                        <div class="wd_family_slider">
                                            <div class="owl-carousel owl-theme">
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm5.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Mr. Clark Wills</h2>
                                                            <p>(Jenny’s Father)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm6.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Jeniffer Wills</h2>
                                                            <p>(Jenny’s Mother)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="item">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                        <div class="wd_family_infobox">
                                                            <div class="wd_family_infobox_img">
                                                                <span><img src="images/content/line2.png" alt="Line" /></span>
                                                                <img src="images/content/fm7.jpg" alt="Family" />
                                                            </div>
                                                            <h2>Carolyn</h2>
                                                            <p>(Jenny’s Sister)</p>
                                                            <ul>
                                                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>


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