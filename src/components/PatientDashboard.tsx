import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Stethoscope, 
  Calendar, 
  Activity, 
  MessageCircle, 
  AlertTriangle,
  UserCheck,
  TrendingUp,
  Bell,
  Settings,
  Plus,
  ChevronRight
} from "lucide-react";

const PatientDashboard = () => {
  const quickStats = [
    { label: "Próxima cita", value: "15 Ene", icon: Calendar, color: "text-medical-blue" },
    { label: "Alertas", value: "2", icon: AlertTriangle, color: "text-medical-orange" },
    { label: "Mensajes", value: "1", icon: MessageCircle, color: "text-medical-green" },
  ];

  const mainActions = [
    {
      title: "Registrar Síntomas",
      description: "Añade nuevos síntomas o malestares",
      icon: Plus,
      color: "bg-medical-blue",
      urgent: false
    },
    {
      title: "Ver Historial Médico",
      description: "Consulta tu historial completo",
      icon: FileText,
      color: "bg-medical-green",
      urgent: false
    },
    {
      title: "Análisis Médicos",
      description: "Sube y revisa tus análisis",
      icon: Activity,
      color: "bg-medical-purple",
      urgent: false
    },
    {
      title: "Plan de Salud",
      description: "Revisa tu plan personalizado",
      icon: TrendingUp,
      color: "bg-medical-orange",
      urgent: false
    }
  ];

  const recentAlerts = [
    {
      type: "Recordatorio",
      message: "Tomar medicamento a las 14:00",
      time: "Hace 2 horas",
      priority: "high"
    },
    {
      type: "Análisis",
      message: "Resultados de análisis disponibles",
      time: "Hace 1 día",
      priority: "medium"
    }
  ];

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/0d05483f-26dd-4bc4-ac55-9344b8cf6b86.png" 
                alt="Logo" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">Hola, María</h1>
              <p className="text-white/80 text-sm">¿Cómo te sientes hoy?</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white/15 rounded-xl p-3 text-center">
              <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
              <p className="text-lg font-semibold">{stat.value}</p>
              <p className="text-xs text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6 -mt-4">
        {/* Recent Alerts */}
        <Card className="card-medical">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <AlertTriangle className="w-5 h-5 text-warning mr-2" />
              Alertas Recientes
            </h3>
            <Badge variant="secondary" className="text-xs">2</Badge>
          </div>
          
          <div className="space-y-3">
            {recentAlerts.map((alert, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.priority === 'high' ? 'bg-destructive' : 'bg-warning'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Main Actions Grid */}
        <div className="grid grid-cols-2 gap-4">
          {mainActions.map((action, index) => (
            <Card key={index} className="card-medical hover:shadow-medium transition-all duration-200 cursor-pointer group">
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${action.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{action.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{action.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Access Menu */}
        <Card className="card-medical">
          <h3 className="text-lg font-semibold mb-4">Acceso Rápido</h3>
          
          <div className="space-y-3">
            {[
              { label: "Agendar Cita", icon: Calendar, badge: null },
              { label: "Buscar Profesionales", icon: UserCheck, badge: null },
              { label: "Chat Seguro", icon: MessageCircle, badge: "1" },
              { label: "Contacto de Emergencia", icon: AlertTriangle, badge: null },
            ].map((item, index) => (
              <button key={index} className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <Badge variant="destructive" className="text-xs">
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Health Insights */}
        <Card className="card-medical">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-success" />
            <h3 className="text-lg font-semibold">Análisis de Salud con IA</h3>
          </div>
          
          <div className="bg-gradient-to-r from-success/10 to-medical-green/10 p-4 rounded-xl">
            <p className="text-sm font-medium text-success mb-2">🎯 Insight del día</p>
            <p className="text-sm text-foreground">Tus patrones de sueño han mejorado un 15% esta semana. Mantén tu rutina actual.</p>
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-border p-4">
        <div className="grid grid-cols-4 gap-1">
          {[
            { icon: TrendingUp, label: "Inicio", active: true },
            { icon: FileText, label: "Historial", active: false },
            { icon: Calendar, label: "Citas", active: false },
            { icon: Settings, label: "Más", active: false },
          ].map((item, index) => (
            <button key={index} className={`flex flex-col items-center py-2 px-1 rounded-lg transition-colors ${
              item.active ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
            }`}>
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;