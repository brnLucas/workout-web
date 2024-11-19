import "./App.css";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dumbbell,
  Info,
  Target,
  Calendar,
  Clock,
  Activity,
  Award,
  BarChart2,
  PlayCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

function App() {
  const [expandedDays, setExpandedDays] = useState(new Set([0])); // Primeiro dia expandido por padrão

  const intensityColor = {
    alta: "from-red-500 to-orange-500",
    media: "from-yellow-500 to-yellow-600",
    baixa: "from-green-500 to-green-600",
  };

  const workoutData = [
    {
      day: "Segunda-feira",
      focus: "Peito e Tríceps",
      description:
        "Foco em desenvolvimento do peitoral com volume otimizado e trabalho complementar de tríceps",
      volume: "Peito: 16 séries / Tríceps: 6 séries",
      exercises: [
        {
          name: "Supino Reto com Barra",
          warmup: "2×15 (barra) → 1×12 (40%), 1×8 (60%)",
          sets: "4",
          reps: "6-8",
          notes: "↑ Carga, foco em força",
          muscle: "peito",
          videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
          tips: "Retração escapular, cotovelos 45°",
        },
        {
          name: "Supino Inclinado com Halter",
          warmup: "1×12 (60%)",
          sets: "4",
          reps: "8-10",
          notes: "Inclinação 30°",
          muscle: "peito",
          videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8",
          tips: "Controle na descida",
        },
        {
          name: "Supino Declinado Smith",
          sets: "4",
          reps: "10-12",
          notes: "Porção inferior",
          muscle: "peito",
          videoUrl: "https://www.youtube.com/watch?v=LfyQBUKR8SE",
          tips: "Pegada média",
        },
        {
          name: "Crucifixo na Polia",
          warmup: "1×15 (50%)",
          sets: "4",
          reps: "12-15",
          notes: "Foco na contração",
          muscle: "peito",
          videoUrl: "https://www.youtube.com/watch?v=WEM9FCIPlxQ",
          tips: "Leve inclinação",
        },
        {
          name: "Extensão de Tríceps na Polia",
          warmup: "1×15 (50%)",
          sets: "3",
          reps: "10-12",
          notes: "Barra reta",
          muscle: "triceps",
          videoUrl: "https://www.youtube.com/watch?v=2-LAMcpzODU",
          tips: "Cotovelos fixos",
        },
        {
          name: "Extensão de Tríceps Corda",
          sets: "3",
          reps: "12-15",
          notes: "Abrir no final",
          muscle: "triceps",
          videoUrl: "https://www.youtube.com/watch?v=kiuVA0gs3EI",
          tips: "Cotovelos junto ao corpo",
        },
      ],
    },
    {
      day: "Terça-feira",
      focus: "Costas e Bíceps",
      description:
        "Desenvolvimento completo das costas com volume ideal e trabalho complementar de bíceps",
      volume: "Costas: 16 séries / Bíceps: 6 séries",
      exercises: [
        {
          name: "Puxada Aberta na Polia",
          warmup: "2×15 (40%) → 1×12 (60%)",
          sets: "4",
          reps: "8-10",
          notes: "Amplitude total",
          muscle: "costas",
          videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
          tips: "Peito aberto, ombros para trás",
        },
        {
          name: "Remada Curvada na Barra",
          warmup: "1×12 (50%)",
          sets: "4",
          reps: "8-10",
          notes: "Puxada ao abdômen",
          muscle: "costas",
          videoUrl: "https://www.youtube.com/watch?v=9efamhTh9pU",
          tips: "Tronco a 45°, coluna neutra",
        },
        {
          name: "Remada Baixa na Polia",
          sets: "4",
          reps: "10-12",
          notes: "Pegada neutra",
          muscle: "costas",
          videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74",
          tips: "Cotovelos junto ao corpo",
        },
        {
          name: "Pullover na Polia",
          sets: "4",
          reps: "12-15",
          notes: "Foco no grande dorsal",
          muscle: "costas",
          videoUrl: "https://www.youtube.com/watch?v=geenhiHju-o",
          tips: "Braços levemente flexionados",
        },
        {
          name: "Rosca Direta na Barra W",
          warmup: "1×15 (50%)",
          sets: "3",
          reps: "8-10",
          notes: "Cotovelos fixos",
          muscle: "biceps",
          videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo",
          tips: "Punhos alinhados, sem balanço",
        },
        {
          name: "Rosca Martelo Alternada",
          sets: "3",
          reps: "10-12",
          notes: "Alternar braços",
          muscle: "biceps",
          videoUrl: "https://www.youtube.com/watch?v=6g27qFhS_l4",
          tips: "Mantenha os cotovelos estáveis",
        },
      ],
    },
    {
      day: "Quarta-feira",
      focus: "Pernas A (Quadríceps)",
      description:
        "Volume otimizado para desenvolvimento do quadríceps com trabalho complementar de posterior",
      volume: "Quadríceps: 12 séries / Posterior: 4 séries",
      exercises: [
        {
          name: "Agachamento Livre",
          warmup: "2×15 (barra) → 1×12 (40%), 1×8 (60%)",
          sets: "4",
          reps: "6-8",
          notes: "Profundidade controlada",
          muscle: "quadriceps",
          videoUrl: "https://www.youtube.com/watch?v=ultWZbUMPL8",
          tips: "Joelhos alinhados com pés",
        },
        {
          name: "Leg Press 45°",
          warmup: "1×15 (50%)",
          sets: "4",
          reps: "8-10",
          notes: "Pés médios",
          muscle: "quadriceps",
          videoUrl: "https://www.youtube.com/watch?v=CHPHn-OnTqE",
          tips: "Lombar apoiada, ROM completo",
        },
        {
          name: "Hack Machine",
          sets: "4",
          reps: "10-12",
          notes: "Pés baixos",
          muscle: "quadriceps",
          videoUrl: "https://www.youtube.com/watch?v=0tn5K9NlCfo",
          tips: "Foco no quadríceps",
        },
        {
          name: "Cadeira Extensora",
          sets: "3",
          reps: "12-15",
          notes: "Drop-set última",
          muscle: "quadriceps",
          videoUrl: "https://www.youtube.com/watch?v=YyvSfVjQeL0",
          tips: "Contração no topo",
        },
        {
          name: "Stiff",
          warmup: "1×15 (50%)",
          sets: "4",
          reps: "10-12",
          notes: "Posterior/glúteos",
          muscle: "posterior",
          videoUrl: "https://www.youtube.com/watch?v=FH7-dDaRrkM",
          tips: "Joelhos semiflexionados",
        },
      ],
    },
    {
      day: "Quinta-feira",
      focus: "Ombros e Abdômen",
      description:
        "Desenvolvimento dos três feixes do deltóide com trabalho de core",
      volume: "Ombros: 12 séries / Core: 6 séries",
      exercises: [
        {
          name: "Desenvolvimento com Halter",
          warmup: "2×15 (30%) → 1×12 (50%)",
          sets: "4",
          reps: "8-10",
          notes: "Palmas frente a frente",
          muscle: "ombros",
          videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
          tips: "Cotovelos sob punhos",
        },
        {
          name: "Elevação Lateral",
          warmup: "1×15 (40%)",
          sets: "4",
          reps: "12-15",
          notes: "Cotovelos altos",
          muscle: "ombros",
          videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
          tips: "Foco no deltóide médio",
        },
        {
          name: "Desenvolvimento Arnold",
          sets: "4",
          reps: "10-12",
          notes: "Rotação completa",
          muscle: "ombros",
          videoUrl: "https://www.youtube.com/watch?v=3ml7BH7mNwQ",
          tips: "Rotação suave e controlada",
        },
        {
          name: "Face Pull",
          sets: "3",
          reps: "15-20",
          notes: "Deltóide posterior",
          muscle: "ombros",
          videoUrl: "https://www.youtube.com/watch?v=V8dZ3pyiCBo",
          tips: "Cotovelos acima dos ombros",
        },
        {
          name: "Prancha com Rotação",
          sets: "3",
          reps: "45s",
          notes: "Alternar lados",
          muscle: "core",
          videoUrl: "https://www.youtube.com/watch?v=wiFNA3sqjCA",
          tips: "Core sempre contraído",
        },
        {
          name: "Crunch Declinado",
          sets: "3",
          reps: "15-20",
          notes: "Movimento controlado",
          muscle: "core",
          videoUrl: "https://www.youtube.com/watch?v=_M2Etme-tfE",
          tips: "Foco na contração abdominal",
        },
      ],
    },
    {
      day: "Sexta-feira",
      focus: "Braços e Antebraços",
      description:
        "Treino específico para desenvolvimento dos braços com foco em pico e espessura",
      volume: "Bíceps: 9 séries / Tríceps: 9 séries",
      exercises: [
        {
          name: "Rosca Scott Barra W",
          warmup: "2×15 (40%) → 1×12 (60%)",
          sets: "4",
          reps: "8-10",
          notes: "Porção longa",
          muscle: "biceps",
          videoUrl: "https://www.youtube.com/watch?v=9PNx9Ta-h_g",
          tips: "Cotovelos bem apoiados",
        },
        {
          name: "Extensão Testa Halter",
          warmup: "1×15 (50%)",
          sets: "4",
          reps: "10-12",
          notes: "Cotovelos fixos",
          muscle: "triceps",
          videoUrl: "https://www.youtube.com/watch?v=1BDGIcMTSXc",
          tips: "Não abrir cotovelos",
        },
        {
          name: "Rosca Martelo Polia",
          sets: "3",
          reps: "12-15",
          notes: "Corda",
          muscle: "biceps",
          videoUrl: "https://www.youtube.com/watch?v=P5sXHLPXQtQ",
          tips: "Supinação no topo",
        },
        {
          name: "Extensão Corda",
          sets: "3",
          reps: "12-15",
          notes: "Abrir no final",
          muscle: "triceps",
          videoUrl: "https://www.youtube.com/watch?v=kiuVA0gs3EI",
          tips: "Cotovelos junto ao corpo",
        },
        {
          name: "Rosca 21s",
          sets: "2",
          reps: "21",
          notes: "7 parciais cada",
          muscle: "biceps",
          videoUrl: "https://www.youtube.com/watch?v=9NZlxg-IX5I",
          tips: "Manter tensão constante",
        },
        {
          name: "Extensão Testa Corda",
          sets: "2",
          reps: "15-20",
          notes: "Finalização",
          muscle: "triceps",
          videoUrl: "https://www.youtube.com/watch?v=GVktBR0tGHk",
          tips: "Foco na porção longa",
        },
      ],
    },
    {
      day: "Sábado",
      focus: "Pernas B (Posterior/Glúteos)",
      description:
        "Foco em desenvolvimento posterior da coxa e glúteos com volume otimizado",
      volume: "Posterior: 10 séries / Glúteos: 8 séries",
      exercises: [
        {
          name: "Stiff Barra",
          warmup: "2×15 (40%) → 1×12 (60%)",
          sets: "4",
          reps: "8-10",
          notes: "ROM completo",
          muscle: "posterior",
          videoUrl: "https://www.youtube.com/watch?v=6MHexPR7xkE",
          tips: "Quadril para trás",
        },
        {
          name: "Elevação Pélvica",
          warmup: "1×15 (50%)",
          sets: "4",
          reps: "10-12",
          notes: "Squeeze no topo",
          muscle: "gluteos",
          videoUrl: "https://www.youtube.com/watch?v=SEdqd1n0cvg",
          tips: "Foco na contração glútea",
        },
        {
          name: "Mesa Flexora",
          sets: "3",
          reps: "12-15",
          notes: "Drop-set última",
          muscle: "posterior",
          videoUrl: "https://www.youtube.com/watch?v=d3cR5rjn3HY",
          tips: "Tornozelos flexionados",
        },
        {
          name: "Abdução na Polia",
          sets: "4",
          reps: "15-20",
          notes: "Glúteo médio",
          muscle: "gluteos",
          videoUrl: "https://www.youtube.com/watch?v=fe0YZlvT3EM",
          tips: "Quadril neutro",
        },
        {
          name: "Flexora Unilateral",
          sets: "3",
          reps: "12-15",
          notes: "Cada perna",
          muscle: "posterior",
          videoUrl: "https://www.youtube.com/watch?v=Mv_8-XyP1TY",
          tips: "Movimento controlado",
        },
        {
          name: "Panturrilha Sentado",
          sets: "4",
          reps: "15-20",
          notes: "Pausa no alongamento",
          muscle: "panturrilha",
          videoUrl: "https://www.youtube.com/watch?v=JbyjNymZOt0",
          tips: "Amplitude completa",
        },
      ],
    },
  ];

  const getIntensityLabel = (
    exercise:
      | {
          name: string;
          warmup: string;
          sets: string;
          reps: string;
          notes: string;
          muscle: string;
          videoUrl: string;
          tips: string;
        }
      | {
          name: string;
          sets: string;
          reps: string;
          notes: string;
          muscle: string;
          videoUrl: string;
          tips: string;
          warmup?: undefined;
        }
  ) => {
    if (exercise.reps.includes("6-8") || exercise.reps.includes("8-10"))
      return { label: "Alta", color: intensityColor.alta };
    if (exercise.reps.includes("10-12"))
      return { label: "Média", color: intensityColor.media };
    return { label: "Moderada", color: intensityColor.baixa };
  };

  const toggleDay = (index: number) => {
    setExpandedDays((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header Card */}
      <Card className="mb-6 overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
          <div className="relative p-4 md:p-8">
            <div className="text-center">
              <CardTitle className="text-xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                <Dumbbell className="w-6 h-6 md:w-10 md:h-10" />
                <span className="break-words">Treino Hipertrofia Avançado</span>
              </CardTitle>
              <p className="text-blue-100 text-sm md:text-lg">
                Programa otimizado para ganho de massa muscular
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Activity className="w-4 h-4" />
                  <span className="font-semibold text-sm">Frequência</span>
                </div>
                <p className="text-blue-100 text-sm">6x por semana</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="font-semibold text-sm">Duração</span>
                </div>
                <p className="text-blue-100 text-sm">60-75 min</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold text-sm">Nível</span>
                </div>
                <p className="text-blue-100 text-sm">Intermediário/Avançado</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Days List */}
      <div className="space-y-6">
        {workoutData.map((day, dayIndex) => (
          <Card
            key={dayIndex}
            className={`bg-white shadow-lg border-none transition-all duration-200 ${
              expandedDays.has(dayIndex) ? "shadow-xl" : "hover:shadow-md"
            }`}
          >
            {/* Day Header */}
            <button onClick={() => toggleDay(dayIndex)} className="w-full">
              <CardHeader className="p-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg text-gray-900">
                        {day.day}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Target className="w-4 h-4" />
                        <span>{day.focus}</span>
                      </div>
                    </div>
                  </div>
                  {expandedDays.has(dayIndex) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </CardHeader>
            </button>

            {/* Expanded Content */}
            {expandedDays.has(dayIndex) && (
              <CardContent className="p-4 pt-0">
                {/* Day Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-blue-800 mb-2">
                      <Info className="w-4 h-4" />
                      <span className="font-medium">Objetivo</span>
                    </div>
                    <p className="text-sm text-gray-700">{day.description}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-blue-800 mb-2">
                      <BarChart2 className="w-4 h-4" />
                      <span className="font-medium">Volume</span>
                    </div>
                    <p className="text-sm text-gray-700">{day.volume}</p>
                  </div>
                </div>

                {/* Exercises Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {day.exercises.map((exercise, index) => {
                    const intensity = getIntensityLabel(exercise);
                    return (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 space-y-4"
                      >
                        {/* Exercise Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <Dumbbell className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {exercise.name}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {exercise.muscle}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${intensity.color}`}
                          >
                            {intensity.label}
                          </span>
                        </div>

                        {/* Exercise Details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white p-3 rounded-lg">
                          <div>
                            <span className="text-xs text-gray-500 block">
                              Séries
                            </span>
                            <span className="font-medium text-blue-600">
                              {exercise.sets}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 block">
                              Repetições
                            </span>
                            <span className="font-medium">{exercise.reps}</span>
                          </div>
                          {exercise.warmup && (
                            <div className="col-span-2">
                              <span className="text-xs text-gray-500 block">
                                Aquecimento
                              </span>
                              <span className="font-medium text-sm">
                                {exercise.warmup}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Tips and Video */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Info className="w-4 h-4" />
                            <span className="text-sm">{exercise.tips}</span>
                          </div>
                          <a
                            href={exercise.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors whitespace-nowrap"
                          >
                            <PlayCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Ver Tutorial
                            </span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Guidelines Card */}
      <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-md mt-6">
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-4 text-gray-800 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            Diretrizes do Treino
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800 font-semibold">
                <Clock className="w-4 h-4" />
                Intervalos
              </div>
              <p className="text-sm text-gray-700">
                • Compostos: 2-3 min
                <br />• Isolados: 1-2 min
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800 font-semibold">
                <Activity className="w-4 h-4" />
                Execução
              </div>
              <p className="text-sm text-gray-700">
                • Cadência: 2:1:2
                <br />• Foco na Técnica
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-800 font-semibold">
                <BarChart2 className="w-4 h-4" />
                Volume
              </div>
              <p className="text-sm text-gray-700">
                • Progressive Overload
                <br />• Ajuste conforme fadiga
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
