import { render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";

import { offer } from "@/config/offer";
import { Route } from "@/routes/index";

const Page = Route.options.component as unknown as () => ReactElement;

// Checkout page the user confirmed for the course.
const CHECKOUT = "https://pay.kiwify.com.br/Fjaph5N";

describe("Link de matrícula", () => {
  it("usa a página de pagamento da Kiwify como destino da matrícula", () => {
    expect(offer.checkoutUrl).toBe(CHECKOUT);
  });

  it("aponta o botão final de matrícula para a página de pagamento", () => {
    render(<Page />);
    const cta = screen.getAllByText("Quero entrar no Método Pizza e Renda")[0];
    expect(cta?.getAttribute("href")).toBe(CHECKOUT);
  });

  it("aponta o botão do topo para a página de pagamento", () => {
    render(<Page />);
    const top = screen.getAllByText("Quero começar meu delivery")[0];
    expect(top?.getAttribute("href")).toBe(CHECKOUT);
  });
});
