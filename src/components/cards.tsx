import Image from "next/image";
import Link from "next/link";

import type { ServiceItem, TeamMember, ValueItem } from "@/lib/content";
import { TEAM_PHOTO_PLACEHOLDER } from "@/lib/content";
import type { Client, Post, Testimonial } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";
import { StarRating } from "@/components/ui";

// ---------------------------------------------------------------------------
// Service / value tile, image on top, copy below
// ---------------------------------------------------------------------------
export function ImageCard({ item }: { item: ServiceItem | ValueItem }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-800/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-[0_20px_50px_-20px] hover:shadow-brand-500/25">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-cloud">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          {item.description}
        </p>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Team member
// ---------------------------------------------------------------------------
function memberInitials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamCard({ member }: { member: TeamMember }) {
  const isPlaceholder = member.image === TEAM_PHOTO_PLACEHOLDER;

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-800/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-[0_20px_50px_-20px] hover:shadow-brand-500/25">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-800">
        {isPlaceholder ? (
          <div className="flex h-full flex-col items-center justify-center bg-ink-800/80">
            <span className="font-mono text-5xl font-bold tracking-wider text-brand-500/25">
              {memberInitials(member.name)}
            </span>
            <span className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mist">
              Photo coming soon
            </span>
          </div>
        ) : (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-line/80 bg-ink-900/80 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-brand-400 backdrop-blur-sm">
          {member.department}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-cloud">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-brand-400">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-mist">{member.bio}</p>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-mist transition-colors hover:text-brand-400"
          >
            LinkedIn
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Testimonial
// ---------------------------------------------------------------------------
export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-line bg-ink-800/60 p-7 transition-colors hover:border-brand-500/40">
      <StarRating rating={item.rating} />
      <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-cloud/90">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-5">
        <p className="font-semibold text-brand-400">{item.client_name}</p>
        <p className="mt-1 text-sm text-mist">{item.detail}</p>
      </figcaption>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// Client showcase
// ---------------------------------------------------------------------------
export function ClientCard({ client }: { client: Client }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-ink-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-[0_20px_50px_-20px] hover:shadow-brand-500/25">
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
        {client.image_url ? (
          <Image
            src={client.image_url}
            alt={client.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        {client.sector ? (
          <p className="absolute bottom-3 left-4 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-cloud/90">
            {client.sector}
          </p>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-cloud">{client.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mist">
          {client.description}
        </p>
        {client.url ? (
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-brand-500"
          >
            Visit website
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Blog card
// ---------------------------------------------------------------------------
export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-800/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-[0_20px_50px_-20px] hover:shadow-brand-500/25"
    >
      {post.image_url ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image_url}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-brand-500">
          {post.category}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-cloud transition-colors group-hover:text-brand-400">
          {post.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-mist">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs text-mist">
            {formatDate(post.published_at)} · {post.read_time}
          </span>
          <ArrowRightIcon className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
