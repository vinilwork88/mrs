import Image from "next/image";
import type { ReactNode } from "react";
import ContactForm from "./ContactForm";
import Icon, { type IconName } from "./Icon";

const MAP_URL = "https://www.google.com/maps?q=19.54776382446289,79.63754272460938&z=17&hl=en"; // better: "17.3850, 78.4867" or the full address

const hours = [
  ["Monday – Saturday", "10:00 AM – 10:00 PM"],
  ["Sunday", "11:00 AM – 8:00 PM"],
];

const socials: { icon: IconName; label: string; href: string }[] = [
  { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/mrs_tatoos/" },
  { icon: "facebook", label: "Facebook", href: "https://www.instagram.com/mrs_tatoos/" },
  { icon: "youtube", label: "YouTube", href: "https://www.instagram.com/mrs_tatoos/" },
];

function Info({ icon, title, children }: { icon: IconName; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="grid size-12 shrink-0 place-items-center rounded-full border border-accent text-accent">
        <Icon name={icon} className="size-5" />
      </span>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider">{title}</h3>
        <div className="mt-1 text-sm text-muted">{children}</div>
      </div>
    </li>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="relative isolate overflow-hidden text-white">
        <Image src="/hero.png" alt="" fill sizes="100vw" className="-z-10 object-cover object-right" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/75 to-black/20" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Get in touch</p>
          <h2 className="text-4xl font-bold uppercase sm:text-6xl">
            Contact <span className="text-gold">us</span>
          </h2>
          <div className="my-6 h-px w-12 bg-gold" />
          <p className="max-w-md text-white/80">
            Have a question or want to book an appointment? We&apos;re here to help. Reach out to us through any of the
            channels below.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <ul className="grid content-start gap-8">
          <Info icon="phone" title="Phone">
            <a href="tel:+919493015544" className="hover:text-accent">+91 94930 15544</a>
          </Info>
          <Info icon="chat" title="WhatsApp">
            <a href="https://wa.me/919493015544" className="hover:text-accent">+91 94930 15544</a>
          </Info>
          <Info icon="pin" title="Location">
            <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              MRS Tattoos &amp; Hair Styles
              <br />
              Lonavelly, Telangana 504299
            </a>
          </Info>
          <Info icon="mail" title="Email">
            <a href="mailto:Saipolaji@gmail.com" className="hover:text-accent">Saipolaji@gmail.com</a>
          </Info>
          <Info icon="users" title="Follow us">
            <div className="flex gap-3">
              {socials.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon name={icon} className="size-5" />
                </a>
              ))}
            </div>
          </Info>
        </ul>

        <ContactForm />

        <a
          href={MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-lg border border-border"
        >
          <div className="relative h-64 bg-black lg:h-72">
            <Image
              src="/google-map.png"
              alt="MRS Tattoos & Hair Styles logo"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="flex min-h-12 items-center justify-center gap-2 border-t border-border bg-surface text-sm font-medium text-accent group-hover:underline">
            <Icon name="pin" className="size-4" />
            Open in Google Maps →
          </span>
        </a>

        <div>
          <div className="flex gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-accent text-accent">
              <Icon name="clock" className="size-5" />
            </span>
            <div className="flex-1">
              <h3 className="text-sm font-bold uppercase tracking-wider">Opening hours</h3>
              <dl className="mt-2 grid gap-2 text-sm text-muted">
                {hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4">
                    <dt>{day}</dt>
                    <dd>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p className="mt-10 text-3xl font-bold italic text-accent">See you soon</p>
        </div>
      </div>
    </section>
  );
}