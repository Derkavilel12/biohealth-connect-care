import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Calendar as CalendarIcon,
  Clock,
  User,
  MapPin,
  Phone,
  Video,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowLeft,
  Plus,
  Search
} from "lucide-react";

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<"list" | "calendar" | "book">("list");

  const appointments = [
    {
      id: 1,
      date: "2024-01-20",
      time: "09:00",
      doctor: "Dr. Eduardo López",
      specialty: "Cardiología",
      type: "Consulta",
      status: "confirmed",
      location: "Presencial",
      address: "Clínica Central, Piso 3",
      duration: "30 min"
    },
    {
      id: 2,
      date: "2024-01-25",
      time: "14:30",
      doctor: "Dra. Ana Martínez",
      specialty: "Endocrinología",
      type: "Seguimiento",
      status: "pending",
      location: "Telemedicina",
      address: "Video llamada",
      duration: "20 min"
    },
    {
      id: 3,
      date: "2024-01-15",
      time: "11:00",
      doctor: "Dr. Carlos Ruiz",
      specialty: "Neurología",
      type: "Revisión",
      status: "completed",
      location: "Presencial",
      address: "Hospital San José",
      duration: "45 min"
    }
  ];

  const availableSlots = [
    { time: "09:00", available: true },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: false },
    { time: "11:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: true },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Eduardo López",
      specialty: "Cardiología",
      rating: 4.8,
      nextAvailable: "Mañana"
    },
    {
      id: 2,
      name: "Dra. Ana Martínez",
      specialty: "Endocrinología",
      rating: 4.9,
      nextAvailable: "En 3 días"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      case "cancelled": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed": return "Confirmada";
      case "pending": return "Pendiente";
      case "completed": return "Completada";
      case "cancelled": return "Cancelada";
      default: return "Desconocido";
    }
  };

  const renderAppointmentsList = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Próximas Citas</h3>
        <Button onClick={() => setView("book")} className="btn-medical bg-primary">
          <Plus className="w-4 h-4 mr-1" />
          Nueva Cita
        </Button>
      </div>

      {appointments.map((appointment) => (
        <Card key={appointment.id} className="card-medical hover:shadow-medium transition-all duration-200">
          <div className="flex items-start space-x-4">
            <div className="text-center min-w-0">
              <p className="text-lg font-bold text-primary">
                {new Date(appointment.date).getDate()}
              </p>
              <p className="text-xs text-muted-foreground">
                {new Date(appointment.date).toLocaleDateString('es-ES', { month: 'short' })}
              </p>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                  <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                </div>
                <Badge className={getStatusColor(appointment.status)}>
                  {getStatusText(appointment.status)}
                </Badge>
              </div>
              
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{appointment.time} • {appointment.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {appointment.location === "Presencial" ? (
                    <MapPin className="w-4 h-4" />
                  ) : (
                    <Video className="w-4 h-4" />
                  )}
                  <span>{appointment.address}</span>
                </div>
              </div>
            </div>
          </div>
          
          {appointment.status === "pending" && (
            <div className="flex space-x-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                Confirmar
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <XCircle className="w-4 h-4 mr-1" />
                Rechazar
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );

  const renderCalendarView = () => (
    <div className="space-y-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-xl border shadow-soft"
      />
      
      {selectedDate && (
        <Card className="card-medical">
          <h4 className="font-semibold mb-3">
            Citas para {selectedDate.toLocaleDateString('es-ES')}
          </h4>
          
          <div className="space-y-2">
            {appointments
              .filter(apt => apt.date === selectedDate.toISOString().split('T')[0])
              .map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{appointment.time}</p>
                    <p className="text-sm text-muted-foreground">{appointment.doctor}</p>
                  </div>
                  <Badge className={getStatusColor(appointment.status)}>
                    {getStatusText(appointment.status)}
                  </Badge>
                </div>
              ))
            }
          </div>
        </Card>
      )}
    </div>
  );

  const renderBookingForm = () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 mb-4">
        <Button variant="ghost" size="sm" onClick={() => setView("list")}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h3 className="text-lg font-semibold">Agendar Nueva Cita</h3>
      </div>

      {/* Doctor Selection */}
      <Card className="card-medical">
        <h4 className="font-semibold mb-3">Seleccionar Profesional</h4>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar por especialidad..." className="pl-10" />
        </div>
        
        <div className="space-y-2">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <Avatar>
                <AvatarFallback className="bg-gradient-secondary text-white">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{doctor.name}</p>
                <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-warning">★ {doctor.rating}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-success">{doctor.nextAvailable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Date & Time Selection */}
      <Card className="card-medical">
        <h4 className="font-semibold mb-3">Fecha y Hora</h4>
        
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-lg border mb-4"
        />
        
        <div className="grid grid-cols-2 gap-2">
          {availableSlots.map((slot) => (
            <Button
              key={slot.time}
              variant={slot.available ? "outline" : "ghost"}
              disabled={!slot.available}
              className={`justify-center ${slot.available ? 'hover:bg-primary hover:text-primary-foreground' : 'opacity-50'}`}
            >
              {slot.time}
            </Button>
          ))}
        </div>
      </Card>

      {/* Appointment Details */}
      <Card className="card-medical">
        <h4 className="font-semibold mb-3">Detalles de la Cita</h4>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Motivo de consulta</label>
            <Input placeholder="Ej: Consulta de rutina" />
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Síntomas o comentarios</label>
            <Textarea placeholder="Describe brevemente tu situación..." className="h-20" />
          </div>
          
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="telemedicine" className="rounded" />
            <label htmlFor="telemedicine" className="text-sm">
              Prefiero consulta por telemedicina
            </label>
          </div>
        </div>
      </Card>

      {/* Submit */}
      <Button className="btn-medical w-full bg-gradient-primary text-white">
        Solicitar Cita
      </Button>
    </div>
  );

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 pb-8">
        <div className="flex items-center space-x-3 mb-4">
          {view !== "list" && (
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2" onClick={() => setView("list")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <div>
            <h1 className="text-xl font-bold">Citas Médicas</h1>
            <p className="text-white/80 text-sm">Gestiona tus consultas</p>
          </div>
        </div>

        {/* View Switcher */}
        <div className="flex space-x-2">
          <Button 
            variant={view === "list" ? "secondary" : "ghost"} 
            size="sm" 
            onClick={() => setView("list")}
            className="text-white border-white/30"
          >
            Lista
          </Button>
          <Button 
            variant={view === "calendar" ? "secondary" : "ghost"} 
            size="sm" 
            onClick={() => setView("calendar")}
            className="text-white border-white/30"
          >
            Calendario
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 -mt-4">
        {view === "list" && renderAppointmentsList()}
        {view === "calendar" && renderCalendarView()}
        {view === "book" && renderBookingForm()}
      </div>
    </div>
  );
};

export default AppointmentScheduler;