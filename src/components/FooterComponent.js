import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href='/home'>Home</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/resources">Resources</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            <br />
                            <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 99638 25364<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiraana_haat@food.net">
                                kiraana_haat@food.net</a><br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiraana_haat_support@food.net">
                            kiraana_haat_support@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020 Kiraana Haat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;