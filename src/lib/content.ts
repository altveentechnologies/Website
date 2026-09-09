/**
 * Editorial content for the marketing pages. Kept in TypeScript rather than
 * the database: it changes rarely, benefits from type-checking, and renders
 * with zero network round-trips. Blog posts and form submissions live in
 * Supabase, see src/lib/posts.ts.
 */

export const SITE = {
  name: "Altveen Technologies",
  legalName: "Altveen Technologies Pvt Ltd",
  tagline: "Software & Digital Marketing",
  description:
    "We help businesses thrive with custom software solutions and data-driven digital marketing. From web apps, Shopify / WordPress / Webflow sites, and online stores to brand campaigns and design, we deliver results that matter.",
  shortDescription:
    "Custom software and data-driven digital marketing, under one roof. Based in Kashmir, working with clients in India, the US and beyond.",
  email: "altveentechnologies@gmail.com",
  phones: ["+91 77808 63457", "+91 78896 29640"],
  whatsapp: "917780863457",
  address: "Srinagar, Jammu & Kashmir",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund", label: "Refund Policy" },
] as const;

export const CAPABILITIES = [
  "Custom Software",
  "Web & Mobile Apps",
  "Shopify, WordPress & Webflow",
  "AI / ML & Chatbots",
  "Automation Tools",
  "SEO & Content",
  "Social Media Marketing",
  "Brand & UI/UX Design",
] as const;

export const SERVICE_OPTIONS = [
  "Custom Software",
  "Web & Mobile Apps",
  "Shopify, WordPress & Webflow Sites",
  "AI / ML & Chatbots",
  "Automation Tools",
  "SEO & Content",
  "Social Media Marketing",
  "Brand & UI/UX Design",
] as const;

export const COUNTRY_CODES = [
  { code: "+91", label: "India" },
  { code: "+1", label: "USA/Canada" },
  { code: "+44", label: "UK" },
  { code: "+61", label: "Australia" },
  { code: "+81", label: "Japan" },
  { code: "+49", label: "Germany" },
  { code: "+33", label: "France" },
  { code: "+971", label: "UAE" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+65", label: "Singapore" },
  { code: "+60", label: "Malaysia" },
  { code: "+234", label: "Nigeria" },
  { code: "+27", label: "South Africa" },
  { code: "+20", label: "Egypt" },
  { code: "+55", label: "Brazil" },
] as const;

export type Differentiator = {
  icon: string;
  title: string;
  description: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "layers",
    title: "One Roof, Zero Gaps",
    description:
      "Most companies hire a dev agency and a marketing agency separately. We do both, so your tech stack and growth strategy are always aligned, no finger-pointing between teams.",
  },
  {
    icon: "users",
    title: "Direct Access to the Team",
    description:
      "You talk to the people actually doing the work, not layers of account managers. Your dedicated team lead is your day-to-day contact so decisions are fast and clear.",
  },
  {
    icon: "compass",
    title: "Honest Advice, Not Upsells",
    description:
      "If a feature or campaign will not help your business, we will tell you. We would rather say no to an upsell than waste your budget on something that does not move the needle.",
  },
  {
    icon: "bolt",
    title: "Fast to Start, Built to Last",
    description:
      "Onboarding happens in days, not weeks. Everything we build is documented, scalable, and truly yours, no vendor lock-in or hidden dependencies.",
  },
  {
    icon: "chart",
    title: "Radically Transparent Reporting",
    description:
      "You always know what is happening, weekly updates, live dashboards, and plain-English reports instead of “trust us” black boxes.",
  },
  {
    icon: "growth",
    title: "We Grow When You Grow",
    description:
      "We measure ourselves by your revenue, leads, and retention, not just by deliverables shipped. Our success is tied directly to your business outcomes.",
  },
];

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export const SOFTWARE_SERVICES: ServiceItem[] = [
  {
    title: "Web Applications",
    description:
      "Dashboards, portals, SaaS products, and internal tools built with clean architecture, fast, secure, and maintainable.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Websites & Landing Pages",
    description:
      "Modern, conversion-focused websites with great UI/UX, optimized for speed, SEO, and mobile-first performance.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Shopify, WordPress & Webflow",
    description:
      "Online stores and CMS websites built on the right platform, theme setup, customization, and performance tuning.",
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Mobile Apps",
    description:
      "Native or cross-platform apps for iOS and Android, from MVPs to full-featured products users love.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "API & Integrations",
    description:
      "CRMs, payment gateways, analytics, and third-party APIs, connect your stack with reliable integrations.",
    image:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "AI & Automation",
    description:
      "AI chatbots, automation tools, and workflow optimization that save time and improve customer support.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=960&q=80",
  },
];

