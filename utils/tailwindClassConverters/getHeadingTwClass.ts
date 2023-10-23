import resolveObjectKeysWithBooleanValues from "../resolveObjectKeysWithBooleanValues/resolveObjectKeysWithBooleanValues";

export function getHeadingTwClass(heading?: string) {
  return resolveObjectKeysWithBooleanValues({
    "text-3xl md:text-4xl lg:text-5xl": heading === "h1",
    "text-2xl sm:text-3xl lg:text-4xl": heading === "h2",
    "text-xl sm:text-2xl lg:text-3xl": heading === "h3",
    "text-lg sm:text-xl lg:text-2xl": heading === "h4",
    "text-lg sm:text-lg lg:text-xl": heading === "h5",
    "text-md sm:text-md lg:text-lg": heading === "h6",
  });
}

export function getBackgroundColorTwClass(backgroundColor?: string) {
  return resolveObjectKeysWithBooleanValues({
    "bg-[#FFA265]": backgroundColor === "background-fade-orange",
    "bg-[#FFFFFF]": backgroundColor === "white",
    "bg-[#E1E1DF]": backgroundColor === "gray",
  });
}
