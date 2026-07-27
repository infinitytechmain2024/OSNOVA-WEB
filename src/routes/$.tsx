import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Breadcrumbs,
  BulletList,
  CheckList,
  CTASection,
  FAQAccordion,
  PageContainer,
  PageHero,
  QuickFacts,
  SectionHeader,
  SectionTitle,
  ServiceCard,
} from "@/components/blocks";
import { RelatedServices } from "@/components/related-services";
import { getBreadcrumbs, getNodeByRoute, getRelated } from "@/lib/tree";
import { CONTACTS } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const route = `/${(params._splat ?? "").replace(/\/+$/, "")}`;
    const node = getNodeByRoute(route);
    if (!node) throw notFound();
    return { route };
  },
  head: ({ loaderData }) => {
    const node = loaderData ? getNodeByRoute(loaderData.route) : undefined;
    if (!node) {
      return { meta: [{ title: "Сторінку не знайдено — ОСНОВА" }, { name: "robots", content: "noindex" }] };
    }
    const title = node.seoTitle ?? `${node.title} — ОСНОВА Реабілітація`;
    const description =
      node.seoDescription ?? node.shortDescription ?? "ОСНОВА Реабілітація — діагностика та відновлення.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: node.route },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: node.route }],
    };
  },
  component: NodePage,
});

const NO_RELATED = new Set(["all-services", "faq", "contacts", "legal", "success"]);

function ChildrenGrid({ node }: { node: SiteNode }) {
  const children = (node.children ?? []).filter((c) => c.published !== false);
  if (!children.length) return null;
  return (
    <PageContainer className="py-16">
      <SectionTitle>
        {node.type === "category" ? "Усі напрями" : "Доступні програми та послуги"}
      </SectionTitle>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children.map((c) => (
          <ServiceCard key={c.id} node={c} />
        ))}
      </div>
    </PageContainer>
  );
}

