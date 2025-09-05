import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Calendar, CheckCircle, Clock, FileText, Users } from "lucide-react";
import { useRef } from "react";

const JoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const admissionSteps = [
    {
      icon: FileText,
      title: "Dossier de candidature",
      description:
        "Soumettez votre dossier complet avec relevés de notes et lettre de motivation",
      deadline: "15 Mars 2024",
      status: "required",
    },
    {
      icon: Users,
      title: "Entretien de motivation",
      description:
        "Entretien individuel avec l'équipe pédagogique (30 minutes)",
      deadline: "Avril 2024",
      status: "conditional",
    },
    {
      icon: CheckCircle,
      title: "Tests techniques",
      description: "Évaluation des compétences en mathématiques et logique",
      deadline: "Mai 2024",
      status: "conditional",
    },
    {
      icon: Calendar,
      title: "Résultats d'admission",
      description: "Notification des résultats et procédure d'inscription",
      deadline: "Juin 2024",
      status: "final",
    },
  ];

  const requirements = [
    "Baccalauréat scientifique ou équivalent",
    "Moyenne générale ≥ 12/20",
    "Bon niveau en mathématiques",
    "Motivation pour l'informatique",
    "Niveau B2 en anglais recommandé",
  ];

  const documents = [
    "Dossier de candidature complété",
    "Relevés de notes du baccalauréat",
    "Relevés de notes post-bac (si applicable)",
    "Lettre de motivation personnalisée",
    "CV détaillé",
    "Lettres de recommandation (optionnel)",
  ];

  return (
    <section id="rejoindre" className="py-20 bg-white relative overflow-hidden">
      {/* Background tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #991b1b 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red mb-6">
            Comment nous rejoindre ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Intégrez notre formation d'excellence et donnez vie à vos ambitions
            dans le domaine de l'informatique. Découvrez notre processus
            d'admission transparent et nos critères de sélection.
          </p>
        </motion.div>

        {/* Processus d'admission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-dancing font-bold text-university-red text-center mb-12">
            Processus d'admission
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-red-50 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-university-red">
                  <CardHeader className="text-center">
                    <motion.div
                      className="inline-block p-4 bg-university-red rounded-full mb-4 mx-auto"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="text-white" size={32} />
                    </motion.div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="bg-university-red text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {index + 1}
                      </span>
                      <CardTitle className="font-montserrat font-bold text-university-red text-lg">
                        {step.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="font-montserrat text-gray-600 leading-relaxed">
                      {step.description}
                    </CardDescription>
                    <div className="flex items-center justify-center gap-2 text-sm font-montserrat font-semibold text-university-red">
                      <Clock size={16} />
                      {step.deadline}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Prérequis et documents */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="h-full bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-university-red to-university-red-light text-white">
                <CardTitle className="font-montserrat font-bold text-2xl flex items-center gap-3">
                  <CheckCircle size={28} />
                  Prérequis d'admission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3 font-montserrat text-gray-700"
                    >
                      <div className="w-2 h-2 bg-university-red rounded-full flex-shrink-0"></div>
                      {req}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="h-full bg-white shadow-lg">
              <CardHeader className="bg-gradient-to-r from-university-red to-university-red-light text-white">
                <CardTitle className="font-montserrat font-bold text-2xl flex items-center gap-3">
                  <FileText size={28} />
                  Documents requis
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {documents.map((doc, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="flex items-center gap-3 font-montserrat text-gray-700"
                    >
                      <div className="w-2 h-2 bg-university-red rounded-full flex-shrink-0"></div>
                      {doc}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact et candidature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-university-red to-university-red-light text-black p-8 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-dancing font-bold mb-4">
                Prêt à candidater ?
              </h3>
              <p className="text-xl font-montserrat mb-6 opacity-90">
                Rejoignez notre communauté d'étudiants passionnés et lancez
                votre carrière dans l'informatique !
              </p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-university-red hover:bg-gray-100 font-montserrat font-bold px-8 py-4 text-lg mb-4"
                >
                  Candidater maintenant
                </Button>
              </motion.div>
              <p className="text-sm opacity-75 font-montserrat">
                Candidatures ouvertes jusqu'au 15 mars 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
