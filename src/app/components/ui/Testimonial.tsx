import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BabyShower from '../../../assets/BabyShower.jpeg';
import EngagementBN from '../../../assets/EngagementBN.jpg';
import Reunion from '../../../assets/Reunion.png';

interface Testimonial {
  id: number;
  name: string;
  eventType: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  { id: 1, name: "Ananth & Hema", eventType: "Baby shower event", image: BabyShower, quote: "Enga baby shower romba beautifully arrange pannirundhanga. Everything was so elegant and well planned — family ellarum romba happy 😊" },
  { id: 2, name: "Balu & Nivetha", eventType: "Engagement", image: EngagementBN, quote: "Engagement full ah perfect ah organize pannirundhanga. Décor and setup was very classy — exactly how we imagined!" },
  { id: 3, name: "Priya & Friends", eventType: "School reunion", image: Reunion, quote: "The reunion was beautifully organized, with every detail handled seamlessly. It was a truly enjoyable experience that brought back cherished memories." },
  { id: 4, name: "Fathima Banu", eventType: "Nikah", image: "https://play-lh.googleusercontent.com/w-pTv094bdQGNd4EjW6l6dU07LWKrKFrsBLQJFza9WOqhy1jjzDVgx9PzsFUS9oLaA=w240-h480-rw", quote: "Nikah ceremony romba neat ah and respectful ah handle pannanga. Everything went peacefully — very satisfied with their work." },
];

const TestimonialSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="w-full bg-[#E5E1D3] py-12 md:py-16 px-4 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">
        <p className="text-black uppercase tracking-widest text-sm md:text-lg mb-2">
          what our customers say
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-[#B19355]">
          Real stories from real people!
        </h2>
        <p className="text-sm md:text-lg text-gray-500 mt-2 max-w-2xl mx-auto">
          See How We Transformed Their Special Moments Into Unforgettable Experiences!
        </p>
      </div>

      {/* SAME LAYOUT FOR ALL DEVICES */}
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 max-w-5xl mx-auto">
        
        {/* IMAGE */}
        <div className="shrink-0">
          <div className="
            w-24 h-24 
            sm:w-32 sm:h-32 
            md:w-64 md:h-64 
            rounded-full overflow-hidden 
            border-2 sm:border-4 border-[#8B0000] 
            shadow-xl bg-white
          ">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                src={active.image}
                className="w-full h-full object-cover"
                alt={active.name}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 relative min-h-[120px] sm:min-h-[160px] md:min-h-[250px] flex flex-col justify-center">
          
          {/* Quote icon */}
          <span className="hidden md:block text-8xl text-[#B19355]/10 absolute -top-10 -left-10 select-none">
            “
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote */}
              <p className="
                text-gray-700 italic 
                text-xs sm:text-sm md:text-xl 
                leading-relaxed mb-3 md:mb-6
              ">
                {active.quote}
              </p>

              {/* Name */}
              <h4 className="text-sm sm:text-base md:text-2xl font-bold text-gray-900">
                {active.name}
              </h4>

              {/* Event */}
              <p className="
                text-[#B19355] font-medium tracking-wide uppercase 
                text-[10px] sm:text-xs md:text-sm
              ">
                {active.eventType}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8 md:mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 rounded-full ${
              index === i
                ? "w-6 sm:w-8 h-2 bg-[#B19355]"
                : "w-2 h-2 bg-gray-400 hover:bg-[#8B0000]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;