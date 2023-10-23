import { ReactNode } from "react";
import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
import clsx from "clsx";
import { getHeadingTwClass } from "../../../../utils/tailwindClassConverters/getHeadingTwClass";
import { getTextColorTwClass } from "../../../../utils/tailwindClassConverters/getTextColorTwClass";

export interface HeadingProps {
  blok: Partial<SbEditableBlok> & {
    displayText: string | ReactNode;
    viewType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    tagType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    isBold: boolean;
    isItalic: boolean;
    color: string;
  };
  additionalClasses?: string;
}
export function Heading({
  blok: {
    displayText,
    viewType,
    tagType,
    isBold,
    isItalic,
    color,
    ...blokData
  },
  additionalClasses = "",
}: HeadingProps) {
  const Element = tagType || "h4";
  const baseClasses = {
    "font-normal": !isBold,
    "font-bold": isBold,
    italic: isItalic,
    [getTextColorTwClass(color)]: color,
  };

  const headingClassNames = clsx(
    additionalClasses || { [getHeadingTwClass(viewType)]: viewType },
    baseClasses,
  );
  return (
    <Element
      className={headingClassNames}
      {...sbEditable(blokData as SbEditableBlok)}
    >
      {displayText}
    </Element>
  );
}
