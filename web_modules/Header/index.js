import React, {Component} from "react";

import styles from "./index.css";

export default class Header extends Component {

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.centerBox}>
          <div className={styles.avatar} />
        </div>
      </header>
    );
  }
}
