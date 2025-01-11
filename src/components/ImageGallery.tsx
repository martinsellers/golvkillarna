import React, { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ImageGalleryProps {
  projects: Project[];
}

export function ImageGallery({ projects }: ImageGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.map(p => p.category)));

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  return (
    <div>
      <div className="flex gap-4 mb-8 animate-fade-in-up animate-delay-200">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg transition-all ${
            selectedCategory === null
              ? 'bg-amber-500 text-gray-900'
              : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === category
                ? 'bg-amber-500 text-gray-900'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg animate-fade-in-up"
            style={{ animationDelay: `${(index + 3) * 100}ms` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}