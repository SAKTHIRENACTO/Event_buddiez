import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl mb-4 text-[#D4AF37] border-b border-[#D4AF37] pb-2 inline-block">
              Event Buddiez
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Bringing South Indian traditions to life with elegance and authenticity. 
              Your celebration, our passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 text-[#D4AF37] border-b border-[#D4AF37] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-[#D4AF37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-[#D4AF37] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl mb-4 text-[#D4AF37] border-b border-[#D4AF37] pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Wedding Planning</li>
              <li>Cultural Events</li>
              <li>Temple Functions</li>
              <li>Catering Services</li>
              <li>Decoration & Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-4 text-[#D4AF37] border-b border-[#D4AF37] pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-[#D4AF37]" />
                <span>+91 8940858993</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-[#D4AF37]" />
                <span>eventbuddiez.india@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#D4AF37]" />
                <span>Cuddalore, Tamil Nadu, India</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors">
                <Facebook className="w-4 h-4 text-[#8B0000]" />
              </a>
              <a href="https://www.instagram.com/eventbuddiez?igsh=MXc4Y25oaGtkcTlvcQ==" className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors">
                <Instagram className="w-4 h-4 text-[#8B0000]" />
              </a>
              <a href="#" className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center hover:bg-[#FFD700] transition-colors">
                <Twitter className="w-4 h-4 text-[#8B0000]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/30 mt-8 pt-6 text-center text-sm text-gray-300">
          <p>&copy; 2026 Event Buddiez. All rights reserved. | Crafted with tradition & love</p>
        </div>
      </div>
    </footer>
  );
}
