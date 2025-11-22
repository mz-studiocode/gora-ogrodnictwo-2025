import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const SimplifiedContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email) {
      toast({
        title: "Brakujące informacje",
        description: "Proszę wypełnić wszystkie wymagane pola.",
        variant: "destructive",
      });
      return;
    }

    console.log("Form submitted:", formData);
    
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Wkrótce się odezwiemy.",
    });

    setFormData({
      fullName: "",
      phone: "",
      email: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8 text-center">
            Skontaktuj się z nami
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl shadow-sm">
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

            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, consent: checked as boolean })
                }
                className="mt-1"
              />
              <label
                htmlFor="consent"
                className="text-sm leading-relaxed cursor-pointer text-foreground/70"
              >
                Wyrażam zgodę na otrzymywanie wiadomości marketingowych SMS od GreenSpace Design pod 
                podany numer telefonu, w tym wiadomości wysyłanych przez automat. Zgoda nie jest warunkiem zakupu. 
                Mogą obowiązywać opłaty za wiadomości i dane. Częstotliwość wiadomości jest zmienna. Aby zrezygnować, 
                odpowiedz STOP w dowolnym momencie. Polityka prywatności.
              </label>
            </div>

            <Button type="submit" variant="cta" size="lg" className="w-full">
              Uzyskaj bezpłatną wycenę
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
