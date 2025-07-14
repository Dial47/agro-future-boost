import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    email: "",
    phone: "",
    operation: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
    setFormData({
      name: "",
      position: "",
      company: "",
      email: "",
      phone: "",
      operation: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-20 surface-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="badge-success mb-6">Conversemos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Estamos aquí para <span className="text-primary-light">impulsar tu operación</span>
          </h2>
          <div className="w-24 h-1 bg-primary-light rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Cada conversación es el inicio de una transformación. Cuéntanos sobre tu operación y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white mb-6">Conecta con nosotros</h3>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 surface-700 rounded-lg hover:bg-surface-600 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Teléfono directo</p>
                  <p className="text-white/80">+58 (XXX) XXX-XXXX</p>
                  <p className="text-sm text-white/60">Lun - Vie: 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 surface-700 rounded-lg hover:bg-surface-600 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email corporativo</p>
                  <p className="text-white/80">contacto@agrolinx.com.ve</p>
                  <p className="text-sm text-white/60">Respuesta en 24 horas</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-whatsapp rounded-lg hover:bg-whatsapp-dark transition-colors">
                <div className="w-12 h-12 bg-whatsapp-dark rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-white">WhatsApp Business</p>
                  <p className="text-sm text-white/80">Atención inmediata</p>
                </div>
                <Button 
                  asChild
                  size="sm"
                  className="bg-white text-whatsapp hover:bg-white/90"
                >
                  <a href="https://wa.me/58XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                    Escribir ahora
                  </a>
                </Button>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="p-6 surface-700 rounded-xl">
              <h4 className="font-semibold text-white mb-3">¿Tienes una emergencia en tu granja?</h4>
              <p className="text-white/80 text-sm mb-4">
                Nuestro equipo técnico está disponible para situaciones urgentes que requieran atención inmediata.
              </p>
              <Button 
                asChild
                variant="outline"
                className="border-error text-error hover:bg-error hover:text-white w-full"
              >
                <a href="tel:+58XXXXXXXXX">
                  Línea de emergencia: +58 (XXX) XXX-XXXX
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-foreground mb-6">Cuéntanos sobre tu proyecto</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Nombre completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="form-input-focus"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="position" className="text-foreground">Cargo</Label>
                  <Input
                    id="position"
                    type="text"
                    placeholder="Ej: Gerente de Producción"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    className="form-input-focus"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-foreground">Empresa/Granja *</Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Nombre de tu empresa o granja"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="form-input-focus"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="form-input-focus"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Teléfono *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+58 XXX XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="form-input-focus"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="operation" className="text-foreground">Tipo de operación</Label>
                <Select onValueChange={(value) => handleInputChange("operation", value)}>
                  <SelectTrigger className="form-input-focus">
                    <SelectValue placeholder="Selecciona tu tipo de operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avicola-engorde">Avícola - Pollos de engorde</SelectItem>
                    <SelectItem value="avicola-ponedoras">Avícola - Ponedoras</SelectItem>
                    <SelectItem value="porcina">Porcina - Cría y engorde</SelectItem>
                    <SelectItem value="planta-alimentos">Planta de alimentos</SelectItem>
                    <SelectItem value="planta-beneficio">Planta de beneficio</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Cuéntanos tu desafío</Label>
                <Textarea
                  id="message"
                  placeholder="Describe tu operación actual, los desafíos que enfrentas y cómo podemos ayudarte a mejorar tus resultados..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="form-input-focus resize-none"
                  rows={4}
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                Enviar consulta
              </Button>

              <p className="text-xs text-surface-500 text-center">
                * Campos obligatorios. Nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};