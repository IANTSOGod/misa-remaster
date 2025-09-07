import { partners } from '@/constants/parteners';
import { partnerships } from '@/constants/partenership';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.85,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.4 },
  }),
};

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [[currentIndex, direction], setIndex] = useState([0, 0]);

  const nextSlide = () => {
    setIndex(([prev]) => [(prev + 1) % partners.length, 1]);
  };

  const prevSlide = () => {
    setIndex(([prev]) => [(prev - 1 + partners.length) % partners.length, -1]);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partenaires" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto md:px-6 px-2">
        {/* Intro */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center my-44"
        >
          <h2 className="text-5xl font-bold text-university-red mb-6">Nos partenaires</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-montserrat leading-relaxed">
            Un réseau d'entreprises prestigieuses qui nous font confiance pour former les talents de
            demain
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-20"
        >
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-university-red"
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
              <p className="text-gray-600 font-montserrat text-sm">{partnership.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="my-32"
        >
          <h3 className="text-4xl font-bold text-center text-university-red mb-12">
            Entreprises Partenaires
          </h3>

          <div className="relative h-96 flex items-center justify-center max-w-6xl mx-auto">
            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 z-30 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="text-university-red" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 z-30 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="text-university-red" size={24} />
            </button>

            {/* AnimatePresence */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {[-1, 0, 1].map((offset) => {
                const index = (currentIndex + offset + partners.length) % partners.length;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 300 }}
                    animate={{
                      opacity: offset === 0 ? 1 : 0.2,
                      scale: offset === 0 ? 1 : 0.75,
                      x: offset * 300,
                      zIndex: offset === 0 ? 20 : 10,
                    }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className={`absolute w-80 h-96 bg-white shadow-xl overflow-hidden cursor-pointer flex flex-col justify-between ${
                      offset !== 0 ? 'pointer-events-none' : ''
                    }`}
                  >
                    {/* Header */}
                    <div className={`h-28 bg-gradient-to-r ${partners[index].color} relative`}>
                      <div className="absolute top-4 right-4">
                        <span className="text-xs bg-white bg-opacity-20 text-white px-3 py-1 rounded-full font-montserrat">
                          {partners[index].category}
                        </span>
                      </div>
                    </div>

                    {/* Logo */}
                    <div className="w-full flex items-center justify-center absolute top-12">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg text-3xl border-4 border-white overflow-hidden">
                        {partners[index].logo}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 text-center mt-20">
                      <h4 className="text-2xl font-montserrat font-bold text-university-red mb-3">
                        {partners[index].name}
                      </h4>
                      <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                        {partners[index].description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className={`h-1 bg-gradient-to-r ${partners[index].color}`}></div>
                  </motion.div>
                );
              })}
            </div>

            {/* Indicators */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {[
                currentIndex - 3,
                currentIndex - 2,
                currentIndex - 1,
                currentIndex,
                currentIndex + 1,
                currentIndex + 2,
                currentIndex + 3,
              ].map((i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i - currentIndex])}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-university-red scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-university-red to-university-red-light p-8 my-44"
        >
          <h3 className="text-3xl  font-bold mb-4 text-university-red">
            Rejoignez notre réseau de partenaires
          </h3>
          <p className="text-xl font-montserrat mb-6 text-black opacity-90">
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
