import { useState } from 'react';
import { Mail, Instagram } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:kocherpeyton06@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Title and Description */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            
            <p className="text-lg text-gray-300">
              I'm available for creative directing, photography, video production, and graphic design projects. Whether you're looking for personal or business collaborations, I'd love to hear about your vision. Fill out the form to send me a message.
            </p>

            {/* Direct Contact Info */}
            <div className="pt-8 space-y-4">
              <p className="text-sm text-gray-400">Or reach out directly:</p>
              <div className="flex flex-col gap-3 text-gray-300">
                <a
                  href="mailto:kocherpeyton06@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  kocherpeyton06@gmail.com
                </a>
                <a
                  href="https://instagram.com/peyton_kocher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                  @peyton_kocher
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white text-white focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white text-white focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm mb-2 text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white text-white focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-transparent border border-white text-white focus:outline-none focus:border-gray-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-white text-black hover:bg-gray-200 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}