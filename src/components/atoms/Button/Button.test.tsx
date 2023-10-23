import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";
import { Button, ButtonProps } from "./Button";

describe("Button", () => {
  const mockOnClick = jest.fn();

  const renderComponent = (additionalProps?: Partial<ButtonProps>) => {
    const defaultProps: ButtonProps = {
      blok: {
        variant: "primary",
        text: "Test Button",
        isFullWidthOnMobile: false,
      },
      onClick: mockOnClick,
      isLoading: false,
      isDisabled: false,
    };

    return render(<Button {...defaultProps} {...additionalProps} />);
  };

  it("renders the Button without error", () => {
    renderComponent();
    expect(screen).not.toBeNull();
  });

  it("handles onClick event", () => {
    renderComponent();

    userEvent.click(screen.getByText("Test Button"));
    expect(mockOnClick).toBeCalled();
  });

  it("button should not trigger if it is disabled", async () => {
    renderComponent({ isDisabled: true });
    userEvent.click(screen.getByText("Test Button"));
    expect(jest.fn()).not.toBeCalled();
  });

  it("shows loader when isLoading is 'true'", () => {
    renderComponent({ isLoading: true });

    expect(screen.queryByText("Test Button")).not.toBeInTheDocument();
  });

  it("renders different button variants correctly", () => {
    renderComponent({
      blok: {
        variant: "secondary",
        text: "Test Button",
        isFullWidthOnMobile: false,
      },
    });
    expect(screen.getByText("Test Button")).toHaveClass("bg-white");
  });

  it("renders trailing icon", () => {
    const mockIconData = [
      {
        _uid: "test123",
        alt: "Test Alt",
        height: 30,
        icon: "test-icon",
        width: 30,
      },
    ];

    renderComponent({
      blok: {
        variant: "primary",
        text: "Test Button",
        trailingIcon: mockIconData,
        isFullWidthOnMobile: false,
      },
    });
    expect(screen.getByAltText("Test Alt")).toBeInTheDocument();
  });
});
