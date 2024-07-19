import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
          <a href="https://www.codechef.com/users/pirate_coder77" target="_blank">
          <SiCodechef />
        </a>
        <a href="https://www.linkedin.com/in/narendra-parihar/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/narendraparihar" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.hackerrank.com/narendra7746" target="_blank">
          <FaHackerrank />
        </a>
        <a href="https://leetcode.com/narendraparihar5196/" target="_blank">
          <SiLeetcode />
        </a>
      
      </div>
    );
  }
}
export default HeaderSocials;
