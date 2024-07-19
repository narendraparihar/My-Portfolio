import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
  }
  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this.form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Connections and Coding Profiles </h2>
        <div className="footer__social">
        <a href="https://github.com/narendraparihar" target="_blank">
           <FaGithub/>
          </a>
          <a href="https://www.hackerrank.com/narendra7746" target="_blank">
           <FaHackerrank/>
          </a>
          <a href="https://www.codechef.com/users/pirate_coder77" target="_blank">
          <SiCodechef/>
          </a>
          <a href="https://twitter.com" target="_blank">
          <SiLeetcode/>
          </a>
          <a href="https://www.linkedin.com/in/narendra-parihar/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="mailto:narendraparihar5196@gmail.com" target="_blank">
            <FaRegEnvelope />
          </a>
          </div>
      </section>
    );
  }
}

export default Contact;
