import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              Award-winning photographer, director & cinematographer based in Arizona.
            </h1>
            
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                As a member of Arizona's vibrant creative community, I bring a different perspective to my work. Whether I'm photographing the exceptional landscapes of the Southwestern desert, directing creative projects or setting the look for independent films, I always strive to put the story first.
              </p>
              
              <p>
                With years of experience in visual storytelling and a passion for capturing authentic moments, I work with clients to create compelling imagery that resonates. My approach combines technical precision with artistic vision, resulting in work that stands out.
              </p>
              
              <p>
                Please contact me directly for projects or to inquire about purchasing my work.
              </p>
            </div>

            {/* Contact Links */}
            <div className="pt-4 space-y-2 text-sm">
              <a
                href="mailto:kocherpeyton06@gmail.com"
                className="block underline hover:text-gray-400 transition-colors"
              >
                kocherpeyton06@gmail.com
              </a>
              <a
                href="https://instagram.com/peyton_kocher"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline hover:text-gray-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623080285406-5f0db64add8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGFyaXpvbmElMjBkZXNlcnR8ZW58MXx8fHwxNzc1Njg2OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Photography work"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}