import React from "react";
import classes from "./ui.treat";

const textPresets = {
  h1: {
    color: "gray",
    size: 5,
    type: "h1",
    lineHeight: "tight",
  },
  h2: {
    color: "gray",
    size: 4,
    type: "h2",
    lineHeight: "tight",
  },
  body: {
    color: "gray",
    size: 3,
    type: "body",
    lineHeight: "default",
  },
  bold: {
    color: "gray",
    size: 3,
    type: "bodyBold",
    lineHeight: "tight",
  },
  label: {
    size: 3,
    type: "label",
    lineHeight: "tight",
  },
};

const Text = React.forwardRef((props, ref) => {
  const preset = textPresets[props.preset] || textPresets.body;
  const {
    as: Comp = "div",
    preset: _,
    color = preset.color,
    size = preset.size,
    type = preset.type,
    lineHeight = preset.lineHeight,
    align = preset.align,
    noOverflow,
    className,
    forceWrap,
    ...rest
  } = props;
  const classNames = [classes.fontSize[size], classes.textTypes[type]];
  if (className) classNames.push(className);
  if (lineHeight) classNames.push(classes.lineHeight[lineHeight]);
  if (align) classNames.push(classes.textAlign[align]);
  if (noOverflow) classNames.push(classes.noOverflow);
  if (forceWrap) classNames.push(classes.forceWrap);
  if (color) classNames.push(classes.color[color]);
  return <Comp ref={ref} className={classNames.join(" ")} {...rest} />;
});

export default Text;
