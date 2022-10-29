/* eslint-disable jsx-a11y/heading-has-content */
import type {ComponentProps} from "preact";
import {cx} from "./Box";
import {markdownComponentStyles as styles} from "./MarkdownComponents.css";

const MarkdownComponents = {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  a: (props: ComponentProps<"a">) => <a className={styles.a} {...props} />,
  h1: (props: ComponentProps<"h1">) => <h1 className={styles.h1} {...props} />,
  h2: ({children, ...props}: ComponentProps<"h2">) => (
    <h2 className={styles.h2} {...props}>
      <span className={styles.h2Inner}>{children}</span>
    </h2>
  ),
  p: (props: ComponentProps<"p">) => <p className={styles.p} {...props} />,
  ul: (props: ComponentProps<"ul">) => <ul className={styles.ul} {...props} />,
  li: (props: ComponentProps<"li">) => <li className={styles.li} {...props} />,
  pre: ({className, ...props}: ComponentProps<"pre">) => (
    <div className={styles.preContainer}>
      <pre className={cx(className, styles.pre)} {...props} />
    </div>
  ),
  code: (props: ComponentProps<"code">) => <code className={styles.code} {...props} />,
};

export default MarkdownComponents;
