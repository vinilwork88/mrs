import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { notFound } from "next/navigation";
import { categories } from "@/lib/categories";

function getMedia(slug: string) {
    const dir = path.join(process.cwd(), "public/gallery", slug);
    if (!fs.existsSync(dir)) return [];
    return fs
        .readdirSync(dir)
        .filter((file) => /\.(jpe?g|png|webp|mp4)$/i.test(file))
        .sort();
}

export function generateStaticParams() {
    return categories.map(({ slug }) => ({ category: slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const item = categories.find((c) => c.slug === category);
    if (!item) notFound();

    const media = getMedia(item.slug);

    return (
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h1 className="text-3xl font-bold uppercase sm:text-5xl">{item.title}</h1>

            {media.length === 0 ? (
                <p className="mt-4 text-muted">Photos and videos coming soon.</p>
            ) : (
                <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                    {media.map((file) => {
                        const src = `/gallery/${item.slug}/${file}`;
                        return (
                            <li key={file} className="relative aspect-square overflow-hidden rounded-lg border border-border">
                                {file.toLowerCase().endsWith(".mp4") ? (
                                    <video src={src} controls preload="metadata" className="size-full object-cover" />
                                ) : (
                                    <Image
                                        src={src}
                                        alt={`${item.title} work`}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, 50vw"
                                        className="object-cover"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </main>
    );
}