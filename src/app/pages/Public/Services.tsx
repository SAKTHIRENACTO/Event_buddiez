import { 
  Heart, 
  Music, 
  UtensilsCrossed, 
  Sparkles, 
  Camera, 
  Flower2,
  Church,
  PartyPopper,
  Crown,
  Gift,
  Palette,
  Users,
  Briefcase,
  GraduationCap,
  Wine
} from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router';

export function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Traditional Wedding Planning',
      description: 'Complete wedding management with authentic South Indian rituals, customs, and ceremonies. From Muhurtham to Reception.',
      features: ['Muhurtham Planning', 'Mandap Decoration', 'Priest Coordination', 'Guest Management'],
      color: 'from-rose-500 to-pink-600',
    },
    {
      icon: Palette,
      title: 'Decoration & Design',
      description: 'Exquisite traditional and contemporary decorations featuring marigolds, jasmine, and authentic South Indian aesthetics.',
      features: ['Floral Arrangements', 'Stage Design', 'Entrance Decor', 'Lighting Setup'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: UtensilsCrossed,
      title: 'Authentic Catering',
      description: 'Traditional South Indian cuisine prepared by expert chefs. From classic sadya to contemporary fusion menus.',
      features: ['Traditional Sadya', 'Live Counters', 'Custom Menus', 'Dessert Stations'],
      color: 'from-green-600 to-emerald-700',
    },
        {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional corporate event management including conferences, seminars, and team-building activities.',
      features: ['Venue Booking', 'Speaker Coordination', 'Technical Setup', 'Event Promotion'],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: GraduationCap,
      title: 'Educational Events',
      description: 'Educational event management for convocations, seminars, workshops, and academic conferences.',
      features: ['Convocation Ceremonies', 'Academic Workshops', 'Seminar Organization', 'Educational Exhibitions'],
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: Wine,
      title: 'Social Events',
      description: 'Memorable social gatherings including reunions, community events, and milestone celebrations.',
      features: ['Reunion Planning', 'Community Festivals', 'Social Gatherings', 'Themed Parties'],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Church,
      title: 'Temple Functions',
      description: 'Sacred temple ceremonies, Kalyanams, and religious festivals organized with devotion and precision.',
      features: ['Temple Kalyanam', 'Pooja Arrangements', 'Prasadam Distribution', 'Musical Programs'],
      color: 'from-purple-600 to-indigo-700',
    },
    {
      icon: Music,
      title: 'Cultural Events',
      description: 'Bharatanatyam arangetrams, Carnatic concerts, and cultural festivals celebrating South Indian heritage.',
      features: ['Dance Performances', 'Music Concerts', 'Stage Management', 'Sound & Lighting'],
      color: 'from-blue-600 to-cyan-700',
    },
    {
      icon: Camera,
      title: 'Photography & Videography',
      description: 'Professional photography capturing every precious moment with cinematic videography and traditional photo albums.',
      features: ['Candid Photography', 'Cinematic Videos', 'Drone Coverage', 'Photo Albums'],
      color: 'from-gray-700 to-slate-800',
    },
    {
      icon: Crown,
      title: 'Bridal Services',
      description: 'Complete bridal makeover with traditional South Indian makeup, hairstyling, and saree draping services.',
      features: ['Bridal Makeup', 'Hair Styling', 'Saree Draping', 'Jewelry Coordination'],
      color: 'from-pink-600 to-rose-700',
    },
    {
      icon: PartyPopper,
      title: 'Reception Events',
      description: 'Grand reception ceremonies with entertainment, music, and celebrations for your special day.',
      features: ['Venue Selection', 'Entertainment', 'DJ Services', 'Guest Coordination'],
      color: 'from-violet-600 to-purple-700',
    },
    {
      icon: Gift,
      title: 'Return Gift Services',
      description: 'Thoughtfully curated return gifts reflecting South Indian culture and traditional values.',
      features: ['Gift Selection', 'Custom Packaging', 'Distribution', 'Personalization'],
      color: 'from-teal-600 to-cyan-700',
    },
    {
      icon: Flower2,
      title: 'Floral Services',
      description: 'Fresh flower arrangements featuring traditional South Indian flowers like jasmine, rose, and marigold.',
      features: ['Garland Making', 'Rangoli Designs', 'Flower Decoration', 'Fresh Supplies'],
      color: 'from-lime-600 to-green-700',
    },
    {
      icon: Users,
      title: 'Guest Management',
      description: 'Complete guest coordination including invitations, accommodation, transportation, and hospitality.',
      features: ['Digital Invites', 'Accommodation', 'Transportation', 'Welcome Kits'],
      color: 'from-indigo-600 to-blue-700',
    },
    {
      icon: Sparkles,
      title: 'Custom Event Planning',
      description: 'Tailored event planning for birthdays, anniversaries, corporate events, and special celebrations.',
      features: ['Theme Planning', 'Vendor Coordination', 'Budget Management', 'Timeline Planning'],
      color: 'from-yellow-600 to-amber-700',
    },

  ];

  return (
    <>
      <SEOHead
        title="Services"
        description="Comprehensive South Indian event management services including traditional wedding planning, catering, decoration, temple functions, cultural events, and more. Expert team with 15+ years of experience."
        keywords="wedding services, event planning, catering, decoration, temple functions, cultural events, south indian weddings, bridal services"
      />

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* <Sparkles className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" /> */}
          <h1 className="text-5xl mb-6">
            Our <span className="text-[#D4AF37]">Services</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive event management solutions blending traditional South Indian values 
            with modern execution excellence
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37] overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3 text-[#8B0000]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-[#8B0000] mb-2">Key Features:</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-[#2F5233] to-[#1F3822] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">
              Our <span className="text-[#D4AF37]">Process</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, transparent, and efficient event planning in four easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Detailed planning with timelines, budgets, and vendor selection' },
              { step: '03', title: 'Execution', desc: 'Flawless execution with on-ground coordination and management' },
              { step: '04', title: 'Celebration', desc: 'Enjoy your event while we handle every detail perfectly' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl text-[#D4AF37] mb-4 opacity-50">
                  {item.step}
                </div>
                <h3 className="text-xl mb-2 text-[#D4AF37]">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[#8B0000] mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl text-[#6B0000] mb-8">
            Contact us today for a free consultation and let's start planning your perfect event
          </p>
          <Link to="/contact">
            <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-10 py-6 text-lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}