export const MARKETING_SERVICES: ServiceItem[] = [
  {
    title: "SEO & Content",
    description:
      "Technical SEO, on-page optimization, and content that ranks, ideal for Shopify, WordPress, Webflow, and custom sites.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Social Media Marketing",
    description:
      "Content calendars, creatives, and paid social campaigns with clear goals, reach, leads, and sales.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Performance Ads",
    description:
      "Google Ads, Meta Ads, and retargeting, optimized for cost per lead and return on ad spend.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Dashboards, tracking setup, and reports that show what’s working, so decisions are data-driven.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Conversion Optimization",
    description:
      "Landing page improvements, A/B testing, and funnel optimization to increase conversions and sales.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=960&q=80",
  },
  {
    title: "Brand, UI/UX & Design",
    description:
      "Brand identity, UI/UX design, and creative assets that look premium and build trust across channels.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=960&q=80",
  },
];

export type ValueItem = {
  title: string;
  description: string;
  image: string;
};

export const VALUES: ValueItem[] = [
  {
    title: "Quality First",
    description:
      "We ship clean, maintainable code and campaigns backed by data. No shortcuts that cost you later.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=95",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear timelines, honest estimates, and regular updates. You're always in the loop.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Results That Matter",
    description:
      "We measure success by your goals, traffic, conversions, efficiency, not vanity metrics.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Innovation",
    description:
      "We stay curious and keep learning. From AI to automation, we bring modern tools to your problems.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Integrity",
    description:
      "We do what we say. Honest advice, fair pricing, and long-term relationships built on trust.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Customer Focus",
    description:
      "Your success is our success. We listen first, then build and market with your goals at the centre.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=90",
  },
];

/* Clients now live in Supabase (table `clients`) and are managed from
   /admin/clients, see src/lib/clients.ts.

   Testimonials live in Supabase (table `testimonials`) and are managed from
   /admin/testimonials, see src/lib/testimonials.ts. */

export type TeamMember = {
  name: string;
  role: string;
  department: "Leadership" | "Engineering" | "Design" | "Marketing";
  bio: string;
  /** Replace with `/images/team/their-name.jpg` when photos are ready. */
  image: string;
  linkedin?: string;
};

/** Swap each member's image path when you have real photos. */
export const TEAM_PHOTO_PLACEHOLDER = "/images/team/placeholder.svg";

