import { useParams, Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const collectionsData = {
  'desert-seasons': {
    title: 'Desert Seasons',
    description: 'The desert is a constant source of inspiration for me. Over the last three years, I\'ve photographed it almost every day, tracking the subtly changing seasons.',
    longDescription: 'This ongoing project documents the desert landscape throughout the year, capturing the subtle shifts in color, light, and life. From the harsh summer heat to the gentle winter blooms, each season brings its own character to the arid landscape.',
    year: '2023-2026',
    images: [
      'https://images.unsplash.com/photo-1624803972409-90a31ed3501b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBtb3VudGFpbnMlMjBhcml6b25hfGVufDF8fHx8MTc3NTY4MDA5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1762572813265-e1d595bb511c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWN0dXMlMjBmaWVsZCUyMGRlc2VydCUyMHNvdXRod2VzdHxlbnwxfHx8fDE3NzU2ODAwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1653930371819-fd2b5b6d65e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcml6b25hJTIwZGVzZXJ0JTIwc3Vuc2V0JTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzU2ODAxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1639985513807-bf86c641042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBjYWN0dXMlMjBzYWd1YXJvJTIwYXJpem9uYXxlbnwxfHx8fDE3NzU2ODAxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1757438059090-445d7100e1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kJTIwZHVuZXMlMjBkZXNlcnQlMjBwYXR0ZXJuc3xlbnwxfHx8fDE3NzU2ODAxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1767385998034-2fa00c66e74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjB3aWxkZmxvd2VycyUyMGJsb29tJTIwc3ByaW5nfGVufDF8fHx8MTc3NTY4MDEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1579286036980-909cd931b444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjByb2NrJTIwZm9ybWF0aW9ucyUyMHNvdXRod2VzdHxlbnwxfHx8fDE3NzU2ODAxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1645219333264-fb402ac3baa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc3NTY4MDEyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  'urban-nights': {
    title: 'Urban Nights',
    description: 'Exploring the interplay of light and shadow in the city after dark. A collection documenting the energy and solitude of urban spaces at night.',
    longDescription: 'A photographic exploration of city life after sunset. These images capture the unique atmosphere of urban environments at night, where artificial light creates dramatic contrasts and transforms familiar spaces.',
    year: '2024-2025',
    images: [
      'https://images.unsplash.com/photo-1618852432867-f98fa0616cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMHBob3RvZ3JhcGh5JTIwbmlnaHR8ZW58MXx8fHwxNzc1NjM4NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1646681268026-fbb6055f58f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1NjgwMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmclMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NTY3OTgwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1756300217545-b9860909057b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBzdHlsaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzU2Nzk3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  'natural-portraits': {
    title: 'Natural Portraits',
    description: 'Intimate portrait work captured in natural light. These images explore authenticity and vulnerability through minimal styling and honest moments.',
    longDescription: 'This collection focuses on capturing genuine human emotion and connection. Shot exclusively in natural light with minimal intervention, these portraits celebrate authenticity and the beauty of unguarded moments.',
    year: '2024-2026',
    images: [
      'https://images.unsplash.com/photo-1773470218625-32a5002c320b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodCUyMGludGltYXRlfGVufDF8fHx8MTc3NTY4MDEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1635085585625-226aec6edab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwb3V0ZG9vciUyMHBob3Rvc2hvb3R8ZW58MXx8fHwxNzc1NjgwMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1697298987002-f7b39ea574cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBvdmVyaGVhZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NTY3OTgwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768203633104-cad5a3802958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnklMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzU2Nzk4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759277513347-f0ff894b28e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0JTIwcGFzdHJ5JTIwZm9vZCUyMHN0eWxpbmd8ZW58MXx8fHwxNzc1Njc5ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
};

export function CollectionPage() {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collection = collectionId ? collectionsData[collectionId as keyof typeof collectionsData] : null;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openSlideshow = (index: number) => {
    setSelectedIndex(index);
  };

  const closeSlideshow = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null && collection) {
      setSelectedIndex((selectedIndex + 1) % collection.images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null && collection) {
      setSelectedIndex((selectedIndex - 1 + collection.images.length) % collection.images.length);
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

  if (!collection) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Collection not found</h1>
          <Link to="/" className="text-sm tracking-wide hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm tracking-wide hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
        
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 mb-4">{collection.year}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            {collection.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            {collection.longDescription}
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="16px">
              {collection.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden relative cursor-pointer group"
                  onClick={() => openSlideshow(index)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${collection.title} ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
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
                src={collection.images[selectedIndex]}
                alt={`${collection.title} ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-xl">{collection.title}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {selectedIndex + 1} / {collection.images.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}