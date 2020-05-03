/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import {Link as GatsbyLink} from "gatsby";
import {heroStyles, typoStyles} from "./typo.treat";
import cx from "../components/cx";

export const Hero = ({children, className, ...rest}) => (
  <div className={cx(heroStyles.base, heroStyles.outerHero, className)} {...rest}>
    <span className={heroStyles.innerHero}>{children}</span>
  </div>
);

export const SmallHero = ({children, as: Comp = "span", className, ...rest}) => (
  <div className={cx(heroStyles.base, heroStyles.outerHero, className)} {...rest}>
    <Comp className={heroStyles.innerSmallHero} {...rest}>
      {children}
    </Comp>
  </div>
);

export const BorderHeading = ({children, as: Comp = "h2", ...rest}) => (
  <Comp {...rest}>
    <div className={typoStyles.borderHeading.border}>
      <span className={typoStyles.borderHeading.inner}>{children}</span>
    </div>
  </Comp>
);

const ExternalOrInternalLink = ({href, children, ...rest}) =>
  href.indexOf("http") === 0 ? (
    <a href={href} {...rest}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={href} {...rest}>
      {children}
    </GatsbyLink>
  );

export const Overline = ({className, ...rest}) => (
  <div className={cx(className, typoStyles.overline)} {...rest} />
);
export const H1 = ({className, ...rest}) => (
  <h1 className={cx(className, typoStyles.h1)} {...rest} />
);
export const H3 = ({className, ...rest}) => (
  <h3 className={cx(className, typoStyles.h3)} {...rest} />
);
export const Hr = ({className, ...rest}) => (
  <hr className={cx(className, typoStyles.hr)} {...rest} />
);
export const Link = ({className, ...rest}) => (
  <ExternalOrInternalLink className={cx(className, typoStyles.link)} {...rest} />
);
