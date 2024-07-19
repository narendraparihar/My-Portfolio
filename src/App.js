import { Component } from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <Nav />
        <Experience />
        <Portfolio />
        <Footer />
      </>
    );
  }
}
export default App;
