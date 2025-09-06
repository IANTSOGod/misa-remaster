import { Brain, Globe, Rocket, Sparkles, Star } from "lucide-react";
import React, { useEffect, useState } from "react";

interface SpecializationData {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: React.ElementType;
  color: string;
  m1Content: string[];
  m2Content: string[];
}

export default function UniversityRoadmap() {
  const [showHero, setShowHero] = useState(false);
  const [showSpecializations, setShowSpecializations] = useState(false);
  const [visibleSpecs, setVisibleSpecs] = useState<Set<string>>(new Set());

  const specializations: SpecializationData[] = [
    {
      id: "misa",
      name: "MISA",
      fullName: "Mathématiques informatique et statistique appliqué",
      description:
        "Formation axée sur la recherche, l'innovation technologique et les applications scientifiques de l'informatique.",
      icon: Brain,
      color: "bg-gradient-to-br from-red-500 via-rose-500 to-pink-500",
      m1Content: [
        "Intelligence Artificielle Avancée",
        "Apprentissage Automatique",
        "Traitement du Signal Numérique",
        "Modélisation et Simulation",
        "Calcul Scientifique",
        "Méthodes Formelles",
      ],
      m2Content: [
        "Deep Learning et Réseaux de Neurones",
        "Vision par Ordinateur",
        "Traitement Automatique du Langage",
        "Bioinformatique",
        "Recherche et Innovation",
        "Projet de Recherche (6 mois)",
      ],
    },
    {
      id: "int",
      name: "INT",
      fullName: "Innovation et technologie",
      description:
        "Formation professionnalisante orientée vers les technologies émergentes et le développement d'applications modernes.",
      icon: Globe,
      color: "bg-gradient-to-br from-red-600 via-rose-600 to-red-500",
      m1Content: [
        "Développement Web Full-Stack",
        "Applications Mobile (iOS/Android)",
        "Cloud Computing et DevOps",
        "Cybersécurité",
        "IoT et Systèmes Embarqués",
        "UX/UI Design",
      ],
      m2Content: [
        "Microservices et Architecture Distribuée",
        "Blockchain et Cryptomonnaies",
        "Réalité Virtuelle/Augmentée",
        "Big Data et Analytics",
        "Stage en entreprise (6 mois)",
        "Projet industriel",
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);

      setTimeout(() => {
        setShowSpecializations(true);

        specializations.forEach((spec, index) => {
          setTimeout(() => {
            setVisibleSpecs((prev) => new Set([...prev, spec.id]));
          }, index * 400);
        });
      }, 800);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const HeroSection: React.FC = () => {
    return (
      <div
        className={`text-center mb-20 transition-all duration-1500 transform ${
          showHero
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-95"
        }`}
      >
        {/* Decorative elements */}
        <div className="relative">
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-red-400 rounded-full animate-bounce delay-100" />
          <div className="absolute -top-4 right-1/3 w-3 h-3 bg-rose-400 rounded-full animate-bounce delay-300" />
          <div className="absolute -top-6 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-500" />

          {/* Main hero content */}
          <div className="relative bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white px-12 py-16 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-8 left-8 w-32 h-32 bg-white rounded-full" />
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Sparkles className="w-12 h-12 animate-pulse" />
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-dancing font-bold tracking-wide">
                  Quoi de Neuf ?
                </h2>
                <Star className="w-12 h-12 animate-pulse" />
              </div>

              <div className="flex items-center justify-center space-x-3 mb-8">
                <Rocket className="w-8 h-8" />
                <p className="text-base sm:text-lg md:text-2xl font-montserrat font-medium">
                  Après la licence dans la mention MIT, découvrez nos nouvelles
                  spécialités
                </p>
                <Rocket className="w-8 h-8" />
              </div>

              {/* Animated connection lines */}
              <div className="relative mt-12">
                <div className="flex justify-center space-x-32">
                  <div className="w-1 h-16 bg-white opacity-60 relative">
                    <div className="absolute inset-0 bg-white animate-pulse rounded-full" />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full animate-bounce" />
                  </div>
                  <div className="w-1 h-16 bg-white opacity-60 relative">
                    <div className="absolute inset-0 bg-white animate-pulse rounded-full" />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full animate-bounce delay-200" />
                  </div>
                </div>

                {/* Horizontal connecting line */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white opacity-40 rounded-full">
                  <div className="absolute inset-0 bg-white animate-pulse rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const SpecializationCard: React.FC<{
    spec: SpecializationData;
    index: number;
  }> = ({ spec, index }) => {
    const Icon = spec.icon;
    const isVisible = visibleSpecs.has(spec.id);

    return (
      <div
        className={`transform transition-all duration-1000 delay-${
          index * 200
        } ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100 rotate-0"
            : "opacity-0 translate-y-16 scale-90 rotate-3"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.03] hover:-rotate-1 overflow-hidden group">
          {/* Header with gradient */}
          <div
            className={`${spec.color} p-6 sm:p-8 text-white relative overflow-hidden h-[300px]`}
          >
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mb-16 group-hover:scale-110 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <Icon className="w-16 h-16 group-hover:rotate-12 transition-transform duration-500" />
                <div className="text-right">
                  <div className="text-5xl font-montserrat font-black tracking-tight">
                    {spec.name}
                  </div>
                  <div className="text-lg font-montserrat font-medium opacity-90 mt-1">
                    Master 1 & 2
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-4 leading-tight">
                {spec.fullName}
              </h3>
              <p className="opacity-95 leading-relaxed font-montserrat text-lg">
                {spec.description}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 h-fit flex flex-col items-center align-center justify-center">
            {/* M1 */}
            <div className="mb-8">
              <h4 className="text-2xl font-montserrat font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-2xl flex items-center justify-center text-lg font-black mr-4 shadow-lg">
                  M1
                </div>
                Master 1
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {spec.m1Content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gradient-to-r from-red-50 to-rose-50 text-red-800 rounded-xl px-4 py-3 font-montserrat font-medium transition-all duration-300 hover:from-red-100 hover:to-rose-100 hover:scale-105 border border-red-100 hover:border-red-200 shadow-sm hover:shadow-md"
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>

            {/* M2 */}
            <div>
              <h4 className="text-2xl font-montserrat font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl flex items-center justify-center text-lg font-black mr-4 shadow-lg">
                  M2
                </div>
                Master 2
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {spec.m2Content.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-gradient-to-r from-rose-50 to-pink-50 text-rose-800 rounded-xl px-4 py-3 font-montserrat font-medium transition-all duration-300 hover:from-rose-100 hover:to-pink-100 hover:scale-105 border border-rose-100 hover:border-rose-200 shadow-sm hover:shadow-md"
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 font-montserrat">
      {/* Header */}
      <div className="pt-16 pb-12 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className=" text-2xl md:text-8xl font-montserrat font-black bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Spécialisations Master
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed font-montserrat font-medium max-w-3xl mx-auto">
            Choisissez votre voie vers l'excellence technologique
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 pb-16 h-fit">
        {/* Hero "Quoi de neuf" section */}
        <HeroSection />

        {/* Specializations */}
        <div
          className={`grid grid-cols-1 xl:grid-cols-2 gap-12 transition-all duration-1000 ${
            showSpecializations ? "opacity-100" : "opacity-0"
          }`}
        >
          {specializations.map((spec, index) => (
            <SpecializationCard key={spec.id} spec={spec} index={index} />
          ))}
        </div>

        {/* Footer */}
      </div>
    </div>
  );
}
