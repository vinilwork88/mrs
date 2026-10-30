"use client";

import type { FormEvent } from "react";
import Icon from "./Icon";

const WHATSAPP = "919493015544";
const services = ["Tattoos", "Hairstyles", "Men's Beauty Parlour"];

const field =
    "min-h-12 w-full rounded-md border border-border bg-background px-4 text-sm placeholder:text-muted focus:border-accent focus:outline-none";

export default function ContactForm() {
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const d = Object.fromEntries(new FormData(form)) as Record<string, string>;

        const text = [
            "New enquiry from the website",
            `Name: ${d.name}`,
            `Email: ${d.email}`,
            d.service && `Service: ${d.service}`,
            `Message: ${d.message}`,
        ]
            .filter(Boolean)
            .join("\n");

        window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
        form.reset();
    };

    return (
        <form onSubmit={onSubmit} className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-lg font-bold uppercase tracking-wider">Send us a message</h3>
            <p className="mt-1 mb-6 text-xs text-muted">Fill in the form and we&apos;ll get back to you as soon as possible.</p>

            <div className="grid gap-4">
                <input name="name" required aria-label="Your name" placeholder="Your Name *" className={field} />
                <input name="email" type="text" required aria-label="Your email" placeholder="Your Email *" className={field} />
                <select name="service" aria-label="Service" defaultValue="" className={field}>
                    <option value="">Select Service</option>
                    {services.map((s) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </select>
                <textarea
                    name="message"
                    required
                    aria-label="Your message"
                    placeholder="Your Message *"
                    className={`${field} min-h-32 py-3`}
                />
                <button
                    type="submit"
                    className="inline-flex cursor-pointer min-h-12 items-center justify-center gap-2 rounded-md bg-[#4fd1d1] text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                    <Icon name="send" className="size-4" />
                    Send Message
                </button>
            </div>
        </form>
    );
}