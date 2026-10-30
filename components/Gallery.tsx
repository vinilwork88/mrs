import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Gallery() {
    return (
        <section id="gallery" className="border-t border-border">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Our work</p>
                <h2 className="text-3xl font-bold uppercase sm:text-5xl">Gallery</h2>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {categories.map(({ slug, title, image }) => (
                        <Link
                            key={slug}
                            href={`/${slug}`}
                            className="group relative isolate flex aspect-4/5 flex-col justify-end overflow-hidden rounded-lg border border-border p-6 text-white"
                        >
                            <Image
                                src={image}
                                alt=""
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="-z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                            <h3 className="text-2xl font-bold uppercase">{title}</h3>
                            <span className="mt-2 text-sm font-medium text-[#e8b062]">View gallery →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}