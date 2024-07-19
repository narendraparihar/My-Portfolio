import { Component } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import "./nav.css";
import { useState } from "react";

class Nav extends Component {
  constructor() {
    super();
    this.state = { active: "#" };
  }

  render() {
    return (
      <nav>
        <a
          onClick={() => this.setState({ active: "#" })}
          className={this.state.active == "#" ? "active" : ""}
          href="#"
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => this.setState({ active: "#about" })}
          className={this.state.active == "#about" ? "active" : ""}
          href="#about"
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => this.setState({ active: "#experience" })}
          className={this.state.active == "#experience" ? "active" : ""}
          href="#experience"
        >
          <BiBook />
        </a>
       
        <a
             onClick={() => this.setState({ active: "#portfolio" })}
             className={this.state.active == "#portfolio" ? "active" : ""}
             href="#portfolio"
        >
          <BiMessageSquareDetail />
        </a>
        <a
         
          onClick={() => this.setState({ active: "#footer" })}
          className={this.state.active == "#footer" ? "active" : ""}
          href="#footer"
        >
          <RiServiceLine />
        </a>
      </nav>
    );
  }
}

export default Nav;
