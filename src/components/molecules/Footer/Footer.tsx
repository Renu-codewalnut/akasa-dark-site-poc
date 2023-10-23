import React from "react";
import { SbEditableBlok } from "@storyblok/storyblok-editable";
import { Button } from "@/components/atoms/Button/Button";
import { RichText, RichTextProps } from "@/components/atoms/RichText/RichText";
import { ImageV2, ImageV2Props } from "../../atoms/ImageV2/ImageV2";

export interface FooterProps {
  blok: {
    termsAndConditionsCTAs: SbEditableBlok;
    logo: ImageV2Props["blok"][];
    copyRightContent: RichTextProps["blok"][];
  };
}

export function Footer({
  blok: {
    termsAndConditionsCTAs,
    logo: logoBlokArray,
    copyRightContent: copyRightContentBlokArray,
  },
}: FooterProps) {
  const [logo] = logoBlokArray || [];
  const [copyRightContent] = copyRightContentBlokArray || [];

  return (
    <footer className="my-6 w-full bg-background-primary lg:mt-24 lg:px-4">
      <div className="mx-20">
        <div className="mb-24 flex justify-center lg:mb-0 lg:block">
          <div className=" my-6 hidden flex-col items-center space-y-6 lg:my-14 lg:flex lg:flex-row lg:justify-between lg:space-y-0">
            <span className="mx-auto dark:brightness-0 dark:invert lg:mx-0">
              {!!logo && <ImageV2 blok={logo} />}
            </span>
            <span className="text-s text-gray-400">
              {!!copyRightContent && <RichText blok={copyRightContent} />}
            </span>
            <span className="flex justify-center">
              {termsAndConditionsCTAs?.length > 0 &&
                termsAndConditionsCTAs.map((nestedBlok: any, index: number) => {
                  const isLastItem =
                    index + 1 !== termsAndConditionsCTAs?.length;
                  return (
                    <span key={nestedBlok?._uid} className="flex items-center">
                      <a
                        href={
                          nestedBlok?.link?.cached_url?.includes("/en")
                            ? nestedBlok?.link?.cached_url.slice(3)
                            : nestedBlok?.link?.cached_url
                        }
                      >
                        <Button blok={nestedBlok} />
                      </a>
                      {isLastItem && (
                        <hr className="w-4 rotate-90 border-[1px] border-gray-300" />
                      )}
                    </span>
                  );
                })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
