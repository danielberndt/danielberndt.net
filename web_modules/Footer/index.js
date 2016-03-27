import React, {Component, PropTypes} from "react";
import SVG from "react-svg-inline";

import styles from "./index.css";

export default class Footer extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired
  };

  render() {
    const {info} = this.context.metadata;
    return (
      <footer className={styles.footer}>
        <div className={styles.findMeOn}>find me on</div>
        <a href={`https://twitter.com/${info.twitterHandle}`}>
          <SVG svg={require("../assets/twitter.svg")} className={styles.icon} title="twitter" />
        </a>
        <a href="https://github.com/danielberndt">
          <SVG svg={require("../assets/github.svg")} className={styles.icon} title="github" />
        </a>
      </footer>
    );
  }
}
