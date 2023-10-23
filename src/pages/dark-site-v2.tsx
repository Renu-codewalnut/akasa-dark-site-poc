import React from "react";
import { ISbStoryData } from "@storyblok/react";
import axios from "axios";
import { ApiConfig } from "config/apiConfig";
import Storyblok, { useStoryblok } from "utils/storyblok";
import { DynamicStoryblokComponent } from "@/components/Layout/DynamicStoryblokComponent/DynamicStoryblokComponent";

export interface GetStaticPropsArgs {
  locale: string;
  locales: string[];
  defaultLocale: string;
  preview: boolean;
}

export interface PageProps {
  story: ISbStoryData<void>;
}

export type SbParamsType = {
  version: "published" | "draft";
  cv: number;
};

export default function Page({ story }: PageProps) {
  const enableBridge = true;
  const sbStory = useStoryblok(story, enableBridge, "");

  return sbStory?.content ? (
    <DynamicStoryblokComponent blok={sbStory?.content} />
  ) : (
    "Page not found"
  );
}

export async function getStaticProps() {
  const slug = "dark-site-v2";
  const {
    data: { cv },
  } = await axios.get(ApiConfig.cmsPageData);

  const sbParams: SbParamsType = {
    version: "published",
    cv,
  };

  const { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 60,
  };
}
