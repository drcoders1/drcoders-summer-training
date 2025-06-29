"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ChevronRight,
  RotateCcw,
  Code,
  Monitor,
  Smartphone,
  Sparkles,
  Trophy,
  Target,
  Rocket,
  Star,
} from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What's your current experience level with programming?",
    emoji: "🎯",
    options: [
      {
        text: "Complete beginner",
        emoji: "🌱",
        value: "beginner",
        points: { fullstack: 3, frontend: 3, mobile: 3 },
      },
      {
        text: "Some basic knowledge",
        emoji: "📚",
        value: "basic",
        points: { fullstack: 2, frontend: 3, mobile: 2 },
      },
      {
        text: "Intermediate level",
        emoji: "⚡",
        value: "intermediate",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
      {
        text: "Advanced programmer",
        emoji: "🚀",
        value: "advanced",
        points: { fullstack: 3, frontend: 1, mobile: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "Which type of applications interest you most?",
    emoji: "💻",
    options: [
      {
        text: "Web applications & websites",
        emoji: "🌐",
        value: "web",
        points: { fullstack: 3, frontend: 3, mobile: 1 },
      },
      {
        text: "Mobile apps (iOS/Android)",
        emoji: "📱",
        value: "mobile",
        points: { fullstack: 2, frontend: 1, mobile: 3 },
      },
      {
        text: "Both web and mobile",
        emoji: "🔥",
        value: "both",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
      {
        text: "Enterprise software",
        emoji: "🏢",
        value: "enterprise",
        points: { fullstack: 3, frontend: 1, mobile: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "What's your primary career goal?",
    emoji: "🎯",
    options: [
      {
        text: "Get my first tech job",
        emoji: "🎉",
        value: "first-job",
        points: { fullstack: 3, frontend: 3, mobile: 2 },
      },
      {
        text: "Switch to tech career",
        emoji: "🔄",
        value: "career-switch",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
      {
        text: "Freelance/Start own business",
        emoji: "💼",
        value: "freelance",
        points: { fullstack: 2, frontend: 3, mobile: 3 },
      },
      {
        text: "Advance current tech role",
        emoji: "📈",
        value: "advance",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
    ],
  },
  {
    id: 4,
    question: "How much time can you dedicate to learning?",
    emoji: "⏰",
    options: [
      {
        text: "2-3 hours per day",
        emoji: "🕐",
        value: "part-time",
        points: { fullstack: 2, frontend: 3, mobile: 3 },
      },
      {
        text: "4-6 hours per day",
        emoji: "🕕",
        value: "regular",
        points: { fullstack: 3, frontend: 3, mobile: 2 },
      },
      {
        text: "Full-time (8+ hours)",
        emoji: "🕘",
        value: "full-time",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
      {
        text: "Weekends only",
        emoji: "📅",
        value: "weekends",
        points: { fullstack: 1, frontend: 2, mobile: 2 },
      },
    ],
  },
  {
    id: 5,
    question: "What excites you most about coding?",
    emoji: "✨",
    options: [
      {
        text: "Creating beautiful user interfaces",
        emoji: "🎨",
        value: "ui",
        points: { fullstack: 2, frontend: 3, mobile: 2 },
      },
      {
        text: "Building complete applications",
        emoji: "🏗️",
        value: "full-apps",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
      {
        text: "Mobile app development",
        emoji: "📲",
        value: "mobile-dev",
        points: { fullstack: 1, frontend: 1, mobile: 3 },
      },
      {
        text: "Problem solving & logic",
        emoji: "🧩",
        value: "logic",
        points: { fullstack: 3, frontend: 2, mobile: 2 },
      },
    ],
  },
];

const courseRecommendations = {
  fullstack: {
    title: "Full Stack Development",
    icon: Code,
    emoji: "🚀",
    description:
      "Perfect for building complete web applications from frontend to backend",
    features: [
      "Frontend + Backend",
      "Database Management",
      "API Development",
      "Job Placement Support",
    ],
    color: "text-brand-sky-mint",
    bgColor: "bg-brand-sky-mint/10",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  frontend: {
    title: "Frontend Development",
    icon: Monitor,
    emoji: "🎨",
    description: "Ideal for creating beautiful and interactive user interfaces",
    features: [
      "React/Vue.js",
      "Responsive Design",
      "UI/UX Principles",
      "Modern CSS",
    ],
    color: "text-brand-sky-mint",
    bgColor: "bg-brand-sky-mint/10",
    gradient: "from-green-500/20 to-teal-500/20",
  },
  mobile: {
    title: "Mobile App Development",
    icon: Smartphone,
    emoji: "📱",
    description:
      "Great for building native and cross-platform mobile applications",
    features: [
      "React Native/Flutter",
      "iOS & Android",
      "App Store Deployment",
      "Mobile UI/UX",
    ],
    color: "text-brand-sky-mint",
    bgColor: "bg-brand-sky-mint/10",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
};

// Floating coding elements
const FloatingCodingElements = () => {
  const elements = [
    { content: "</>", style: "text-4xl font-bold" },
    { content: "{}", style: "text-3xl font-bold" },
    { content: "()", style: "text-3xl font-bold" },
    { content: ";", style: "text-4xl font-bold" },
  ];
  const positions = [
    { top: "10%", left: "8%", anim: "animate-float-slow" },
    { top: "20%", right: "10%", anim: "animate-float-medium" },
    { bottom: "15%", left: "12%", anim: "animate-float-slow" },
    { bottom: "10%", right: "15%", anim: "animate-float-medium" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {elements.map((el, i) => (
        <div
          key={i}
          className={`text-brand-sky-mint absolute select-none opacity-30 ${el.style} ${positions[i]!.anim}`}
          style={{ ...positions[i] }}
        >
          {el.content}
        </div>
      ))}
    </div>
  );
};

// Confetti animation component
const Confetti = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
            fontSize: `${0.5 + Math.random() * 1}rem`,
          }}
        >
          {["🎉", "🎊", "✨", "🌟", "💫", "🎈"][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  );
};

// Entry animation utility (like in @hero-section.tsx)
function useEntryAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.classList.add("opacity-0", "translate-y-8");
    // Force reflow for transition
    void el.offsetHeight;
    setTimeout(() => {
      el.classList.remove("opacity-0", "translate-y-8");
      el.classList.add("opacity-100", "translate-y-0");
    }, 10);
  }, []);
  return ref;
}

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedCourse, setRecommendedCourse] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Only use entry animation for intro
  const introRef = useEntryAnimation();

  const handleAnswerSelect = (questionId: number, value: string) => {
    setSelectedOption(value);
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption("");
      } else {
        calculateRecommendation();
      }
    }, 600);
  };

  const calculateRecommendation = () => {
    const scores = { fullstack: 0, frontend: 0, mobile: 0 };

    quizQuestions.forEach((question) => {
      const selectedAnswer = answers[question.id];
      if (selectedAnswer) {
        const option = question.options.find(
          (opt) => opt.value === selectedAnswer,
        );
        if (option) {
          scores.fullstack += option.points.fullstack;
          scores.frontend += option.points.frontend;
          scores.mobile += option.points.mobile;
        }
      }
    });

    const recommended = Object.entries(scores).reduce((a, b) =>
      scores[a[0] as keyof typeof scores] > scores[b[0] as keyof typeof scores]
        ? a
        : b,
    )[0];

    setRecommendedCourse(recommended);
    setShowResult(true);
    setShowConfetti(true);

    // Hide confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendedCourse("");
    setSelectedOption("");
    setShowConfetti(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br py-16 sm:py-24 md:min-h-screen">
        <FloatingCodingElements />
        <div
          ref={introRef}
          className="mx-auto max-w-4xl translate-y-8 px-4 opacity-0 transition-all duration-700 ease-out sm:px-6 lg:px-8"
        >
          <div className="bg-brand-sky-mint-20 absolute bottom-14 rounded-full blur-3xl filter sm:h-96 sm:w-96 md:-left-[450px] lg:bottom-24 lg:h-60 lg:w-60"></div>

          <div className="space-y-8 text-center">
            {/* Hero Section */}
            <div className="space-y-6">
              <div className="animate-bounce text-6xl sm:text-8xl">🎯</div>
              <h2 className="text-gradient-skymint-white text-4xl font-bold sm:text-5xl lg:text-6xl">
                Find Your Perfect Course
              </h2>
              <p className="text-brand-grey mx-auto max-w-2xl text-xl sm:text-2xl">
                Take our fun interactive quiz and discover which course matches
                your goals perfectly!
              </p>
            </div>

            {/* Features Grid */}
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
              <Card className="bg-brand-white/5 border-brand-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-3xl">⚡</div>
                  <h3 className="text-brand-white mb-2 font-semibold">
                    Quick & Easy
                  </h3>
                  <p className="text-brand-grey text-sm">
                    Just 5 simple questions
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-white/5 border-brand-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-3xl">🎯</div>
                  <h3 className="text-brand-white mb-2 font-semibold">
                    Personalized
                  </h3>
                  <p className="text-brand-grey text-sm">
                    Tailored recommendations
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-brand-white/5 border-brand-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 text-3xl">🚀</div>
                  <h3 className="text-brand-white mb-2 font-semibold">
                    Career Focused
                  </h3>
                  <p className="text-brand-grey text-sm">
                    Industry-aligned courses
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Start Button */}
            <Button
              onClick={startQuiz}
              className="bg-brand-sky-mint hover:bg-brand-sky-mint/90 text-brand-primary group rounded-2xl px-12 py-6 text-xl font-bold shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Start Quiz
              <Sparkles className="ml-3 h-6 w-6 group-hover:animate-spin" />
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className=" relative overflow-hidden py-16 sm:py-24">
      <FloatingCodingElements />
      {showConfetti && <Confetti />}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-gradient-skymint-white mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Find Your Perfect Course
          </h2>
          <div className="text-brand-grey flex items-center justify-center gap-2">
            <Target className="h-5 w-5" />
            <span>Personalized recommendation in progress...</span>
          </div>
        </div>

        <Card
          className="bg-brand-primary/90 border-brand-white/10 relative w-full overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-sm"
          style={{ minHeight: "600px" }}
        >
          {/* Animated background gradient */}
          <div className="from-brand-sky-mint/5 absolute inset-0 animate-pulse bg-gradient-to-br via-transparent to-purple-500/5"></div>

          <CardHeader className="relative z-10 pb-4">
            <div className="text-center">
              <div className="mb-4 animate-bounce text-4xl">
                {!showResult ? quizQuestions[currentQuestion]?.emoji : "🎉"}
              </div>
              <p className="text-brand-grey text-center">
                {!showResult
                  ? "Answer honestly to get the best recommendation"
                  : "Your personalized course recommendation is ready!"}
              </p>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 p-6">
            {!showResult ? (
              <div className="space-y-8">
                {/* Enhanced Progress Indicator */}
                <div className="space-y-4">
                  <div className="text-brand-grey flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="bg-brand-sky-mint/20 text-brand-sky-mint rounded-full px-3 py-1 font-semibold">
                      {Math.round(
                        ((currentQuestion + 1) / quizQuestions.length) * 100,
                      )}
                      %
                    </span>
                  </div>

                  <div className="relative">
                    <div className="bg-brand-white/10 h-3 w-full overflow-hidden rounded-full">
                      <div
                        className="from-brand-sky-mint relative h-3 rounded-full bg-gradient-to-r to-purple-400 transition-all duration-1000 ease-out"
                        style={{
                          width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                        }}
                      >
                        <div className="absolute inset-0 animate-pulse rounded-full bg-white/20"></div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between">
                      {quizQuestions.map((_, index) => (
                        <div
                          key={index}
                          className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            index <= currentQuestion
                              ? "bg-brand-sky-mint shadow-brand-sky-mint/50 shadow-lg"
                              : "bg-brand-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Question Display */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-brand-white mb-4 text-2xl font-bold leading-tight">
                      {quizQuestions[currentQuestion]?.question}
                    </h3>
                  </div>

                  <div className="grid gap-4">
                    {quizQuestions[currentQuestion]?.options.map(
                      (option, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            handleAnswerSelect(
                              quizQuestions[currentQuestion]!.id,
                              option.value,
                            )
                          }
                          className={`group relative w-full overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-[1.02] ${
                            selectedOption === option.value
                              ? "bg-brand-sky-mint/20 text-brand-sky-mint border-brand-sky-mint/50 shadow-brand-sky-mint/25 shadow-lg"
                              : answers[quizQuestions[currentQuestion]!.id] ===
                                  option.value
                                ? "bg-brand-sky-mint/10 text-brand-sky-mint border-brand-sky-mint/30"
                                : "bg-brand-white/5 text-brand-white border-brand-white/10 hover:bg-brand-white/10 hover:border-brand-white/20"
                          }`}
                        >
                          <div className="relative z-10 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="text-2xl">{option.emoji}</div>
                              <span className="text-lg font-medium">
                                {option.text}
                              </span>
                            </div>
                            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                          </div>

                          {/* Hover effect background */}
                          <div className="from-brand-sky-mint/5 absolute inset-0 bg-gradient-to-r to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ) : (
              // Enhanced Quiz Result
              <div className="space-y-8 text-center">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="mb-4 animate-bounce text-6xl">
                      {
                        courseRecommendations[
                          recommendedCourse as keyof typeof courseRecommendations
                        ]?.emoji
                      }
                    </div>
                    <h3 className="text-brand-white mb-2 text-3xl font-bold">
                      Perfect Match Found!
                    </h3>
                    <p className="text-brand-grey text-lg">
                      Based on your answers, here's your ideal course:
                    </p>
                  </div>

                  {recommendedCourse && (
                    <Card
                      className={`bg-gradient-to-br ${courseRecommendations[recommendedCourse as keyof typeof courseRecommendations].gradient} border-brand-sky-mint/20 relative overflow-hidden border-2 shadow-2xl`}
                    >
                      <div className="bg-brand-sky-mint/5 absolute inset-0 animate-pulse"></div>
                      <CardContent className="relative z-10 p-8">
                        <div className="mb-6 flex items-center justify-center">
                          {(() => {
                            const CourseIcon =
                              courseRecommendations[
                                recommendedCourse as keyof typeof courseRecommendations
                              ].icon;
                            return (
                              <CourseIcon className="text-brand-sky-mint h-16 w-16" />
                            );
                          })()}
                        </div>

                        <h4 className="text-brand-white mb-4 text-2xl font-bold">
                          {
                            courseRecommendations[
                              recommendedCourse as keyof typeof courseRecommendations
                            ].title
                          }
                        </h4>

                        <p className="text-brand-grey mb-6 text-lg">
                          {
                            courseRecommendations[
                              recommendedCourse as keyof typeof courseRecommendations
                            ].description
                          }
                        </p>

                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {courseRecommendations[
                            recommendedCourse as keyof typeof courseRecommendations
                          ].features.map((feature, index) => (
                            <div
                              key={index}
                              className="text-brand-grey bg-brand-white/5 flex items-center gap-3 rounded-lg p-3"
                            >
                              <CheckCircle className="text-brand-sky-mint h-5 w-5 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                  <Button
                    onClick={() => {
                      const enrollSection =
                        document.getElementById("enroll-now");
                      if (enrollSection) {
                        enrollSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-brand-sky-mint hover:bg-brand-sky-mint/90 text-brand-primary group flex-1 rounded-xl py-4 text-lg font-bold shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <Trophy className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Enroll Now
                  </Button>

                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-brand-white/20 text-brand-white hover:bg-brand-white/10 rounded-xl bg-transparent py-4 font-semibold"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Retake Quiz
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
