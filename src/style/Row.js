import React from "react";
import classes from "./ui.treat";
import {propsToCss} from "./shared";

const rowCss = (props) => {
  const {sp, align, justify, className, ...rest} = props;
  const classNames = [classes.flexRow];
  if (className) classNames.push(className);
  if (sp !== undefined && sp !== null) classNames.push(classes.vertSpacing[sp]);
  if (align) classNames.push(classes.alignItems[align]);
  if (justify) classNames.push(classes.justifyContent[justify]);

  const retVal = {className: classNames.join(" "), ...rest};
  return retVal;
};

export const Row = React.forwardRef((props, ref) => {
  const Comp = props.as || "div";
  return <Comp ref={ref} {...propsToCss(rowCss(props))} />;
});

export default Row;
