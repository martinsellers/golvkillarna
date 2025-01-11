import React from 'react';
import { 
  Hammer, 
  CheckCircle, 
  Phone, 
  Mail, 
  Clock,
  ChevronRight,
  Palette,
  Layers,
  Ruler
} from 'lucide-react';

export function Home() {
  return (
    <>
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2s] hover:scale-105"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")'
          }}
          role="img"
          aria-label="Professionell golvslipning och golvläggning"
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-88px)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-0 animate-fade-in-up">
              Golvslipning &
              <span className="text-amber-500"> Golvläggning</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 opacity-0 animate-fade-in-up animate-delay-100">
              Professionell golvslipning och golvläggning i Göteborg. Vi hjälper dig att slipa golv 
              och installera nya golv med högsta kvalitet.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-all hover:scale-105 opacity-0 animate-fade-in-up animate-delay-200"
              aria-label="Få gratis offert för golvtjänster"
            >
              Få Gratis Offert
              <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Våra Tjänster</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Palette className="w-12 h-12 text-amber-500" />,
                  title: "Golvslipning",
                  description: "Professionell slipning och renovering av trägolv till dess ursprungliga skönhet."
                },
                {
                  icon: <Hammer className="w-12 h-12 text-amber-500" />,
                  title: "Golvläggning",
                  description: "Expert på installation av parkett, vinyl, laminat och massiva trägolv."
                },
                {
                  icon: <Ruler className="w-12 h-12 text-amber-500" />,
                  title: "Specialmönster",
                  description: "Specialiserad installation av fiskbensmönster och andra dekorativa mönster."
                }
              ].map((service, index) => (
                <article 
                  key={index} 
                  className="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10"
                >
                  <div className="transition-transform hover:scale-110 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the component remains the same */}
      </main>
    </>
  );
}