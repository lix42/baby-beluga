import { AnyJson } from "./types";
export const isEqual = (lhs: AnyJson, rhs: AnyJson): boolean =>
  JSON.stringify(lhs) === JSON.stringify(rhs);
