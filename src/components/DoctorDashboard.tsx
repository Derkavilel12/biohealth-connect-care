import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Calendar, 
  FileText, 
  Stethoscope, 
  Brain,
  MessageCircle, 
  TrendingUp,
  Clock,
  AlertTriangle,
  Search,
  Bell,
  Settings,
  Plus,
  ChevronRight,
  Star
} from "lucide-react";

const DoctorDashboard = () => {
  const todayStats = [
    { label: "Pacientes hoy", value: "8", icon: Users, color: "text-medical-blue" },
    { label: "Pendientes", value: "3", icon: Clock, color: "text-medical-orange" },
    { label: "Urgentes", value: "1", icon: AlertTriangle, color: "text-destructive" },
  ];

  const recentPatients = [
    {
      name: "María González",
      age: 67,
      condition: "Diabetes tipo 2",
      lastVisit: "Hace 2 días",
      status: "stable",
      alerts: 1
    },
    {
      name: "Carlos Ruiz",
      age: 45,
      condition: "Hipertensión",
      lastVisit: "Hace 1 semana",
      status: "attention",
      alerts: 0
    },
    {
      name: "Ana Martínez",
      age: 72,
      condition: "Artritis",
      lastVisit: "Hoy",
      status: "stable",
      alerts: 0
    }
  ];

  const todayAppointments = [
    { time: "09:00", patient: "Juan Pérez", type: "Consulta", duration: "30 min" },
    { time: "10:30", patient: "Lucía Torres", type: "Seguimiento", duration: "20 min" },
    { time: "14:00", patient: "Roberto Silva", type: "Revisión", duration: "45 min" },
  ];

  const aiInsights = [
    {
      patient: "María González",
      insight: "Niveles de glucosa estables. Plan actual efectivo.",
      confidence: 95,
      type: "positive"
    },
    {
      patient: "Carlos Ruiz", 
      insight: "Tensión elevada en últimas mediciones. Revisar medicación.",
      confidence: 87,
      type: "warning"
    }
  ];

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Dr. Eduardo López</h1>
              <p className="text-white/80 text-sm">Cardiología • Hospital Central</p>
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

        {/* Today Stats */}
        <div className="grid grid-cols-3 gap-3">
          {todayStats.map((stat, index) => (
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
        {/* Today's Schedule */}
        <Card className="card-medical">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Calendar className="w-5 h-5 text-primary mr-2" />
              Agenda de Hoy
            </h3>
            <Button variant="ghost" size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {todayAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="text-center">
                  <p className="text-sm font-semibold text-primary">{appointment.time}</p>
                  <p className="text-xs text-muted-foreground">{appointment.duration}</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{appointment.patient}</p>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </Card>

        {/* AI Medical Insights */}
        <Card className="card-medical">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-medical-purple" />
            <h3 className="text-lg font-semibold">Análisis IA</h3>
            <Badge variant="secondary" className="text-xs">Nuevo</Badge>
          </div>
          
          <div className="space-y-3">
            {aiInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-xl border-l-4 ${
                insight.type === 'positive' 
                  ? 'bg-success/10 border-l-success' 
                  : 'bg-warning/10 border-l-warning'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">{insight.patient}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-medical-orange" />
                    <span className="text-xs text-muted-foreground">{insight.confidence}%</span>
                  </div>
                </div>
                <p className="text-sm text-foreground">{insight.insight}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Patients */}
        <Card className="card-medical">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Users className="w-5 h-5 text-primary mr-2" />
              Pacientes Recientes
            </h3>
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {recentPatients.map((patient, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-colors cursor-pointer">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-gradient-secondary text-white text-sm">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <p className="font-medium">{patient.name}</p>
                    <span className="text-xs text-muted-foreground">({patient.age} años)</span>
                    {patient.alerts > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {patient.alerts}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{patient.condition}</p>
                  <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
                </div>
                <div className={`w-3 h-3 rounded-full ${
                  patient.status === 'stable' ? 'bg-success' : 'bg-warning'
                }`} />
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="card-medical">
          <h3 className="text-lg font-semibold mb-4">Acciones Rápidas</h3>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Nuevo Diagnóstico", icon: FileText, color: "bg-medical-blue" },
              { label: "Plan de Salud", icon: TrendingUp, color: "bg-medical-green" },
              { label: "Evaluar Plan", icon: Star, color: "bg-medical-orange" },
              { label: "Chat Pacientes", icon: MessageCircle, color: "bg-medical-purple" },
            ].map((action, index) => (
              <button key={index} className="p-4 rounded-xl border border-border hover:shadow-medium transition-all duration-200 group">
                <div className={`w-8 h-8 mx-auto mb-2 rounded-lg ${action.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium text-center">{action.label}</p>
              </button>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-border p-4">
        <div className="grid grid-cols-4 gap-1">
          {[
            { icon: TrendingUp, label: "Inicio", active: true },
            { icon: Users, label: "Pacientes", active: false },
            { icon: Calendar, label: "Agenda", active: false },
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

export default DoctorDashboard;