import { MessageCircleQuestion, Minus, Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { offer } from "@/config/offer";

const questions = [
  {
    question: "Preciso abrir um MEI para começar?",
    answer: "Para cadastrar seu delivery na 99Food, você precisa de um CNPJ. No iFood, o cadastro com CPF está disponível em algumas regiões, conforme as condições da plataforma. O MEI pode ser uma opção de formalização para quem atende aos requisitos. A abertura é gratuita e feita pela internet, no Portal do Empreendedor. Se decidir encerrar, a baixa também pode ser solicitada online, com a regularização das obrigações e declarações devidas.",
    link: { label: "Acessar o Portal do Empreendedor", href: "https://www.gov.br/mei" },
  },
  {
    question: "Preciso comprar um forno especial?",
    answer: "Você pode começar usando o forno do seu fogão. Para ganhar produtividade e ter mais controle sobre o preparo, recomendamos considerar um forno paulistano ou similar, adequado para pizzas. Você pode pesquisar opções usadas na OLX e no Facebook Marketplace, comparando preços e condições de conservação.",
  },
  {
    question: "Vou precisar de um investimento inicial?",
    answer: "Sim. Nossa estimativa para uma operação inicial enxuta é de aproximadamente R$ 3 mil, aproveitando a estrutura que você já tem em casa. O valor depende dos utensílios disponíveis, dos preços na sua região e da quantidade que pretende produzir.",
  },
  {
    question: "O curso serve para fazer pizzas para a família e os amigos?",
    answer: "Sim! Você também pode usar o que aprender para preparar pizzas em casa para a família e os amigos. As aulas ensinam o preparo da massa, dos recheios e a montagem das pizzas.",
  },
  {
    question: "Preciso investir para anunciar no Facebook e no Instagram?",
    answer: "Sim, os anúncios pagos exigem um orçamento separado. A proposta do curso é ensinar você a começar com testes pequenos, usando R$ 15 como referência inicial, conforme as condições disponíveis na sua conta. O orçamento pode ser ajustado à sua realidade e aos resultados das campanhas.",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="bg-cream px-5 py-16 text-espresso md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 md:gap-4">
          <MessageCircleQuestion aria-hidden="true" className="h-10 w-10 shrink-0 text-gold md:h-12 md:w-12" />
          <h2 id="faq-title" className="text-3xl font-bold md:text-4xl">Ainda tem dúvidas?</h2>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">Veja as respostas para quem quer começar a fazer pizzas em casa.</p>
        <Accordion type="single" collapsible className="mt-8 border-t border-gold/40">
          {questions.map(({ question, answer, link }, index) => (
            <AccordionItem key={question} value={`faq-${index}`} className="border-gold/40">
              <AccordionTrigger
                className="group gap-5 py-6 text-base font-bold leading-relaxed text-espresso hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream md:text-lg"
                icon={
                  <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                    <Minus className="hidden h-5 w-5 group-data-[state=open]:block" />
                  </span>
                }
              >
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-1 text-base leading-relaxed text-muted-foreground md:pr-12">
                <p>{answer}</p>
                {link && <a href={link.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-bold text-espresso underline decoration-gold underline-offset-4 focus-visible:outline-gold">{link.label}</a>}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 text-center">
          <Button asChild className="btn-cta h-auto w-full whitespace-normal sm:w-auto">
            <a href={offer.checkoutUrl || "#grade"}>Quero começar meu delivery de pizza</a>
          </Button>
        </div>
      </div>
    </section>
  );
}