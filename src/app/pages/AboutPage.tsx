import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <div className="space-y-15">
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
              My name is Peyton Kocher.
            </h1>
            
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                I'm an Atlanta and California based photographer and Creative Director currently sculpting a distinctive visual language. Through my brand PMKCREATIVE, I merge technical precision with a high fashion editorial sensibility, transforming traditional portraits and graduation milestones into intentional works of art. Driven by my passion for storytelling and a keen eye for composition, my work captures the raw energy of transition, ensuring every subject feels directed, empowered, and authentically seen. </p>
                <p>
                I create immersive visual experiences that engage the senses and tell stories in a way that resonates with audiences. My work has been recognized for its innovative approach to visual storytelling, blending art and commerce to create compelling narratives that captivate and inspire.
              </p>
              <p>
                I have a strong background in photography, creative direction, and visual storytelling, with a focus on creating immersive experiences that engage the senses. 
                My work includes a wide range of projects, from editorial and commercial photography to creative direction within a production company and film production, as well as fine arts photography exhibitions.
              </p>
              
              <p>
                Please contact me directly for projects in photography (portrait, editorial, or commercial) or creative direction.
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
              src="https://res.cloudinary.com/dtfsus1am/image/upload/v1775689497/PEYTON_PRO_PORTRAIT_dkgsla.jpg"
              alt="Photography work"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}