import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Users, Activity } from "lucide-react";

const WelcomeScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Heart,
      title: "Monitorea tu Salud",
      description: "Registra síntomas, análisis médicos y mantén un historial completo de tu salud",
      color: "text-medical-blue"
    },
    {
      icon: Shield,
      title: "Datos Seguros",
      description: "Tu información médica está protegida con los más altos estándares de seguridad",
      color: "text-medical-green"
    },
    {
      icon: Users,
      title: "Conecta con Profesionales",
      description: "Vincula tu cuenta con médicos y especialistas para un seguimiento personalizado",
      color: "text-medical-orange"
    },
    {
      icon: Activity,
      title: "Análisis con IA",
      description: "Recibe alertas preventivas y análisis automáticos de tus datos de salud",
      color: "text-medical-purple"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="text-center pt-12 pb-8 px-6">
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-medium">
          <img 
            src="/lovable-uploads/0d05483f-26dd-4bc4-ac55-9344b8cf6b86.png" 
            alt="BioHealth Tracker" 
            className="w-12 h-12"
          />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-2">BioHealth Tracker</h1>
        <p className="text-muted-foreground text-lg">Tu compañero inteligente de salud</p>
      </div>

      {/* Carousel */}
      <div className="px-6 mb-8">
        <Card className="card-medical min-h-[320px] flex flex-col justify-center">
          <div className="text-center">
            <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-soft ${slides[currentSlide].color}`}>
              {(() => {
                const IconComponent = slides[currentSlide].icon;
                return <IconComponent className="w-8 h-8" />;
              })()}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {slides[currentSlide].title}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        </Card>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-primary shadow-medium' 
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 space-y-4">
        <Button 
          className="btn-medical w-full bg-gradient-primary hover:shadow-medium text-white"
          size="lg"
        >
          Iniciar Sesión
        </Button>
        
        <Button 
          variant="outline" 
          className="btn-medical w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
          size="lg"
        >
          Registrarse
        </Button>

        <button className="w-full text-center text-muted-foreground underline py-4">
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 text-center px-6">
        <p className="text-sm text-muted-foreground">
          Diseñado especialmente para el cuidado de tu salud
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;