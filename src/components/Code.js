import React from "react";
import styled from "react-emotion";
import {breakPoints} from "../style/breakpoints";

const stripLines = text => {
  const lines = text.split("\n");
  const minPad = lines
    .filter(line => /\S+/.test(line))
    .reduce((m, line) => Math.min(line.match(/^(\s*)/)[1].length, m), Infinity);
  return lines
    .map(line => (/\S+/.test(line) ? line.slice(minPad) : line))
    .join("\n")
    .trim();
};
const StyledCode = styled("div")({
  fontSize: "1rem",
  [breakPoints.small]: {
    fontSize: ["0.8rem", "calc(0.3rem + 1.5vw)"],
  },
});

export class Code extends React.Component {
  state = {
    prismd: null,
  };

  componentDidMount() {
    const {children} = this.props;
    if (typeof children !== "string") return;
    if (typeof window !== "undefined") {
      import("../utils/get-prism").then(Prism => {
        this.setState({
          prismd: Prism.default.highlight(stripLines(children), Prism.default.languages.jsx),
        });
      }, "prismjs");
    }
  }

  render() {
    const {children: rawChildren, metaString: _, ...rest} = this.props;
    const {prismd} = this.state;
    return prismd ? (
      <StyledCode dangerouslySetInnerHTML={{__html: prismd}} {...rest} />
    ) : (
      <StyledCode {...rest}>
        {typeof rawChildren === "string" ? stripLines(rawChildren) : rawChildren}
      </StyledCode>
    );
  }
}
