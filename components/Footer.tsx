'use client';

import Link from 'next/link';
import { Monitor, Globe, ChevronUp } from 'lucide-react';
import YanduLogo from './YanduLogo';

const YANDU = 'https://yandu.in';
const PORTFOLIO = 'https://portfolio-frontend-nine-indol.vercel.app/';

const columns = [
    {
        title: 'YANDU DETAILS',
        links: [
            { label: 'yandu.in', href: YANDU },
            { label: 'Website built by Yandu', href: YANDU },
            { label: 'Founder: Vinil', href: PORTFOLIO },
            { label: 'hello@yandu.in', href: 'mailto:hello@yandu.in' },
        ],
    },
    {
        title: 'YANDU SERVICES',
        links: [
            { label: 'Web & App Development', href: '#' },
            { label: 'UI/UX Design', href: '#' },
            { label: 'Logo & Graphic Design', href: '#' },
            { label: 'Video Editing', href: '#' },
            // { label: 'Social Media Strategy', href: '#' },
            // { label: 'Backend, Database & Security', href: '#' },
        ],
    },
    {
        title: 'ABOUT YANDU',
        links: [
            { label: 'About Yandu', href: '#' },
            { label: 'Our Works', href: '#' },
            { label: 'Our Team', href: '#' },
        ],
    },
    {
        title: 'WORK WITH YANDU',
        links: [
            { label: 'Partner with Yandu', href: '#' },
            { label: 'Start a Project', href: '#' },
        ],
    },
];

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.89 5.06 5.06 0 0 0 .09-3.82s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.06 5.06 0 0 0 5 11.11 5.5 5.5 0 0 0 3.5 15c0 5.23 3 6.42 6 6.76A4.8 4.8 0 0 0 8.5 18v-4" />
        <path d="M8 20.5c-3 1-4-1-5-2" />
    </svg>
);

const socials = [
    { href: 'https://www.linkedin.com/in/vineel-dongri-4ab822353/', icon: <LinkedinIcon /> },
    { href: 'https://github.com/vinildongri', icon: <GithubIcon /> },
    { href: PORTFOLIO, icon: <Monitor strokeWidth={2.5} className="w-7 h-7" /> },
    { href: YANDU, icon: <Globe strokeWidth={2.5} className="w-7 h-7" /> },
];

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white pt-24 flex flex-col items-center">
            {/* Top black section */}
            <div className="max-w-6xl w-full px-6 z-10">
                <p className="mb-12 text-center md:text-left text-xs uppercase tracking-[0.4em] text-[#FFCC00]">
                    Website developed by Yandu
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col space-y-4 order-2 md:order-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Need a website, app, <br /> logo or video editing <br /> for your business?
                        </h2>
                        <p className="text-xl text-gray-300">
                            Let&apos;s build one for you using{' '}
                            <a href={YANDU} className="text-white hover:text-blue-600 relative inline-block">
                                yandu.
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FFCC00]" />
                            </a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center space-y-6 order-1 md:order-2">
                        <YanduLogo />
                        <h3 className="text-6xl font-black text-[#FFCC00] tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                            THE END
                        </h3>
                        <div className="bg-[#222] rounded-3xl px-8 py-4 shadow-lg transform -rotate-2 border border-gray-800">
                            <p className="text-gray-400 text-sm text-center leading-relaxed">
                                Yandu is a tech startup building websites, mobile apps, logos and video edits for businesses like yours.
                            </p>
                        </div>
                        {/* <div className="bg-[#222] rounded-3xl px-8 py-4 shadow-lg transform -rotate-2 border border-gray-800">
                            <p className="text-gray-400 text-sm text-center leading-relaxed">
                                Yandu is a tech startup offering web and app development, UI/UX design, logo and graphic design, video editing and social media strategy.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Yellow arch */}
            <div className="w-full">
                <svg viewBox="0 0 1440 180" className="w-full block -mb-1" preserveAspectRatio="none" aria-hidden="true">
                    <path fill="#FFCC00" d="M0,180 Q720,0 1440,180 Z" />
                </svg>
            </div>

            {/* Bottom yellow section */}
            <div className="w-full bg-[#FFCC00] relative flex flex-col items-center pb-4">
                <div className="w-full max-w-6xl px-6 relative z-10 flex flex-col items-center text-black">
                    <div className="flex space-x-8 mb-12">
                        {socials.map(({ href, icon }) => (
                            <Link key={href} href={href} className="hover:scale-110 transition-transform">
                                {icon}
                            </Link>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-12 w-full text-sm font-medium">
                        {columns.map(({ title, links }) => (
                            <div key={title} className="flex flex-col items-start space-y-4">
                                <h4 className="font-bold text-base border-b-2 border-black pb-2 mb-2 inline-block">{title}</h4>
                                {links.map(({ label, href }) => (
                                    <Link key={label} href={href} className="hover:opacity-70 transition-opacity">
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="absolute bottom-8 right-8 bg-[#111] text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg z-20 border border-gray-700"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            </div>
        </footer>
    );
}