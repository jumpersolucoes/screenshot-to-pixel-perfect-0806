import { render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

const Page = Route.options.component as unknown as () => ReactElement;

// The user asked for a small "Imagens ilustrativas" notice on every image that shows a pizza.
describe("Aviso de imagens ilustrativas", () => {
  it("aparece uma vez em cada imagem com pizza (hero e diferencial)", () => {
    render(<Page />);
    expect(screen.getAllByText("Imagens ilustrativas")).toHaveLength(2);
  });
});
