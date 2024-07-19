import { Component } from "react";
import ME from "../../assets/me-about.JPG";
import CTA from "../header/CTA";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <p>
            I am a dedicated Software Developer with over <strong>2 years</strong> of extensive experience in software development, currently working at Tata Consultancy Services. I hold a degree in <strong>Computer Science and Engineering</strong>  from Rashtriya Raksha University. My technical expertise includes working with React, Node.js, Next.js, and Contentful, along with proficiency in programming languages such as Python, Java, and JavaScript. Additionally, I am certified as an AWS Developer Associate and AWS Cloud Practitioner, showcasing my strong foundation in cloud computing.
            </p>
            <CTA />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
