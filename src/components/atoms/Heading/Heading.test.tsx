import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading, HeadingProps } from "./Heading";

describe("Heading Component", () => {
  const defaultProps = {
    blok: {
      displayText: "Heading text",
      viewType: "h1",
      tagType: "h1",
      isBold: false,
      isItalic: false,
    },
  } as HeadingProps;

  const renderComponent = (additionalProps?: Partial<HeadingProps>) => {
    render(<Heading {...defaultProps} {...additionalProps} />);
  };

  it("renders the heading text correctly", () => {
    renderComponent();
    expect(screen.getByText("Heading text")).toBeInTheDocument();
  });

  it("applies the specified tagType attribute to the heading element", () => {
    renderComponent();
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeVisible();
  });

  it("applies bold classes", () => {
    renderComponent({
      blok: {
        ...defaultProps.blok,
        isBold: true,
      },
    });

    expect(screen.getByRole("heading")).toHaveClass("font-bold");
  });

  it("applies italic classes", () => {
    renderComponent({
      blok: {
        ...defaultProps.blok,
        isItalic: true,
      },
    });

    expect(screen.getByRole("heading")).toHaveClass("italic");
  });
});
