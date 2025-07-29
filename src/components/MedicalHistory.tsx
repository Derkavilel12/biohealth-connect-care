import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  FileText, 
  Download,
  Filter,
  Search,
  Activity,
  Pill,
  Heart,
  Thermometer,
  Weight,
  TrendingUp,
  Eye,
  ArrowLeft,
  MoreVertical,
  Stethoscope
} from "lucide-react";

const MedicalHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const historyEntries = [
    {
      id: 1,
      date: "2024-01-15",
      type: "consultation",
      title: "Consulta Cardiología",
      doctor: "Dr. Eduardo López",
      description: "Revisión rutinaria. Presión arterial estable.",
      attachments: 2,
      priority: "normal"
    },
    {
      id: 2,
      date: "2024-01-10",
      type: "analysis",
      title: "Análisis de Sangre",
      doctor: "Lab Central",
      description: "Hemograma completo, glucosa, colesterol",
      attachments: 1,
      priority: "normal"
    },
    {
      id: 3,
      date: "2024-01-08",
      type: "symptoms",
      title: "Registro de Síntomas",
      doctor: "Auto-registro",
      description: "Dolor de cabeza leve, fatiga",
      attachments: 0,
      priority: "low"
    },
    {
      id: 4,
      date: "2024-01-05",
      type: "medication",
      title: "Ajuste de Medicación",
      doctor: "Dr. Eduardo López",
      description: "Cambio en dosis de antihipertensivos",
      attachments: 1,
      priority: "high"
    },
    {
      id: 5,
      date: "2024-01-01",
      type: "vitals",
      title: "Signos Vitales",
      doctor: "Auto-registro",
      description: "Presión: 130/85, Peso: 70kg, Temp: 36.5°C",
      attachments: 0,
      priority: "normal"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "consultation": return Stethoscope;
      case "analysis": return Activity;
      case "symptoms": return Heart;
      case "medication": return Pill;
      case "vitals": return TrendingUp;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "consultation": return "bg-medical-blue";
      case "analysis": return "bg-medical-purple";
      case "symptoms": return "bg-medical-orange";
      case "medication": return "bg-medical-green";
      case "vitals": return "bg-primary";
      default: return "bg-muted";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-l-destructive";
      case "normal": return "border-l-primary";
      case "low": return "border-l-muted-foreground";
      default: return "border-l-muted";
    }
  };

  const filteredEntries = historyEntries.filter(entry => {
    const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === "all" || entry.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="mobile-container">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-6 pb-8">
        <div className="flex items-center space-x-3 mb-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Historial Médico</h1>
            <p className="text-white/80 text-sm">Registro completo de tu salud</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
          <Input
            placeholder="Buscar en historial..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
          />
        </div>
      </div>

      {/* Filters & Actions */}
      <div className="p-6 -mt-4 space-y-4">
        <Card className="card-medical">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filtros</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Exportar
              </Button>
            </div>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: "all", label: "Todo", count: historyEntries.length },
              { id: "consultation", label: "Consultas", count: 2 },
              { id: "analysis", label: "Análisis", count: 1 },
              { id: "symptoms", label: "Síntomas", count: 1 },
              { id: "medication", label: "Medicación", count: 1 },
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="whitespace-nowrap"
              >
                {filter.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>
        </Card>

        {/* Timeline */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Cronología</h3>
            <Badge variant="secondary">{filteredEntries.length} registros</Badge>
          </div>

          {filteredEntries.map((entry, index) => {
            const IconComponent = getTypeIcon(entry.type);
            return (
              <Card key={entry.id} className={`card-medical border-l-4 ${getPriorityColor(entry.priority)} hover:shadow-medium transition-all duration-200 cursor-pointer`}>
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-xl ${getTypeColor(entry.type)} flex items-center justify-center shadow-soft`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{entry.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{entry.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(entry.date).toLocaleDateString('es-ES')}</span>
                          </span>
                          <span>{entry.doctor}</span>
                          {entry.attachments > 0 && (
                            <span className="flex items-center space-x-1">
                              <FileText className="w-3 h-3" />
                              <span>{entry.attachments}</span>
                            </span>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="p-1">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2 mt-4 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    Ver Detalles
                  </Button>
                  {entry.attachments > 0 && (
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Monthly Summary */}
        <Card className="card-medical">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-success" />
            <h3 className="text-lg font-semibold">Resumen del Mes</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-medical-blue/10 rounded-lg">
              <p className="text-2xl font-bold text-medical-blue">5</p>
              <p className="text-sm text-muted-foreground">Consultas</p>
            </div>
            <div className="text-center p-3 bg-medical-green/10 rounded-lg">
              <p className="text-2xl font-bold text-medical-green">3</p>
              <p className="text-sm text-muted-foreground">Análisis</p>
            </div>
            <div className="text-center p-3 bg-medical-orange/10 rounded-lg">
              <p className="text-2xl font-bold text-medical-orange">8</p>
              <p className="text-sm text-muted-foreground">Síntomas</p>
            </div>
            <div className="text-center p-3 bg-medical-purple/10 rounded-lg">
              <p className="text-2xl font-bold text-medical-purple">12</p>
              <p className="text-sm text-muted-foreground">Registros</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MedicalHistory;