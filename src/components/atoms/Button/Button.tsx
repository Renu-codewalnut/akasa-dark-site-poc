import React, { ButtonHTMLAttributes } from "react";
import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import ButtonLoader from "../ButtonLoader/ButtonLoader";
import { Icon, IconProps } from "../Icon/Icon";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "icon"
  | "text"
  | "bullet";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  blok?: Partial<SbEditableBlok> & {
    variant: ButtonVariant;
    text?: string;
    leadingIcon?: IconProps["blok"][];
    trailingIcon?: IconProps["blok"][];
    isFullWidthOnMobile?: boolean;
    link?: { cached_url?: string; linktype: string; id: string };
  };
  onClick?: (e: React.MouseEvent<HTMLButtonElement> | any) => void;
  isLoading?: boolean;
  additionalButtonClassName?: string;
  fullWidth?: boolean;
  isDisabled?: boolean;
}

export function Button({
  blok,
  onClick,
  isLoading = false,
  additionalButtonClassName,
  fullWidth,
  isDisabled = false,
  children,
  ...rest
}: ButtonProps) {
  const buttonDynamicClassName = twMerge(
    clsx({
      " text-[14px] whitespace-nowrap md:text-base rounded-lg rounded-tr-none  font-semibold hover:bg-none flex gap-1 items-center justify-center":
        true,
      "bg-primary text-white dark:text-gray-800 hover:brightness-90 px-4 py-2 md:px-8 md:py-3 h-12 min-w-[150px]":
        blok?.variant === "primary",
      "bg-white border border-gray-800 text-black px-4 py-2.5 md:px-8 h-12 min-w-[150px]":
        blok?.variant === "secondary",
      "text-primary hover:brightness-70 dark:text-white px-4 py-2 md:px-8 md:py-3 min-w-[150px]":
        blok?.variant === "tertiary",
      "font-base bg-white hover:bg-none text-purple-600 hover:underline dark:bg-transparent dark:text-gray-600":
        blok?.variant === "text",
      "flex items-center justify-center rounded-full hover:bg-gray-50 dark:hover:bg-neutral-600 border-0 p-3":
        blok?.variant === "icon",
      "!rounded-[1rem] text-gray-500 dark:text-white dark:bg-gray-900 dark:hover:bg-black dark:border-[1px] hover:bg-gray-200 bg-gray-100 font-base py-2 px-4 md:text-xs dark:border-white border-gray-300":
        blok?.variant === "bullet",
      "w-fit": !fullWidth || blok?.isFullWidthOnMobile,
      "w-full": fullWidth,
      "w-full md:w-fit": blok?.isFullWidthOnMobile,
      "opacity-50 cursor-not-allowed": isDisabled || isLoading,
    }),
    additionalButtonClassName,
  );

  // if (
  //   (blok?.link?.linktype === "story" && blok?.link?.id !== "") ||
  //   (blok?.link?.linktype === "url" && blok?.link?.cached_url !== "")
  // ) {
  //   return (
  //     <a href={blok?.link.cached_url}>
  //       <button
  //         disabled={isDisabled}
  //         className={buttonDynamicClassName}
  //         type="button"
  //         {...rest}
  //         {...sbEditable(blok as unknown as SbEditableBlok)}
  //       >
  //         {blok?.leadingIcon &&
  //           blok?.leadingIcon.map((nestedBlok) => (
  //             <Icon blok={nestedBlok} key={nestedBlok._uid} />
  //           ))}
  //         {isLoading ? <ButtonLoader /> : blok?.text || children}
  //         {blok?.trailingIcon &&
  //           blok.trailingIcon.map((nestedBlok) => (
  //             <Icon blok={nestedBlok} key={nestedBlok._uid} />
  //           ))}
  //       </button>
  //     </a>
  //   );
  // }

  return (
    <button
      disabled={isDisabled}
      className={buttonDynamicClassName}
      onClick={onClick}
      type="button"
      {...rest}
      {...sbEditable(blok as unknown as SbEditableBlok)}
    >
      {blok?.leadingIcon &&
        blok?.leadingIcon.map((nestedBlok) => (
          <Icon blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      {isLoading ? <ButtonLoader /> : blok?.text || children}
      {blok?.trailingIcon &&
        blok.trailingIcon.map((nestedBlok) => (
          <Icon blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </button>
  );
}
