import React from "react";
import Image from "next/image";
import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
import clsx from "clsx";

export interface ImageV2Props {
  blok: Partial<SbEditableBlok> & {
    desktopImage: { filename: string; alt?: string };
    mobileImage?: { filename: string; alt?: string };
    height?: number;
    width?: number;
    imageLink?: { cached_url?: string };
    isImageWithLink?: boolean;
    shouldPrioritizeLoading?: boolean;
    shouldZoomToFullHeight?: boolean;
  };
}

export function ImageV2({
  blok: {
    desktopImage,
    mobileImage,
    height,
    width,
    imageLink,
    isImageWithLink,
    shouldPrioritizeLoading,
    shouldZoomToFullHeight,
    ...blokData
  },
}: ImageV2Props) {
  const imageDynamicClassName = clsx({
    "w-full": !width,
    "object-cover h-full": shouldZoomToFullHeight,
    "cursor-pointer": isImageWithLink,
  });

  return (
    <div
      className="relative flex h-full w-full justify-center bg-transparent"
      {...sbEditable(blokData as SbEditableBlok)}
    >
      {isImageWithLink && imageLink ? (
        <>
          <div
            className={`w-full items-center justify-center ${
              mobileImage?.filename ? "hidden md:flex" : ""
            }`}
          >
            <a href={imageLink.cached_url || "/"}>
              <Image
                src={desktopImage.filename}
                alt={desktopImage.alt || ""}
                className={imageDynamicClassName}
                priority={shouldPrioritizeLoading}
                {...(height &&
                width &&
                !Number.isNaN(+height) &&
                !Number.isNaN(+width)
                  ? { height: +height, width: +width }
                  : { layout: "fill" })}
              />
            </a>
          </div>
          {mobileImage?.filename && (
            <div className="flex w-full justify-center md:hidden">
              <a href={imageLink.cached_url || "/"}>
                <Image
                  src={mobileImage.filename}
                  alt={mobileImage.alt || ""}
                  className={imageDynamicClassName}
                  priority={shouldPrioritizeLoading}
                  {...(height &&
                  width &&
                  !Number.isNaN(+height) &&
                  !Number.isNaN(+width)
                    ? { height: +height, width: +width }
                    : { layout: "fill" })}
                />
              </a>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className={`w-full items-center justify-center ${
              mobileImage?.filename ? "hidden md:flex" : ""
            }`}
          >
            <Image
              src={desktopImage.filename}
              alt={desktopImage.alt || ""}
              className={imageDynamicClassName}
              priority={shouldPrioritizeLoading}
              {...(height &&
              width &&
              !Number.isNaN(+height) &&
              !Number.isNaN(+width)
                ? { height: +height, width: +width }
                : { layout: "fill" })}
            />
          </div>
          {mobileImage?.filename && (
            <div className="flex w-full justify-center md:hidden">
              <Image
                src={mobileImage.filename}
                alt={mobileImage.alt || ""}
                className={imageDynamicClassName}
                priority={shouldPrioritizeLoading}
                {...(height &&
                width &&
                !Number.isNaN(+height) &&
                !Number.isNaN(+width)
                  ? { height: +height, width: +width }
                  : { layout: "fill" })}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
