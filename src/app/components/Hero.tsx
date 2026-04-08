import { Link } from 'react-router';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6">
          Visual Storyteller &<br />Creative Director
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Crafting compelling narratives through photography and creative direction.
          Bringing visions to life with artistic precision.
        </p>
        <Link
          to="/photography"
          className="inline-block px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors text-sm tracking-wider"
        >
          VIEW WORK
        </Link>
      </div>
    </section>
  );
}