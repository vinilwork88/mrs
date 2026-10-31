import { Suspense } from "react";
import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";
import { categories } from "@/lib/categories";
import MediaGrid, { type Item } from "@/components/MediaGrid";

type Resource = { public_id: string; version: number; format: string; created_at: string };
type Entry = Item & { createdAt: string };

const { CLOUDINARY_CLOUD_NAME: CLOUD, CLOUDINARY_API_KEY: KEY, CLOUDINARY_API_SECRET: SECRET } = process.env;
const auth = Buffer.from(`${KEY}:${SECRET}`).toString("base64");

async function list(slug: string, type: "image" | "video"): Promise<Entry[]> {
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD}/resources/${type}/tags/${slug}?max_results=100`,
        { headers: { Authorization: `Basic ${auth}` } },
    );
    if (!res.ok) {
        console.log("Cloudinary list failed:", type, slug, res.status);
        return [];
    }

    const { resources } = (await res.json()) as { resources: Resource[] };
    const base = `https://res.cloudinary.com/${CLOUD}/${type}/upload/q_auto`;

    return resources.map((r) => {
        const path = `v${r.version}/${r.public_id}`;
        if (type === "video") {
            const src = `${base}/${path}.mp4`;
            return { src, full: src, isVideo: true, createdAt: r.created_at };
        }
        return {
            src: `${base},c_limit,w_1200/${path}.${r.format}`,
            full: `${base},c_limit,w_2000/${path}.${r.format}`,
            isVideo: false,
            createdAt: r.created_at,
        };
    });
}

async function getMedia(slug: string): Promise<Entry[]> {
    "use cache";
    cacheLife("minutes");

    const [images, videos] = await Promise.all([list(slug, "image"), list(slug, "video")]);
    return [...images, ...videos].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function generateStaticParams() {
    return categories.map(({ slug }) => ({ category: slug }));
}

async function Category({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const item = categories.find((c) => c.slug === category);
    if (!item) notFound();

    const media = await getMedia(item.slug);

    return (
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <h1 className="text-3xl font-bold uppercase sm:text-5xl">{item.title}</h1>

            {media.length === 0 ? (
                <p className="mt-4 text-muted">Photos and videos coming soon.</p>
            ) : (
                <MediaGrid items={media} title={item.title} />
            )}
        </main>
    );
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    return (
        <Suspense fallback={<main className="mx-auto max-w-7xl px-4 py-16 sm:px-6" />}>
            <Category params={params} />
        </Suspense>
    );
}