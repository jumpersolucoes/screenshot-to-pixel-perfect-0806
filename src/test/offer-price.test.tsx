import { render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

const Page = Route.options.component as unknown as () => ReactElement;

// Values the user confirmed for the offer: reference price, promotional price, label.
describe("Oferta na landing page", () => {
  it("mostra o preço promocional de R$ 199,00", () => {
    render(<Page />);
    expect(screen.getAllByText("R$ 199,00").length).toBeGreaterThan(0);
  });

  it("mostra o preço de referência de R$ 999,99 riscado", () => {
    render(<Page />);
    const reference = screen.getAllByText("R$ 999,99")[0];
    expect(reference?.className).toContain("line-through");
  });

  it("mostra o aviso de oferta por tempo limitado", () => {
    render(<Page />);
    expect(screen.getAllByText("Oferta por tempo limitado").length).toBeGreaterThan(0);
  });
});
