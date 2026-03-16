export default function FeaturedVideos() {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-[#4CFF00]">
            Alegria sfeer
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Beleef de sfeer van Alegria
          </h2>

          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Goed eten, gezellige sfeer en entertainment voor iedereen.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Video 1 */}
          <div className="overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[420px] object-cover"
            >
              <source src="/videos/alegria-food.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Video 2 */}
          <div className="overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[420px] object-cover"
            >
              <source src="/videos/alegria-restaurant.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Video 3 */}
          <div className="overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[420px] object-cover"
            >
              <source src="/videos/alegria-arcade.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </div>
    </section>
  );
}