import React, { FC } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer >
        <div className="footer-header flex flex-center-h flex-center-v gap-10">
            <i className="fab fa-youtube"></i>
            <h5>OuiTube</h5>
        </div>
        <div className="footer-content footer-content-m">
            <div className="footer-menu-lists flex flex-center gap-10">
                <div className="menu-lists-item flex-1">
                    <h5>Product</h5>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="#">Video Player</Link></li>
                            <li><Link to="#">Create</Link></li>
                            <li><Link to="#">Live Streaming</Link></li>
                            <li><Link to="#">Screen Recorder</Link></li>
                            <li><Link to="#">Collaboration</Link></li>
                            <li><Link to="#">Monétization</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-lists-item flex-1">
                    <h5>Ressources</h5>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="#">Helper Centre</Link></li>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Video School</Link></li>
                            <li><Link to="#">OTT Ressources</Link></li>
                            <li><Link to="#">Developpers</Link></li>
                            <li><Link to="#">Students</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-lists-item flex-1">
                    <h5>Affiliate</h5>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="#">Become a Partner</Link></li>
                            <li><Link to="#">Guidelines</Link></li>
                            <li><Link to="#">Live Streaming</Link></li>
                            <li><Link to="#">Hosting &amp; Management</Link></li>
                            <li><Link to="#">Monetization</Link></li>
                            <li><Link to="#">Collaboration</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-lists-item flex-1">
                    <h5>Quick</h5>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="#">Live Streaming</Link></li>
                            <li><Link to="#">Video Player</Link></li>
                            <li><Link to="#">Screen Recorder</Link></li>
                            <li><Link to="#">Monetization</Link></li>
                            <li><Link to="#">Create</Link></li>
                            <li><Link to="#">Collaboration</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="menu-lists-item flex-1">
                    <h5>Contact</h5>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="#">Become a Partner</Link></li>
                            <li><Link to="#">Guidelines</Link></li>
                            <li><Link to="#">Live Streaming</Link></li>
                            <li><Link to="#">Hosting &amp; Management</Link></li>
                            <li><Link to="#">Monetization</Link></li>
                            <li><Link to="#">Collaboration</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-social-icon flex">
                <div className="social-icon flex-1">
                    <ul className="flex flex-center-v gap-5">
                        <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                        <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                    </ul>
                </div>
                <div className="app-icon flex-1">
                    <Link to="#"><img src="/images/logo/playstore.png" alt="" /></Link>
                    <Link to="#"><img src="/images/logo/appstore.png" alt="" /></Link>
                </div>
            </div>
        </div>
        <div className="footer-bottom flex flex-center-h flex-center-v">
            Copyright &copy; 2021 OuiTube All Rights Reserved.
        </div>
    </footer>
);

export default Footer;
