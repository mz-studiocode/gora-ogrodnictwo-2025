"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import grassPhoto from "@/assets/images/contact-grass.jpg";
import truckPhoto from "@/assets/images/contact-truck.jpg";
import treePhoto from "@/assets/images/contact-tree.jpg";
import Image from "next/image";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    services: [] as string[],
    message: "",
    consent: false,
  });

  const serviceOptions = [
    "Wycinka drzew",
    "Mielenie gałęzi rębakijem",
    "Frezowanie pnia drzewa",
    "Koszenie trawy",
    "Zakładanie trawnika",
    "Nawadnianie automatyczne",
    "Zakładanie ogrodu",
    "Pielęgnacja roślin",
    "Inne",
  ];

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

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-12">
          Skontaktuj się z nami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Photo Grid - Above form on mobile/tablet, beside on desktop */}
          <div className="flex flex-col md:flex-row gap-4 h-full order-1 md:col-span-2 lg:col-span-1 lg:order-2">
            {/* Left column - Two smaller photos stacked */}
            <div className="flex flex-col gap-4 w-full md:flex-1 lg:w-[320px]">
              <Image 
                src={grassPhoto} 
                alt="Professional garden service team" 
                className="w-full md:h-1/2 h-64 object-cover rounded-lg"
              />
              <Image 
                src={truckPhoto} 
                alt="Garden service truck" 
                className="w-full md:h-1/2 h-64 object-cover rounded-lg"
              />
            </div>
            {/* Right column - One tall photo */}
            <div className="w-full md:flex-1 lg:w-[320px]">
              <Image 
                src={treePhoto} 
                alt="Professional gardener with service truck" 
                className="w-full h-64 md:h-full object-cover rounded-lg"
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