import { getImageProps } from "next/image";

const common = {
  alt: "Artist at work in the MRS Tattoo studio",
  fill: true,
  priority: true,
  sizes: "100vw",
};

export default function Hero() {
  const {
    props: { srcSet: desktop },
  } = getImageProps({ ...common, src: "/hero2.png" });
  const { 
    props: { srcSet: mobile, ...img },
  } = getImageProps({ ...common, src: "/hero-mobile2.png" });

  return (
    <main>
      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden text-center text-white">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source media="(max-width: 767px)" srcSet={mobile} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img {...img} alt={common.alt} className="-z-10 object-cover" />
        </picture>
        <div className="absolute inset-0 -z-10 bg-black/60" />



        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#4fd1d1] sm:text-sm">
            Tattoos · Hair Styles · Men&apos;s Beauty Parlour
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            MRS Tattoos &amp; Hair Styles
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/80 sm:text-lg">
            Custom tattoos, sharp cuts and grooming under one roof. Walk in, or message us your idea first.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/919493015544"
              className="inline-flex min-h-12 items-center justify-center bg-[#4fd1d1] px-8 text-sm font-medium uppercase tracking-wider text-[#0b0b0c] transition-opacity hover:opacity-90"
            >
              Book on WhatsApp
            </a>
            <a
              href="tel:+919493015544"
              className="inline-flex min-h-12 items-center justify-center border border-white px-8 text-sm uppercase tracking-wider transition-colors hover:bg-white hover:text-black"
            >
              Call 94930 15544
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}