"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type Item = { src: string; full: string; isVideo: boolean };

export default function MediaGrid({ items, title }: { items: Item[]; title: string }) {
    const [index, setIndex] = useState<number | null>(null);
    const dialog = useRef<HTMLDialogElement>(null);

    const current = index === null ? null : items[index];
    const open = (i: number) => {
        setIndex(i);
        dialog.current?.showModal();
    };
    const close = () => dialog.current?.close();
    const step = (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length));

    const arrow = "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-2xl hover:bg-white/20";

    return (
        <>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {items.map(({ src, isVideo }, i) => (
                    <li key={src}>
                        <button
                            onClick={() => open(i)}
                            aria-label={`Open ${isVideo ? "video" : "photo"} ${i + 1}`}
                            className="group relative block aspect-square w-full overflow-hidden rounded-lg border border-border"
                        >
                            {isVideo ? (
                                <>
                                    <video src={src} muted preload="metadata" className="size-full object-cover" />
                                    <span className="absolute inset-0 grid place-items-center bg-black/30 text-3xl text-white">▶</span>
                                </>
                            ) : (
                                <Image
                                    src={src}
                                    alt={`${title} work ${i + 1}`}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, 50vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            <dialog
                ref={dialog}
                onClose={() => setIndex(null)}
                onKeyDown={(e) => {
                    if (e.key === "ArrowRight") step(1);
                    if (e.key === "ArrowLeft") step(-1);
                }}
                className="m-0 h-dvh max-h-none w-dvw max-w-none bg-black/95 p-0 text-white"
            >
                <div
                    onClick={(e) => e.target === e.currentTarget && close()}
                    className="relative flex size-full items-center justify-center p-4 sm:p-12"
                >
                    {current &&
                        (current.isVideo ? (
                            <video key={current.full} src={current.full} controls autoPlay className="max-h-full max-w-full" />
                        ) : (
                            <div className="relative size-full">
                                <Image
                                    key={current.full}
                                    src={current.full}
                                    alt={`${title} work`}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                />
                            </div>
                        ))}

                    <button onClick={close} aria-label="Close" className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-white/10 text-xl hover:bg-white/20">
                        ✕
                    </button>
                    {items.length > 1 && (
                        <>
                            <button onClick={() => step(-1)} aria-label="Previous" className={`${arrow} left-3`}>‹</button>
                            <button onClick={() => step(1)} aria-label="Next" className={`${arrow} right-3`}>›</button>
                        </>
                    )}
                </div>
            </dialog>
        </>
    );
}