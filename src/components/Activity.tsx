import { achievement } from '@/constants/presentation_carousel';
import { motion } from 'framer-motion';
import PhotoCarousel from './PhotoCarousel';

export default function Activity({
  activities,
  isInView,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activities: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isInView: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="my-44"
    >
      <h3 className="text-4xl font-dancing font-bold text-university-red text-center mb-12">
        Vie étudiante & Activités
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div
              className="inline-block p-4 bg-university-red rounded-full mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <activity.icon className="text-white" size={32} />
            </motion.div>
            <h4 className="text-xl font-montserrat font-bold text-university-red mb-3">
              {activity.title}
            </h4>
            <p className="text-gray-600 font-montserrat mb-4 leading-relaxed">
              {activity.description}
            </p>
            <div className="space-y-2">
              {activity.highlights.map((highlight, highlightIndex) => (
                <motion.div
                  key={highlightIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2 + index * 0.1 + highlightIndex * 0.05,
                  }}
                  className="flex items-center justify-center text-sm text-university-red font-montserrat font-medium"
                >
                  <div className="w-2 h-2 bg-university-red rounded-full mr-2"></div>
                  {highlight}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-20">
        <PhotoCarousel photos={achievement} />
      </div>
    </motion.div>
  );
}
