import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dumbbell,
  Info,
  ArrowRight,
  Target,
  Video,
  Calendar,
  Clock,
  Activity,
  Award,
  BarChart2,
} from "lucide-react";

const WorkoutPlan = () => {
  const allWorkouts = [
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

  const [selectedDay, setSelectedDay] = useState(allWorkouts[0]);

  const intensityColor = {
    alta: "from-red-500 to-orange-500",
    media: "from-yellow-500 to-yellow-600",
    baixa: "from-green-500 to-green-600",
  };

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

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Card */}
        <Card className="mb-6 sm:mb-8 overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                <Dumbbell className="w-8 h-8" />
                Plano de Treino Hipertrofia
              </CardTitle>
              <p className="text-blue-100 text-sm sm:text-base mb-8">
                Programa otimizado para ganho de massa muscular
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-2 justify-center">
                  <Activity className="w-5 h-5" />
                  <span className="font-medium">Frequência</span>
                </div>
                <p className="text-blue-100 text-center">6x por semana</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-2 justify-center">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Duração</span>
                </div>
                <p className="text-blue-100 text-center">60-75 minutos</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-white mb-2 justify-center">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">Nível</span>
                </div>
                <p className="text-blue-100 text-center">
                  Intermediário/Avançado
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Day Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {allWorkouts.map((workout) => (
            <button
              key={workout.day}
              onClick={() => setSelectedDay(workout)}
              className={`p-4 rounded-xl text-left transition-all transform hover:scale-105 ${
                selectedDay.day === workout.day
                  ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg"
                  : "bg-white hover:bg-gray-50 shadow hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">{workout.day}</span>
              </div>
              <div className="text-sm flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span
                  className={
                    selectedDay.day === workout.day
                      ? "text-blue-100"
                      : "text-gray-600"
                  }
                >
                  {workout.focus}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Day Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-5">
              <CardTitle className="text-lg flex items-center gap-2 text-blue-800 justify-center">
                <Info className="w-5 h-5" />
                Objetivo do Treino
              </CardTitle>
              <p className="text-gray-600 text-center mt-2">
                {selectedDay.description}
              </p>
            </CardHeader>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-5">
              <CardTitle className="text-lg flex items-center gap-2 text-blue-800 justify-center">
                <BarChart2 className="w-5 h-5" />
                Volume do Dia
              </CardTitle>
              <p className="text-gray-600 text-center mt-2">
                {selectedDay.volume}
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Exercises Table */}
        <Card className="bg-white shadow-lg mb-6">
          <CardHeader className="p-5 text-center border-b">
            <CardTitle className="text-xl flex items-center gap-2 justify-center text-blue-800">
              <Calendar className="w-6 h-6" />
              {selectedDay.day} - {selectedDay.focus}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 bg-blue-50 py-4 px-6 text-sm font-semibold text-blue-800">
                <div className="col-span-2">Exercício</div>
                <div className="text-center">Aquecimento</div>
                <div className="text-center">Séries</div>
                <div className="text-center">Repetições</div>
                <div className="text-center">Intensidade</div>
                <div className="text-center">Tutorial</div>
              </div>
              {selectedDay.exercises.map((exercise, index) => {
                const intensity = getIntensityLabel(exercise);
                return (
                  <div
                    key={index}
                    className="grid grid-cols-7 px-6 py-4 border-b last:border-0 items-center hover:bg-gray-50 text-sm"
                  >
                    <div className="col-span-2 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <div>
                        <div className="font-medium">{exercise.name}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {exercise.tips}
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-gray-600">
                      {exercise.warmup || "-"}
                    </div>
                    <div className="text-center font-medium text-blue-700">
                      {exercise.sets}
                    </div>
                    <div className="text-center">{exercise.reps}</div>
                    <div className="text-center">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${intensity.color}`}
                      >
                        {intensity.label}
                      </span>
                    </div>
                    <div className="text-center">
                      <a
                        href={exercise.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        <Video className="w-4 h-4" />
                        <span>Ver</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Guidelines Card */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <h3 className="font-bold text-xl mb-6 text-center text-blue-800 flex items-center gap-2 justify-center">
              <Info className="w-6 h-6" />
              Diretrizes do Treino
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex items-center gap-2 text-blue-800 font-semibold mb-3 justify-center">
                  <BarChart2 className="w-5 h-5" />
                  Volume Semanal
                </div>
                <p className="text-sm text-gray-600 space-y-1">
                  • Músculos Grandes: 10-20 séries
                  <br />• Músculos Médios: 8-16 séries
                  <br />• Músculos Pequenos: 6-12 séries
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 text-blue-800 font-semibold mb-3 justify-center">
                  <Clock className="w-5 h-5" />
                  Intervalos
                </div>
                <p className="text-sm text-gray-600 space-y-1">
                  • Exercícios Compostos: 2-3 min
                  <br />• Exercícios Isolados: 1-2 min
                  <br />• Superséries: 45-60s
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2 text-blue-800 font-semibold mb-3 justify-center">
                  <Activity className="w-5 h-5" />
                  Execução
                </div>
                <p className="text-sm text-gray-600 space-y-1">
                  • Cadência: 2:1:2 ou 3:1:1
                  <br />• Progressive Overload Regular
                  <br />• Foco na Técnica Correta
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WorkoutPlan;
