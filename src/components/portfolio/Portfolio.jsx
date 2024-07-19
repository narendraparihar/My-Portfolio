import { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.PNG";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.PNG";
import IMG4 from "../../assets/virtual air painting.gif";
import IMG5 from "../../assets/StickeyNotes.png";
import IMG6 from "../../assets/Activity Tracker.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Quick-YT-Digest Youtube Video Summary generator",
    github: "https://github.com/narendraparihar/QuickYTDigest",
    demo: "https://quick-yt-digest.vercel.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "IFashion - Fashion E-commerce Site",
    github: "https://github.com/narendraparihar/Ifashion---E-com-website",
    demo: "https://github.com/narendraparihar/Ifashion---E-com-website"
  },
  {
    id: 3,
    image: IMG3,
    title: "Responsive School Website Developed with HTML, CSS, JavaScript",
    github: "https://shardashishvidhyalay.netlify.app/",
    demo: "https://inext.dev"
  },
  {
    id: 4,
    image: IMG4,
    title: "Virtual Air Painting, Drawing using motion tracking",
    github: "https://github.com/inextdeve",
    demo: "https://inext.dev"
  },
  {
    id: 5,
    image: IMG5,
    title: "This is a note-taking application with very much attractive UI",
    github: "https://github.com/narendraparihar/StickyNotes.github.io",
    demo: "https://narendraparihar.github.io/StickyNotes.github.io/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Google Chrome Extension that tracks time spent on websites",
    github: "https://github.com/narendraparihar/Activity-Tracker-Chrome-Extension",
    demo: "https://github.com/narendraparihar/Activity-Tracker-Chrome-Extension"
  }
];

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
