type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

type VoordeelItem = {
  day: string;
  item: string;
  price: string;
};

type MenuContentProps = {
  title: string;
  subtitle: string;
  voordeelMenu: VoordeelItem[];
  categories: MenuCategory[];
};

export default function MenuContent({
  title,
  subtitle,
  voordeelMenu,
  categories,
}: MenuContentProps) {
  return (
    <main className="bg-[#111111] text-white">
      <section className="border-b border-white/10 bg-black py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
            Alegria Menu
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-neutral-300">{subtitle}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
              Voordeel menu
            </p>
            <h2 className="mt-3 text-3xl font-bold">Dagelijks voordeel</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {voordeelMenu.map((deal) => (
              <div
                key={deal.day}
                className="rounded-2xl border border-[#4CFF00]/20 bg-[#1a1a1a] p-6"
              >
                <div className="inline-block rounded-full bg-[#4CFF00] px-4 py-2 text-sm font-bold uppercase text-black">
                  {deal.day}
                </div>
                <p className="mt-4 text-lg font-semibold">{deal.item}</p>
                <p className="mt-2 text-[#C1121F] font-bold">{deal.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((category) => (
              <section key={category.title}>
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="text-3xl font-bold text-[#4CFF00]">
                    {category.title}
                  </h2>
                  <div className="h-[2px] flex-1 bg-[#4CFF00]/30" />
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="shrink-0 font-bold text-[#C1121F]">
                          {item.price}
                        </span>
                      </div>

                      {item.description ? (
                        <p className="mt-3 text-sm leading-6 text-neutral-400">
                          {item.description}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}