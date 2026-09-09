/**
 * Seeds the nine blog posts carried over from the original Flask site.
 *
 *   npm run seed
 *
 * Reads NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY from
 * .env.local. Idempotent: updates each post by `slug`, so re-running refreshes
 * content in place rather than creating duplicates.
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false },
});

/** Natural SEO closings — varied so posts do not read as duplicate content. */
const SEO = {
  agency:
    "Altveen Technologies is a leading software development and digital marketing agency in Kashmir, trusted by businesses across the globe.",
  global:
    "From San Francisco and San Rafael in the USA to clients across India, we deliver software and marketing under one roof.",
  software:
    "As one of Kashmir's top software development companies, we build web apps, e-commerce, and custom tools for local and international teams.",
  marketing:
    "As a digital marketing agency in Kashmir serving the USA and India, we combine SEO, paid ads, and content that converts.",
};

const POSTS = [
  {
    slug: "why-your-business-needs-digital-marketing",
    title: "Why Your Business Needs Digital Marketing in 2025",
    excerpt:
      "How a Kashmir-based digital marketing agency helps businesses in the USA, India, and worldwide grow reach and ROI in 2025.",
    author: "Altveen Team",
    published_at: "2025-02-20",
    read_time: "5 min read",
    category: "Digital Marketing",
    image_url:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=960&q=80",
    content: `<p>In today's fast-paced world, having an online presence isn't optional - it's essential. Digital marketing allows businesses to reach customers where they spend most of their time: online.</p>
<p>From social media campaigns to search engine optimization (SEO), the strategies we deploy help brands connect with their audience, build trust, and drive conversions. Whether you're a startup or an established enterprise, a tailored digital strategy can scale your growth.</p>
<p>Paid advertising - Google Ads, Meta, LinkedIn - lets you target specific demographics and measure every dollar. Content marketing and email nurture keep your brand top of mind long after the first click. The key is consistency and a clear understanding of your customer journey.</p>
<p>At Altveen Technologies, we combine data-driven insights with creative execution to deliver campaigns that resonate and convert. ${SEO.marketing} ${SEO.global}</p>`,
  },
  {
    slug: "custom-software-vs-off-the-shelf",
    title: "Custom Software vs Off-the-Shelf: Making the Right Choice",
    excerpt:
      "Custom software vs off-the-shelf: guidance from a top software development agency in Kashmir serving clients globally.",
    author: "Altveen Team",
    published_at: "2025-02-18",
    read_time: "6 min read",
    category: "Software",
    image_url:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=960&q=80",
    content: `<p>Choosing between custom software and off-the-shelf products depends on your business needs, budget, and long-term goals. Off-the-shelf solutions work well for common workflows, but they often come with limitations and recurring licensing costs.</p>
<p>Custom software is built around your exact processes, integrates with your existing systems, and scales with you. It requires a higher initial investment but often pays off in efficiency and competitive advantage.</p>
<p>Consider your roadmap: if you need unique workflows, deep integrations with CRMs or e-commerce, or a product that becomes a differentiator, custom development is usually the right path. For standard CRM, accounting, or collaboration, a well-chosen SaaS product may be enough.</p>
<p>Our team helps you evaluate both options and build custom solutions when they deliver clear value, so you invest wisely. ${SEO.software} ${SEO.global}</p>`,
  },
  {
    slug: "seo-tips-for-small-businesses",
    title: "SEO Tips Every Small Business Should Know",
    excerpt:
      "SEO tips for small businesses from Kashmir's trusted digital marketing agency, serving the USA, India, and clients worldwide.",
    author: "Altveen Team",
    published_at: "2025-02-15",
    read_time: "4 min read",
    category: "SEO",
    image_url:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=960&q=80",
    content: `<p>Search engine optimization doesn't have to be complicated or expensive. Start with the basics: a fast, mobile-friendly website, clear page titles and meta descriptions, and quality content that answers your audience's questions.</p>
<p>Local SEO is especially important for small businesses - claim your Google Business Profile, keep your NAP (Name, Address, Phone) consistent everywhere, and encourage customer reviews.</p>
<p>Technical SEO - site speed, structured data, clean URLs - lays the foundation. Then focus on keywords that match intent and content that genuinely helps. Avoid keyword stuffing and low-quality link schemes; Google rewards relevance and authority.</p>
<p>Consistency matters more than perfection. Publish useful content regularly and build genuine backlinks; rankings will follow.</p>
<p>Need an SEO partner in Kashmir that also works with USA clients? ${SEO.agency} ${SEO.global}</p>`,
  },
  {
    slug: "building-scalable-web-applications",
    title: "Building Scalable Web Applications from Day One",
    excerpt:
      "Scalable web app architecture from a software agency in Kashmir trusted by teams in the USA, India, and worldwide.",
    author: "Altveen Team",
    published_at: "2025-02-12",
    read_time: "7 min read",
    category: "Software",
    image_url:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=960&q=80",
    content: `<p>Scalability isn't something you add later - it's something you design for from the start. Choosing the right stack, database design, and deployment strategy can save you from painful migrations down the road.</p>
<p>We focus on clean architecture, separation of concerns, and cloud-native approaches so your application can handle growth in users and data. Caching, CDNs, and efficient database queries are part of the blueprint.</p>
<p>Stateless services, horizontal scaling, and async processing help you grow without rewriting. Monitor performance from day one so you know where bottlenecks appear before they affect users.</p>
<p>Whether you're building a SaaS product or an internal tool, thinking about scale early pays dividends. ${SEO.software} ${SEO.global}</p>`,
  },
  {
    slug: "social-media-strategy-that-converts",
    title: "Social Media Strategy That Actually Converts",
    excerpt:
      "Social media strategies that convert, from a digital marketing agency in Kashmir working with USA and India clients.",
    author: "Altveen Team",
    published_at: "2025-02-10",
    read_time: "5 min read",
    category: "Digital Marketing",
    image_url:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=960&q=80",
    content: `<p>Social media is more than posting and hoping for engagement. A conversion-focused strategy starts with knowing your audience, choosing the right platforms, and creating content that moves people along the funnel.</p>
<p>Use clear CTAs, lead magnets, and retargeting to capture interest. Track metrics that matter: click-through rates, form submissions, and cost per lead - not just vanity metrics.</p>
<p>Stories, reels, and short-form video drive discovery; carousels and links drive education and sign-ups. Align each format with a stage of the funnel and test messaging to see what converts.</p>
<p>We help brands build social strategies that align with business goals and deliver measurable ROI. ${SEO.marketing} ${SEO.global}</p>`,
  },
  {
    slug: "importance-of-mobile-first-design",
    title: "The Importance of Mobile-First Design",
    excerpt:
      "Mobile-first design principles from a Kashmir software company serving San Francisco, San Rafael, USA, and India.",
    author: "Altveen Team",
    published_at: "2025-02-08",
    read_time: "4 min read",
    category: "Design",
    image_url:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=960&q=80",
    content: `<p>Most users now access the web from their phones. Mobile-first design means starting with the smallest screen and progressively enhancing for larger ones - resulting in faster, cleaner experiences everywhere.</p>
<p>Google's mobile-first indexing makes this a ranking factor too. Sites that perform poorly on mobile lose visibility and conversions. Responsive layouts, touch-friendly buttons, and fast load times are non-negotiable.</p>
<p>Prioritize tap targets, readable font sizes, and minimal data usage on slow networks. Test on real devices, not just browser resize - touch, scroll, and orientation all matter.</p>
<p>Every project we build is designed mobile-first so your audience gets a great experience on any device. ${SEO.software} ${SEO.global}</p>`,
  },
  {
    slug: "data-driven-marketing-decisions",
    title: "Making Data-Driven Marketing Decisions",
    excerpt:
      "Data-driven marketing from Kashmir's leading digital agency, helping USA and Indian businesses improve performance.",
    author: "Altveen Team",
    published_at: "2025-02-05",
    read_time: "6 min read",
    category: "Digital Marketing",
    image_url:
      "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=960&q=80",
    content: `<p>Gut feeling has its place, but sustainable growth comes from data. Set up proper tracking - Google Analytics, conversion goals, and attribution - so you know what's actually working.</p>
<p>A/B testing headlines, landing pages, and ad creatives removes guesswork. Small, consistent improvements compound over time. Focus on one variable at a time and let statistical significance guide you.</p>
<p>Dashboards that show traffic, conversions, and cost per acquisition keep everyone aligned. Review weekly, iterate on underperformers, and double down on what works.</p>
<p>We integrate analytics and reporting into every campaign so you can see real impact and optimize continuously. ${SEO.marketing} ${SEO.global}</p>`,
  },
  {
    slug: "api-integration-best-practices",
    title: "API Integration Best Practices for Business Systems",
    excerpt:
      "API integration best practices from a top software development agency in Kashmir with global clients.",
    author: "Altveen Team",
    published_at: "2025-02-02",
    read_time: "5 min read",
    category: "Software",
    image_url:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=960&q=80",
    content: `<p>APIs power modern business - connecting your website, CRM, payment gateways, and internal tools. Doing it right means consistent error handling, retries, and clear documentation.</p>
<p>Use authentication (OAuth, API keys) properly, validate inputs, and log failures for debugging. Version your APIs so changes don't break existing integrations. Consider rate limits and caching to protect both sides.</p>
<p>Webhooks and event-driven flows keep systems in sync without constant polling. Design for failure: timeouts, idempotency, and dead-letter queues prevent small outages from becoming data messes.</p>
<p>We design and implement integrations that are secure, maintainable, and built for the long run. ${SEO.software} ${SEO.global}</p>`,
  },
  {
    slug: "brand-storytelling-in-digital-age",
    title: "Brand Storytelling in the Digital Age",
    excerpt:
      "Brand storytelling for the digital age, from a Kashmir agency blending software and marketing for USA and India brands.",
    author: "Altveen Team",
    published_at: "2025-01-28",
    read_time: "5 min read",
    category: "Digital Marketing",
    image_url:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=960&q=80",
    content: `<p>People don't just buy products - they buy into stories and values. Your brand story should be clear, consistent, and present everywhere: your website, social feeds, ads, and support interactions.</p>
<p>Use video, blogs, and social content to show the human side of your business. Share behind-the-scenes, customer success stories, and the "why" behind what you do. Authenticity builds trust and loyalty.</p>
<p>Voice, tone, and visual identity should feel like one team speaking. Once you have a clear narrative, reuse it in sales decks, support replies, and product copy so every touchpoint reinforces the same message.</p>
<p>We help brands articulate their story and bring it to life across every touchpoint. ${SEO.agency} ${SEO.global}</p>`,
  },
];

