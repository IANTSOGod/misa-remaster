import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Cpu, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen max-w-screen bg-gradient-to-br from-white via-red-50 to-red-100 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-university-red opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <Code size={60} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-university-red opacity-20"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Cpu size={80} />
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-university-red opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <Database size={70} />
        </motion.div>
      </div>

      <div className="container mx-auto md:px-6 px-2 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl  font-semibold gradient-text mb-8"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Mention informatique et technologie
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-8 font-montserrat font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Formez-vous aux technologies de demain dans un environnement d'excellence
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-university-red hover:bg-university-red-light hover:bg-red-700 hover:text-gray-100 text-white font-montserrat font-semibold px-8 py-4 text-lg animate-pulse-glow rounded-none"
              onClick={() =>
                document.getElementById('aboutMe')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Qui sommes-nous ?
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-university-red text-university-red hover:bg-gray-100 hover:text-red-500 font-montserrat font-semibold px-8 py-4 text-lg rounded-none"
              onClick={() =>
                document.getElementById('parcours')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Voir les parcours
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute left-1/2 mt-20 transform -translate-x-1/2 rounded-full bg-university-red w-[50px] h-[50px] flex items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-white" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
