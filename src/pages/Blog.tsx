import React from 'react';

const posts = [
  {
    title: "The Ultimate Guide to Hardwood Floor Maintenance",
    excerpt: "Learn the essential tips and tricks to keep your hardwood floors looking beautiful for years to come.",
    image: "https://images.unsplash.com/photo-1594940975330-932c7c2cbc43?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Choosing the Right Flooring for Your Home",
    excerpt: "A comprehensive guide to different flooring options and how to select the perfect one for your space.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80",
    date: "March 10, 2024",
    readTime: "7 min read"
  },
  {
    title: "The Art of Herringbone Pattern Installation",
    excerpt: "Discover the intricate process behind creating stunning herringbone pattern floors.",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80",
    date: "March 5, 2024",
    readTime: "6 min read"
  },
  {
    title: "Sustainable Flooring Options for Eco-Conscious Homes",
    excerpt: "Explore environmentally friendly flooring materials and installation practices.",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80",
    date: "March 1, 2024",
    readTime: "4 min read"
  }
];

export function Blog() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in-up">Floor Care Tips & Insights</h1>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl animate-fade-in-up animate-delay-100">
          Expert advice, maintenance tips, and industry insights to help you make informed decisions
          about your flooring needs.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/10 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 hover:text-amber-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <button className="text-amber-500 font-semibold hover:text-amber-400 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}