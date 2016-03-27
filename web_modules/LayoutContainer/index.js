import React, {Component, PropTypes} from "react";
import Helmet from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";
import GoogleAnalyticsTracker from "../GoogleAnalyticsTracker/index";

import styles from "./index.css";

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  };

  render() {
    const {info} = this.context.metadata;

    return (
      <GoogleAnalyticsTracker params={this.props.params}>
        <div className={ styles.layout }>
          <Helmet
            meta={ [
              {property: "og:site_name", content: info.name},
              {name: "twitter:site", content: `@${info.twitterHandle}`}
            ] }
          />
          <Header />
          <div className={ styles.content }>
            { this.props.children }
          </div>
          <Footer />
        </div>
      </GoogleAnalyticsTracker>
    );
  }
}
