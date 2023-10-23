import React, { useState, useCallback } from "react";
import { SbEditableBlok } from "@storyblok/storyblok-editable";
import { RichText, RichTextProps } from "@/components/atoms/RichText/RichText";
import { Button } from "../../atoms/Button/Button";

export interface MarqueeBannerProps {
  blok: SbEditableBlok & {
    marqueeContent: RichTextProps["blok"][];
  };
}

export function MarqueeBanner({
  blok: { marqueeContent: marqueeContentBlokArray },
}: MarqueeBannerProps) {
  const [showBanner, setShowBanner] = useState(true);
  const [marqueeContent] = marqueeContentBlokArray || [];

  const handleCloseBanner = useCallback(() => {
    setShowBanner(false);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="bg-primary flex h-7 items-center justify-between dark:border-b dark:border-gray-700 dark:bg-gray-900">
      {marqueeContent && (
        <div className="animate-marquee whitespace-nowrap">
          <RichText blok={marqueeContent} />
        </div>
      )}
      <Button
        aria-label="Close Banner"
        className="bg-primary dark:bg-primary z-10 px-0.5 py-0.5 text-white dark:text-black"
        type="button"
        blok={{
          variant: "primary",
          isFullWidthOnMobile: false,
        }}
        onClick={handleCloseBanner}
      >
        {/* <Cross /> */}
      </Button>
    </div>
  );
}
