import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, User, Stethoscope } from "lucide-react";

interface RegisterScreenProps {
  onBack: () => void;
  onRegister: () => void;
}

const RegisterScreen = ({ onBack, onRegister }: RegisterScreenProps) => {
  const [userType, setUserType] = useState<"patient" | "professional" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    specialty: "", // Solo para profesionales
    license: ""   // Solo para profesionales
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!userType) {
    return (
      <div className="mobile-container">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pt-12">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-muted-foreground"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
          </Button>
        </div>

        {/* Logo and Title */}
        <div className="text-center px-6 mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium">
            <img 
              src="/lovable-uploads/0d05483f-26dd-4bc4-ac55-9344b8cf6b86.png" 
              alt="BioHealth Tracker" 
              className="w-10 h-10"
            />
          </div>
          <h1 className="text-2xl font-bold gradient-text mb-2">Crear Cuenta</h1>
          <p className="text-muted-foreground">Selecciona tu tipo de usuario</p>
        </div>

        {/* User Type Selection */}
        <div className="px-6 space-y-4">
          <Card 
            className="card-medical p-6 cursor-pointer hover:shadow-medium transition-all duration-200 border-2 hover:border-primary"
            onClick={() => setUserType("patient")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-medical-blue/10 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-medical-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Paciente</h3>
                <p className="text-sm text-muted-foreground">
                  Registra y monitorea tu salud
                </p>
              </div>
            </div>
          </Card>

          <Card 
            className="card-medical p-6 cursor-pointer hover:shadow-medium transition-all duration-200 border-2 hover:border-primary"
            onClick={() => setUserType("professional")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-medical-green/10 rounded-xl flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-medical-green" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Profesional de Salud</h3>
                <p className="text-sm text-muted-foreground">
                  Atiende y supervisa pacientes
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pt-12">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setUserType(null)}
          className="text-muted-foreground"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver
        </Button>
      </div>

      {/* Logo and Title */}
      <div className="text-center px-6 mb-8">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium">
          <img 
            src="/lovable-uploads/0d05483f-26dd-4bc4-ac55-9344b8cf6b86.png" 
            alt="BioHealth Tracker" 
            className="w-10 h-10"
          />
        </div>
        <h1 className="text-2xl font-bold gradient-text mb-2">
          {userType === "patient" ? "Registro de Paciente" : "Registro de Profesional"}
        </h1>
        <p className="text-muted-foreground">Completa tus datos para continuar</p>
      </div>

      {/* Registration Form */}
      <div className="px-6">
        <Card className="card-medical p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Nombre completo
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Tu nombre completo"
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Correo electrónico
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="tu@email.com"
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Teléfono
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 234 567 8900"
                className="h-12"
                required
              />
            </div>

            {userType === "professional" && (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Especialidad
                  </label>
                  <Input
                    type="text"
                    value={formData.specialty}
                    onChange={(e) => handleInputChange("specialty", e.target.value)}
                    placeholder="Cardiología, Medicina General, etc."
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Número de licencia médica
                  </label>
                  <Input
                    type="text"
                    value={formData.license}
                    onChange={(e) => handleInputChange("license", e.target.value)}
                    placeholder="Número de colegiatura"
                    className="h-12"
                    required
                  />
                </div>
              </>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Contraseña
              </label>
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="••••••••"
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Confirmar contraseña
              </label>
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                placeholder="••••••••"
                className="h-12"
                required
              />
            </div>

            <Button
              type="submit"
              className="btn-medical w-full bg-gradient-primary hover:shadow-medium text-white mt-6"
              size="lg"
            >
              Crear Cuenta
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterScreen;