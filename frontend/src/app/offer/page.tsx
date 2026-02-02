import heroGarden from "@/assets/images/about-us.jpg";
import { PageBanner } from "@/components/layout/page-baner.component";
import { Services } from "@/components/services/services.component";
import { OfferPage } from "@/types/offer-page.types";

async function getOfferPage(): Promise<OfferPage> {
  const path = "/api/offer-page"
  const url = new URL(path, process.env.NEXT_PUBLIC_STRAPI_URL)

  const response = await fetch(url.href)
  const data: OfferPage = await response.json()

  return data
}

export default async function Offer() {
  const data = await getOfferPage()

  const offerPageData = data.data
  

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
        <Services data={offerPageData} />
      </main>
    </div>
  );
}
