import {style, globalStyle} from "treat";
import colors from "./colors";
import {elevations, spacingSteps, fontSizes} from "./tokens";

const fontFamilies = {
  default: "ebony, Helvetica Neue, Helvetica, Arial, sans-serif",
};

const pushClass = style({flex: "auto"});

const uiClasses = {
  paddingTop: spacingSteps.map((v) => style({paddingTop: `${v}rem`})),
  paddingLeft: spacingSteps.map((v) => style({paddingLeft: `${v}rem`})),
  paddingRight: spacingSteps.map((v) => style({paddingRight: `${v}rem`})),
  paddingBottom: spacingSteps.map((v) => style({paddingBottom: `${v}rem`})),
  backgroundColor: Object.entries(colors).reduce((m, [name, val]) => {
    m[name] = style({backgroundColor: val});
    return m;
  }, {}),
  borderColor: Object.entries(colors).reduce((m, [name, val]) => {
    m[name] = style({borderColor: val});
    return m;
  }, {}),
  alignItems: {
    start: style({alignItems: "flex-start"}),
    center: style({alignItems: "center"}),
    end: style({alignItems: "flex-end"}),
    baseline: style({alignItems: "baseline"}),
  },
  justifyContent: {
    start: style({justifyContent: "flex-start"}),
    center: style({justifyContent: "center"}),
    end: style({justifyContent: "flex-end"}),
  },
  boxShadow: {
    0: style({boxShadow: elevations.xs}),
    1: style({boxShadow: elevations.sm}),
    2: style({boxShadow: elevations.md}),
  },
  rounded: {
    xs: style({borderRadius: "0.15rem"}),
    sm: style({borderRadius: "0.2rem"}),
    md: style({borderRadius: "0.3rem"}),
  },
  flex: {
    auto: style({flex: "auto"}),
  },
  position: {
    relative: style({position: "relative"}),
    absolute: style({position: "absolute"}),
    fixed: style({position: "fixed"}),
    sticky: style({position: "sticky"}),
  },
  minWidth: {0: style({minWidth: 0})},
  minHeight: {0: style({minHeight: 0})},
  inset: {
    full: style({top: 0, bottom: 0, left: 0, right: 0}),
    x: style({left: 0, right: 0}),
    y: style({top: 0, bottom: 0}),
  },
  flexRow: style({
    display: "flex",
    flexDirection: "row",
  }),
  flexCol: style({
    display: "flex",
    flexDirection: "column",
  }),
  vertSpacing: spacingSteps.map(() =>
    style({
      // [`& > *:not(:last-child):not(.${pushClass})`]: {marginRight: `${val}rem`},
    })
  ),
  horSpacing: spacingSteps.map(() =>
    style({
      // [`& > *:not(:last-child):not(.${pushClass})`]: {marginBottom: `${val}rem`},
    })
  ),

  color: Object.entries(colors).reduce((m, [name, val]) => {
    m[name] = style({color: val});
    return m;
  }, {}),
  fontSize: fontSizes.map((v) => style({fontSize: `${v}rem`})),
  lineHeight: {
    none: style({lineHeight: 1.0}),
    tight: style({lineHeight: 1.1}),
    default: style({lineHeight: 1.3125}),
    wide: style({lineHeight: 1.5}),
  },
  textAlign: {
    center: style({textAlign: "center"}),
    left: style({textAlign: "left"}),
    right: style({textAlign: "right"}),
  },
  textTypes: {
    h1: style({
      fontFamily: fontFamilies.default,
      fontWeight: "bold",
    }),
    h2: style({
      fontFamily: fontFamilies.default,
      fontWeight: "bold",
      textTransform: "uppercase",
    }),
    body: style({
      fontFamily: fontFamilies.default,
    }),
    bodyBold: style({
      fontFamily: fontFamilies.default,
      fontWeight: "bold",
    }),
    label: style({
      fontFamily: fontFamilies.default,
      fontWeight: "bold",
      letterSpacing: "0.02em",
      textTransform: "uppercase",
    }),
  },
  noOverflow: style({overflow: "hidden", whiteSpace: "nowrap"}),
  noShrink: style({flex: "none"}),
  forceWrap: style({overflowWrap: "break-word", hyphens: "auto"}),
  push: pushClass,
  horLine: style({borderBottomStyle: "solid", borderBottomWidth: 1}),
  fullBorder: style({borderStyle: "solid", borderWidth: 1}),
};

uiClasses.vertSpacing.forEach((sel, i) => {
  globalStyle(`${sel} > *:not(:last-child):not(${pushClass})`, {
    marginRight: `${spacingSteps[i]}rem`,
  });
});

uiClasses.horSpacing.forEach((sel, i) => {
  globalStyle(`${sel} > *:not(:last-child):not(${pushClass})`, {
    marginBottom: `${spacingSteps[i]}rem`,
  });
});

export default uiClasses;
