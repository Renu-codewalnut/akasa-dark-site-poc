import React from "react";
import { SbBlokData } from "@storyblok/react";
import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
// eslint-disable-next-line import/no-cycle
import { DynamicStoryblokComponent } from "../DynamicStoryblokComponent/DynamicStoryblokComponent";

interface PageProps {
  blok: SbEditableBlok & {
    body: (SbBlokData & {
      user_type: string[];
      device_type: string[];
    })[];
    custom_style: any[];
  };
}

export function Page({ blok }: PageProps) {
  return (
    <main className="container-fluid" {...sbEditable(blok)}>
      {blok &&
        blok.body?.length > 0 &&
        blok.body.map((nestedBlok: SbBlokData) => (
          <DynamicStoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
  );
}
