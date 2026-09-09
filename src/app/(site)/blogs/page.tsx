import type { Metadata } from "next";

import { getPublishedPosts } from "@/lib/posts";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { BlogExplorer } from "@/components/blog-explorer";
import { NewsletterForm } from "@/components/newsletter-form";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Software and digital marketing insights from Altveen Technologies, a leading agency in Kashmir serving clients in the USA, India, San Francisco, San Rafael, and worldwide.",
};

// Posts live in Supabase; revalidate hourly so publishing needs no redeploy.
export const revalidate = 3600;

export default async function BlogsPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights worth your time"
        description="Software, SEO, and digital marketing insights from Kashmir's agency for global clients."
      />

      <Section tone="raised">
        <BlogExplorer posts={posts} />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Get new posts in your inbox"
            description="Insights on software, marketing, and growth. No spam, unsubscribe any time."
          />
          <div className="mx-auto max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </Section>
    </>
  );
}
