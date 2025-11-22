import heroGarden from "@/assets/images/about-us.jpg"
import { PageBanner } from "@/components/layout/page-baner.component";
import { Services } from "@/components/services/services.component";

export default function Offer() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <PageBanner
          title="Oferta"
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Oferta" }
          ]}
          backgroundImage={heroGarden}
        />
        <Services />
      </main>
    </div>
  );
}