const rows = POSTS.map((post) => ({
  ...post,
  published: true,
  published_at: new Date(`${post.published_at}T09:00:00Z`).toISOString(),
}));

const seededSlugs = [];

for (const post of rows) {
  const { data: existing, error: lookupError } = await supabase
    .from("posts")
    .select("id")
    .eq("slug", post.slug)
    .is("deleted_at", null)
    .maybeSingle();

  if (lookupError) {
    console.error("Seed failed:", lookupError.message);
    process.exit(1);
  }

  if (existing) {
    const { error: updateError } = await supabase
      .from("posts")
      .update(post)
      .eq("id", existing.id);

    if (updateError) {
      console.error("Seed failed:", updateError.message);
      process.exit(1);
    }
  } else {
    const { error: insertError } = await supabase.from("posts").insert(post);

    if (insertError) {
      console.error("Seed failed:", insertError.message);
      process.exit(1);
    }
  }

  seededSlugs.push(post.slug);
}

console.log(`✓ Seeded ${seededSlugs.length} posts:`);
for (const slug of seededSlugs) console.log(`  - ${slug}`);

// ---------------------------------------------------------------------------
// Clients, the six carried over from the original site. Images already live
// in /public/images, so these keep site-relative paths; ones added later
// through the admin panel upload to Supabase Storage instead.
// ---------------------------------------------------------------------------
const CLIENTS = [
  {
    name: "Indian Spices and Groceries",
    sector: "San Francisco, USA",
    image_url: "/images/IndianSpices.jpg",
    description:
      "E-commerce website, store management and digital marketing support.",
    url: "https://indianspicesandgroceries.com",
    region: "international",
    sort_order: 1,
  },
  {
    name: "Lotus Cuisine of India",
    sector: "San Rafael, USA",
    image_url: "/images/LotusCuisine.jpg",
    description:
      "Restaurant website, online presence and ongoing digital marketing.",
    url: "https://lotusrestaurant.com",
    region: "international",
    sort_order: 2,
  },
  {
    name: "Lotus Markets",
    sector: "San Rafael, USA",
    image_url: "/images/lotusmarket.jpg",
    description:
      "E-commerce store, store management and digital marketing support.",
    url: "https://lotusmarkets.com",
    region: "international",
    sort_order: 3,
  },
  {
    name: "Lotus Corner Market",
    sector: "San Francisco, USA",
    image_url: "/images/lotuscornermarket.jpg",
    description:
      "E-commerce store, store management and digital marketing support.",
    url: "https://lotuscornermarket.com",
    region: "international",
    sort_order: 4,
  },
  {
    name: "Hotel Sea View",
    sector: "Srinagar, J&K",
    image_url: "/images/hotelseaview.jpg",
    description:
      "Hotel website (without booking system) plus digital marketing for visibility and guests.",
    url: "https://thehotelseaview.in",
    region: "local",
    sort_order: 5,
  },
  {
    name: "Atfaal Innovations",
    sector: "Srinagar, J&K",
    image_url: "/images/atfaal.jpg",
    description:
      "Website design and digital marketing support for Atfaal Innovations.",
    url: "https://atfaal.co.in",
    region: "local",
    sort_order: 6,
  },
].map((client) => ({ ...client, in_marquee: true }));

