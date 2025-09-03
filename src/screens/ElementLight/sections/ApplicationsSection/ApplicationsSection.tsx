import React from 'react';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';
import { Building2, Home, Store, Warehouse, Hotel, Briefcase } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const applications = [
    {
      icon: Home,
      title: "Residential",
      description: "Transform your home with premium ceramic tiles for kitchens, bathrooms, and living spaces.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
    },
    {
      icon: Building2,
      title: "Commercial",
      description: "Durable and stylish solutions for offices, retail spaces, and commercial buildings.",
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Elegant tile solutions for hotels, restaurants, and hospitality venues.",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg"
    },
    {
      icon: Store,
      title: "Retail",
      description: "Eye-catching designs that enhance customer experience in retail environments.",
      image: "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg"
    },
    {
      icon: Warehouse,
      title: "Industrial",
      description: "Heavy-duty ceramic tiles designed for industrial and manufacturing facilities.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
    },
    {
      icon: Briefcase,
      title: "Corporate",
      description: "Professional tile solutions for corporate offices and business centers.",
      image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Tile Applications
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover how our premium ceramic tiles transform spaces across various industries and applications
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div
                key={index}
                className={`group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {app.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-300 mb-6">
            Ready to transform your space with our premium ceramic tiles?
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300 hover:transform hover:scale-105">
            Explore Our Products
          </button>
        </div>
      </div>
    </section>
  );
};