import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const STATIC_ROUTES = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/team", priority: 0.7 },
  { path: "/services", priority: 0.9 },
  { path: "/clients", priority: 0.8 },
  { path: "/blogs", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/refund", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();
  const now = new Date();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
