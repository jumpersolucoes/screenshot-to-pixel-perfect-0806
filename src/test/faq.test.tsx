import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FaqSection } from "@/components/faq-section";

describe("FAQ interactions", () => {
  it("opens and closes an answer and collapses the previous answer", () => {
    render(<FaqSection />);
    const triggers = screen.getAllByRole("button");
    const [first, second] = triggers;
    if (!first || !second) throw new Error("Missing accordion triggers");
    expect(first).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(first);
    expect(first).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(second);
    expect(first).toHaveAttribute("aria-expanded", "false");
    expect(second).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(second);
    expect(second).toHaveAttribute("aria-expanded", "false");
  });
});