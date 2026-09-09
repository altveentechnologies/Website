import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  DIFFERENTIATORS,
  TEAM_DEPARTMENTS,
  TEAM_INTRO,
  TEAM_MEMBERS,
} from "@/lib/content";
import { PageHero, Section, SectionHeading, buttonClass } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { TeamCard } from "@/components/cards";
import { StatsStrip } from "@/components/stat-counter";
import { ConsultationSection } from "@/components/consultation-form";
import { FEATURE_ICONS } from "@/components/icons";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Altveen Technologies team, engineers, designers, and marketers in Kashmir building software and running digital marketing for clients worldwide.",
};

export default function TeamPage() {
  const byDepartment = TEAM_DEPARTMENTS.map((department) => ({
    department,
    members: TEAM_MEMBERS.filter((member) => member.department === department),
  })).filter((group) => group.members.length > 0);

  const teamHighlights = DIFFERENTIATORS.filter((item) =>
    ["users", "layers", "chart"].includes(item.icon),
  );

  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people behind your project"
        description="Software and marketing specialists who work as one team, so nothing falls between departments."
      />

      <Section tone="raised">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=90"
                alt="Altveen team collaborating in the studio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Who we are"
              title="Built in Kashmir, shipping worldwide"
              align="left"
            />
            <p className="text-lg leading-relaxed text-cloud/90">{TEAM_INTRO}</p>
            <p className="mt-4 leading-relaxed text-mist">
              From discovery through launch, you get direct access to the people
              doing the work. No layers of account managers, no hand-offs between
              separate agencies.
            </p>
            <Link href="/contact" className={buttonClass({ className: "mt-8" })}>
              Work with us
            </Link>
          </Reveal>
        </div>
      </Section>

      {byDepartment.map(({ department, members }, sectionIndex) => (
        <Section key={department} tone={sectionIndex % 2 === 0 ? "base" : "raised"}>
          <SectionHeading
            eyebrow={department}
            title={
              department === "Leadership"
                ? "Leadership & direction"
                : department === "Engineering"
                  ? "Engineering & product"
                  : department === "Design"
                    ? "Design & brand"
                    : department === "Marketing"
                      ? "Growth & marketing"
                      : "Delivery & support"
            }
            description={
              department === "Leadership"
                ? "Strategy, client partnerships, and the standards behind every engagement."
                : department === "Engineering"
                  ? "Developers who ship reliable software, stores, and integrations."
                  : department === "Design"
                    ? "Designers who make your product and brand feel clear and premium."
                    : department === "Marketing"
                      ? "Marketers focused on traffic, leads, and measurable growth."
                      : "The team that keeps projects moving and clients informed."
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <Reveal
                key={`${member.department}-${member.name}-${member.role}`}
                index={index}
                className="h-full"
              >
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="raised">
        <SectionHeading
          eyebrow="How we work together"
          title="One team, one direction"
          description="What it feels like to partner with Altveen day to day."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {teamHighlights.map((item, index) => {
            const Icon = FEATURE_ICONS[item.icon];
            return (
            <Reveal key={item.title} index={index} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-ink-800/60 p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-cloud">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {item.description}
                </p>
              </article>
            </Reveal>
            );
          })}
        </div>
      </Section>

      <StatsStrip />
      <ConsultationSection />
    </>
  );
}
