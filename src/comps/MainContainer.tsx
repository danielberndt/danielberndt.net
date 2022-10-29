import type {ComponentChildren} from "preact";
import {Box, Col} from "./Box";

const MainContainer = ({children}: {children: ComponentChildren}) => {
  return (
    <Col
      height="100%"
      bg="foreground"
      relative
      rounded="md"
      elevation={300}
      maxWidth="100%"
      width="60rem"
      overflow="hidden"
    >
      <Box prettyScrollBar overflow="auto" maxWidth="100%" px={6} py={3} sm_px={3}>
        {children}
      </Box>
    </Col>
  );
};

export default MainContainer;
