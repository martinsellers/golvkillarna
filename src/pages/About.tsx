import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">About FloorCraft Pro</h1>
          
          <div className="prose prose-invert max-w-none animate-fade-in-up animate-delay-100">
            <p className="text-xl text-gray-300 mb-8">
              With over two decades of experience in the flooring industry, FloorCraft Pro has established
              itself as a leading provider of premium flooring solutions in the region. Our commitment to
              quality craftsmanship and customer satisfaction has earned us a reputation for excellence.
            </p>

            <div className="relative h-80 mb-12 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1622937033762-ca4f6db8f40e?auto=format&fit=crop&q=80"
                alt="Our workshop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Award className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  To deliver exceptional flooring solutions that combine traditional craftsmanship
                  with modern techniques, ensuring lasting beauty and durability for every project.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-300">
                  Quality, integrity, and customer satisfaction are at the heart of everything we do.
                  We believe in transparent communication and delivering on our promises.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-amber-500" />,
                  title: "20+ Years Experience",
                  description: "Decades of expertise in all aspects of flooring"
                },
                {
                  icon: <Users className="w-6 h-6 text-amber-500" />,
                  title: "Expert Team",
                  description: "Skilled craftsmen with extensive training"
                },
                {
                  icon: <Shield className="w-6 h-6 text-amber-500" />,
                  title: "Quality Guarantee",
                  description: "Premium materials and workmanship warranty"
                },
                {
                  icon: <Award className="w-6 h-6 text-amber-500" />,
                  title: "Certified Excellence",
                  description: "Industry certifications and awards"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We discuss your needs, preferences, and assess your space."
                },
                {
                  step: "2",
                  title: "Planning & Design",
                  description: "Detailed project planning including material selection and pattern design."
                },
                {
                  step: "3",
                  title: "Expert Execution",
                  description: "Skilled implementation with attention to detail and quality control."
                },
                {
                  step: "4",
                  title: "Final Inspection",
                  description: "Thorough quality check and client walkthrough."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}