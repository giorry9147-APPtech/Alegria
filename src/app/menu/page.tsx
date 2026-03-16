import Link from "next/link";
import { locations } from "@/data/locations";
import PageBanner from "@/components/ui/PageBanner";

const menuLocations = [
  {
    name: "Centrum",
    address: "Keizerstraat 49",
    description:
      "Bekijk het menu van Alegria Centrum en ontdek burgers, snacks, combo deals, ijs en meer.",
    menuHref: "/menu/centrum",
    mapsHref:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x8d09cab5eeefffff:0x35d7e0056d6a39c7?entry=s&sa=X&ved=2ahUKEwjZjI2S6KKTAxXD3wIHHQfODrcQ4kB6BAgZEAA&hl=nl",
  },
  {
    name: "GOW2",
    address: "Johannes Mungrastraat",
    description:
      "Bekijk het menu van Alegria GOW2 met dezelfde demo menukaart voor presentatie en verkoop.",
    menuHref: "/menu/gow2",
    mapsHref:
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x8d09cb0d94b76cf7:0x4c93a79da63324e6?entry=s&sa=X&ved=2ahUKEwjxgry_6aKTAxVWzwIHHYObAeQQ4kB6BAgZEAA&hl=nl",
  },
];

export default function MenuPage() {
  return (
    <main className="bg-[#111111] text-white">
      <PageBanner
        label="Alegria"
        title="Menu"
        subtitle="Bekijk onze burgers, snacks en meer"
        image="/images/banners/menu.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {menuLocations.map((location) => (
              <article
                key={location.name}
                className="rounded-3xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8 shadow-sm transition hover:border-[#4CFF00]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4CFF00]">
                  Locatie
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {location.name}
                </h2>

                <p className="mt-2 text-base font-medium text-[#C1121F]">
                  {location.address}
                </p>

                <p className="mt-5 leading-7 text-neutral-400">
                  {location.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}