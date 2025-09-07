import { partners } from "@/constants/parteners";
import { partnerships } from "@/constants/partenership";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + partners.length) % partners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + partners.length) % partners.length;
      visible.push({ ...partners[index], position: i });
    }
    return visible;
  };

  return (
    <section id="partenaires" className="py-20 bg-white overflow-hidden">
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
            Un réseau d'entreprises prestigieuses qui nous font confiance pour
            former les talents de demain
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {partnerships.map((partnership, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
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

        {/* Partners Carousel - Fixed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-dancing font-bold text-center text-university-red mb-12">
            Entreprises Partenaires
          </h3>

          <div className="relative h-96 flex items-center justify-center max-w-6xl mx-auto">
            {/* Navigation Buttons */}
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

            {/* Carousel Container - Fixed overflow and positioning */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {getVisiblePartners().map((partner, index) => {
                const { position } = partner;
                const isCenter = position === 0;
                const isLeft = position === -1;
                const isRight = position === 1;

                return (
                  <motion.div
                    key={`${partner.name}-${currentIndex}`}
                    initial={{
                      x: position * 350,
                      scale: isCenter ? 1 : 0.75,
                      opacity: isCenter ? 1 : 0.6,
                      rotateY: position * 35,
                      z: isCenter ? 100 : 0,
                    }}
                    animate={{
                      x: position * 320,
                      scale: isCenter ? 1 : 0.75,
                      opacity: isCenter ? 1 : 0.6,
                      rotateY: position * 30,
                      z: isCenter ? 100 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="absolute"
                    style={{
                      perspective: "1000px",
                      transformStyle: "preserve-3d",
                      zIndex: isCenter ? 20 : 10,
                    }}
                  >
                    <div
                      className={`
                        w-80 h-72 bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer
                        ${
                          isCenter
                            ? "ring-4 ring-university-red ring-opacity-50 shadow-2xl"
                            : "shadow-lg"
                        }
                        hover:shadow-2xl transition-all duration-300
                      `}
                      onClick={() => {
                        if (!isCenter) {
                          const steps = -position;
                          setCurrentIndex(
                            (prev) =>
                              (prev + steps + partners.length) % partners.length
                          );
                        }
                      }}
                    >
                      {/* Card Header with Gradient */}
                      <div
                        className={`h-20 bg-gradient-to-r ${partner.color} relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                        <div className="absolute top-4 right-4">
                          <span className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full font-montserrat">
                            {partner.category}
                          </span>
                        </div>
                      </div>

                      {/* Logo Section */}
                      <div className="w-full flex items-center align-middle justify-center -mt-10 absolute">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center align-center shadow-lg text-3xl border-4 border-white">
                          {partner.logo}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-6 pb-6 text-center mt-20">
                        <h4 className="text-2xl font-montserrat font-bold text-university-red mb-3">
                          {partner.name}
                        </h4>
                        <p className="text-gray-600 font-montserrat text-sm leading-relaxed">
                          {partner.description}
                        </p>
                      </div>

                      {/* Bottom Accent */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${partner.color}`}
                      ></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-university-red scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-university-red to-university-red-light p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-dancing font-bold mb-4 text-university-red">
            Rejoignez notre réseau de partenaires
          </h3>
          <p className="text-xl font-montserrat mb-6 text-black opacity-90">
            Vous êtes une entreprise ? Collaborez avec nous pour former les
            talents de demain
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
