import type {ComponentChildren} from "preact";
import {BoxProps, Col} from "./Box";

const MainContainer = ({children, sp = 8}: {children: ComponentChildren; sp?: BoxProps["sp"]}) => {
  return (
    <Col
      as="main"
      height="100%"
      bg="foreground"
      relative
      rounded="md"
      elevation={300}
      maxWidth="100%"
      width="50rem"
      overflow="hidden"
    >
      <Col prettyScrollBar overflow="auto" maxWidth="100%" px={7} py={6} sm_px={3} sp={sp}>
        {children}
      </Col>
    </Col>
  );
};

export default MainContainer;
