import { Header } from "./components/Header";
import { SearchFilters } from "./components/SearchFilters";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-black/60" aria-hidden="true" />
      <Header />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-7">
          <div
            className="relative flex flex-col items-center justify-center text-center"
            style={{ fontFamily: '"Poppins"' }}
          >
            <p className="text-[65px] font-semibold tracking-wide">Celebrate in venues</p>
            <p className="text-[65px] font-semibold tracking-wide mt-[-20]">big and small</p>
        </div>
        <SearchFilters />
      </div>
    </main>
  );
}
