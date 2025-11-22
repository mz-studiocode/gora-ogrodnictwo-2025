import { Hero } from "@/components/hero/hero.component";
import { About } from "@/components/about/about.component";
import { Services } from "@/components/services/services.component";
import { ContactForm } from "@/components/contact-form/contact-form.component";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}
