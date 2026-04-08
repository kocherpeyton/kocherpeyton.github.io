import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openSlideshow = (index: number) => {
    setSelectedIndex(index);
  };

  const closeSlideshow = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') {
        closeSlideshow();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Prevent body scroll when slideshow is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  return (
    <section id="photography" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Photography</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            A collection of moments captured through the lens, showcasing diverse perspectives
            and visual narratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-200 cursor-pointer"
              onClick={() => openSlideshow(index)}
            >
              <ImageWithFallback
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                  <p className="text-sm tracking-wider mb-1">{photo.category}</p>
                  <p className="text-lg">{photo.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slideshow Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeSlideshow}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Close slideshow"
          >
            <X size={32} />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-10"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
            <div className="relative max-w-6xl max-h-full">
              <ImageWithFallback
                src={photos[selectedIndex].url}
                alt={photos[selectedIndex].title}
                className="max-w-full max-h-[85vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-sm tracking-wider mb-1">{photos[selectedIndex].category}</p>
                <p className="text-xl">{photos[selectedIndex].title}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {selectedIndex + 1} / {photos.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}