import { Photo } from '@/constants/presentation_carousel';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface PhotoCarouselProps {
  photos: Photo[]; // tableau de photos passé en prop
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, photos.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? photos.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === photos.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full mx-auto bg-gray-50 shadow-2xl overflow-hidden transition-all duration-300">
      {/* Container principal des images */}
      <div className="relative h-96 md:h-[500px] lg:h-[760px] overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />

          {/* Overlay avec dégradé pour le texte */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
            <div className="max-w-2xl">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {photos[currentIndex].alt}
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-3 leading-relaxed">
                {/* {photos[currentIndex].description} */}
              </p>
              <div className="flex items-center justify-between text-white/80 text-sm">
                {/* <span className="flex items-center">
                  📍 {photos[currentIndex].location}
                </span> */}
                {/* <span>
                  Photo par {photos[currentIndex].photographer}
                </span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Bouton précédent */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg z-20"
          aria-label="Photo précédente"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Bouton suivant */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg z-20"
          aria-label="Photo suivante"
        >
          <ChevronRight size={24} />
        </button>

        {/* Bouton play/pause */}
        <button
          onClick={togglePlayPause}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-gray-900 p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 shadow-lg z-20"
          aria-label={isPlaying ? 'Mettre en pause' : 'Reprendre'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* Indicateurs */}
      <div className="flex justify-center items-center py-6 px-4 bg-gray-50">
        <div className="flex space-x-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 ${
                index === currentIndex ? 'bg-red-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller à la photo ${index + 1}`}
            />
          ))}
        </div>

        {/* Compteur */}
        <div className="ml-6 text-sm text-gray-500 font-medium">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Miniatures */}
      <div className="flex gap-1 p-2 mb-1 justify-center bg-gray-50 overflow-x-auto">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => goToSlide(index)}
            className={`w-20 h-12 overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 ${
              index === currentIndex
                ? 'border-b-4 border-b-red-500 opacity-100'
                : 'opacity-60 hover:opacity-80'
            }`}
          >
            <img
              src={photo.url}
              alt={`Miniature ${photo.alt}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
