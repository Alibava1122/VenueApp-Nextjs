import Image from "next/image";
import { Header } from "./components/Header";
import { SearchFilters } from "./components/SearchFilters";
import { VenueCard, type Venue } from "./components/VenueCard";
import featuredVenuesData from "./data/featuredVenues.json";

const featuredVenues = featuredVenuesData as Venue[];

export default function Home() {
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
            <VenueCard key={venue.title} venue={venue} />
          ))}
        </div>
      </section>
    </main>
  );
}
