import React, { Component } from "react";
import Headroom from "react-headroom";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Agenda from "../components/Agenda";
import Quote from "../components/Quote";
import News from "../components/News";
import Biography from "../components/Biography";
import Galery from "../components/Galery";
import Footer from "../components/Footer";

const meta = [
  { name: "description", content: "Maestro Jose Eduardo Gomes" },
  { name: "keywords", content: "Maestro, Músico" },
];

import { config } from "../config";

import "../components/reset.sass";
import "../components/layout.scss";
import "../components/headroom.scss";

import Translate from "../containers/translations";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { pinned: false, unfixed: true };
  }

  onPin = () => this.setState({ pinned: true, unfixed: false });

  onUnpin = () => this.setState({ pinned: true, unfixed: false });

  onUnfix = () => this.setState({ pinned: false, unfixed: true });

  render() {
    const { props } = this;
    return (
      <div className="Layout">
        <Helmet title={config.siteTitle} meta={meta} />
        <nav className="Layout-navbar">
          <Headroom
            disableInlineStyles
            pinStart={0}
            onPin={this.onPin}
            onUnpin={this.onUnpin}
            onUnfix={this.onUnfix}
          >
            <Navbar {...props} isScrolled={!this.state.unfixed} />
          </Headroom>
        </nav>
        <div className="Layout-body">
          <Hero {...props} />
          <Agenda {...props} />
          <Quote {...props} />
          <News {...props} />
          <Biography {...props} />
          <Galery {...props} />
          <Footer {...props} />
        </div>
      </div>
    );
  }
}

export default Translate(Index);
