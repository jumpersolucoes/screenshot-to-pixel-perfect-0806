import { render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

const Page = Route.options.component as unknown as () => ReactElement;

// The user asked for the pizza video at the top of the page to have sound.
// Browsers block autoplay with sound, so the video starts muted and a button turns it on.
describe("Som do vídeo do topo", () => {
  it("mostra um botão que liga o som do vídeo", () => {
    render(<Page />);
    const botao = screen.getByRole("button", { name: /Ativar som do vídeo/i });
    expect(botao).toHaveAttribute("aria-pressed", "false");
  });
});
