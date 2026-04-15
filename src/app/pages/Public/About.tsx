import {
  Heart,
  Award,
  Users,
  Target,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { SEOHead } from "../../components/SEOHead";
import { Card } from "../../components/ui/card";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Tradition",
      description:
        "Deep respect and understanding of South Indian cultural heritage and customs",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "Commitment to delivering flawless events with attention to every detail",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description:
        "Your vision and satisfaction are at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Innovation & Creativity",
      description:
        "Blending traditional values with modern event management techniques",
    },
  ];

  const milestones = [
    {
      year: "2010",
      event: "Founded in Chennai",
      description:
        "Started with a vision to preserve South Indian traditions",
    },
    {
      year: "2013",
      event: "100+ Events",
      description:
        "Successfully managed our 100th wedding ceremony",
    },
    {
      year: "2017",
      event: "Expanded Services",
      description: "Added cultural events and temple functions",
    },
    {
      year: "2020",
      event: "Award Recognition",
      description:
        "Received Best Event Management Company award",
    },
    {
      year: "2023",
      event: "500+ Celebrations",
      description: "Crossed milestone of 500 successful events",
    },
    {
      year: "2026",
      event: "Industry Leaders",
      description:
        "Recognized as premier South Indian event specialists",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      specialty: "Traditional Wedding Expert",
    },
    {
      name: "Priya Shankar",
      role: "Creative Director",
      specialty: "Decoration & Design Specialist",
    },
    {
      name: "Venkat Ramanan",
      role: "Operations Head",
      specialty: "Logistics & Coordination",
    },
    {
      name: "Lakshmi Devi",
      role: "Cultural Advisor",
      specialty: "Rituals & Customs Consultant",
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Event Buddiez - Chennai's premier South Indian event management company. With 15+ years of experience, we specialize in traditional weddings, cultural events, and temple functions."
        keywords="about Event Buddiez, event management company cuddalore, south indian wedding planners, traditional event specialists, experienced event managers, best event planner"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h1 className="text-5xl mb-6">
            About{" "}
            <span className="text-[#D4AF37]">
              Event Buddiez
            </span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Preserving traditions, creating memories, and
            celebrating South Indian heritage through
            exceptional event management since 2025
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#8B0000] mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025 in the heart of Cuddalore,
                  Event Buddiez was created from a genuine
                  passion for celebrating and preserving South
                  Indian cultural traditions. What began as a
                  small, dedicated wedding planning venture is
                  now taking its first confident steps into the
                  world of event management.
                </p>
                <p>
                  In our first year, we’ve had the privilege of
                  organizing a growing number of meaningful
                  celebrations — from intimate temple ceremonies
                  and traditional engagements to vibrant
                  cultural events. Each event, no matter the
                  size, has been handled with sincerity,
                  creativity, and close attention to detail.
                </p>
                <p>
                  As a young and enthusiastic team, we blend our
                  understanding of South Indian customs with
                  fresh ideas and modern event planning
                  approaches. We may be new to the industry, but
                  our commitment, energy, and determination set
                  us apart.
                </p>
                <p>
                  We don’t just plan events — we strive to
                  create memorable experiences that honor
                  tradition while embracing contemporary
                  excellence. With every celebration, we aim to
                  learn, grow, and prove ourselves as a trusted
                  name in the making.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1665003757407-db665cffa69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA3MjcyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="South Indian Temple"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#8B0000] mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in creating
              exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-[#D4AF37]/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl text-[#8B0000] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      {/* <section className="py-20 bg-gradient-to-b from-[#2F5233] to-[#1F3822] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">
              Our{" "}
              <span className="text-[#D4AF37]">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              15+ years of growth, innovation, and countless
              beautiful celebrations
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]/30 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                      <div className="text-3xl text-[#D4AF37] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-[#D4AF37] rounded-full border-4 border-[#2F5233] z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Team */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#8B0000] mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to making your
              celebration unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all border-2 border-[#D4AF37]/20"
              >
                <div className="h-2 bg-gradient-to-r from-[#8B0000] to-[#D4AF37]"></div>
                <div className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl text-[#D4AF37]">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl text-[#8B0000] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#D4AF37] mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.specialty}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#8B0000] mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Deep understanding of South Indian traditions and customs",
              // "15+ years of industry experience",
              "Strong vendor relationships for best quality",
              // "10+ successful events completed",
              "Expert team of cultural advisors and event managers",
              "Comprehensive end-to-end event management",
              "Attention to every detail, big and small",
              "Transparent pricing with no hidden costs",
              "On-time delivery and execution",
              "Personalized service tailored to your needs",
              "24/7 support during your event",
              "Post-event follow-up and assistance",
            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[#8B0000] mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl text-[#6B0000] mb-8">
            Let's bring your vision to life with our expertise
            and passion
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white px-10 py-4 rounded-lg transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
}