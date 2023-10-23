import React from "react";
import Image from "next/image";
import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";

export interface IconProps {
  blok: Partial<SbEditableBlok> & {
    alt: string;
    height: number;
    icon: string;
    width: number;
  };
}

export function Icon({
  blok: { icon, height, width, alt, ...blokData },
}: IconProps) {
  const iconSrc = `/icons/${icon}.svg`;

  return (
    <div
      className="flex items-center justify-center"
      {...sbEditable(blokData as SbEditableBlok)}
    >
      <Image
        src={iconSrc}
        alt={alt}
        height={height || 10}
        width={width || 10}
      />
    </div>
  );
}
