import Link from "next/link";
import { locations } from "@/data/locations";

export default function LocationCards() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
            Onze locaties
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Bezoek een Alegria locatie
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Ontdek waar je Alegria kunt vinden en bekijk het menu van jouw locatie.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location.name}
              className="rounded-2xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8 transition hover:border-[#4CFF00]"
            >
              <h3 className="text-2xl font-bold text-white">{location.name}</h3>

              <p className="mt-2 font-medium text-[#4CFF00]">
                {location.address}
              </p>

              <p className="mt-4 leading-relaxed text-neutral-400">
                {location.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href={location.menuHref}
                  className="rounded-full bg-[#C1121F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
                >
                  Bekijk Menu
                </Link>

                <a
                  href={location.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#4CFF00] px-6 py-3 text-sm font-semibold text-[#4CFF00] transition hover:bg-[#4CFF00] hover:text-black"
                >
                  Bekijk Locatie
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}