import { motion, useInView } from "framer-motion";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";
import { useRef } from "react";

const ProgramPresentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: GraduationCap,
      number: "95%",
      label: "Taux d'insertion professionnelle",
    },
    { icon: Users, number: "200+", label: "Étudiants par promotion" },
    { icon: Award, number: "15+", label: "Années d'excellence" },
    { icon: BookOpen, number: "30+", label: "Modules spécialisés" },
  ];

  return (
    <section id="presentation" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red mb-6">
            Une formation d'excellence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Notre mention informatique forme les futurs experts du numérique à
            travers un cursus innovant alliant théorie fondamentale et pratique
            professionnelle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-montserrat font-bold text-university-red mb-6">
              Notre vision
            </h3>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p className="text-lg leading-relaxed">
                Former des informaticiens polyvalents capables de s'adapter aux
                évolutions technologiques et de répondre aux défis du monde
                numérique.
              </p>
              <p className="text-lg leading-relaxed">
                Notre approche pédagogique privilégie l'apprentissage par
                projet, l'innovation et la collaboration avec le monde
                professionnel.
              </p>
              <p className="text-lg leading-relaxed">
                Nous préparons nos étudiants à devenir les leaders
                technologiques de demain grâce à un enseignement de qualité et
                des infrastructures modernes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-montserrat font-bold text-university-red mb-6">
              Points forts
            </h3>
            <ul className="space-y-4">
              {[
                "Enseignement personnalisé en petits groupes",
                "Laboratoires équipés des dernières technologies",
                "Partenariats avec les entreprises du secteur",
                "Projets réels dès la première année",
                "Accompagnement vers l'emploi",
                "Formation continue des enseignants",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center text-gray-700 font-montserrat"
                >
                  <div className="w-2 h-2 bg-university-red rounded-full mr-3"></div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                className="inline-block p-4 bg-university-red rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="text-white" size={32} />
              </motion.div>
              <h4 className="text-3xl font-bold text-university-red font-montserrat mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-600 font-montserrat font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramPresentation;
