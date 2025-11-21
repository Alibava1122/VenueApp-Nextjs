import Image from "next/image";

export type Venue = {
  title: string;
  description: string;
  image: string;
};

type VenueCardProps = {
  venue: Venue;
};

export function VenueCard({ venue }: VenueCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-white/5 backdrop-blur-lg transition hover:-translate-y-1 hover:border-white/20">
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
  );
}

