import { locations } from "@/data/locations";
import PageBanner from "@/components/ui/PageBanner";

export default function ContactPage() {
  return (
    <main className="bg-[#111111] text-white">
      <PageBanner
        label="Alegria"
        title="Contact"
        subtitle="Neem contact op met Alegria"
        image="/images/banners/contact.jpg"
      />

      {/* Locations */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <h2 className="mb-10 text-3xl font-bold text-[#4CFF00]">
            Locaties
          </h2>

          <div className="grid gap-8 md:grid-cols-2">

            {locations.map((location) => (
              <div
                key={location.name}
                className="rounded-2xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-8"
              >

                <h3 className="text-2xl font-bold text-white">
                  {location.name}
                </h3>

                <p className="mt-2 text-[#4CFF00] font-medium">
                  {location.address}
                </p>

                <p className="mt-4 text-neutral-400">
                  {location.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4">

                  <a
                    href={location.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#C1121F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
                  >
                    Bekijk op Google Maps
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

          <h2 className="mb-8 text-3xl font-bold text-[#4CFF00]">
            Contact & Bestellen
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Phone */}
            <div className="rounded-2xl bg-[#1a1a1a] p-8 border border-white/10">

              <h3 className="text-xl font-semibold">
                Telefoon
              </h3>

              <p className="mt-4 text-neutral-400">
                Bel ons voor bestellingen of vragen.
              </p>

              <div className="mt-4 space-y-2">

                <a
                  href="tel:+597497717"
                  className="block text-[#4CFF00] hover:underline"
                >
                  (597) 497-717
                </a>

                <a
                  href="tel:+597472785"
                  className="block text-[#4CFF00] hover:underline"
                >
                  (597) 472-785
                </a>

              </div>

            </div>

            {/* Ride Eats */}
            <div className="rounded-2xl bg-[#1a1a1a] p-8 border border-white/10">

              <h3 className="text-xl font-semibold">
                Bestellen
              </h3>

              <p className="mt-4 text-neutral-400">
                Bestel eenvoudig via de Ride Eats app.
              </p>

              <a
                href="#"
                className="inline-block mt-6 rounded-full bg-[#C1121F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
              >
                Ride Eats
              </a>

            </div>

            {/* Facebook */}
            <div className="rounded-2xl bg-[#1a1a1a] p-8 border border-white/10">

              <h3 className="text-xl font-semibold">
                Facebook
              </h3>

              <p className="mt-4 text-neutral-400">
                Volg Alegria op Facebook voor acties en updates.
              </p>

              <a
                href="https://www.facebook.com/OfficialAlegriaSu/photos/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 rounded-full border border-[#4CFF00] px-6 py-3 text-sm font-semibold text-[#4CFF00] transition hover:bg-[#4CFF00] hover:text-black"
              >
                Bekijk Facebook
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}