import 'boxicons/css/boxicons.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/logo1.png";
import youtube from "../assets/Youtube.png";
import whatsapp from "../assets/Whatsapp.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#6B8E23', color: 'white', padding: '20px 0', fontFamily: 'Arial', marginTop: '40px' ,marginBottom:'20px'}}>
            <Container>
                <Row className="text-center">

                    {/* Column 1: Logo */}
                    <Col xs={12} md={3}>
                        <img src={logo} alt="MN Organic Logo" width="200px" height="200px" />
                    </Col>

                    {/* Column 2: Information */}
                    <Col xs={12} md={3} className="footer-section">
                        <h5>Information</h5>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                            <li><a href="/terms-of-service">Terms of Service</a></li>
                            <li><a href="/vision">Vision & Mission</a></li>
                            <li><a href="/faqs">FAQs</a></li>
                        </ul>
                    </Col>

                    {/* Column 3: Policies */}
                    <Col xs={12} md={3} className="footer-section">
                        <h5>Policies</h5>
                        <ul>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/vision">Vision & Mission</a></li>
                            <li><a href="/our-herbs">Our Herbs</a></li>
                            <li><a href="/track-order">Track Your Order</a></li>
                        </ul>
                    </Col>

                    {/* Column 4: Contact Us */}
                    <Col xs={12} md={3} className="footer-section">
                        <h5>Contact Us</h5>
                        <ul>
                            <li><i className='bx bx-envelope boxicons-style' ></i> info@mnorganicproducts.com</li>
                            <li><i className='bx bx-phone boxicons-style'></i> +91 9123456789</li>
                            <li><i className='bx bx-map boxicons-style'></i> MN ORGANIC INDIA Pvt. Ltd.</li>
                            <li>Unit No.123, 7th Floor, Tower-B, XXX Towers, ABC Nagar, Chennai-xxxxxx</li>
                        </ul>
                    </Col>

                </Row>
                {/* Social Media Row */}
                {/* Follow Us Section */}
                <Row className="text-center follow-us-section">
                    <Col xs={12}>
                        <h5>Follow Us</h5>
                        <div className="social-icons d-flex justify-content-center gap-4">
                            <a href="https://youtube.com"><img src={youtube} alt="YouTube" width="30px" height="auto" /></a>
                            <a href="https://whatsapp.com"><img src={whatsapp} alt="WhatsApp" width="30px" height="auto" /></a>
                            <a href="https://facebook.com"><img src={facebook} alt="Facebook" width="30px" height="auto" /></a>
                            <a href="https://instagram.com"><img src={instagram} alt="Instagram" width="30px" height="auto" /></a>
                            <a href="https://twitter.com"><img src={twitter} alt="Twitter" width="30px" height="auto" /></a>
                        </div>
                    </Col>
                </Row>


            </Container>
        </footer>
    );
};

export default Footer;
