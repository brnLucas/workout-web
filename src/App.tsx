import { useState } from "react";
import {
  Activity,
  Award,
  ChevronDown,
  ChevronUp,
  Clock,
  Check,
  CheckCircle2,
  PlayCircle,
  Target,
  Dumbbell,
} from "lucide-react";

export default function App() {
  const [expandedDays, setExpandedDays] = useState(new Set([0]));
  const [completedExercises, setCompletedExercises] = useState(new Set());
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
  const toggleExercise = (dayIndex: number, exerciseIndex: number) => {
    const exerciseId = `${dayIndex}-${exerciseIndex}`;
    setCompletedExercises((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId);
      } else {
        newSet.add(exerciseId);
      }
      return newSet;
    });
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
    <div className="min-h-screen bg-gray-50">
      {/* Header Card - Full Width in Desktop */}
      <div className="bg-blue-600 text-white p-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center gap-3">
                <Dumbbell className="w-8 h-8" />
                <h1 className="text-2xl lg:text-3xl font-bold">
                  Treino Hipertrofia Avançado
                </h1>
              </div>
              <p className="text-blue-100 mt-2">
                Programa otimizado para ganho de massa muscular
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-auto">
              <div className="bg-blue-500/40 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Frequência</div>
                    <div className="text-blue-100 text-sm">6x por semana</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/40 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Duração</div>
                    <div className="text-blue-100 text-sm">60-75 min</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/40 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Nível</div>
                    <div className="text-blue-100 text-sm">
                      Intermediário/Avançado
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Full Width Container */}
      <div className="max-w-[1600px] mx-auto p-4 lg:p-8">
        <div className="space-y-6">
          {workoutData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleDay(dayIndex)}
                className="w-full text-left"
              >
                <div className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-xl">
                        <Target className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {day.day}
                        </h3>
                        <p className="text-gray-500">{day.focus}</p>
                      </div>
                    </div>
                    {expandedDays.has(dayIndex) ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {expandedDays.has(dayIndex) && (
                <div className="px-4 lg:px-6 pb-6">
                  {/* Day Info Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="text-blue-800 font-medium mb-1">
                        Objetivo
                      </h4>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h4 className="text-blue-800 font-medium mb-1">Volume</h4>
                      <p className="text-gray-600">{day.volume}</p>
                    </div>
                  </div>

                  {/* Exercise Table - Desktop */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-4 font-medium text-gray-600">
                            Status
                          </th>
                          <th className="text-left p-4 font-medium text-gray-600">
                            Exercício
                          </th>
                          <th className="text-left p-4 font-medium text-gray-600">
                            Grupo
                          </th>
                          <th className="text-center p-4 font-medium text-gray-600">
                            Séries
                          </th>
                          <th className="text-center p-4 font-medium text-gray-600">
                            Repetições
                          </th>
                          <th className="text-left p-4 font-medium text-gray-600">
                            Aquecimento
                          </th>
                          <th className="text-left p-4 font-medium text-gray-600">
                            Dicas
                          </th>
                          <th className="text-center p-4 font-medium text-gray-600">
                            Intensidade
                          </th>
                          <th className="text-center p-4 font-medium text-gray-600">
                            Tutorial
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {day.exercises.map((exercise, exerciseIndex) => {
                          const exerciseId = `${dayIndex}-${exerciseIndex}`;
                          const isCompleted =
                            completedExercises.has(exerciseId);
                          return (
                            <tr
                              key={exerciseIndex}
                              className="border-b border-gray-100"
                            >
                              <td className="p-4">
                                <button
                                  onClick={() =>
                                    toggleExercise(dayIndex, exerciseIndex)
                                  }
                                  className={`rounded-full p-1 transition-colors ${
                                    isCompleted
                                      ? "text-green-500 bg-green-100"
                                      : "text-gray-300 hover:text-gray-400"
                                  }`}
                                >
                                  {isCompleted ? (
                                    <CheckCircle2 className="w-6 h-6" />
                                  ) : (
                                    <Check className="w-6 h-6" />
                                  )}
                                </button>
                              </td>
                              <td className="p-4 font-medium">
                                {exercise.name}
                              </td>
                              <td className="p-4 text-gray-600">
                                {exercise.muscle}
                              </td>
                              <td className="p-4 text-center font-medium text-blue-600">
                                {exercise.sets}
                              </td>
                              <td className="p-4 text-center">
                                {exercise.reps}
                              </td>
                              <td className="p-4 text-gray-600">
                                {exercise.warmup || "-"}
                              </td>
                              <td className="p-4 text-gray-600">
                                {exercise.tips}
                              </td>
                              <td className="p-4">
                                <div className="flex justify-center">
                                  <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                                      exercise.reps.includes("6-8") ||
                                      exercise.reps.includes("8-10")
                                        ? "bg-red-500"
                                        : exercise.reps.includes("10-12")
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                    }`}
                                  >
                                    {exercise.reps.includes("6-8") ||
                                    exercise.reps.includes("8-10")
                                      ? "Alta"
                                      : exercise.reps.includes("10-12")
                                      ? "Média"
                                      : "Moderada"}
                                  </span>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="flex justify-center">
                                  <a
                                    href={exercise.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                                  >
                                    <PlayCircle className="w-4 h-4" />
                                    <span>Ver</span>
                                  </a>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Exercise Cards - Mobile */}
                  <div className="lg:hidden space-y-4">
                    {day.exercises.map((exercise, exerciseIndex) => {
                      const exerciseId = `${dayIndex}-${exerciseIndex}`;
                      const isCompleted = completedExercises.has(exerciseId);

                      return (
                        <div
                          key={exerciseIndex}
                          className={`rounded-xl p-4 transition-colors ${
                            isCompleted ? "bg-green-50" : "bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-start gap-3">
                              <button
                                onClick={() =>
                                  toggleExercise(dayIndex, exerciseIndex)
                                }
                                className={`mt-1 rounded-full p-1 transition-colors ${
                                  isCompleted
                                    ? "text-green-500 bg-green-100"
                                    : "text-gray-300 bg-white hover:text-gray-400"
                                }`}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-5 h-5" />
                                ) : (
                                  <Check className="w-5 h-5" />
                                )}
                              </button>
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {exercise.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                  {exercise.muscle}
                                </p>
                              </div>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                                exercise.reps.includes("6-8") ||
                                exercise.reps.includes("8-10")
                                  ? "bg-red-500"
                                  : exercise.reps.includes("10-12")
                                  ? "bg-yellow-500"
                                  : "bg-green-500"
                              }`}
                            >
                              {exercise.reps.includes("6-8") ||
                              exercise.reps.includes("8-10")
                                ? "Alta"
                                : exercise.reps.includes("10-12")
                                ? "Média"
                                : "Moderada"}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="bg-white p-3 rounded-lg">
                              <span className="text-sm text-gray-500 block">
                                Séries
                              </span>
                              <span className="font-medium text-blue-600">
                                {exercise.sets}
                              </span>
                            </div>
                            <div className="bg-white p-3 rounded-lg">
                              <span className="text-sm text-gray-500 block">
                                Repetições
                              </span>
                              <span className="font-medium">
                                {exercise.reps}
                              </span>
                            </div>
                          </div>

                          {exercise.warmup && (
                            <div className="bg-white p-3 rounded-lg mb-3">
                              <span className="text-sm text-gray-500 block">
                                Aquecimento
                              </span>
                              <span className="font-medium">
                                {exercise.warmup}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <p className="text-sm text-gray-600">
                              {exercise.tips}
                            </p>
                            <a
                              href={exercise.videoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                            >
                              <PlayCircle className="w-4 h-4" />
                              <span>Tutorial</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