// `clients` has no natural unique key, so only insert the ones missing by name.
const { data: existing, error: existingError } = await supabase
  .from("clients")
  .select("name");

if (existingError) {
  console.error("Client seed failed:", existingError.message);
  process.exit(1);
}

const known = new Set((existing ?? []).map((c) => c.name));
const missing = CLIENTS.filter((c) => !known.has(c.name));

if (missing.length === 0) {
  console.log(`\n✓ Clients already seeded (${known.size} present), skipped.`);
} else {
  const { data: inserted, error: clientError } = await supabase
    .from("clients")
    .insert(missing)
    .select("name");

  if (clientError) {
    console.error("Client seed failed:", clientError.message);
    process.exit(1);
  }

  console.log(`\n✓ Seeded ${inserted.length} clients:`);
  for (const row of inserted) console.log(`  - ${row.name}`);
}

// ---------------------------------------------------------------------------
// Testimonials, the six carried over from the original site.
// ---------------------------------------------------------------------------
const TESTIMONIALS = [
  {
    client_name: "Indian Spices and Groceries",
    rating: 4.9,
    quote:
      "Altveen feels like an extension of our team. They handle our e-commerce, website, and marketing under one roof, so we never worry about coordination.",
    detail: "San Francisco, USA · E-commerce store & marketing",
    sort_order: 1,
  },
  {
    client_name: "Lotus Cuisine of India",
    rating: 5.0,
    quote:
      "From menu updates to online campaigns, they move fast and keep us informed. Our online orders and reservations have grown steadily.",
    detail: "San Rafael, USA · Restaurant & digital growth",
    sort_order: 2,
  },
  {
    client_name: "Lotus Markets",
    rating: 4.8,
    quote:
      "They rebuilt our Shopify presence and now manage performance ads. We see clear reports every week and know exactly what is working.",
    detail: "San Rafael, USA · Shopify store & ads",
    sort_order: 3,
  },
  {
    client_name: "Lotus Corner Market",
    rating: 5.0,
    quote:
      "A dependable partner for both tech and marketing. They keep our storefront fast, stable, and always aligned with our campaigns.",
    detail: "San Francisco, USA · Store management & marketing",
    sort_order: 4,
  },
  {
    client_name: "Hotel Sea View",
    rating: 5.0,
    quote:
      "For our hotel, Altveen delivered a clean, fast website and ongoing digital marketing that keeps us visible in a competitive market.",
    detail: "Srinagar, J&K · Website & digital marketing",
    sort_order: 5,
  },
  {
    client_name: "Atfaal Innovations",
    rating: 4.9,
    quote:
      "They understand startups. From branding to web to campaigns, everything is data-driven and focused on helping us grow.",
    detail: "Srinagar, J&K · Product site & growth support",
    sort_order: 6,
  },
].map((item) => ({
  ...item,
  published: true,
  show_on_homepage: true,
  show_on_services: true,
}));

const { data: existingReviews, error: existingReviewsError } = await supabase
  .from("testimonials")
  .select("client_name");

if (existingReviewsError) {
  console.error("Testimonial seed failed:", existingReviewsError.message);
  process.exit(1);
}

const knownReviews = new Set((existingReviews ?? []).map((t) => t.client_name));
const missingReviews = TESTIMONIALS.filter((t) => !knownReviews.has(t.client_name));

if (missingReviews.length === 0) {
  console.log(
    `\n✓ Testimonials already seeded (${knownReviews.size} present), skipped.`,
  );
} else {
  const { data: insertedReviews, error: reviewError } = await supabase
    .from("testimonials")
    .upsert(missingReviews, { onConflict: "client_name", ignoreDuplicates: true })
    .select("client_name");

  if (reviewError) {
    console.error("Testimonial seed failed:", reviewError.message);
    process.exit(1);
  }

  console.log(`\n✓ Seeded ${insertedReviews.length} testimonials:`);
  for (const row of insertedReviews) console.log(`  - ${row.client_name}`);
}