function NodePage() {
  const { route } = Route.useLoaderData();
  const node = getNodeByRoute(route);
  if (!node) return null;

  const breadcrumbs = getBreadcrumbs(node);
  const related = NO_RELATED.has(node.customPage ?? "") ? [] : getRelated(node);
  const facts = [
    node.duration ? { label: "ТРИВАЛІСТЬ", value: node.duration } : null,
    node.formats?.length ? { label: "ФОРМАТ", value: node.formats.join(" · ") } : null,
    { label: "ВАРТІСТЬ", value: node.priceLabel ?? "Вартість уточнюється" },
  ].filter(Boolean) as { label: string; value: string }[];

  const emptyList = (node.children?.length ?? 0) === 0 && (node.type === "category" || node.type === "section");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageContainer>
        <Breadcrumbs items={breadcrumbs} />
      </PageContainer>

      <main>
        <div className="pt-8">
          <PageHero
            eyebrow={node.eyebrow}
            title={node.title}
            text={node.shortDescription}
            image={node.image}
            facts={node.type === "page" ? undefined : facts}
            secondaryTo="/poslugy"
            secondaryLabel="Обрати послугу"
          />
        </div>

        {node.customPage === "legal" && node.legalBody && (
          <PageContainer className="py-16">
            <div className="section-shell max-w-4xl">
              {node.legalBody.map((p) => (
                <p key={p} className="mb-6 text-navy/90 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </PageContainer>
        )}

        {node.customPage === "contacts" && (
          <PageContainer className="py-16">
            <SectionHeader eyebrow="КОНТАКТИ" title="Як з нами звʼязатися" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-8">
                <p className="text-sm tracking-[0.16em] text-muted-foreground">АДРЕСА</p>
                <p className="mt-3 font-bold text-navy">{CONTACTS.address}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <p className="text-sm tracking-[0.16em] text-muted-foreground">ТЕЛЕФОН</p>
                <a href={CONTACTS.phoneHref} className="mt-3 block font-bold text-primary">
                  {CONTACTS.phone}
                </a>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8">
                <p className="text-sm tracking-[0.16em] text-muted-foreground">ЗАПИС</p>
                <p className="mt-3 text-navy/85">
                  Зателефонуйте нам — адміністратор підбере зручний час і пояснить наступні кроки.
                </p>
              </div>
            </div>
          </PageContainer>
        )}

        {node.fullDescription && (
          <PageContainer className="py-16">
            <div className="section-shell max-w-4xl">
              <SectionTitle>Коротко про напрям</SectionTitle>
              <p className="mt-8 text-lg leading-relaxed text-navy/90">{node.fullDescription}</p>
            </div>
          </PageContainer>
        )}

        {node.type !== "page" && facts.length > 0 && (
          <PageContainer className="pb-4">
            <QuickFacts items={facts} />
          </PageContainer>
        )}

        <ChildrenGrid node={node} />

        {emptyList && (
          <PageContainer className="py-16">
            <div className="section-shell text-navy/85">
              Перелік формується. Щоб дізнатися деталі та доступні варіанти, залиште заявку або
              зателефонуйте нам.
            </div>
          </PageContainer>
        )}

        {node.methods?.length ? (
          <PageContainer className="pb-16">
            <SectionTitle>Що входить у напрям</SectionTitle>
            <BulletList items={node.methods} />
          </PageContainer>
        ) : null}

        {node.indications?.length ? (
          <PageContainer className="pb-16">
            <SectionTitle>Коли потрібна ця послуга</SectionTitle>
            <BulletList items={node.indications} />
          </PageContainer>
        ) : null}

        {node.contraindications?.length ? (
          <PageContainer className="pb-16">
            <div className="rounded-3xl border border-border p-8 md:p-12">
              <SectionTitle>Коли послугу потрібно відкласти</SectionTitle>
              <BulletList items={node.contraindications} />
            </div>
          </PageContainer>
        ) : null}

        {node.included?.length ? (
          <PageContainer className="pb-16">
            <div className="section-shell">
              <SectionTitle>Що входить у програму</SectionTitle>
              <CheckList items={node.included} />
            </div>
          </PageContainer>
        ) : null}

        {node.stages?.length ? (
          <PageContainer className="pb-16">
            <SectionTitle>Етапи проходження</SectionTitle>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {node.stages.map((s, i) => (
                <li key={s} className="rounded-xl bg-card p-6 shadow-sm">
                  <span className="text-sm font-bold text-primary">0{i + 1}</span>
                  <p className="mt-2 text-navy/90">{s}</p>
                </li>
              ))}
            </ol>
          </PageContainer>
        ) : null}

        {node.results?.length ? (
          <PageContainer className="pb-16">
            <div className="section-shell">
              <SectionTitle>Які результати може отримати пацієнт</SectionTitle>
              <CheckList items={node.results} />
            </div>
          </PageContainer>
        ) : null}

        {node.requiredDocuments?.length ? (
          <PageContainer className="pb-16">
            <SectionTitle>Які документи потрібно надати</SectionTitle>
            <BulletList items={node.requiredDocuments} />
          </PageContainer>
        ) : null}

        {node.faq?.length ? (
          <PageContainer className="pb-16">
            <p className="text-sm font-semibold tracking-[0.28em] text-primary">
              ПИТАННЯ ТА ВІДПОВІДІ
            </p>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Поширені питання</h2>
            <FAQAccordion items={node.faq} />
          </PageContainer>
        ) : null}

        {related.length > 0 && <RelatedServices items={related} />}

        <CTASection
          title="ЗАПИСАТИСЯ ДО ОСНОВИ"
          text="Залиште заявку або зателефонуйте нам — ми допоможемо обрати напрям, підкажемо, які обстеження знадобляться, і підберемо зручний час."
        />

        <PageContainer className="pb-16">
          <Link to="/poslugy" className="text-sm font-semibold text-primary hover:underline">
            ← Усі послуги
          </Link>
        </PageContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
