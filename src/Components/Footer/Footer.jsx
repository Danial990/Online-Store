import './style.css'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Marks from "../../assets/Marks.PNG"
function Footer() {
    return (
        <>
            <div className="container-footer">

                <div className="top-side-footer">

                    <div className="top-side-footer-header">SITE LINKS</div>

                    <div className="footer-sites">

                        <ul className="first-sites">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Directions</li>
                            <li>Blog</li>
                        </ul>

                        <ul className="second-sites">
                            <li>Promotions</li>
                            <li>Partners</li>
                            <li>Carrers</li>
                            <li>FAQs</li>
                        </ul>


                    </div>

                    <div className="line-under-sites"></div>

                    <div className="footer-marks">
                        <img src={Marks} alt="" />
                    </div>

                </div>



                <div className="footer-bot-sec-2">

                    <a target={"_blank"} href="https://www.instagram.com">
                        <BsInstagram className='media' />
                    </a>

                    <a target={"_blank"} href="https://www.facebook.com">
                        <BsFacebook className='media'/>
                    </a>

                    <a target={"_blank"} href="https://www.twitter.com">
                        <BsTwitter className='media'/>
                    </a>

                    <a target={"_blank"} href="https://www.youtube.com">
                        <BsYoutube className='media'/>
                    </a>

                </div>
            </div>
        </>
    );
}

export default Footer;