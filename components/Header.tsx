"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const PHONE = { href: "tel:+919493015544", label: "94930 15544" };

const links = [
    { href: "/#services", label: "Services" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/10 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* <Link
                    href="/"
                    onClick={close}
                    className="font-display text-xl font-bold tracking-widest sm:text-2xl"
                >
                    MRS <span className="text-accent">TATTOO</span>
                </Link> */}

                <Link href="/" onClick={close} className="leading-none">
                    <span className="block text-2xl font-bold tracking-widest">MRS</span>
                    <span className="mt-1 block text-xs uppercase tracking-widest text-accent">
                        Tattoo &amp; Hair
                    </span>
                </Link>

                <nav aria-label="Main" className="hidden gap-8 text-sm uppercase tracking-wider md:flex">
                    {links.map(({ href, label }) => (
                        <Link key={href} href={href} className="transition-colors hover:text-accent">
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <a
                        href={PHONE.href}
                        className="hidden min-h-11 items-center border border-accent px-5 text-sm uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-background md:inline-flex"
                    >
                        Call {PHONE.label}
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="inline-flex size-11 items-center justify-center border border-border md:hidden"
                    >
                        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" aria-hidden="true">
                            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>

            {open && (
                <nav id="mobile-menu" aria-label="Mobile" className="border-t border-border md:hidden">
                    <div className="flex flex-col px-4 py-3 sm:px-6">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={close}
                                className="flex min-h-12 items-center border-b border-border text-sm uppercase tracking-wider"
                            >
                                {label}
                            </Link>
                        ))}
                        <a
                            href={PHONE.href}
                            className="mt-4 flex min-h-12 items-center justify-center bg-accent text-sm font-medium uppercase tracking-wider text-background"
                        >
                            Call {PHONE.label}
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
}