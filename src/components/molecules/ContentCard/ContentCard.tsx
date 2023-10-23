import { SbEditableBlok, sbEditable } from "@storyblok/storyblok-editable";
import { Button, ButtonProps } from "@/components/atoms/Button/Button";
import { Heading, HeadingProps } from "@/components/atoms/Heading/Heading";
import { RichText, RichTextProps } from "@/components/atoms/RichText/RichText";

interface ContentCardProps {
  blok: SbEditableBlok & {
    heading: HeadingProps["blok"][];
    date: any;
    content: RichTextProps["blok"][];
    button: ButtonProps["blok"][];
  };
}

export function ContentCard({
  blok: { heading, date, content, button, ...blokData },
}: ContentCardProps) {
  return (
    <div {...sbEditable(blokData)}>
      {heading?.map((nestedBlok) => (
        <Heading blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {!!date && <p className="text-sm text-gray-500">{date}</p>}
      {content?.map((nestedBlok) => (
        <RichText blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {button?.map(
        (nestedBlok) =>
          !!nestedBlok && <Button blok={nestedBlok} key={nestedBlok._uid} />,
      )}
    </div>
  );
}
