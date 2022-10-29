import {cloneElement, ComponentChildren, ComponentProps, Ref} from "preact";
import type {CSSProperties} from "react";
import dsStyles from "../styles/index.css";
import type {DsStyles as RawStyleProps} from "../styles/index.css";

type Booleanify<E> = E extends "true" ? true : E;
export type StyleProps = {
  [Key in keyof RawStyleProps]?: Booleanify<keyof RawStyleProps[Key]> | false;
};

export type BoxProps = StyleProps & {className?: string} & (
    | {
        as?: keyof JSX.IntrinsicElements;
        children?: ComponentChildren;
        styleChild?: null;
        style?: CSSProperties;
      }
    | {
        as?: null;
        styleChild: true;
        children: ComponentChildren;
        style?: null;
      }
  );

const applyProps = (props: BoxProps, defaultComp: keyof JSX.IntrinsicElements) => {
  let Comp: any = defaultComp;
  const compProps: any = {};
  const classList = [];
  for (const prop in props) {
    const val = props[prop as keyof BoxProps];
    if (val === null || val === undefined) continue;
    switch (prop) {
      case "as":
        Comp = val;
        break;
      case "children":
      case "styleChild":
      case "style":
        compProps[prop] = val;
        break;
      case "className":
        classList.push(val);
        break;
      default:
        const s = dsStyles[prop as keyof StyleProps];
        if (!s) {
          // let's allow `onMouseOver` etc, otherwise WithTooltip etc will become a pain?
          if (/^on[A-Z]/.test(prop)) {
            compProps[prop] = val;
          } else {
            console.warn(`Can't apply style prop '${prop}' with value '${val as any}'`);
          }
          continue;
        }
        if (val === false) continue;
        classList.push((s as any)[val as any]);
    }
  }
  if (classList.length) {
    compProps.className = classList.join(" ");
  }
  return {Comp, compProps};
};

const createBox = (
  opts: StyleProps & Pick<BoxProps, "styleChild">,
  defaultComp: keyof JSX.IntrinsicElements = "div"
) => {
  return (props: BoxProps & {ref?: Ref<HTMLElement>}) => {
    const combinedProps = {...opts, ...props} as BoxProps;
    const {Comp, compProps} = applyProps(combinedProps, defaultComp);
    if (!combinedProps.styleChild) {
      return <Comp {...compProps} />;
    } else {
      return cloneElement(compProps.children as any, {
        className: compProps.className,
      });
    }
  };
};

export const Box = createBox({}, "div");
export const Row = createBox({display: "flex", flexDir: "row"}, "div");
export const Col = createBox({display: "flex", flexDir: "column"}, "div");
export const Text = createBox({lineHeight: "tight", textOverflow: "ellipsis"}, "div");

export const cx = (...args: (false | null | ComponentProps<"div">["className"])[]): string => {
  const classes = [];
  for (const arg of args) if (arg) classes.push(arg);
  return classes.join(" ");
};
