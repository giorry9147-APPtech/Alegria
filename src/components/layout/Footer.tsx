import Link from "next/link";
import { locations } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold text-[#4CFF00]">Alegria</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#C1121F]">
              Sinds 1983
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              Populaire fastfoodketen in Suriname, bekend om crispy fried
              chicken, burgers, snacks, combo deals en ijs.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4CFF00]">
              Navigatie
            </h4>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-neutral-300">
              <Link href="/" className="transition hover:text-[#4CFF00]">
                Home
              </Link>
              <Link href="/menu" className="transition hover:text-[#4CFF00]">
                Menu
              </Link>
              <Link
                href="/reservations"
                className="transition hover:text-[#4CFF00]"
              >
                Reservations
              </Link>
              <Link href="/about" className="transition hover:text-[#4CFF00]">
                About
              </Link>
              <Link href="/contact" className="transition hover:text-[#4CFF00]">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4CFF00]">
              Locaties
            </h4>

            <div className="mt-4 space-y-4 text-sm text-neutral-300">
              {locations.map((location) => (
                <div key={location.name}>
                  <p className="font-semibold text-white">{location.name}</p>
                  <p className="mt-1 text-neutral-400">{location.address}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4CFF00]">
              Contact
            </h4>

            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <a
                href="tel:+597497717"
                className="block transition hover:text-[#4CFF00]"
              >
                (597) 497-717
              </a>
              <a
                href="tel:+597472785"
                className="block transition hover:text-[#4CFF00]"
              >
                (597) 472-785
              </a>
              <a
                href="https://www.facebook.com/OfficialAlegriaSu/photos/"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-[#4CFF00]"
              >
                Facebook
              </a>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-block rounded-full bg-[#C1121F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
            >
              Neem contact op
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Alegria. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}