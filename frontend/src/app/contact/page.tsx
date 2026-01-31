import { PageBanner } from "@/components/layout/page-baner.component";
import { ContactForm } from "@/components/contact-form/contact-form.component";
import grassPhoto from "@/assets/images/contact-grass.jpg";
import { getHomePage } from "@/services/get-home-page";

const Contact = async () => {
  const data = await getHomePage()
  const homePageData = data.data
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <PageBanner
          title="Kontakt"
          breadcrumbs={[
            { label: "Strona główna", href: "/" },
            { label: "Kontakt" }
          ]}
          backgroundImage={grassPhoto}
        />
        <ContactForm data={homePageData} />
      </main>
    </div>
  );
};

export default Contact;
