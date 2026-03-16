import MenuContent from "@/components/menu/MenuContent";
import PageBanner from "@/components/ui/PageBanner";
import { sharedMenu } from "@/data/sharedMenu";

export default function MenuGow2Page() {
  return (
    <main className="bg-[#111111] text-white">
      <PageBanner
        label="Alegria"
        title="Menu GOW2"
        subtitle="Voorlopige menukaart voor demo en presentatie van Alegria GOW2."
        image="/images/banners/menu.jpg"
      />

      <MenuContent
        title="Menu GOW2"
        subtitle="Voorlopige menukaart voor demo en presentatie van Alegria GOW2."
        voordeelMenu={sharedMenu.voordeelMenu}
        categories={sharedMenu.categories}
      />
    </main>
  );
}