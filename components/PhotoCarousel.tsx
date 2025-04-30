import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/api/placeholder/600/800",
    alt: "Professional headshot",
    caption: "Full Stack Developer specializing in modern web technologies"
  },
  {
    id: 2,
    src: "/api/placeholder/600/800",
    alt: "Coding session",
    caption: "Creating solutions through code"
  },
  {
    id: 3,
    src: "/api/placeholder/600/800",
    alt: "Speaking at tech meetup",
    caption: "Sharing knowledge with the community"
  },
  {
    id: 4,
    src: "/api/placeholder/600/800",
    alt: "Working with team",
    caption: "Collaborating on innovative projects"
  }
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setIsAutoPlaying(false);
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-xl">
      <div className="relative h-96 w-full md:h-[500px]">
        {photos.map((photo, index) => (
          <div 
            key={photo.id}
            className={`absolute h-full w-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="text-xl font-semibold">{photo.alt}</h3>
              <p className="text-sm">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition hover:bg-black/50"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}