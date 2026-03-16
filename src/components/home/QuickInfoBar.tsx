export default function QuickInfoBar() {
  return (
    <section className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 text-sm md:grid-cols-4 md:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#4CFF00]">
            Openingstijden
          </p>
          <p className="mt-2 text-base font-medium text-white">
            Check openingstijden per locatie
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#4CFF00]">
            Locaties
          </p>
          <p className="mt-2 text-base font-medium text-white">
            Centrum, GOW2 (Johannes Mungrastraat), Lelydorp
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#4CFF00]">
            Reserveren
          </p>
          <p className="mt-2 text-base font-medium text-white">
            Bel of reserveer online
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#4CFF00]">
            Arcade
          </p>
          <p className="mt-2 text-base font-medium text-white">
            Kinderarcade centrum renovatie
          </p>
        </div>
      </div>
    </section>
  );
}