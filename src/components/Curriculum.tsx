import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { semesters } from "@/constants/semester";
import { motion, useInView } from "framer-motion";
import { Award, BookOpen, Clock, Users } from "lucide-react";
import { useRef } from "react";

const Curriculum = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="programmes"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Tech background */}
      <div className="absolute inset-0 tech-dots opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red mb-6">
            Programmes par semestre de licence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Un cursus progressif sur 3 années pour acquérir toutes les
            compétences nécessaires à votre réussite professionnelle.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="L1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-red-50 p-1 rounded-xl h-16 shadow-inner">
              <TabsTrigger
                value="L1"
                className="font-montserrat font-bold text-lg h-12 rounded-lg transition-all duration-300
    data-[state=active]:bg-red-200 data-[state=active]:text-red-800 data-[state=active]:shadow-lg
    data-[state=inactive]:bg-red-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-red-100 data-[state=inactive]:hover:text-red-800"
              >
                L1
              </TabsTrigger>
              <TabsTrigger
                value="L2"
                className="font-montserrat font-bold text-lg h-12 rounded-lg transition-all duration-300
    data-[state=active]:bg-red-200 data-[state=active]:text-red-800 data-[state=active]:shadow-lg
    data-[state=inactive]:bg-red-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-red-100 data-[state=inactive]:hover:text-red-800"
              >
                L2
              </TabsTrigger>
              <TabsTrigger
                value="L3"
                className="font-montserrat font-bold text-lg h-12 rounded-lg transition-all duration-300
    data-[state=active]:bg-red-200 data-[state=active]:text-red-800 data-[state=active]:shadow-lg
    data-[state=inactive]:bg-red-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-red-100 data-[state=inactive]:hover:text-red-800"
              >
                L3
              </TabsTrigger>
            </TabsList>

            {Object.entries(semesters).map(([year, yearSemesters]) => (
              <TabsContent key={year} value={year} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {yearSemesters.map((semester, semesterIndex) => (
                    <motion.div
                      key={semesterIndex}
                      initial={{
                        opacity: 0,
                        x: semesterIndex % 2 === 0 ? -50 : 50,
                      }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : {
                              opacity: 0,
                              x: semesterIndex % 2 === 0 ? -50 : 50,
                            }
                      }
                      transition={{ duration: 0.6, delay: semesterIndex * 0.2 }}
                    >
                      <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="bg-gradient-to-r from-university-red to-university-red-light text-white">
                          <CardTitle className="font-montserrat font-bold text-xl text-university-red">
                            {semester.semester}
                          </CardTitle>
                          <CardDescription className="text-university-red">
                            {semester.modules.reduce(
                              (total, module) => total + module.credits,
                              0
                            )}{" "}
                            crédits ECTS
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            {semester.modules.map((module, moduleIndex) => (
                              <motion.div
                                key={moduleIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                  isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                                }
                                transition={{
                                  duration: 0.4,
                                  delay:
                                    semesterIndex * 0.2 + moduleIndex * 0.1,
                                }}
                                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200"
                              >
                                <div className="flex-1">
                                  <h4 className="font-montserrat font-semibold text-gray-800">
                                    {module.name}
                                  </h4>
                                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                    <span className="flex items-center gap-1">
                                      <Award size={14} />
                                      {module.credits} ECTS
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock size={14} />
                                      {module.hours}h
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: BookOpen,
              title: "180 crédits ECTS",
              description: "Formation complète reconnue à l'international",
            },
            {
              icon: Users,
              title: "Projets en équipe",
              description: "Apprentissage collaboratif et professionnel",
            },
            {
              icon: Clock,
              title: "1800h de cours",
              description: "Répartition équilibrée théorie/pratique",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl"
            >
              <motion.div
                className="inline-block p-4 bg-university-red rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-xl font-montserrat font-bold text-university-red mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 font-montserrat">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
