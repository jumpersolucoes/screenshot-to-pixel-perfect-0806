import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/pizza-hero.jpg";
import phoneAd from "@/assets/phone-ad.jpg";
import video from "@/assets/apresentacao.mp4.asset.json";
import poster from "@/assets/apresentacao-capa.jpg.asset.json";
import { offer } from "@/config/offer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Pizza e Renda — delivery de pizza na cozinha de casa" },
      { name: "description", content: "Aprenda do zero a preparar pizzas, montar cardápio, precificar e divulgar seu delivery no bairro." },
      { property: "og:title", content: "Método Pizza e Renda" },
      { property: "og:description", content: "Comece seu delivery de pizza na cozinha de casa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const modules = [
  ["Criar sua loja no iFood e na 99Food", "Entenda o cadastro, organize o perfil da loja e prepare o cardápio para publicar conforme a disponibilidade das plataformas na sua região."],
  ["Utensílios", "Identifique o que é essencial para começar e o que pode ficar para depois."],
  ["Preparar a massa", "Aprenda a misturar, sovar, fermentar, porcionar e abrir a massa."],
  ["Processar insumos", "Organize o preparo e o porcionamento de molhos, queijos e recheios."],
  ["Primeira compra", "Monte sua lista inicial de ingredientes e embalagens de acordo com o volume que pretende produzir."],
  ["Rechear e assar", "Aprenda a distribuir os ingredientes, controlar o ponto da massa e finalizar a pizza para entrega."],
  ["Montar um cardápio com 18 sabores", "Aprenda a preparar 18 sabores e a organizar o cardápio do seu delivery."],
  ["Ficha técnica", "Registre ingredientes, quantidades, rendimento e custo por receita."],
  ["Planilha de precificação", "Calcule o preço de venda considerando ingredientes, embalagem, taxas e margem desejada."],
];

const steps = [
  ["Crie o anúncio", "com fotos, vídeos e uma oferta clara."],
  ["Escolha a região", "que seu delivery consegue atender."],
  ["Acompanhe os resultados", "para decidir o que ajustar e onde investir."],
];

