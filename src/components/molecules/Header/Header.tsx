import React, { useState } from "react";
// eslint-disable-next-line import/no-cycle
import { DynamicStoryblokComponent } from "@/components/Layout/DynamicStoryblokComponent/DynamicStoryblokComponent";
import { ImageV2, ImageV2Props } from "../../atoms/ImageV2/ImageV2";
import {
  MarqueeBanner,
  MarqueeBannerProps,
} from "../MarqueeBanner/MarqueeBanner";

export interface HeaderProps {
  blok: {
    isContrastMode: boolean;
    logo: ImageV2Props["blok"][];
    marqueeBanner: MarqueeBannerProps["blok"][];
    navBar: any;
    hideMarqueeBanner: boolean;
  };
}

export function Header({
  blok: {
    logo: logoBlokArray,
    marqueeBanner: marqueeBannerBlokArray,
    navBar,
    hideMarqueeBanner,
  },
}: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marqueeBanner] = marqueeBannerBlokArray || [];
  const [logo] = logoBlokArray || [];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50  w-full bg-white shadow-md">
      <nav className="relative mt-[2px] flex h-[65px] w-full items-center lg:h-[60px]">
        <div className="mx-auto flex w-full flex-nowrap items-center justify-start px-3 md:mx-20 md:justify-between lg:px-0">
          <button
            onClick={handleMobileMenuToggle}
            data-collapse-toggle="navbar-cta"
            type="button"
            className="dark:text-primary inline-flex h-10 w-10 items-center justify-center p-2 text-sm md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="dark:text-white"
              >
                <path d="M19.7 4.29a1 1 0 0 0-1.41 0L12 10.59l-6.29-6.3a1 1 0 1 0-1.42 1.42L10.59 12l-6.3 6.29a1 1 0 0 0 1.42 1.42L12 13.41l6.29 6.3a1 1 0 0 0 1.41-1.42L13.41 12l6.29-6.29a1 1 0 0 0 0-1.42z" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          {logo && (
            <div className="mx-auto h-[36px] w-[130px] dark:brightness-0 md:ml-3 lg:h-[45px] lg:w-[160px]">
              <ImageV2 blok={logo} />
            </div>
          )}
          <div
            className={`items-center ${
              isMobileMenuOpen ? "block" : "hidden"
            } absolute top-[65px] left-0 h-[calc(100vh-140px)] w-full justify-end border-t-2 border-gray-200 bg-white dark:bg-gray-900 md:relative md:top-0 md:left-0 md:flex md:h-[60px] md:w-full md:border-t-0 lg:-mr-1`}
          >
            <ul className="mt-4 flex flex-col py-4 font-medium md:mt-0 md:flex-row md:p-0">
              {navBar?.length > 0 &&
                navBar.map((navItem: any) => (
                  <li
                    key={navItem._uid}
                    className="border-primary flex items-center px-6 py-2 text-sm font-normal hover:border-l-4 md:hover:border-none"
                  >
                    <DynamicStoryblokComponent blok={navItem} fullWidth />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>

      {marqueeBanner && !hideMarqueeBanner && (
        <div className="bg-gray-700">
          <MarqueeBanner blok={marqueeBanner} />
        </div>
      )}
    </header>
  );
}
