import React from 'react'

export const Footer = () => {
  return (
    <>
    {/* style={{backgroundImage:"url('assets/img/footer-bg.png')"}} */}
     <div className="footer" style={{background: "#6A35FF"}}>
        <div className="container">
            <div className="col-12">
                {/* <div className="subscribe-content"  style={{backgroundImage:"url('assets/img/subscribe-bg.png')"}}>
                    <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <h3 className="title">Get latest crypto news</h3>
                        <p className="text">Subscribe to our newsletter for regular updates.</p>
                    </div>
                    <div className="input-box wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                        <form action="#">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Email" className="form-control"/>
                                        <button className="button-1">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-12 col-md-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                    {/* <div className="footer-box">
                        <a href="#" className="logo"><img src="assets/img/logo.png" alt="" width="350px" height="150px"/></a>
                        <p className="text">Safe, secure, & innovative crypto currency borrow &
                            lending solutions.</p>
                    </div> */}
                </div>
                {/* <div className="col-xl-8">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.3s">
                            <div className="footer-box">
                                <h4 className="lasthead">Company</h4>
                                <ul className="footer-link">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                            <div className="footer-box">
                                <h4 className="lasthead">Support</h4>
                                <ul className="footer-link">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Knowledge Base</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.3s">
                            <div className="footer-box">
                                <h4 className="lasthead">Policy</h4>
                                <ul className="footer-link">
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="0.7s" data-wow-delay="0.3s">
                            <div className="footer-box">
                                <h4 className="lasthead">Contacts</h4>
                                <ul className="footer-link">
                                    <li> <a href="http://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c2b1b7b2b2adb0b682a5adadaea3aca6">[email&#160;protected]</a> </li>
                                    <li> +372 624 6211 </li>
                                    <li> +372 624 600 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <div className="footer-bottom">
                        <div className="content wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <p className="text">Copyright &copy; {new Date().getFullYear()}. All Rights Reserved By <a href="#">DCBITS</a></p>
                        </div>
                        <div className="social-style wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/dcbits"><i className="fab fa-twitter"></i></a>
                            <a href="https://t.me/DcBits73"><i className="fab fa-telegram"></i></a>
                            {/* <a href="#"><i className="fab fa-google-plus-g"></i></a> */}
                            {/* <a href="#"><i className="fab fa-instagram"></i></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
