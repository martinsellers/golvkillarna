import React from 'react';
import { ImageGallery } from '../components/ImageGallery';

const projects = [
  {
    title: "Herringbone Parquet Installation",
    description: "Custom herringbone pattern installation in a luxury apartment",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80",
    category: "Installation"
  },
  {
    title: "Oak Floor Restoration",
    description: "Complete restoration of a 100-year-old oak floor",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
    category: "Restoration"
  },
  {
    title: "Modern LVT Installation",
    description: "Commercial space fitted with premium LVT flooring",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
    category: "Commercial"
  },
  {
    title: "Vintage Parquet Restoration",
    description: "Careful restoration of historical parquet flooring",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80",
    category: "Restoration"
  }
];

export function Portfolio() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Our Portfolio</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl animate-fade-in-up animate-delay-100">
          Explore our collection of completed projects, showcasing our expertise in floor installation,
          restoration, and custom pattern work.
        </p>
        
        <ImageGallery projects={projects} />
      </div>
    </div>
  );
}