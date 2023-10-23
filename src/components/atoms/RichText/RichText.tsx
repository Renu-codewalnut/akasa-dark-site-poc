/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
import clsx from "clsx";
import {
  render,
  NODE_PARAGRAPH,
  StoryblokRichtext,
  NODE_LI,
  NODE_HEADING,
  MARK_BOLD,
} from "storyblok-rich-text-react-renderer";
import { getTextColorTwClass } from "../../../../utils/tailwindClassConverters/getTextColorTwClass";
import { Heading, HeadingProps } from "../Heading/Heading";

export interface RichTextProps {
  blok: Partial<SbEditableBlok> & {
    content: StoryblokRichtext;
    type?: "bodyText";
    isCentered?: boolean;
    color: string;
    className?: string;
  };
  additionalClasses?: string;
}

export function RichText({
  blok: { content, type, color, ...blokData },
  additionalClasses = "",
}: RichTextProps) {
  const richTextDynamicClassName = clsx({
    "my-2": true,
    "max-w-[300px]": type === "bodyText",
    [additionalClasses]: additionalClasses,
    [getTextColorTwClass(color)]: color,
  });

  return (
    <div
      className={richTextDynamicClassName}
      {...sbEditable(blokData as SbEditableBlok)}
    >
      {render(content, {
        markResolvers: {
          [MARK_BOLD]: (children) => (
            <span className="font-bold text-inherit">{children}</span>
          ),
        },
        nodeResolvers: {
          [NODE_HEADING]: (children, attrs) => {
            const { level } = attrs;
            return (
              <Heading
                blok={
                  {
                    viewType: `h${level}`,
                    tagType: `h${level}`,
                    displayText: children,
                  } as HeadingProps["blok"]
                }
              />
            );
          },
          [NODE_PARAGRAPH]: (children) => (
            <p className="my-1 text-sm">{children}</p>
          ),
          [NODE_LI]: (children) => (
            <li className="text-md ml-5 mt-1 list-disc md:text-xl">
              {children}
            </li>
          ),
        },
      })}
    </div>
  );
}
