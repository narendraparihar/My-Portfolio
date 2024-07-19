import { Component } from "react";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube
} from "react-icons/io";
import "./footer.css";
import { BiEnvelope } from "react-icons/bi";
class Footer extends Component {
  render() {
    return (
        <section id="footer">
        <h5>Get In Touch</h5>
        <h2>Let's Connect</h2>
    <div className="footer__social">
    <a href="https://www.linkedin.com/in/narendra-parihar/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="mailto:narendraparihar5196@gmail.com" target="_blank">
            <FaRegEnvelope />
          </a>
        <a href="https://github.com/narendraparihar" target="_blank">
           <FaGithub/>
          </a>
          <a href="https://www.hackerrank.com/narendra7746" target="_blank">
           <FaHackerrank/>
          </a>
          <a href="https://www.codechef.com/users/pirate_coder77" target="_blank">
          <SiCodechef/>
          </a>
          <a href="https://leetcode.com/narendraparihar5196/" target="_blank">
          <SiLeetcode/>
          </a>
         
        </div>
        <div className="footer__copyright">
          <small>&copy; Narendra Parihar 2024</small>
        </div>
        </section>
    );
  }
}

export default Footer;
