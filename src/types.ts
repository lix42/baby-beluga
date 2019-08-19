export type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
export interface JsonMap {
  [key: string]: AnyJson;
}
export interface JsonArray extends Array<AnyJson> {}

export type CommAndDiff = {
  readonly common: AnyJson;
  readonly left: AnyJson;
  readonly right: AnyJson;
};

export const isJsonMap = (obj: AnyJson): obj is JsonMap =>
  obj != null && !Array.isArray(obj) && typeof obj === "object";

export const isJsonArray = (list: AnyJson): list is JsonArray =>
  Array.isArray(list);