export const TEAM_INTRO =
  "Engineers, designers, and marketers under one roof in Kashmir, working with clients across India and worldwide. You work directly with the people building and promoting your product.";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Khalid Jan",
    role: "Director & CEO",
    department: "Leadership",
    bio: "Leads Altveen Technologies with a focus on software, digital marketing, and long-term client partnerships.",
    image: "/images/team/khalid-jan.jpeg",
  },
  {
    name: "Sheikh Arfat",
    role: "Leadership & Direction",
    department: "Leadership",
    bio: "Guides company strategy, client partnerships, and the direction behind every Altveen project.",
    image: TEAM_PHOTO_PLACEHOLDER,
  },
  {
    name: "Khalid Jan",
    role: "Backend Engineer",
    department: "Engineering",
    bio: "Builds APIs, databases, and server-side systems that power reliable, scalable products.",
    image: "/images/team/khalid-jan.jpeg",
  },
  {
    name: "Syed Owais",
    role: "Backend Engineer",
    department: "Engineering",
    bio: "Develops backend services, integrations, and infrastructure that keep applications fast and secure.",
    image: "/images/team/syed-owais.jpeg",
  },
  {
    name: "Umar Nazir",
    role: "Frontend Engineer",
    department: "Engineering",
    bio: "Builds responsive, user-focused interfaces with clean code and sharp attention to detail.",
    image: "/images/team/umar-nazir.jpeg",
  },
  {
    name: "Ummar Farooq",
    role: "Frontend Engineer",
    department: "Engineering",
    bio: "Crafts responsive interfaces and user experiences that feel polished across web and mobile.",
    image: "/images/team/ummar-farooq.jpeg",
  },
  {
    name: "Suhail Mohammed",
    role: "Frontend Engineer",
    department: "Engineering",
    bio: "Turns designs into clean, performant front-end code with attention to detail and usability.",
    image: "/images/team/suhail-mohammed.jpeg",
  },
  {
    name: "Ummar Farooq",
    role: "Design & Branding",
    department: "Design",
    bio: "Shapes brand identity, UI/UX, and visual design so every product looks clear, modern, and trustworthy.",
    image: "/images/team/ummar-farooq.jpeg",
  },
  {
    name: "Sheikh Arfat",
    role: "Design & Branding",
    department: "Design",
    bio: "Shapes brand direction, visual identity, and design standards across client projects and Altveen itself.",
    image: TEAM_PHOTO_PLACEHOLDER,
  },
  {
    name: "Sheikh Arfat",
    role: "Digital Marketing",
    department: "Marketing",
    bio: "Leads growth strategy, campaigns, and marketing direction for client brands and Altveen itself.",
    image: TEAM_PHOTO_PLACEHOLDER,
  },
  {
    name: "Suhail Mohammed",
    role: "Digital Marketing",
    department: "Marketing",
    bio: "Runs social, content, and campaign execution with a focus on reach, leads, and measurable results.",
    image: "/images/team/suhail-mohammed.jpeg",
  },
];

export const TEAM_DEPARTMENTS = [
  "Leadership",
  "Engineering",
  "Design",
  "Marketing",
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "+", label: "Happy Clients" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Countries Served" },
] as const;

export const INDUSTRIES = [
  "E-commerce",
  "Restaurants",
  "Schools & EdTech",
  "Healthcare",
  "FinTech",
  "SaaS",
  "Retail",
  "Hospitality & Hotels",
  "Professional Services",
  "Real Estate",
  "Non-profit",
  "Startups",
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "A short call to understand your business, goals and timelines, then a proposal with scope, timeline and pricing.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes and UI design, reviewed with you before a line of production code gets written.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Development in visible increments, with a staging link you can check at any point in the sprint.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "QA, launch, then ongoing marketing, performance monitoring and iteration on what the data shows.",
  },
] as const;

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What services does Altveen provide?",
    answer:
      "We build custom web and mobile applications, Shopify / WordPress / Webflow sites, AI chatbots and automation tools, and provide end-to-end digital marketing including SEO, content, social media and performance ads.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "We usually begin with a short discovery call to understand your business, goals and timelines. After that we share a proposal or roadmap with scope, rough timelines, and pricing, and once approved we move into design and implementation.",
  },
  {
    question: "Do you work with clients outside Kashmir and India?",
    answer:
      "Yes. We are based in Kashmir but work with clients across India, the US and other regions. Communication usually happens via email, WhatsApp and video calls, and we are comfortable working across time zones.",
  },
  {
    question: "Which tech stack and platforms do you use?",
    answer:
      "For the web we work with modern JavaScript frameworks such as React and Next.js, alongside Python and Node on the backend. For websites and e-commerce we work with Shopify, WordPress and Webflow, choosing the platform that best fits your use case.",
  },
  {
    question: "Can you handle design as well as development?",
    answer:
      "Yes. Our team includes designers and developers, so we can handle UI/UX, branding and visual design along with the engineering work. If you already have designs, we can also work with your existing brand and design system.",
  },
  {
    question: "Do you provide ongoing support and marketing after launch?",
    answer:
      "We usually stay with clients after launch for maintenance, improvements and marketing. This can include performance monitoring, new features, SEO, content, social media and ad campaigns depending on what you need.",
  },
];
