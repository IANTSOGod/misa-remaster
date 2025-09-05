import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Database,
  Gamepad2,
  Globe,
  Shield,
  Smartphone,
} from "lucide-react";
import { useRef } from "react";

const Tracks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const tracks = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description:
        "Machine Learning, Deep Learning, traitement du langage naturel et vision par ordinateur",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description:
        "Sécurité des systèmes, cryptographie, audit de sécurité et forensique numérique",
      skills: [
        "Ethical Hacking",
        "Cryptographie",
        "ISO 27001",
        "CISSP",
        "Kali Linux",
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Développement Mobile",
      description: "Applications natives et cross-platform pour iOS et Android",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Développement Web",
      description: "Applications web modernes, architectures cloud et DevOps",
      skills: ["React", "Node.js", "Docker", "AWS", "MongoDB"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description:
        "Traitement de données massives, analyse prédictive et business intelligence",
      skills: ["Hadoop", "Spark", "Elasticsearch", "Tableau", "R"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description:
        "Conception et développement de jeux vidéo, réalité virtuelle et augmentée",
      skills: ["Unity", "Unreal Engine", "C#", "C++", "Blender"],
      color: "from-yellow-500 to-red-500",
    },
  ];

  return (
    <section
      id="parcours"
      className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
    >
      <div className="container mx-auto px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red mb-6">
            Parcours de spécialisation
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Choisissez votre voie parmi nos 6 parcours de spécialisation conçus
            pour répondre aux besoins du marché et à vos aspirations
            professionnelles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <CardHeader className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${track.color} opacity-10`}
                  ></div>
                  <motion.div
                    className={`inline-block p-4 bg-gradient-to-r ${track.color} rounded-full mb-4 relative z-10`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <track.icon className="text-white" size={32} />
                  </motion.div>
                  <CardTitle className="text-2xl font-montserrat font-bold text-university-red relative z-10">
                    {track.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 font-montserrat leading-relaxed my-5">
                    {track.description}
                  </CardDescription>

                  <div>
                    <h4 className="font-montserrat font-semibold text-university-red mb-2">
                      Technologies clés :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {track.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          className="px-3 py-1 bg-university-red text-white text-sm rounded-full font-montserrat font-medium"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 font-montserrat mb-6">
            Tous les parcours incluent un tronc commun solide en mathématiques,
            algorithmique et génie logiciel
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Mathématiques appliquées",
              "Algorithmique",
              "Génie logiciel",
              "Gestion de projet",
              "Communication",
            ].map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-white border-2 border-university-red text-university-red rounded-full font-montserrat font-medium"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tracks;
