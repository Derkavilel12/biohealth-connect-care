import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

interface LoginScreenProps {
  onBack: () => void;
  onLogin: () => void;
  onForgotPassword: () => void;
}

const LoginScreen = ({ onBack, onLogin, onForgotPassword }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

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
        <h1 className="text-2xl font-bold gradient-text mb-2">Iniciar Sesión</h1>
        <p className="text-muted-foreground">Accede a tu cuenta de BioHealth Tracker</p>
      </div>

      {/* Login Form */}
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
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Contraseña
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-12 pr-12"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="btn-medical w-full bg-gradient-primary hover:shadow-medium text-white"
              size="lg"
            >
              Iniciar Sesión
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={onForgotPassword}
              className="text-primary text-sm underline hover:no-underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;