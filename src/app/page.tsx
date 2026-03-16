import HeroSlider from "@/components/home/HeroSlider";
import QuickInfoBar from "@/components/home/QuickInfoBar";
import FeaturedVideos from "@/components/home/FeaturedVideos";
import LocationCards from "@/components/home/LocationCards";
import StorySection from "@/components/home/StorySection";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <QuickInfoBar />
      <FeaturedVideos />
      <LocationCards />
      <StorySection />

    </main>
  );
}