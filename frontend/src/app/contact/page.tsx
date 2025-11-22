import { PageBanner } from "@/components/layout/page-baner.component";
import { ContactForm } from "@/components/contact-form/contact-form.component";
import grassPhoto from "@/assets/images/contact-grass.jpg";

const Contact = () => {
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
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
