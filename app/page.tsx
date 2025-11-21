import Image from "next/image";
import { Header } from "./components/Header";
import { SearchFilters } from "./components/SearchFilters";

export default function Home() {
  const featuredVenues = [
    {
      title: "Skyline Ballroom",
      description:
        "Panoramic rooftop views, dramatic lighting, and flexible seating for any celebration.",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Greenhouse Loft",
      description:
        "Sun-drenched glass walls wrapped in greenery create a serene backdrop for intimate events.",
      image:
        "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Art House Studio",
      description:
        "Industrial-modern studio with rotating art installations and open floor plan for custom layouts.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-black/60"
        aria-hidden="true"
      />
      <Header />

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-2 px-4 pt-28 sm:gap-6 sm:pt-0">
        <div
          className="relative flex flex-col items-center justify-center text-center"
          style={{ fontFamily: '"Poppins"' }}
        >
          <p className="font-semibold tracking-wide text-[40px] sm:text-[55px] md:text-[65px] leading-tight">
            Celebrate in venues
          </p>
          <p className="font-semibold tracking-wide mt-[-10px] text-[40px] sm:text-[55px] md:text-[65px] leading-tight">
            big and small
          </p>
        </div>

        <div className="mt-4 w-full max-w-[1100px] px-2 sm:mt-8 sm:px-4">
          <SearchFilters />
        </div>
      </section>

      <Image
        src="/assets/bottom.png"
        alt="Scroll"
        width={60}
        height={60}
        className="absolute bottom-40 left-1/2 z-20 hidden -translate-x-1/2 pointer-events-none sm:block"
        priority
      />

      <section className="relative z-10 mt-10 bg-gradient-to-b from-black/80 via-black to-black px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Discover
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
            Featured Venues
          </h2>
          <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Scroll down to explore inspirational spaces curated for every
            style—from bold urban lofts to lush garden hideaways. Tap a card to
            start planning your next event.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVenues.map((venue) => (
            <article
              key={venue.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-lg transition hover:-translate-y-1 hover:border-white/20"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 py-8">
                <h3 className="text-2xl font-semibold">{venue.title}</h3>
                <p className="text-base text-white/70">{venue.description}</p>
                <div className="mt-auto text-sm font-semibold text-rose-200">
                  View details →
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
