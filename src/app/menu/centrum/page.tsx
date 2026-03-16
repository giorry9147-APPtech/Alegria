import MenuContent from "@/components/menu/MenuContent";
import PageBanner from "@/components/ui/PageBanner";
import { sharedMenu } from "@/data/sharedMenu";

export default function MenuCentrumPage() {
  return (
    <main className="bg-[#111111] text-white">
      <PageBanner
        label="Alegria"
        title="Menu Centrum"
        subtitle="Voorlopige menukaart voor demo en presentatie van Alegria Centrum."
        image="/images/banners/menu.jpg"
      />

      <MenuContent
        title="Menu Centrum"
        subtitle="Voorlopige menukaart voor demo en presentatie van Alegria Centrum."
        voordeelMenu={sharedMenu.voordeelMenu}
        categories={sharedMenu.categories}
      />
    </main>
  );
}