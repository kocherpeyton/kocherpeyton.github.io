import { Instagram, Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Name */}
          <div>
            <h3 className="text-lg">Peyton Kocher</h3>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:kocherpeyton06@gmail.com"
              className="flex items-center gap-2 hover:text-gray-400 transition-colors"
            >
              <Mail size={16} />
              kocherpeyton06@gmail.com
            </a>
            <a
              href="https://instagram.com/peyton_kocher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-400 transition-colors"
            >
              <Instagram size={16} />
              Follow on Instagram
            </a>
            <a
              href="https://linkedin.com/in/peytonkocher"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-400 transition-colors"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}