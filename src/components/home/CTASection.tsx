import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-4xl text-center px-4 md:px-6 lg:px-8">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4CFF00]">
          Volgende stap
        </p>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          Klaar om je favoriete locatie te bekijken?
        </h2>

        <p className="mt-4 text-neutral-400 leading-7">
          Bezoekers willen snel hun menu, locatie en contactopties zien.
          Kies een Alegria locatie en bekijk het menu.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/menu/centrum"
            className="rounded-full bg-[#C1121F] px-7 py-3 font-semibold text-white transition hover:bg-[#4CFF00] hover:text-black"
          >
            Menu Centrum
          </Link>

          <Link
            href="/menu/gow2"
            className="rounded-full border border-[#4CFF00] px-7 py-3 font-semibold text-[#4CFF00] transition hover:bg-[#4CFF00] hover:text-black"
          >
            Menu GOW2
          </Link>

        </div>

      </div>
    </section>
  );
}