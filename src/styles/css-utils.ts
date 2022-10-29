import {ComplexStyleRule, style} from "@vanilla-extract/css";

type StyleArrayFn = <StyleMap extends Record<string | number, unknown>, T extends keyof StyleMap>(
  array: readonly T[],
  mapFn: (val: T) => ComplexStyleRule
) => Record<T, string>;

export const styleArray: StyleArrayFn = (arr, mapFn) => {
  const map = {} as any;
  arr.forEach((val) => (map[val] = style(mapFn(val))));
  return map;
};
