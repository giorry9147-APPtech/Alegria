export default function StorySection() {
  return (
    <section className="bg-[#111111] py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4CFF00]">
            Sinds 1983
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Een vertrouwde naam in Suriname
          </h2>
        </div>

        <div>
          <p className="leading-8 text-neutral-300">
            Alegria ontvangt al sinds 1983 gasten die terugkomen voor burgers,
            snacks, crispy fried chicken, voordeelmenu’s en een herkenbare,
            toegankelijke sfeer.
          </p>

          <p className="mt-5 leading-8 text-neutral-300">
            Met locaties in <span className="text-white">Centrum</span> en{" "}
            <span className="text-white">GOW2</span> vinden bezoekers snel hun
            menu, contactinformatie en locatie. De website is bewust duidelijk,
            snel en mobielvriendelijk opgebouwd.
          </p>

          <div className="mt-8 inline-flex rounded-full bg-[#C1121F] px-4 py-2 text-sm font-medium text-white">
            Kinderarcade centrum momenteel in renovatie
          </div>
        </div>
      </div>
    </section>
  );
}