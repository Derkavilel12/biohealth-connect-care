import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

interface ForgotPasswordScreenProps {
  onBack: () => void;
}

const ForgotPasswordScreen = ({ onBack }: ForgotPasswordScreenProps) => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEmailSent(true);
  };

  if (isEmailSent) {
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

        {/* Success Content */}
        <div className="px-6 pt-16">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-medical-green/20 to-medical-green/10 rounded-3xl flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-medical-green" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">¡Correo enviado!</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hemos enviado las instrucciones para restablecer tu contraseña a <span className="font-medium text-foreground">{email}</span>
            </p>
          </div>

          <Card className="card-medical p-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground">Revisa tu bandeja de entrada y spam</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground">Haz clic en el enlace del correo</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <p className="text-sm text-muted-foreground">Crea una nueva contraseña</p>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Button
              onClick={onBack}
              className="btn-medical w-full bg-gradient-primary hover:shadow-medium text-white"
              size="lg"
            >
              Volver al inicio
            </Button>
            
            <button
              onClick={() => setIsEmailSent(false)}
              className="w-full text-center text-primary underline py-2"
            >
              ¿No recibiste el correo? Reenviar
            </button>
          </div>
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
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold gradient-text mb-2">Recuperar Contraseña</h1>
        <p className="text-muted-foreground">
          Ingresa tu correo y te enviaremos las instrucciones
        </p>
      </div>

      {/* Reset Form */}
      <div className="px-6">
        <Card className="card-medical p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Correo electrónico
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="h-12"
                required
              />
              <p className="text-xs text-muted-foreground">
                Debe ser el correo registrado en tu cuenta
              </p>
            </div>

            <Button
              type="submit"
              className="btn-medical w-full bg-gradient-primary hover:shadow-medium text-white"
              size="lg"
            >
              Enviar instrucciones
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;