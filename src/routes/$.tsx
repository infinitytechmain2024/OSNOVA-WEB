import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Breadcrumbs, PageContainer, SectionHeader } from "@/components/blocks";
import { getBreadcrumbs, getNodeByRoute } from "@/lib/tree";
import { CONTACTS } from "@/data/site-tree";
import { ServiceDetailTemplate } from "@/components/service-detail-template";
import { AllServicesPricePage } from "@/components/all-services-price-page";
import { DoctorPartnershipPage } from "@/components/doctor-partnership-page";
import { InstitutePartnershipPage } from "@/components/institute-partnership-page";
import { CardioRehabPage } from "@/components/cardio-rehab-page";
import { PostInfarctionRehabPage } from "@/components/post-infarction-rehab-page";
import { MobileRehabPage } from "@/components/mobile-rehab-page";
import { RentalEquipmentPage } from "@/components/rental-equipment-page";
import { SocialProjectsPage } from "@/components/social-projects-page";
import { ContactsPage } from "@/components/contacts-page";
import { AboutOsnovaPage } from "@/components/about-osnova-page";

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
      return {
        meta: [{ title: "Сторінку не знайдено — ОСНОВА" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = node.seoTitle ?? `${node.title} — ОСНОВА Реабілітація`;
    const description =
      node.seoDescription ??
      node.shortDescription ??
      "ОСНОВА Реабілітація — діагностика та відновлення.";
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

  if (node.customPage === "cardio-rehab" || node.route === "/reabilitatsiia/kardiolohichna") {
    return <CardioRehabPage node={node} />;
  }

  if (node.customPage === "post-infarction-rehab") {
    return <PostInfarctionRehabPage node={node} />;
  }

  if (node.customPage === "all-services" || node.id === "services") {
    return <AllServicesPricePage node={node} />;
  }

  if (node.id === "partnership-doctors") {
    return <DoctorPartnershipPage node={node} />;
  }

  if (node.id === "social") {
    return <SocialProjectsPage node={node} />;
  }

  if (node.id === "about") {
    return <AboutOsnovaPage node={node} />;
  }

  if (node.customPage === "institute-partnership") {
    return <InstitutePartnershipPage node={node} />;
  }

  if (node.customPage === "mobile-rehab") {
    return <MobileRehabPage node={node} />;
  }

  if (node.customPage === "rental-equipment") {
    return <RentalEquipmentPage node={node} />;
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
    return <ContactsPage node={node} />;
  }

  return <ServiceDetailTemplate node={node} />;
}
