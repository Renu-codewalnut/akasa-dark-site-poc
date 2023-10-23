/* eslint-disable import/no-cycle */
import { SbBlokData } from "@storyblok/react";
import clsx from "clsx";
import { Button } from "@/components/atoms/Button/Button";
import { ImageV2 } from "@/components/atoms/ImageV2/ImageV2";
import { AlternatingLayout } from "@/components/molecules/AlternatingLayout/AlternatingLayout";
import { ContentCard } from "@/components/molecules/ContentCard/ContentCard";
import { Footer } from "@/components/molecules/Footer/Footer";
import { Header } from "@/components/molecules/Header/Header";
import { Page } from "../Page/Page";

interface DynamicStoryblokComponentProps {
  blok:
    | (SbBlokData & {
        component: string;
        [key: string]: any;
        device_type?: string[];
        user_type?: string[];
      })
    | (SbBlokData & any);
  config?: {};
  fullWidth?: boolean;
}

type ComponentMap = {
  [key: string]: React.ComponentType<{ blok: any; config?: any }>;
};

const componentMap: ComponentMap = {
  PageV2: Page,
  HeaderV2: Header,
  ButtonV2: Button,
  FooterV2: Footer,
  AlternatingLayout,
  ContentCardV2: ContentCard,
  ImageV2,
};

export function DynamicStoryblokComponent({
  blok,
  config,
  fullWidth,
}: DynamicStoryblokComponentProps) {
  if (!componentMap[blok.component]) {
    console.warn(`Component ${blok.component} is not defined`);
  }

  // if the component exist return the component else return nothing
  if (componentMap[blok.component]) {
    const Component = componentMap[blok.component];

    const blokClass = clsx({
      "w-full": blok.fullWidth || fullWidth,
    });

    return (
      <div key={blok._uid} className={blokClass}>
        <Component blok={blok} config={config} />
      </div>
    );
  }

  return null;
}
