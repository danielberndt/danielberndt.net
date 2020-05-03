import React from "react";
import {Helmet} from "react-helmet";
import {graphql, useStaticQuery} from "gatsby";

import "normalize.css/normalize.css";
import "../style/global-styles.treat";
import {layoutStyles as styles} from "./layout.treat";

const Outer = (props) => {
  const nodeRef = React.useRef();

  React.useEffect(() => {
    let currentDeg = 120;
    let timeoutId;
    const doIt = () => {
      currentDeg = (currentDeg + 1) % 360;
      nodeRef.current.style.background = `linear-gradient(${currentDeg}deg, #f0f 0%, #0ff 100%)`;
      timeoutId = setTimeout(doIt, 200);
    };
    timeoutId = setTimeout(doIt, 200);

    return () => clearTimeout(timeoutId);
  }, []);

  return <div className={styles.outer} ref={nodeRef} {...props} />;
};

const Layout = ({children, title}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          content
        }
      }
    }
  `);
  return (
    <Outer>
      <Helmet
        title={title || data.site.siteMetadata.title}
        meta={[{name: "description", content: data.site.siteMetadata.content}]}
        htmlAttributes={{lang: "en"}}
      />
      <div className={styles.inner}>
        <div className={styles.scrollContent}>
          <div className={styles.innerScrollContent}>{children}</div>
        </div>
      </div>
    </Outer>
  );
};

export default Layout;
