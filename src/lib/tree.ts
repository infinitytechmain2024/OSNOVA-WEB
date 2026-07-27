import { siteTree } from "@/data/site-tree";
import type { SiteNode } from "@/data/types";

export const allNodes: SiteNode[] = (function flatten(nodes: SiteNode[]): SiteNode[] {
  return nodes.flatMap((n) => [n, ...flatten(n.children ?? [])]);
})(siteTree);

const byRoute = new Map(allNodes.map((n) => [n.route, n]));
const byId = new Map(allNodes.map((n) => [n.id, n]));

export function getNodeByRoute(route: string): SiteNode | undefined {
  const clean = route.length > 1 ? route.replace(/\/+$/, "") : route;
  return byRoute.get(clean);
}

export function getNodeById(id: string): SiteNode | undefined {
  return byId.get(id);
}

export function getParent(node: SiteNode): SiteNode | undefined {
  return node.parentId ? byId.get(node.parentId) : undefined;
}

export function getAncestors(node: SiteNode): SiteNode[] {
  const chain: SiteNode[] = [];
  let current = getParent(node);
  while (current) {
    chain.unshift(current);
    current = getParent(current);
  }
  return chain;
}

export function getBreadcrumbs(node: SiteNode) {
  return [
    { title: "Головна", route: "/" },
    ...getAncestors(node).map((n) => ({ title: n.title, route: n.route })),
    { title: node.title, route: node.route },
  ];
}

export function getSiblings(node: SiteNode): SiteNode[] {
  const parent = getParent(node);
  const list = parent?.children ?? siteTree;
  return list.filter((n) => n.id !== node.id);
}

/** Пов’язані послуги: спочатку вручну вказані, далі — сусіди напряму та суміжні розділи. */
export function getRelated(node: SiteNode, limit = 3): SiteNode[] {
  const picked: SiteNode[] = [];
  const push = (n?: SiteNode) => {
    if (!n || n.id === node.id || picked.some((p) => p.id === n.id)) return;
    if (n.children && n.children.length === 0 && n.type === "section") return;
    picked.push(n);
  };

  (node.relatedIds ?? []).forEach((id) => push(byId.get(id)));
  getSiblings(node).forEach(push);

  const parent = getParent(node);
  if (parent) {
    getSiblings(parent).forEach(push);
    push(parent);
  }

  return picked.filter((n) => n.type !== "page").slice(0, limit);
}

export function searchNodes(query: string): SiteNode[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const words = q.split(/\s+/);
  return allNodes
    .filter(
      (n) =>
        !n.customPage ||
        n.customPage === "cardio-diagnostics" ||
        n.customPage === "all-services" ||
        n.customPage === "institute-partnership" ||
        n.customPage === "mobile-rehab" ||
        n.customPage === "rental-equipment",
    )
    .filter((n) => {
      const haystack = `${n.title} ${n.shortDescription ?? ""} ${n.eyebrow ?? ""}`.toLowerCase();
      return words.every((w) => haystack.includes(w));
    })
    .slice(0, 40);
}

export function getPathTitles(node: SiteNode): string[] {
  return [...getAncestors(node).map((n) => n.title), node.title];
}
