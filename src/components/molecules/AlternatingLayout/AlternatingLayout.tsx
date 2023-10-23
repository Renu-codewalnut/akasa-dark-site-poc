import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
import clsx from "clsx";
import { getBackgroundColorTwClass } from "utils/tailwindClassConverters/getHeadingTwClass";
// eslint-disable-next-line import/no-cycle
import { DynamicStoryblokComponent } from "@/components/Layout/DynamicStoryblokComponent/DynamicStoryblokComponent";

export interface AlternatingLayoutProps {
  blok: SbEditableBlok & {
    list: SbEditableBlok[];
    ratio: string;
    backgroundColor: string;
  };
}

export function AlternatingLayout({
  blok: { list, ratio, backgroundColor, ...blokData },
}: AlternatingLayoutProps) {
  const listRatioClasses = ratio.split(":").map((value) => {
    if (value === "1") return "col-span-1";
    if (value === "2") return "col-span-2";
    return "";
  });

  const containerClasses = clsx({
    "mt-20 w-full": true,
    [getBackgroundColorTwClass(backgroundColor)]: backgroundColor,
  });

  return (
    <div className={containerClasses} {...sbEditable(blokData)}>
      <div className="mx-auto grid max-w-[1140px] grid-cols-3 py-10">
        {!!list &&
          list.map((nestedBlok, idx) => (
            <div className={`${listRatioClasses[idx]}`} key={nestedBlok._uid}>
              <DynamicStoryblokComponent blok={nestedBlok} />
            </div>
          ))}
      </div>
    </div>
  );
}
