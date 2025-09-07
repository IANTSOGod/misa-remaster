import { motion, useInView } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import { useRef } from 'react';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      icon: GraduationCap,
      number: '95%',
      label: "Taux d'insertion professionnelle",
    },
    { icon: Users, number: '200+', label: 'Étudiants par promotion' },
    { icon: Award, number: '15+', label: "Années d'excellence" },
    { icon: BookOpen, number: '30+', label: 'Modules spécialisés' },
  ];

  return (
    <section id="aboutMe" className="py-20 bg-white max-w-screen overflow-x-hidden relative">
      <div className="container mx-auto md:px-6 px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center min-h-screen flex flex-col justify-center"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red lg:mb-32 mb-14">
            Qui sommes-nous ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Fondée en 1996 dans le département de Mathématiques et Informatique des Sciences de
            l’Université d’Antananarivo, avec le soutien du projet PRESUP (Programme de Renforcement
            de l’Enseignement Supérieur) et la Coopération Française.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="my-32"
          >
            <h3 className="text-3xl font-montserrat font-bold text-university-red mb-6">
              Évolutions vers le LMD
            </h3>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p className="text-lg leading-relaxed">
                Ayant basculé dans le système LMD depuis 2014, la Maîtrise en Informatique et
                Statistique Appliquées est devenue Mathématiques Informatique et Statistique
                Appliquées. La MISA propose une formation orientée recherche pour les étudiants en
                M2, dont la première promotion est sortie en 2016.
              </p>
              {/* <p className="text-lg leading-relaxed">
                Notre approche pédagogique privilégie l'apprentissage par
                projet, l'innovation et la collaboration avec le monde
                professionnel.
              </p>
              <p className="text-lg leading-relaxed">
                Nous préparons nos étudiants à devenir les leaders
                technologiques de demain grâce à un enseignement de qualité et
                des infrastructures modernes.
              </p> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl"
          >
            <h3 className="text-3xl font-montserrat font-bold text-university-red mb-6">
              Expansion et Innovation
            </h3>
            <div className="space-y-4 text-gray-700 font-montserrat">
              <p className="text-lg leading-relaxed">
                À la fin de l’année 2022, la MISA introduit la Mention Informatique et Technologie,
                offrant une formation complète de la première année (L1) à la troisième année (L3).
                Cette initiative marque une nouvelle ère pour la MISA, consolidant son statut
                d’institution pionnière dans le domaine de l’enseignement supérieur en informatique
                et technologie à Madagascar.
              </p>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
      <PhotoCarousel photos={photos} />
    </section>
  );
};

export default AboutMe;
