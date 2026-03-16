import Image from "next/image";
import Link from "next/link";
import { locations } from "@/data/locations";
import ReservationForm from "@/components/reservations/ReservationForm";

export default function ReservationsPage() {
  return (
    <main className="bg-[#111111] text-white">
      <section className="relative h-[320px] w-full md:h-[420px]">
        <Image
          src="/images/banners/reservations.jpg"
          alt="Alegria reserveren en bestellen"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
                Reserveren & Bestellen
              </p>

              <h1 className="mt-3 text-4xl font-bold md:text-5xl">
                Neem contact op met Alegria
              </h1>

              <p className="mt-4 text-base leading-7 text-neutral-200 md:text-lg">
                Neem contact op voor bestellingen, vragen en meer informatie.
                Kies je locatie en gebruik telefoon, Google Maps of onze contactopties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4CFF00]">
              Telefoon
            </p>
            <a
              href="tel:+597497717"
              className="mt-3 block text-2xl font-bold text-white transition hover:text-[#4CFF00]"
            >
              (597) 497-717
            </a>
            <a
              href="tel:+597472785"
              className="mt-2 block text-lg text-neutral-300 transition hover:text-[#4CFF00]"
            >
              (597) 472-785
            </a>
          </div>

          <div className="rounded-2xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4CFF00]">
              Bestellen
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Ride Eats App
            </p>
            <p className="mt-2 text-neutral-400">
              Bestel eenvoudig via Ride Eats voor snelle levering.
            </p>
          </div>

          <div className="rounded-2xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4CFF00]">
              Facebook
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              Acties & updates
            </p>
            <a
              href="https://www.facebook.com/OfficialAlegriaSu/photos/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full border border-[#4CFF00] px-5 py-3 text-sm font-semibold text-[#4CFF00] transition hover:bg-[#4CFF00] hover:text-black"
            >
              Bekijk Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Kies je locatie
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Bestellen of langskomen
            </h2>

            <p className="mt-4 text-neutral-400">
              Kies de locatie die het beste bij je past. Je kunt het menu bekijken
              of direct de locatie openen in Google Maps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.name}
                className="rounded-3xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8 transition hover:border-[#4CFF00]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4CFF00]">
                  Locatie
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  {location.name}
                </h3>

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

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
                Reserveren
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Reserveer een tafel
              </h2>

              <p className="mt-4 text-neutral-400 leading-7">
                Gebruik het formulier om een reservering te maken bij Alegria.
                Ons team neemt contact met je op om de reservering te bevestigen.
              </p>
            </div>

            <ReservationForm />

          </div>

        </div>
      </section>

      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Praktische info
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Snel en duidelijk contact
            </h2>

            <div className="mt-6 space-y-4 text-neutral-300">
              <p>
                Voorlopig werkt deze pagina als contact- en bestelpagina. Dat is
                ideaal voor een demo website en ook praktisch voor een fastfoodconcept.
              </p>

              <p>
                Later kun je hier nog extra functies aan toevoegen, zoals een
                reserveringsformulier, WhatsApp knop of directe bestelmodule.
              </p>

              <p>
                De kinderarcade in het centrum is momenteel in renovatie.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Direct contact
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Bel of bekijk onze socials
            </h3>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="tel:+597497717"
                className="rounded-full bg-[#C1121F] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
              >
                Bel (597) 497-717
              </a>

              <a
                href="tel:+597472785"
                className="rounded-full bg-[#C1121F] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
              >
                Bel (597) 472-785
              </a>

              <a
                href="https://www.facebook.com/OfficialAlegriaSu/photos/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#4CFF00] px-6 py-3 text-center font-semibold text-[#4CFF00] transition hover:bg-[#4CFF00] hover:text-black"
              >
                Ga naar Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}