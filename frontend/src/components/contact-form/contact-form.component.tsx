"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { HOME_PAGE_COMPONENTS, HomePageData } from "@/types/home-page.types";
import { useMemo, useState } from "react";
import { StrapiImage } from "../custom/strapi-image.component";

export const ContactForm = ({ data }: { data: HomePageData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    services: [] as string[],
    message: "",
    consent: false,
  });

  const contactSection = useMemo(() => {
    return data?.blocks?.find((block) => block.__component === HOME_PAGE_COMPONENTS.ContactSection) ?? null;
  }, [data]);

  const serviceOptions = useMemo(() => {
    return contactSection?.services.map((service) => service.name) ?? [];
  }, [contactSection]);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.phone || !formData.email) {
      toast({
        title: "Brakujące informacje",
        description: "Proszę wypełnić wszystkie wymagane pola.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Wkrótce się odezwiemy.",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      services: [],
      message: "",
      consent: false,
    });
  };

  const filteredGallery = useMemo(() => {
    return contactSection?.gallery.filter((_image, index) => index !== 1) ?? [];
  }, [contactSection]);

  if (!contactSection) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-12">
          {contactSection.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Photo Grid - Above form on mobile/tablet, beside on desktop */}
          <div className="flex flex-col md:flex-row gap-4 h-full order-1 md:col-span-2 lg:col-span-1 lg:order-2">
            {/* Left column - Two smaller photos stacked */}
            <div className="flex flex-col gap-4 w-full md:flex-1 lg:w-[320px]">
              {filteredGallery.map((image) => (
                <StrapiImage 
                  key={image.id}
                  src={image.url}
                  alt={image.alternativeText ?? "Professional garden service team"} 
                  width={image.width}
                  height={image.height}
                  className="w-full md:h-1/2 h-64 object-cover rounded-lg"
                  priority={true}
                />
              ))}
            </div>
            {/* Right column - One tall photo */}
            <div className="w-full md:flex-1 lg:w-[320px]">
              <StrapiImage 
                src={contactSection.gallery[1].url} 
                alt="Professional gardener with service truck" 
                width={contactSection.gallery[1].width}
                height={contactSection.gallery[1].height}
                className="w-full h-64 md:h-full object-cover rounded-lg"
                priority={true}
              />
            </div>
          </div>

          {/* Form - Below photos on mobile/tablet, beside on desktop */}
          <form onSubmit={handleSubmit} className="space-y-6 order-2 md:col-span-2 lg:col-span-1 lg:order-1">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Imię i nazwisko<span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder=""
                required
              />
            </div>

            {/* Phone and Email Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Numer telefonu<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder=""
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Adres e-mail<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Services in 2 columns */}
            {contactSection.isServicesCheckboxEnabled && (
            <div className="space-y-5">
              <Label className="block">
                Czym jesteś zainteresowany? <span className="text-destructive">*</span>
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox
                      id={service}
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <label
                      htmlFor={service}
                      className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {service}
                    </label>
                  </div>
                ))}
                </div>
              </div>
            )}

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">Wiadomość (opcjonalnie)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder=""
                rows={5}
                className="resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="cta" size="lg" className="w-full">
              Uzyskaj bezpłatną wycenę
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};