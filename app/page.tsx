import { Header } from "./components/Header";
import { SearchFilters } from "./components/SearchFilters";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      <Header />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 sm:gap-6 px-4 pt-28 sm:pt-0">
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

        <div className="w-full max-w-[1100px] px-2 sm:px-4 mt-4 sm:mt-8">
          <SearchFilters />
        </div>
      </div>
    </main>
  );
}
