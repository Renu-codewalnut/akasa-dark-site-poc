import React from "react";
import { render, screen } from "@testing-library/react";
import { ImageV2, ImageV2Props } from "./ImageV2";

describe("ImageV2", () => {
  const renderComponent = () => {
    const defaultProps: ImageV2Props = {
      blok: {
        desktopImage: { filename: "https://a.storyblok.com/f/167793/25x24/15eff3b3cf/home_solid.svg", alt: "Home" },
        mobileImage: { filename: "https://a.storyblok.com/f/167793/25x24/15eff3b3cf/home_solid.svg", alt: "Home" },
        isImageWithLink: true,
        imageLink: { cached_url: "homev2" },
        height: 240,
        width: 240,
        shouldZoomToFullHeight: false
      }
    };

    render(<ImageV2 {...defaultProps} />);
  };

  it("renders without error", () => {
    renderComponent();

    expect(screen).not.toBeNull();
  });
});
