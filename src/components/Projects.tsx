import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { activities } from "@/constants/activities";
import { projects } from "@/constants/projects";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Trophy, Users } from "lucide-react";
import { useRef } from "react";
import Activity from "./Activity";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="projets"
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
            Projets & Activités
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Découvrez les réalisations exceptionnelles de nos étudiants et la
            richesse de la vie étudiante au sein de notre formation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-dancing font-bold text-university-red text-center mb-12">
            Projets étudiants remarquables
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="relative">
                    <div className="text-6xl mb-4 text-center">
                      {project.image}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-university-red hover:text-red-800 text-white"
                      >
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-montserrat">
                        {project.year}
                      </span>
                    </div>
                    <CardTitle className="font-montserrat font-bold text-university-red text-xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="font-montserrat text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>

                    <div>
                      <h5 className="font-montserrat font-semibold text-gray-800 mb-2">
                        Technologies :
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-red-100 text-university-red text-xs rounded font-montserrat"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-montserrat font-semibold text-gray-800 mb-2">
                        Réalisations :
                      </h5>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-center text-sm text-gray-600 font-montserrat"
                          >
                            <Trophy
                              size={12}
                              className="text-university-red mr-2"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="flex items-center text-sm text-gray-500 font-montserrat">
                        <Users size={14} className="mr-1" />
                        {project.team} étudiants
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-university-red text-white rounded-full hover:bg-university-red-light transition-colors"
                        >
                          <Github size={16} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-university-red text-white rounded-full hover:bg-university-red-light transition-colors"
                        >
                          <ExternalLink size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <Activity activities={activities} isInView={isInView}></Activity>
      </div>
    </section>
  );
};

export default Projects;
