import Link from "next/link";
import { locations } from "@/data/locations";
import PageBanner from "@/components/ui/PageBanner";

export default function AboutPage() {
  return (
    <main className="bg-[#111111] text-white">
      <PageBanner
        label="Alegria"
        title="About"
        subtitle="Surinaamse fastfood sinds 1983"
        image="/images/banners/about.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Ons verhaal
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Een vertrouwde naam voor snelle, lekkere maaltijden
            </h2>
          </div>

          <div className="space-y-5 text-neutral-300 leading-8">
            <p>
              Alegria is uitgegroeid tot een populaire fastfoodketen in
              Suriname. Het merk staat bekend om een herkenbare stijl, sterke
              smaak en een menu met burgers, snacks, combo deals, ijs en meer.
            </p>

            <p>
              Met locaties aan de <span className="text-white">Keizerstraat 49</span> en de{" "}
              <span className="text-white">Johannes Mungrastraat</span> is
              Alegria bereikbaar voor gasten die snel willen bestellen, afhalen
              of langskomen voor een maaltijd.
            </p>

            <p>
              De website is gebouwd om bezoekers snel de belangrijkste informatie
              te laten vinden: menu, locatie, contact, bestellen en praktische
              updates. Geen PDF-menu’s, maar duidelijke HTML-pagina’s die beter
              werken op mobiel en desktop.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Waar je ons vindt
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Onze locaties
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.name}
                className="rounded-3xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8"
              >
                <h3 className="text-2xl font-bold">{location.name}</h3>

                <p className="mt-2 font-medium text-[#4CFF00]">
                  {location.address}
                </p>

                <p className="mt-4 text-neutral-400 leading-7">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Extra voor families
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Kinderarcade in renovatie
            </h2>

            <p className="mt-4 max-w-3xl text-neutral-300 leading-8">
              De kinderarcade in het centrum is momenteel in renovatie. Hiermee
              werkt Alegria verder aan een plek waar eten en beleving samenkomen
              voor gezinnen en bezoekers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}