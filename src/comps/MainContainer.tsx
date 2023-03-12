import type {ComponentChildren} from "preact";
import {Box, BoxProps, Col, Row} from "./Box";
import githubLogo from "../assets/github-icon.svg";

type Props = {children: ComponentChildren; sp?: BoxProps["sp"]; editFilePath?: string};
const MainContainer = ({children, sp = 8, editFilePath}: Props) => {
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
      <Col
        prettyScrollBar
        overflow="auto"
        maxWidth="100%"
        px={7}
        py={6}
        sm_px={3}
        sp={sp}
        flex="auto"
      >
        {children}
        {editFilePath && (
          <Row
            styleChild
            size={10}
            align="center"
            sp={1}
            color="secondary"
            hoverColor="link"
            justify="end"
            mt="auto"
          >
            <a
              href={`https://github.com/danielberndt/danielberndt.net/blob/main/src/${editFilePath}`}
            >
              <span>Suggest edit</span>
              <Box styleChild height="auto" width="1em" size={14}>
                <img src={githubLogo.src} alt="GitHub" />
              </Box>
            </a>
          </Row>
        )}
      </Col>
    </Col>
  );
};

export default MainContainer;
