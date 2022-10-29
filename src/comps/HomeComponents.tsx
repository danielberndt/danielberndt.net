import type {ComponentChildren, ComponentProps} from "preact";
import dsStyles from "../styles/index.css";
import {Box, Col, cx, Row, Text} from "./Box";
import {homeComponentStyles as styles} from "./HomeComponents.css";
import {fancyBg, markdownComponentStyles} from "./MarkdownComponents.css";

export const HiddenH1 = (props: ComponentProps<"h1">) => {
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h1 className={dsStyles.display.none} {...props} />;
};

export const HelloH2 = ({children, ...props}: ComponentProps<"h2">) => {
  return (
    <h2 {...props}>
      <span className={styles.helloH2Inner}>{children}</span>
    </h2>
  );
};

export const Project = (props: {description: string; time: string; name: string; link: string}) => {
  const {description, time, name, link} = props;
  return (
    <section>
      <Text fontStyle="italic" color="secondary" size={12}>
        {time}
      </Text>
      <Row align="baseline" sp={3}>
        {link ? (
          <a href={link} className={markdownComponentStyles.a}>
            <Box as="h3" color="primary" size={22}>
              {name}
            </Box>
          </a>
        ) : (
          <Box as="h3" color="primary" size={22}>
            {name}
          </Box>
        )}
      </Row>
      <Box as="p" size={16}>
        {description}
      </Box>
    </section>
  );
};

export const BoldLink = ({href, children}: {href: string; children: ComponentChildren}) => (
  <a href={href} className={styles.boldLink}>
    {children}
  </a>
);

export const Tile = (props: {date: string; title: string; description?: string; url?: string}) => {
  const {date, title, description, url} = props;
  const content = (
    <Col
      as="article"
      relative
      bg="foreground"
      rounded="md"
      px={5}
      py={3}
      elevation={200}
      className={cx(styles.tile.base, url && styles.tile.interactive)}
    >
      <Box size={12} color="secondary" fontStyle="italic">
        {date}
      </Box>
      <h3>{title}</h3>
      <Box as="p" size={16} color="secondary">
        {description}
      </Box>
    </Col>
  );
  return (
    <Box styleChild relative className={fancyBg}>
      {url ? <a href={url}>{content}</a> : <div>{content}</div>}
    </Box>
  );
};
