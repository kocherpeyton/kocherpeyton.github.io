import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Luxury Brand Campaign',
    description: 'Art direction and concept development for a high-end fashion brand launch.',
    year: '2026',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMGNhbXBhaWdufGVufDF8fHx8MTc3NTY3OTI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Editorial Magazine Design',
    description: 'Creative direction for a contemporary lifestyle magazine spread featuring emerging artists.',
    year: '2025',
    role: 'Creative Director & Photographer',
    image: 'https://images.unsplash.com/photo-1766239303199-b45e6bcdc901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWdhemluZSUyMGxheW91dHxlbnwxfHx8fDE3NzU2NTYzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Contemporary Art Installation',
    description: 'Visual storytelling and documentation of an immersive art exhibition.',
    year: '2025',
    role: 'Art Director',
    image: 'https://images.unsplash.com/photo-1723242016990-bd6ac316b139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzc1NTk0NDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Lifestyle Brand Launch',
    description: 'Complete creative direction for a sustainable lifestyle brand including campaign strategy and visual identity.',
    year: '2024',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1544635350-0b6d55caf30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBicmFuZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3NTY3OTI4MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function CreativeProjects() {
  return (
    <section id="creative" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Creative Direction</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Selected projects where vision meets execution. From concept to completion, each project
            tells a unique brand story.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                </div>
                <h3 className="text-3xl md:text-4xl">{project.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
