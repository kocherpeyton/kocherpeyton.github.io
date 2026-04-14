import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const collections = [
  {
    id: 'Human-Form',
    title: 'Human Form',
    description: 'Exploration of the human body through form',
    images: [
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775791065/C9C05A2F-02FE-4B7E-9552-7F2AE5E995E4_k3yja0.jpg',
        span: 'row-span-2',
      },
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775791065/BA95C21B-F557-4248-9CD7-E6483B43683C_snqyzo.jpg',
        span: 'row-span-1',
      },
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775791064/D6722693-0E1E-4DD2-B772-631D040B8441_xxqj6a.jpg',
        span: 'row-span-2',
      },
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775790950/photoshop_qbylrm.jpg',
        span: 'row-span-1',
      },
    ],
  },
  {
    id: 'Acrobat',
    title: 'Acrobat',
    description: 'Artistic expression through movement',
    images: [
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775791177/Acrobat0123_crddcq.jpg',
        span: 'row-span-1',
      },
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775850983/acrobat_1_ssstla.jpg',
        span: 'row-span-2',
      },
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775850984/Acrobat0128_1_vto7pq.jpg',
        span: 'row-span-1',
      },
      {
        url: 'https://res.cloudinary.com/dtfsus1am/image/upload/q_auto/f_auto/v1775851273/Screenshot_2026-04-10_at_1.00.59_PM_g5iqqq.png',
        span: 'row-span-2',
      },
    ],
  },
  {
    id: 'natural-portraits',
    title: 'Natural Portraits',
    description: 'Intimate portrait work captured in natural light. These images explore authenticity and vulnerability through minimal styling and honest moments.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1773470218625-32a5002c320b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodCUyMGludGltYXRlfGVufDF8fHx8MTc3NTY4MDEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
        span: 'row-span-2',
      },
      {
        url: 'https://images.unsplash.com/photo-1635085585625-226aec6edab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwb3V0ZG9vciUyMHBob3Rvc2hvb3R8ZW58MXx8fHwxNzc1NjgwMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        span: 'row-span-1',
      },
      {
        url: 'https://images.unsplash.com/photo-1741178373523-a78e0f77088a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwb3V0ZG9vciUyMG5hdHVyYWx8ZW58MXx8fHwxNzc1NjgwMjY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        span: 'row-span-2',
      },
      {
        url: 'https://images.unsplash.com/photo-1653530611545-6d3fdbcb586f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlZGl0b3JpYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzU2ODAyNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        span: 'row-span-1',
      },
    ],
  },
];

// Flatten all images into a single array for slideshow
const allImages = collections.flatMap((collection) =>
  collection.images.map((img) => ({
    url: img.url,
    title: collection.title,
  }))
);

export function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openSlideshow = (collectionIndex: number, imageIndex: number) => {
    // Calculate the global index
    let globalIndex = 0;
    for (let i = 0; i < collectionIndex; i++) {
      globalIndex += collections[i].images.length;
    }
    globalIndex += imageIndex;
    setSelectedIndex(globalIndex);
  };

  const closeSlideshow = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % allImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + allImages.length) % allImages.length);
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
    <div className="min-h-screen bg-black text-white">
      {/* Intro Section */}
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl">
          Creative Director & <br />
          Sensory Photographer<br />
          based in Atlanta and California.
        </h1>
      </div>

      {/* Collections */}
      <div className="px-6 md:px-12 pb-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {collections.map((collection, collectionIndex) => (
            <div key={collection.id} className="space-y-6">
              {/* Images Grid */}
              <div className="grid grid-cols-2 auto-rows-[250px] gap-4">
                {collection.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className={`overflow-hidden relative ${image.span} max-h-[600px] max-w-full cursor-pointer group`}
                    onClick={() => openSlideshow(collectionIndex, imageIndex)}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={`${collection.title} ${imageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* Collection Info */}
              <div className="space-y-4">
                <p className="text-sm leading-relaxed max-w-2xl text-gray-400">
                  {collection.description}
                </p>
                <Link
                  to={`/collection/${collection.id}`}
                  className="inline-flex items-center gap-2 text-sm tracking-wide hover:gap-3 transition-all text-white"
                >
                  View Project <ArrowRight size={16} />
                </Link>
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
                src={allImages[selectedIndex].url}
                alt={allImages[selectedIndex].title}
                className="max-w-full max-h-[85vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="text-xl">{allImages[selectedIndex].title}</p>
                <p className="text-sm text-gray-300 mt-2">
                  {selectedIndex + 1} / {allImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}