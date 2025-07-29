import { useState } from "react";
import { Button } from "@/components/ui/button";
import WelcomeScreen from "@/components/WelcomeScreen";
import LoginScreen from "@/components/LoginScreen";
import RegisterScreen from "@/components/RegisterScreen";
import ForgotPasswordScreen from "@/components/ForgotPasswordScreen";
import PatientDashboard from "@/components/PatientDashboard";
import DoctorDashboard from "@/components/DoctorDashboard";
import MedicalHistory from "@/components/MedicalHistory";
import AppointmentScheduler from "@/components/AppointmentScheduler";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "login" | "register" | "forgot-password" | "patient" | "doctor" | "history" | "appointments">("welcome");

  const renderScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return (
          <WelcomeScreen 
            onLogin={() => setCurrentScreen("login")}
            onRegister={() => setCurrentScreen("register")}
            onForgotPassword={() => setCurrentScreen("forgot-password")}
          />
        );
      case "login":
        return (
          <LoginScreen 
            onBack={() => setCurrentScreen("welcome")}
            onLogin={() => setCurrentScreen("patient")}
            onForgotPassword={() => setCurrentScreen("forgot-password")}
          />
        );
      case "register":
        return (
          <RegisterScreen 
            onBack={() => setCurrentScreen("welcome")}
            onRegister={() => setCurrentScreen("patient")}
          />
        );
      case "forgot-password":
        return (
          <ForgotPasswordScreen 
            onBack={() => setCurrentScreen("welcome")}
          />
        );
      case "patient":
        return <PatientDashboard userName="María" />;
      case "doctor":
        return <DoctorDashboard />;
      case "history":
        return <MedicalHistory />;
      case "appointments":
        return <AppointmentScheduler />;
      default:
        return (
          <WelcomeScreen 
            onLogin={() => setCurrentScreen("login")}
            onRegister={() => setCurrentScreen("register")}
            onForgotPassword={() => setCurrentScreen("forgot-password")}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Demo Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-soft">
        <Button
          variant={currentScreen === "welcome" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("welcome")}
          className="text-xs"
        >
          Bienvenida
        </Button>
        <Button
          variant={currentScreen === "patient" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("patient")}
          className="text-xs"
        >
          Paciente
        </Button>
        <Button
          variant={currentScreen === "doctor" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("doctor")}
          className="text-xs"
        >
          Doctor
        </Button>
        <Button
          variant={currentScreen === "history" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("history")}
          className="text-xs"
        >
          Historial
        </Button>
        <Button
          variant={currentScreen === "appointments" ? "default" : "ghost"}
          size="sm"
          onClick={() => setCurrentScreen("appointments")}
          className="text-xs"
        >
          Citas
        </Button>
      </div>

      {/* Screen Content */}
      <div className="pt-16">
        {renderScreen()}
      </div>
    </div>
  );
};

export default Index;
