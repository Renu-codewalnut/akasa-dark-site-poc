import resolveObjectKeysWithBooleanValues from "../resolveObjectKeysWithBooleanValues/resolveObjectKeysWithBooleanValues";

export function getGapTwClass(gap?: string) {
  return (
    resolveObjectKeysWithBooleanValues({
      "gap-1": gap === "gap-1",
      "gap-2": gap === "gap-2",
      "gap-3": gap === "gap-3",
      "gap-4": gap === "gap-4",
      "gap-5": gap === "gap-5",
      "gap-6": gap === "gap-6",
      "gap-7": gap === "gap-7",
      "gap-8": gap === "gap-8",
      "gap-9": gap === "gap-9",
      "gap-10": gap === "gap-10"
    }) || ""
  );
}
