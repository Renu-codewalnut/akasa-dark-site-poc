import resolveObjectKeysWithBooleanValues from "../resolveObjectKeysWithBooleanValues/resolveObjectKeysWithBooleanValues";

export function getTextColorTwClass(textColor?: string) {
  return resolveObjectKeysWithBooleanValues({
    "text-white": textColor === "white",
    "text-primary": textColor === "orange/white",
    "text-primary dark:!text-gray-800": textColor === "orange/gray",
    "text-typography-tertiary": textColor === "purple/white",
    "text-typography-tertiary dark:!text-gray-800": textColor === "purple/gray",
  });
}
