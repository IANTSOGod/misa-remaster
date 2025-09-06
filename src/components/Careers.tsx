import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const careers = [
    {
      title: "Développeur Full-Stack",
      salary: "35-55k€",
      growth: "+15%",
      description: "Conception et développement d'applications web complètes",
      companies: ["Startups", "ESN", "Grandes entreprises"],
    },
    {
      title: "Data Scientist",
      salary: "45-70k€",
      growth: "+25%",
      description: "Analyse de données et développement d'algorithmes d'IA",
      companies: ["GAFAM", "Banques", "Consulting"],
    },
    {
      title: "Expert Cybersécurité",
      salary: "50-80k€",
      growth: "+30%",
      description: "Protection des systèmes et audit de sécurité",
      companies: ["ANSSI", "Défense", "Cybersécurité"],
    },
    {
      title: "Architecte Cloud",
      salary: "55-85k€",
      growth: "+20%",
      description: "Conception d'infrastructures cloud et DevOps",
      companies: ["AWS", "Microsoft", "Google"],
    },
    {
      title: "Chef de Projet IT",
      salary: "40-65k€",
      growth: "+12%",
      description: "Management d'équipes et pilotage de projets",
      companies: ["Tous secteurs", "ESN", "Consulting"],
    },
    {
      title: "Entrepreneur Tech",
      salary: "Variable",
      growth: "+∞",
      description: "Création de startups et innovation technologique",
      companies: ["Startup", "Incubateurs", "Freelance"],
    },
  ];

  const sectors = [
    { name: "Technologies", percentage: 35, color: "bg-red-500" },
    { name: "Finance", percentage: 20, color: "bg-red-400" },
    { name: "Santé", percentage: 15, color: "bg-red-300" },
    { name: "Industrie", percentage: 12, color: "bg-red-200" },
    { name: "Consulting", percentage: 10, color: "bg-red-100" },
    { name: "Autres", percentage: 8, color: "bg-gray-200" },
  ];

  return (
    <section
      id="debouches"
      className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red mb-6">
            Débouchés professionnels
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Nos diplômés intègrent les meilleures entreprises du secteur
            technologique avec des perspectives d'évolution exceptionnelles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-montserrat font-bold text-university-red mb-8"
            >
              Métiers accessibles
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-6">
              {careers.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="font-montserrat font-bold text-university-red text-lg">
                          {career.title}
                        </CardTitle>
                        {/* <div className="flex items-center gap-2 text-green-600 font-montserrat font-semibold">
                          <TrendingUp size={16} />
                          {career.growth}
                        </div> */}
                      </div>
                      {/* <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign size={16} />
                        <span className="font-montserrat font-semibold">{career.salary}</span>
                      </div> */}
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="font-montserrat text-gray-600 mb-4">
                        {career.description}
                      </CardDescription>
                      <div>
                        <h5 className="font-montserrat font-semibold text-university-red mb-2">
                          Secteurs d'activité :
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {career.companies.map((company, companyIndex) => (
                            <span
                              key={companyIndex}
                              className="px-2 py-1 bg-red-100 text-university-red text-sm rounded font-montserrat"
                            >
                              {company}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-montserrat font-bold text-university-red mb-8"
            >
              Répartition par secteur
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="space-y-4">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-montserrat font-medium text-gray-700">
                        {sector.name}
                      </span>
                      <span className="font-montserrat font-bold text-university-red">
                        {sector.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${sector.percentage}%` }
                            : { width: 0 }
                        }
                        transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                        className={`h-3 rounded-full ${sector.color}`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 bg-white p-6 rounded-xl shadow-lg"
            >
              <h4 className="font-montserrat font-bold text-university-red text-xl mb-4">
                Statistiques d'insertion
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-montserrat text-gray-600">Taux d'emploi à 6 mois</span>
                  <span className="font-montserrat font-bold text-green-600">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat text-gray-600">Salaire moyen d'entrée</span>
                  <span className="font-montserrat font-bold text-university-red">38k€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-montserrat text-gray-600">Poursuite d'études</span>
                  <span className="font-montserrat font-bold text-blue-600">25%</span>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
