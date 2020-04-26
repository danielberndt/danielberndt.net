import React, {useEffect} from "react";

const stripLines = (text) => {
  const lines = text.replace(/\/\*\*\//g, "").split("\n");
  const minPad = lines
    .filter((line) => /\S+/.test(line))
    .reduce((m, line) => Math.min(line.match(/^(\s*)/)[1].length, m), Infinity);
  return lines
    .map((line) => (/\S+/.test(line) ? line.slice(minPad) : line))
    .join("\n")
    .trim();
};
const StyledCode = (p) => <div {...p} />;
// const StyledCode = styled("div")({
//   fontSize: "1rem",
//   [breakPoints.small]: {
//     fontSize: ["0.8rem", "calc(0.3rem + 1.5vw)"],
//   },
// });

const childrenToString = (children) => {
  if (typeof children === "string") return children;
  if (Array.isArray(children) && typeof children[0] === "string") return children[0];
  return null;
};

let _cachedPrismd = null;

const useGetPrism = () => {
  const [prism, setPrism] = React.useState(_cachedPrismd);
  useEffect(() => {
    if (!prism) {
      import("../utils/get-prism").then((Prism) => {
        _cachedPrismd = Prism.default;
        setPrism(_cachedPrismd);
      });
    }
  }, [prism]);
  return prism;
};

export const Code = ({children, ...rest}) => {
  const Prism = useGetPrism();
  const stringChild = childrenToString(children);
  const rendered = React.useMemo(() => {
    if (stringChild && Prism) {
      return Prism.highlight(stripLines(stringChild), Prism.languages.jsx);
    } else {
      return null;
    }
  }, [stringChild, Prism]);
  return rendered ? (
    <StyledCode dangerouslySetInnerHTML={{__html: rendered}} {...rest} />
  ) : (
    <StyledCode {...rest}>{children}</StyledCode>
  );
};
