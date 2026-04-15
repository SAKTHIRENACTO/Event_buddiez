import { Link } from 'react-router';
import { ArrowRight, Calendar, Users, Star, Sparkles, Heart, Award, Headphones, Lightbulb } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import Engagement from '../../../assets/Engagement.png';
import NamingCerimany from '../../../assets/NamingCerimany.png';
import Family from '../../../assets/Family.png';
import BabyShower from '../../../assets/BabyShower.jpeg';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import TestimonialSection from '../../components/ui/Testimonial';


export function Home() {
  const heroImages = [
    "https://i.pinimg.com/1200x/9d/cd/fb/9dcdfb09eee39cedba8bb80227bcd191.jpg",
    "https://i.pinimg.com/1200x/80/22/50/8022506379cd94c43b22225c71344f76.jpg",
    "https://i.pinimg.com/1200x/d2/35/fb/d235fb69e207d9c8661d850a2965fa93.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const stats = [
    { icon: Calendar, value: '10+', label: 'Events Completed' },
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: Award, value: '1+', label: 'Years Experience' },
    { icon: Star, value: '4.0/5', label: 'Client Rating' },
  ];

  const whyChooseUs = [
    {
      icon: Heart,
      title: "Authentic Traditions",
      desc: "Deep-rooted understanding of South Indian customs and rituals.",
    },
    {
      icon: Award,
      title: "Expert Team",
      desc: "Transforming ideas into remarkable experiences through dedication and superior quality.",
    },
    // {
    //   icon: Sparkles,
    //   title: "Attention to Detail",
    //   desc: "Every element carefully curated to perfection.",
    // },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Always available to assist you at every step of your event journey.",
    },
    {
      icon: Lightbulb,
      title: "Brilliant Ideas",
      desc: "Creative and innovative concepts that make your events truly unforgettable.",
    },
  ];

  const featuredServices = [
    {
      title: "Corporate Events",
      image: "https://i.pinimg.com/1200x/03/ab/03/03ab03d3d4ddc645134259c0e31dbe11.jpg",
    },
    {
      title: "Wedding Events",
      image: "https://i.pinimg.com/736x/d2/35/fb/d235fb69e207d9c8661d850a2965fa93.jpg",
    },
    {
      title: "Reception Events",
      image: "https://i.pinimg.com/736x/80/22/50/8022506379cd94c43b22225c71344f76.jpg",
    },
    {
      title: "Engagement Ceremony",
      image: Engagement,
    },
    {
      title: "Birthday Parties",
      image: "https://i.pinimg.com/736x/d3/84/87/d38487b6d1c69cbebd8cae324df8ddd5.jpg",
    },
    {
      title: "Baby Shower",
      image: BabyShower,
    },
    {
      title: "Puberty Function",
      image: Family,
    },
    {
      title: "Naming Ceremony",
      image: NamingCerimany,
    },
    {
      title: "Housewarming ",
      image: "https://i.pinimg.com/736x/47/6e/de/476edea4f0e408086d15db6357a6d0b1.jpg",
    },
    {
      title: "Anniversary Celebrations",
      image: "https://i.pinimg.com/736x/41/2a/f7/412af77e8c3f9eb6445f2fed764cb5f7.jpg",
    },
    {
      title: "Get-togethers & Reunions",
      image: "https://i.pinimg.com/control1/736x/39/77/c3/3977c362b2539bbb740dc1f487b16d64.jpg",
    },
    {
      title: "Christmas Events",
      image: "https://i.pinimg.com/736x/ad/06/f6/ad06f6748893f1cab6792c40b9c881d3.jpg",
    },
    {
      title: "School & College Events",
      image: "https://i.pinimg.com/736x/52/fb/5d/52fb5d9391eb956d6391abcbb24a43a5.jpg",
    },
    {
      title: "Community / Public Events",
      image: "https://i.pinimg.com/736x/91/39/0e/91390e7ce7d3dc3c6ae1b40f3b203dc3.jpg",
    },
  ];
  return (
    <>
      <SEOHead
        title="Home - Dashboard"
        description="EVENT BUDDIEZ - Premier South Indian event management company specializing in traditional weddings, cultural events, and temple functions. Experience authentic celebrations with modern elegance."
        keywords="cuddalore weddings, south indian events, wedding planner cuddalore, traditional wedding, cultural events, temple functions, event management"
      />

      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/90 via-[#8B0000]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-5xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-sm tracking-wide uppercase">Traditional Excellence</span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6">
              Creating Timeless <br />
              <span className="text-[#D4AF37]">South Indian</span> Celebrations
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              From grand weddings to intimate temple ceremonies, we bring your vision to life
              with authentic traditions and modern elegance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button className="bg-[#D4AF37] hover:bg-[#FFD700] text-[#8B0000] px-8 py-6 text-lg">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-2 border-white text-[#8B0000] hover:bg-[#8B0000] hover:text-white  px-8 py-6 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-gradient-to-b from-[#2F5233] to-[#1F3822]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37] rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-[#8B0000]" />
                </div>
                <div className="text-3xl md:text-4xl mb-2 text-[#D4AF37]">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="text-center mb-14">
          <p className="text-black uppercase tracking-widest text-lg mb-2">Who we are</p>
          <p className="text-lg text-gray-500 mt-2">
            Your trusted partners in planning and delivering unforgettable events.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-stretch max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed text-[15px] md:text-base">
            <p className="max-w-3xl">
              Founded in 2025 in the heart of Cuddalore, Event Buddiez was created from a genuine
              passion for celebrating and preserving South Indian cultural traditions. What began
              as a small, dedicated wedding planning venture is now taking its first confident
              steps into the world of event management.
            </p>
            <p className="max-w-3xl">
              In our first year, we’ve had the privilege of organizing a growing number of meaningful
              celebrations — from intimate temple ceremonies and traditional engagements to vibrant
              cultural events. Each event, no matter the size, has been handled with sincerity,
              creativity, and close attention to detail.
            </p>
            <p className="max-w-3xl">
              As a young and enthusiastic team, we blend our understanding of South Indian customs
              with fresh ideas and modern event planning approaches. We may be new to the industry,
              but our commitment, energy, and determination set us apart.
            </p>
            <p className="max-w-3xl">
              We don’t just plan events — we strive to create memorable experiences that honor
              tradition while embracing contemporary excellence. With every celebration, we aim
              to learn, grow, and prove ourselves as a trusted name in the making.
            </p>
            <p className="max-w-3xl">
              Every smile, every blessing, and every successful event motivates us to push our
              boundaries further. As we continue this journey, we are committed to turning dreams
              into beautifully crafted realities and becoming a brand that people trust for their
              most special moments.
            </p>
          </div>
          <div className="relative h-full min-h-[400px]">
            <img
              src="https://i.pinimg.com/1200x/e8/6b/88/e86b881d5fa841aa9318b89df671dcb7.jpg"
              alt="South Indian Temple"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="hidden lg:block absolute -bottom-6 -right-6 w-28 h-28 bg-[#D4AF37] rounded-lg -z-10"></div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-black uppercase tracking-widest text-sm sm:text-lg mb-2">
              What We Do
            </p>
            <p className="text-sm sm:text-lg text-gray-500 mt-2">
              Experience the perfect blend of tradition and modern event management
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={2} // ✅ Mobile default (3 per row feel)
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            {featuredServices.map((service, index) => (
              <SwiperSlide key={index}>

                <Card
                  onClick={() => navigate(`/services`)}
                  className="overflow-hidden group cursor-pointer rounded-none"
                >
                  <div className="relative h-32 sm:h-48 md:h-64 overflow-hidden">

                    {/* Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover 
                transition duration-500 
                group-hover:scale-110"
                    />

                    {/* Title */}
                    <h3 className="
                absolute bottom-1 sm:bottom-2 w-full 
                text-center 
                bg-[#8B0000]/90 
                text-[#D4AF37] 
                text-[10px] sm:text-sm md:text-lg 
                font-semibold 
                py-1 sm:py-2
              ">
                      {service.title}
                    </h3>

                  </div>
                </Card>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <TestimonialSection />
      {/* Why Choose Us */}
      <section className="py-8 px-2 bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white">
        <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl mb-4">
              Why Choose <span className="text-[#D4AF37]">EVENT BUDDIEZ </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group text-center 
        p-4 sm:p-6 md:p-8 
        bg-white/10 rounded-xl backdrop-blur-md 
        transition-all duration-500 cursor-pointer
        hover:-translate-y-2 md:hover:-translate-y-3 
        hover:bg-white/20 
        hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
                >
                  {/* Icon */}
                  <Icon
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 
          text-[#D4AF37] mx-auto mb-3 sm:mb-4
          transition-transform duration-500 
          group-hover:scale-110 md:group-hover:scale-125 
          group-hover:rotate-6"
                  />

                  {/* Title */}
                  <h3 className="text-sm sm:text-base md:text-xl 
        mb-2 sm:mb-3 text-[#D4AF37] font-semibold">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Underline */}
                  <div className="mt-3 sm:mt-4 h-[2px] w-0 bg-[#D4AF37] mx-auto transition-all duration-500 group-hover:w-10 sm:group-hover:w-16"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[#8B0000] mb-4">
            Ready to Plan Your Dream Event?
          </h2>
          <p className="text-xl text-[#6B0000] mb-6">
            Let's create something beautiful together. Get in touch with us today!
          </p>
          <Link to="/contact">
            <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-10 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
