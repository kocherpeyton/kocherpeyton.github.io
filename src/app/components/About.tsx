import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[3/4] overflow-hidden bg-gray-200">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzU2MTEwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl">About</h2>
            
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                I'm a visual storyteller with over 8 years of experience in photography
                and creative direction. My work spans editorial, commercial, and artistic
                projects that push the boundaries of visual communication.
              </p>
              
              <p>
                Based between New York and Los Angeles, I collaborate with brands, agencies,
                and artists to create compelling visual narratives that resonate with audiences
                and stand the test of time.
              </p>
              
              <p>
                My approach combines technical precision with artistic intuition, always
                seeking the perfect balance between concept and execution.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl mb-4">Services</h3>
              <ul className="grid grid-cols-2 gap-3 text-gray-600">
                <li>• Photography</li>
                <li>• Art Direction</li>
                <li>• Creative Direction</li>
                <li>• Campaign Strategy</li>
                <li>• Visual Consulting</li>
                <li>• Brand Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
