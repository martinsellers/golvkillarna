import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    const mailtoLink = `mailto:kontakta@golvkillarna.se?subject=New Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Contact Us</h1>
          <p className="text-xl text-gray-400 mb-12 animate-fade-in-up animate-delay-100">
            Get in touch with us for a free consultation. We're here to help you with all your flooring needs.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in-up animate-delay-200">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-amber-500" />,
                  title: "Phone",
                  content: "031-885514",
                  link: "tel:031885514"
                },
                {
                  icon: <Mail className="w-6 h-6 text-amber-500" />,
                  title: "Email",
                  content: "kontakta@golvkillarna.se",
                  link: "mailto:kontakta@golvkillarna.se"
                },
                {
                  icon: <Clock className="w-6 h-6 text-amber-500" />,
                  title: "Working Hours",
                  content: "Mon-Fri: 8:00 AM - 6:00 PM"
                },
                {
                  icon: <MapPin className="w-6 h-6 text-amber-500" />,
                  title: "Location",
                  content: "123 Floor Street, City, Country"
                },
                {
                  icon: <Instagram className="w-6 h-6 text-amber-500" />,
                  title: "Instagram",
                  content: "@golvkillarna",
                  link: "https://www.instagram.com/golvkillarna"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-400 hover:text-amber-500 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-400">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up animate-delay-300">
              {/* Form content remains the same */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}