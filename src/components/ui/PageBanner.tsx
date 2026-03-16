import Image from "next/image";

type PageBannerProps = {
  label?: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function PageBanner({ label, title, subtitle, image }: PageBannerProps) {
  return (
    <header className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative mx-auto flex h-[320px] max-w-7xl flex-col items-center justify-center px-4 text-center sm:h-[420px] md:px-6 lg:px-8">
        {label ? (
          <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
            {label}
          </p>
        ) : null}

        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-base text-neutral-200 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
