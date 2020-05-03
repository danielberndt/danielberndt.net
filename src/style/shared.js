import classes from "./ui.treat";

// eslint-disable-next-line complexity
export const propsToCss = (props) => {
  const {
    pa,
    px = pa,
    py = pa,
    pt = py,
    pl = px,
    pr = px,
    pb = py,
    bg,
    elevation,
    fillParent,
    relative,
    absolute,
    fixed,
    inset,
    sticky,
    minWidth,
    minHeight,
    rounded,
    noShrink,
    as: _,
    className,
    border,
    ...rest
  } = props;
  const classNames = className ? [className] : [];
  if (pt !== null && pt !== undefined) classNames.push(classes.paddingTop[pt]);
  if (pb !== null && pb !== undefined) classNames.push(classes.paddingBottom[pb]);
  if (pl !== null && pl !== undefined) classNames.push(classes.paddingLeft[pl]);
  if (pr !== null && pr !== undefined) classNames.push(classes.paddingRight[pr]);
  if (bg) classNames.push(classes.backgroundColor[bg]);
  if (minWidth) classNames.push(classes.minWidth[0]);
  if (minHeight) classNames.push(classes.minHeight[0]);
  if (elevation !== null && elevation !== undefined) classNames.push(classes.boxShadow[elevation]);
  if (fillParent) classNames.push(classes.flex.auto);
  if (relative) classNames.push(classes.position.relative);
  if (fixed) classNames.push(classes.position.fixed);
  if (sticky) classNames.push(classes.position.sticky);
  if (absolute) classNames.push(classes.position.absolute);
  if (inset) classNames.push(classes.inset[inset]);
  if (rounded) classNames.push(classes.rounded[rounded]);
  if (noShrink) classNames.push(classes.noShrink);
  if (border) classNames.push(classes.fullBorder, classes.borderColor[border]);
  return {className: classNames.join(" "), ...rest};
};
