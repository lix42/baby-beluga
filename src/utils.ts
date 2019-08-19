import { AnyJson, CommAndDiff } from "./types";

export const getType = (input: AnyJson): string =>
  Array.isArray(input) ? "array" : input === null ? "null" : typeof input;

export const isEmpty = (value: AnyJson): boolean => {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }
  return false;
};

export const isDifferent = (delta: CommAndDiff): boolean => {
  if (delta == null) {
    return false;
  }
  const { left, right } = delta;
  if (getType(left) !== getType(right)) {
    return true;
  }
  if (isEmpty(left) && isEmpty(right)) {
    return false;
  }
  return true;
};