function Index() {
  const hasCheckout = Boolean(offer.checkoutUrl);
  return (
    <main className="overflow-x-hidden">
      {/* 1. Hero */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-6 md:grid-cols-2 md:items-center md:pt-10">
        <div>
          <img src={logo.url} alt="Método Pizza e Renda" width={140} height={140} className="mb-6 h-28 w-28 rounded-2xl bg-card object-contain p-1 shadow-[var(--shadow-warm)] md:h-32 md:w-32" />
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            Comece seu delivery de pizza em casa e tenha uma renda extra que pode chegar de{" "}
            <span className="rounded-lg bg-sun px-2 text-espresso">5 a 10 mil reais</span> por mês
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Aprenda do zero a preparar pizzas, montar seu cardápio, calcular seus preços e divulgar seu delivery para atrair os primeiros pedidos no seu bairro.
          </p>
          <a href={hasCheckout ? offer.checkoutUrl : "#grade"} className="btn-cta mt-8 w-full sm:w-auto">Quero começar meu delivery</a>
        </div>
        <img src={hero} alt="Pizza artesanal sendo colocada na caixa de entrega numa cozinha de casa" width={1280} height={1024} className="w-full rounded-3xl border-4 border-gold object-cover shadow-[var(--shadow-warm)]" />
      </section>

      {/* Vídeo */}
      <section className="bg-espresso px-5 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-sun md:text-4xl">Assista e entenda como funciona</h2>
          <video controls playsInline preload="metadata" poster={poster.url} width={848} height={478} className="mt-8 w-full rounded-3xl border-4 border-gold shadow-[var(--shadow-warm)]">
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* 2. Mercado */}
      <section className="bg-muted px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">Pizza é um mercado bilionário no Brasil</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-t-8 border-tomato bg-card p-7 shadow-[var(--shadow-warm)]">
              <p className="font-display text-5xl font-bold text-tomato">R$ 11 bilhões</p>
              <p className="mt-3 text-lg">movimentados pela categoria pizza no foodservice brasileiro nos 12 meses encerrados em março de 2026.</p>
              <a className="mt-4 inline-block text-sm font-semibold underline" target="_blank" rel="noopener noreferrer" href="https://foodbiz.com.br/dados-ifb/dia-da-pizza-consumo-foodservice-dados-crest-ifb/">Fonte: Instituto Foodservice Brasil, com dados da Circana</a>
            </div>
            <div className="rounded-3xl border-t-8 border-gold bg-card p-7 shadow-[var(--shadow-warm)]">
              <p className="font-display text-5xl font-bold text-gold">+50 milhões</p>
              <p className="mt-3 text-lg">de pedidos de pizza pelo iFood no primeiro semestre de 2026, uma média de cerca de <strong>8,3 milhões por mês</strong>.</p>
              <a className="mt-4 inline-block text-sm font-semibold underline" target="_blank" rel="noopener noreferrer" href="https://www.cnnbrasil.com.br/economia/money/negocios/dia-da-pizza-ifood-tem-50-milhoes-de-pedidos-no-1o-semestre/">Fonte: levantamento do iFood divulgado pela CNN Brasil</a>
            </div>
          </div>
          <p className="mt-8 text-lg font-semibold">O Método Pizza e Renda ensina como começar em pequena escala e apresentar seu cardápio a quem pode comprar de você no seu bairro.</p>
        </div>
      </section>

      {/* 3. Diferencial */}
      <section className="bg-espresso px-5 py-20 text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-block rounded-full bg-tomato px-4 py-1 text-sm font-bold uppercase tracking-wide">Nosso diferencial</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-sun md:text-5xl">Aprenda a colocar sua pizza na frente de quem mora perto de você</h2>
            <p className="mt-5 text-lg opacity-90">
              No Método Pizza e Renda, você aprende a criar anúncios pagos no Instagram e no Facebook para divulgar seu cardápio na sua região. Veja como produzir fotos e vídeos que abrem o apetite, definir um orçamento de teste e acompanhar quais anúncios geram conversas e pedidos.
            </p>
            <ol className="mt-8 space-y-4">
              {steps.map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-2xl border border-gold/40 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold font-display text-xl font-bold text-espresso">{i + 1}</span>
                  <p className="min-w-0 pt-2"><strong className="text-sun">{t}</strong> {d}</p>
                </li>
              ))}
            </ol>
          </div>
          <img src={phoneAd} alt="Ilustração de anúncio de pizza no celular" width={1024} height={1024} loading="lazy" className="w-full rounded-3xl" />
        </div>
      </section>

      {/* 4. Grade */}
      <section id="grade" className="scroll-mt-4 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">Da primeira compra aos primeiros pedidos</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(([t, d], i) => (
              <article key={t} className="rounded-3xl border-2 border-border bg-card p-6 shadow-[var(--shadow-warm)]">
                <span className="font-display text-4xl font-bold text-tomato">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Matrícula */}
      <section className="bg-espresso px-5 py-20 text-center text-cream">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-sun md:text-5xl">Seu primeiro delivery pode começar na sua cozinha</h2>
          <p className="mt-5 text-lg opacity-90">Aprenda a produzir, precificar, divulgar e vender suas pizzas com um passo a passo pensado para quem está começando.</p>
          {offer.price && <p className="mt-6 font-display text-3xl font-bold text-sun">{offer.price}</p>}
          {hasCheckout ? (
            <a href={offer.checkoutUrl} className="btn-cta mt-8 w-full sm:w-auto">Quero entrar no Método Pizza e Renda</a>
          ) : (
            <p className="mt-8 rounded-full border border-gold/50 px-6 py-4 font-display text-lg">Matrículas abrem em breve</p>
          )}
        </div>
      </section>
      <footer className="px-5 py-8 text-center text-sm text-muted-foreground"><p>© Método Pizza e Renda</p><p className="mt-2 text-xs">Não garantimos o resultado, por depender de múltiplos fatores.</p></footer>
    </main>
  );
}
