import { AnyJson, CommAndDiff, isJsonArray, isJsonMap } from "./types";

import { getType, isDifferent } from "./utils";

export function diff(lhs: AnyJson, rhs: AnyJson): CommAndDiff {
  const lType = getType(lhs);
  const rType = getType(rhs);
  if (lhs == null || rhs == null || lType !== rType) {
    return {
      common: null,
      left: lhs,
      right: rhs,
    };
  }
  // lhs and rhs have the same type
  if (lType !== "array" && lType !== "object") {
    // primitive type
    return lhs === rhs
      ? { common: lhs, left: null, right: null }
      : {
          common: null,
          left: lhs,
          right: rhs,
        };
  }
  if (isJsonArray(lhs) && isJsonArray(rhs)) {
    const minLength = Math.min(lhs.length, rhs.length);
    const common = [];
    let i = 0;
    for (i = 0; i < minLength; i++) {
      const delta = diff(lhs[i], rhs[i]);
      if (!isDifferent(delta)) {
        common.push(delta.common);
      } else {
        break;
      }
    }
    return {
      common,
      left: lhs.slice(i),
      right: rhs.slice(i),
    };
  }
  if (isJsonMap(lhs) && isJsonMap(rhs)) {
    const common = Object.create(null);
    const left = Object.create(null);
    const right = Object.create(null);
    Object.keys(lhs).forEach(lKey => {
      if (!(lKey in rhs)) {
        left[lKey] = lhs[lKey];
      } else {
        const delta = diff(lhs[lKey], rhs[lKey]);
        common[lKey] = delta.common;
        if (isDifferent(delta)) {
          left[lKey] = delta.left;
          right[lKey] = delta.right;
        }
      }
    });
    Object.keys(rhs).forEach(rKey => {
      if (!(rKey in lhs)) {
        right[rKey] = rhs[rKey];
      }
    });
    return {
      common,
      left,
      right,
    };
  }
  return {
    common: null,
    left: lhs,
    right: rhs,
  };
}
