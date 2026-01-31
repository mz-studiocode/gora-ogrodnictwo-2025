import { Hero } from "@/components/hero/hero.component";
import { About } from "@/components/about/about.component";
import { Services } from "@/components/services/services.component";
import { ContactForm } from "@/components/contact-form/contact-form.component";
import { HOME_PAGE_COMPONENTS } from "@/types/home-page.types";
import { getHomePage } from "@/services/get-home-page";

export default async function Home() {
  const data = await getHomePage()
  const homePageData = data.data

  const serviceSection = homePageData.blocks.find((block) => block.__component === HOME_PAGE_COMPONENTS.ServicesSection) ?? null;
  
  
  return (
    <>
      <Hero data={homePageData} />
      <About data={homePageData} />
      <Services data={serviceSection} />
      <ContactForm data={homePageData} />
    </>
  );
}
