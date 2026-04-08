import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Let's Create Together</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Available for select projects and collaborations. Reach out to discuss how we can
          bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 text-lg hover:text-gray-600 transition-colors"
          >
            <Mail size={24} />
            <span>hello@example.com</span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2026 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
