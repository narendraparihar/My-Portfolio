import { Component } from "react";

import Tcs from "../../assets/tcs-logo.png";
import "./Experience.css";
class Experience extends Component {
  render() {
    return (
      <section id="experience">
        <div id="workexperience" class="sectionClass">
  <div class="row ">
    <div class="sectiontitle">
      <h2>Work experience</h2>
    </div>
    <div class="fullWidth eight columns">
      <ul class="cbp_tmtimeline">
        <li>
          <div class="cbp_tmicon cbp_tmicon-phone">
          <img src={Tcs} alt="tcs logo"/>
          </div>
          <div class="cbp_tmlabel wow fadeInRight animated">
            <h3>Software developer</h3>
            <div class="date">
              <i class="fa fa-calendar"></i>July 2022 - Current
            </div>
            <h4><i class="fa fa-flag"></i>Tata Consultancy Services</h4>
            <p class="projectParagraph">I am responsible for developing user interfaces using React, creating APIs with Next.js to efficiently retrieve and display backend data on the frontend, and optimizing existing APIs to enhance website performance.</p>
          </div>
        </li>
        <li>
          <div class="cbp_tmicon cbp_tmicon-screen">
            <i class="faPra fa-briefcase"></i>
          </div>
          <div class="cbp_tmlabel wow fadeInRight animated">
            <h3>Software Developer Intern</h3>
            <h4><i class="fa fa-flag"></i>FinFlock Systems Private Limited</h4>
            <div class="date"><i class="fa fa-calendar"></i>April 2022 - June 2022</div>
            <p class="projectParagraph">I successfully migrated an entire application developed in Quasar to the latest versions of the technologies. I have received training in Vue.js, Python Django, and Quasar.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
      </section>
    );
  }
}

export default Experience;
