import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, PageContainer, SectionHeader } from "@/components/blocks";
import { getBreadcrumbs, getNodeByRoute } from "@/lib/tree";
import { CONTACTS } from "@/data/site-tree";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { AllServicesPricePage } from "@/components/all-services-price-page";

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

function NodePage() {
  const { route } = Route.useLoaderData();
  const node = getNodeByRoute(route);
  if (!node) return null;

  if (node.customPage === "all-services" || node.id === "services") {
    return <AllServicesPricePage node={node} />;
  }

  if (node.customPage === "legal" && node.legalBody) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <PageContainer className="py-8">
          <Breadcrumbs items={getBreadcrumbs(node)} />
        </PageContainer>
        <main>
          <PageContainer className="pb-16">
            <h1 className="text-4xl font-extrabold text-navy">{node.title}</h1>
            <div className="mt-8 section-shell max-w-4xl">
              {node.legalBody.map((p) => (
                <p key={p} className="mb-6 text-navy/90 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </PageContainer>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (node.customPage === "contacts") {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <PageContainer className="py-8">
          <Breadcrumbs items={getBreadcrumbs(node)} />
        </PageContainer>
        <main>
          <PageContainer className="pb-16">
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
        </main>
        <SiteFooter />
      </div>
    );
  }

  return <ServiceDetailTemplate node={node} />;
}
