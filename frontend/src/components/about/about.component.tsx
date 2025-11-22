import aboutUsPhoto from "@/assets/images/about-us.jpg";
import Image from "next/image";

export const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Team Photo */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={aboutUsPhoto}
                alt="GreenSpace Design Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6">
              Góra Ogrodnictwo
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-base md:text-lg">
                Dzięki ponad 15-letniemu doświadczeniu w architekturze krajobrazu i projektowaniu ogrodów, 
                przekształciliśmy setki przestrzeni zewnętrznych w całym regionie w zachwycające, 
                zrównoważone środowiska.
              </p>
              <p className="text-base md:text-lg">
                Nasz zespół pasjonatów projektantów, ogrodników i architektów krajobrazu 
                ściśle współpracuje z każdym klientem, aby zrozumieć jego wizję i stworzyć przestrzenie, 
                które poprawiają zarówno piękno, jak i funkcjonalność ich nieruchomości.
              </p>
              <p className="text-base md:text-lg">
                Wierzymy w moc natury, by poprawić jakość życia, dlatego 
                priorytetem są dla nas zrównoważone praktyki, rodzime nasadzenia i ekologiczne 
                rozwiązania w każdym podejmowanym przez nas projekcie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
