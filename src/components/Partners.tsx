import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Handshake, Users, Award } from 'lucide-react';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const partners = [
    {
      category: "Grandes Entreprises",
      companies: ["Microsoft", "Google", "Amazon", "IBM", "Oracle", "SAP"],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Startups & Scale-ups",
      companies: ["Criteo", "BlaBlaCar", "Doctolib", "Deezer", "Klarna", "Revolut"],
      color: "from-green-500 to-green-600"
    },
    {
      category: "ESN & Consulting",
      companies: ["Capgemini", "Accenture", "Sopra Steria", "Atos", "CGI", "Deloitte"],
      color: "from-purple-500 to-purple-600"
    },
    {
      category: "Institutions",
      companies: ["INRIA", "CNRS", "CEA", "ANSSI", "Pôle Emploi", "La Poste"],
      color: "from-red-500 to-red-600"
    }
  ];

  const partnerships = [
    {
      icon: Handshake,
      title: "Stages & Alternance",
      description: "Plus de 200 offres de stages et contrats d'alternance par an",
      number: "200+"
    },
    {
      icon: Users,
      title: "Interventions Professionnelles",
      description: "Experts du secteur intervenant dans nos cours",
      number: "50+"
    },
    {
      icon: Building2,
      title: "Entreprises Partenaires",
      description: "Réseau d'entreprises pour l'insertion professionnelle",
      number: "150+"
    },
    {
      icon: Award,
      title: "Projets Collaboratifs",
      description: "Projets réels menés avec nos partenaires industriels",
      number: "30+"
    }
  ];

  return (
    <section id="partenaires" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-dancing font-bold text-university-red mb-6">
            Nos partenaires
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Un réseau d'entreprises prestigieuses qui nous font confiance pour former 
            les talents de demain et offrir des opportunités exceptionnelles à nos étudiants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="inline-block p-4 bg-university-red rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <partnership.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-3xl font-bold text-university-red font-montserrat mb-2">
                {partnership.number}
              </h3>
              <h4 className="text-lg font-montserrat font-semibold text-gray-800 mb-2">
                {partnership.title}
              </h4>
              <p className="text-gray-600 font-montserrat text-sm">
                {partnership.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-university-red mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.companies.map((company, companyIndex) => (
                    <motion.div
                      key={companyIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.8 + categoryIndex * 0.1 + companyIndex * 0.05 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200 cursor-pointer"
                    >
                      <span className="font-montserrat font-medium text-gray-700 hover:text-university-red transition-colors duration-200">
                        {company}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-gradient-to-r from-university-red to-university-red-light text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-dancing font-bold mb-4">
            Rejoignez notre réseau de partenaires
          </h3>
          <p className="text-xl font-montserrat mb-6 opacity-90">
            Vous êtes une entreprise ? Collaborez avec nous pour former les talents de demain
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-university-red font-montserrat font-semibold px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Devenir partenaire
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;