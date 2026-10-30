import Image from "next/image";
import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";

const services = [
  {
    slug: "tattoos",
    icon: "pen",
    title: "Tattoos",
    tagline: "Your story. On your skin.",
    text: "We create custom and unique tattoos that hold meaning. Whether it's your first tattoo or your next masterpiece, our artists bring your ideas to life with precision and care.",
  },
  {
    slug: "hairstyles",
    icon: "scissors",
    title: "Hairstyles",
    tagline: "Fresh cuts. Sharper you.",
    text: "Get the perfect cut and style that matches your personality. From classic looks to trendy styles, our professional stylists make sure you always stay ahead.",
  },
  {
    slug: "beauty",
    icon: "user",
    title: "Men's Beauty Parlour",
    tagline: "Grooming beyond the basics.",
    text: "Stay fresh, clean and confident with our premium grooming services. From facials to beard care, we take care of the details so you always look your best.",
  },
] satisfies { slug: string; icon: IconName; title: string; tagline: string; text: string }[];

type Service = (typeof services)[number];

const trust: { icon: IconName; label: string }[] = [
  { icon: "award", label: "Experienced artists & stylists" },
  { icon: "shield", label: "Hygienic & safe environment" },
  { icon: "gem", label: "Premium products & equipment" },
  { icon: "users", label: "Personalized care & attention" },
];

function Thumbs({ slug, className }: { slug: string; className: string }) {
  return (
    <div className={className}>
      {[1, 2, 3].map((n) => (
        <div key={n} className="relative size-16 shrink-0 overflow-hidden rounded-md border border-gold/60 md:size-20">
          <Image src={`/services/${slug}-${n}.png`} alt="" fill sizes="80px" className="object-cover" />
        </div>
      ))}
    </div>
  );
}

function Details({ service, onImage, footer }: { service: Service; onImage?: boolean; footer?: ReactNode }) {
  const accent = onImage ? "text-gold" : "text-accent";
  return (
    <div>
      <Icon name={service.icon} className={`mb-3 size-9 ${accent}`} />
      <h3 className="text-2xl font-bold uppercase">{service.title}</h3>
      <p className={`mt-1 text-sm font-medium uppercase tracking-wider ${accent}`}>{service.tagline}</p>
      <p className="mt-4 max-w-sm text-sm opacity-80">{service.text}</p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <a href="/#gallery" className={`inline-flex min-h-11 items-center text-sm font-medium underline-offset-4 hover:underline ${accent}`}>
          Learn more →
        </a>
        {footer}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services">
      {/* Banner */}
      <div className="relative isolate overflow-hidden text-white">
        <Image src="/services/banner.png" alt="" fill sizes="100vw" className="-z-5 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-black/20" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Our services</p>
          <h2 className="text-3xl font-bold uppercase leading-tight sm:text-5xl">
            More than just
            <br />a look, <span className="text-gold">it&apos;s a lifestyle</span>
          </h2>
          <div className="my-6 h-px w-12 bg-gold" />
          <p className="max-w-lg text-white/80">
            At MRS Tattoos &amp; Hair Styles, we offer premium services to help you look and feel your best. From bold
            tattoos to fresh hairstyles and complete grooming, we&apos;ve got you covered.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Phones and tablets: rows */}
        <div className="lg:hidden">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className={`flex flex-col gap-6 border-b border-border py-10 last:border-0 md:items-center md:gap-4 ${
                i === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="md:w-1/3">
                <Details service={s} />
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-lg md:aspect-auto md:h-72 md:flex-1">
                <Image src={`/services/${s.slug}.png`} alt={s.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <Thumbs slug={s.slug} className="flex gap-2 md:flex-col" />
            </article>
          ))}
        </div>

        {/* Laptops: cards */}
        <div className="hidden gap-6 py-16 lg:grid lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="relative isolate flex min-h-[36rem] flex-col justify-end overflow-hidden rounded-lg border border-gold/40 p-6 text-white"
            >
              <Image src={`/services/${s.slug}.png`} alt={s.title} fill sizes="33vw" className="-z-10 object-cover" />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-black via-black/70 to-transparent" />
              <Details service={s} onImage footer={<Thumbs slug={s.slug} className="flex gap-2" />} />
            </article>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-y border-border bg-surface">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
          {trust.map(({ icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-3 text-center text-xs uppercase tracking-wider lg:flex-row lg:justify-center"
            >
              <Icon name={icon} className="size-9 shrink-0 text-accent" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to action */}
      <div className="px-4 py-16 text-center sm:px-6">
        <h3 className="text-sm font-bold uppercase tracking-[0.4em]">Ready for a fresh look?</h3>
        <p className="mt-2 text-sm text-muted">Book your appointment now on WhatsApp</p>
        <a
          href="https://wa.me/919493015544"
          className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-gold px-8 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          <Icon name="chat" className="size-5" />
          Book on WhatsApp
        </a>
        <div className="mx-auto mt-14 flex max-w-3xl items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-gold/50" />
          <span className="text-2xl font-bold italic text-accent">MRS</span>
          <span className="text-left text-xs leading-tight text-muted">
            Tattoos &amp;
            <br />
            Hair Styles
          </span>
          <span className="h-px flex-1 bg-gold/50" />
        </div>
      </div>
    </section>
  );
}