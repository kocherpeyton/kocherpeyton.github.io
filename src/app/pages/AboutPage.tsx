import aboutImage from 'figma:asset/ef8f128b8a4f33ae4d3e1e40c26ac32055674e43.png';

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
            <img
              src={aboutImage}
              alt="Photography work"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}