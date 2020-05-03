import React from "react";
import classes from "./ui.treat";
import {propsToCss} from "./shared";

const colCss = (props) => {
  const {className, sp, align, justify, ...rest} = props;
  const classNames = [classes.flexCol];
  if (className) classNames.push(className);
  if (sp !== undefined && sp !== null) classNames.push(classes.horSpacing[sp]);
  if (align) classNames.push(classes.alignItems[align]);
  if (justify) classNames.push(classes.justifyContent[justify]);
  return {className: classNames.join(" "), ...rest};
};

const Col = React.forwardRef((props, ref) => {
  const Comp = props.as || "div";
  return <Comp ref={ref} {...propsToCss(colCss(props))} />;
});

export default Col;
