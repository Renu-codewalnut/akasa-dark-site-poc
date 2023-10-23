import React from "react";
import { render, screen } from "@testing-library/react";
import { RichText, RichTextProps } from "./RichText";

describe("RichText", () => {
  const defaultProps: RichTextProps = {
    blok: {
      content: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                text: "Lowest fare starting from",
                type: "text",
              },
            ],
          },
        ],
      },
      type: "bodyText",
      isCentered: true,
      color: "white",
      className: "",
    },
    additionalClasses: "text-xs",
  };

  const renderComponent = (additionalProps?: Partial<RichTextProps>) => {
    render(<RichText {...defaultProps} {...additionalProps} />);
  };

  it("renders without error", () => {
    renderComponent();

    expect(screen).not.toBeNull();
  });
});
