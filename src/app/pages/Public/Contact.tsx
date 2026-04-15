import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  });


  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();

    emailjs.send(
      "service_tueunnk",
      "template_jzc780l",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        eventType: formData.eventType,
        eventDate: formData.eventDate,
        message: formData.message,
      },
      "RXh_icC74gBs5Kygp"
    )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: '',
        })
        setLoading(false);
      })
      .catch((error) => {
        alert("Failed to send message.");
        setLoading(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: '',
        })
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      primary: '+91 89408 58993',
      secondary: '+91 82701 01693',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email',
      primary: 'eventbuddiez.india@gmail.com',
      secondary: 'eventbuddiez.india@gmail.com',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      primary: 'No. 49, virudhachalam main road',
      secondary: 'Neyveli - 607 802, Tamil Nadu',
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      primary: 'Mon - Sat: 9:00 AM - 9:00 PM',
      secondary: 'Sun: By Appointment',
      color: 'from-purple-500 to-violet-600'
    },
  ];

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Event Buddiez for your South Indian event planning needs. Located in Chennai. Call us at +91 89408 58993 or email eventbuddiez.india@gmail.com for a free consultation."
        keywords="contact event planner, cuddalore event management, wedding planner contact, event booking, free consultation, south indian event planner"
      />

      {/* Hero Section */}
      <section className="relative py-10 bg-gradient-to-b from-[#8B0000] to-[#6B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
          <h1 className="text-5xl mb-6">
            Get in <span className="text-[#D4AF37]">Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 px-2 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const isPhone = info.title === "Phone";
              const isEmail = info.title === "Email";

              return (
                <Card
                  key={index}
                  className="
                    flex flex-row items-center gap-3 p-4 
                    md:flex-col md:items-start md:gap-4 md:p-6
                    border-2 border-[#D4AF37]/50
                    hover:shadow-md md:hover:shadow-xl transition-all
                  "
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center 
                    w-10 h-10 md:w-14 md:h-14
                    bg-gradient-to-r ${info.color} 
                    rounded-lg md:rounded-full shrink-0`}
                  >
                    <info.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>

                  {/* Text */}
                  <div className="text-left flex flex-col justify-center space-y-0.5">
                    <h3 className="text-sm md:text-lg text-gray-900 md:text-[#8B0000] font-medium">
                      {info.title}
                    </h3>

                    {/* Clickable Content */}
                    {isPhone ? (
                      <a
                        href="tel:+918940858993"
                        className="text-xs md:text-sm text-gray-600 hover:text-green-600 transition"
                      >
                        {info.primary}
                      </a>
                    ) : isEmail ? (
                      <a
                        href="mailto:eventbuddiez.india@gmail.com"
                        className="text-xs md:text-sm text-gray-600 hover:text-blue-600 transition"
                      >
                        {info.primary}
                      </a>
                    ) : (
                      <p className="text-xs md:text-sm text-gray-600">
                        {info.primary}
                      </p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl text-[#8B0000] mb-3">Send Us a Message</h2>
                <div className="w-20 h-1 bg-[#D4AF37] mb-4"></div>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 mb-8 ">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-[#D4AF37]/30 focus:border-[#8B0000]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-[#D4AF37]/30 focus:border-[#8B0000]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-[#D4AF37]/30 focus:border-[#8B0000]"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventType" className="block text-sm mb-2 text-gray-700">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-[#D4AF37]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="reception">Reception</option>
                      <option value="cultural">Cultural Event</option>
                      <option value="temple">Temple Function</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm mb-2 text-gray-700">
                      Preferred Event Date
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full border-[#D4AF37]/30 focus:border-[#8B0000]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border-[#D4AF37]/30 focus:border-[#8B0000]"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                <Button
                  type="submit"

                  className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {(loading === false ? 'Send message' : 'Loading ...')}
                </Button>
              </form>
              {/* Quick Info Card */}
              <Card className="p-8 bg-gradient-to-br from-[#8B0000] to-[#6B0000] text-white border-none">
                <h3 className="text-2xl mb-4 text-[#D4AF37]">Need Immediate Assistance?</h3>
                <p className="mb-6 text-gray-200">
                  For urgent inquiries or last-minute bookings, please call us directly.
                  We're here to help make your event a success!
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+918940858993"
                    className="flex items-center gap-3 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 89408 58993</span>
                  </a>
                  <a
                    href="mailto:eventbuddiez.india@gmail.com"
                    className="flex items-center gap-3 text-[#D4AF37] hover:text-[#FFD700] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>eventbuddiez.india@gmail.com</span>
                  </a>
                </div>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl text-[#8B0000] mb-4">Visit Our Office</h3>
                <div className="w-20 h-1 bg-[#D4AF37] mb-6"></div>

                {/* Google Maps Placeholder */}
                <div className="w-full h-100 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62520.57489147!2d79.73!3d11.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5493855e8e4347%3A0x21d6063929025fd4!2sCuddalore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1676539988273!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Buddiez Location"
                  ></iframe>
                </div>
              </div>



              {/* FAQ */}
              <Card className="p-8 border-2 border-[#D4AF37]">
                <h3 className="text-xl text-[#8B0000] mb-4">Quick FAQs</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm mb-1 text-[#8B0000]">How far in advance should I book?</p>
                    <p className="text-sm text-gray-600">We recommend booking 6-12 months in advance for weddings, and 3-6 months for other events.</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1 text-[#8B0000]">Do you offer customized packages?</p>
                    <p className="text-sm text-gray-600">Yes! All our packages are fully customizable to match your specific needs and budget.</p>
                  </div>
                  <div>
                    <p className="text-sm mb-1 text-[#8B0000]">What is your service area?</p>
                    <p className="text-sm text-gray-600">We primarily serve Chennai and surrounding areas, but also handle events across Tamil Nadu and South India.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[#8B0000] mb-6">
            Start Your Journey With Us
          </h2>
          <p className="text-xl text-[#6B0000] mb-8">
            Schedule a free consultation to discuss your event vision and requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918940858993"
              className="inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-4 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now
            </a>
            <a
              href="mailto:eventbuddiez.india@gmail.com"
              className="inline-block bg-white hover:bg-gray-100 text-[#8B0000] px-8 py-4 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
