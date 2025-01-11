import React from 'react';
import { Palette, Layers, Ruler, Hammer, Wrench, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Hammer className="w-12 h-12 text-amber-500" />,
    title: "Golvläggning",
    description: "Expert installation av parkett, vinyl, LVT, laminat och massiva trägolv.",
    features: [
      "Undergolv förberedelse",
      "Fuktspärr installation",
      "Professionell montering",
      "Mönsterläggning"
    ]
  },
  {
    icon: <Palette className="w-12 h-12 text-amber-500" />,
    title: "Golvslipning",
    description: "Professionell slipning och renovering av trägolv till dess ursprungliga skönhet.",
    features: [
      "Dammfritt slipsystem",
      "Kant- och hörnspecialister",
      "Flera grovlekar",
      "Expert ytbehandling"
    ]
  },
  {
    icon: <Ruler className="w-12 h-12 text-amber-500" />,
    title: "Specialmönster",
    description: "Specialiserad installation av fiskbensmönster och andra dekorativa mönster.",
    features: [
      "Fiskbensmönster",
      "Chevronmönster",
      "Specialbårder",
      "Geometriska mönster"
    ]
  },
  {
    icon: <Layers className="w-12 h-12 text-amber-500" />,
    title: "Golvreparation",
    description: "Expert på reparation av skadade golv, från mindre lagningar till större renoveringar.",
    features: [
      "Brädbyten",
      "Sprickfyllning",
      "Replagning",
      "Strukturella reparationer"
    ]
  },
  {
    icon: <Wrench className="w-12 h-12 text-amber-500" />,
    title: "Underhåll",
    description: "Regelbundna underhållstjänster för att hålla dina golv i toppskick år efter år.",
    features: [
      "Djuprengöring",
      "Omlackering",
      "Förebyggande vård",
      "Underhållsplaner"
    ]
  },
  {
    icon: <Sparkles className="w-12 h-12 text-amber-500" />,
    title: "Ytbehandling",
    description: "Premium ytbehandlingstjänster med högkvalitativa produkter för långvarigt skydd.",
    features: [
      "Oljebaserade lack",
      "Vattenbaserade lack",
      "Specialbetsning",
      "Naturoljor"
    ]
  }
];

export function Services() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Våra Tjänster</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl animate-fade-in-up animate-delay-100">
          Vi erbjuder ett komplett utbud av golvtjänster, från installation till renovering,
          allt utfört med exceptionellt hantverk och öga för detaljer.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="transition-transform hover:scale-110 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}