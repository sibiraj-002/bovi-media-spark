
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HomePage = () => {
  return (
    <>
      {/* Hero Section with New Background Image and Animations */}
      <section className="relative min-h-[90vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bovi-blue/90 to-bovi-blue/75 mix-blend-multiply"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              <span className="text-white">We don't just create,</span>
              <br />
              <span className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">we engineer success.</span>
            </h1>
            <p className="opacity-0 animate-[fadeIn_0.8s_ease-out_1.4s_forwards] text-lg md:text-xl text-white/90 mb-8">
              BOVI Media is a cohesive network of creative minds driven by innovation, 
              delivering comprehensive media strategies and solutions for your business.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_2s_forwards]">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-white text-bovi-blue rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section with Animations */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">Our Value Proposition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform opacity-0 translate-y-4 [animation-play-state:paused] [.section-visible_&]:animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]">
              <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-bovi-accent font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-bold text-bovi-accent mb-3">We resonate</h3>
              <p className="text-gray-600">(with you)</p>
              <p className="mt-4 text-gray-700">
                We work closely with you to understand your brand's voice and vision, 
                creating strategies that align perfectly with your goals.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform opacity-0 translate-y-4 [animation-play-state:paused] [.section-visible_&]:animate-[fadeInUp_0.5s_ease-out_0.4s_forwards]">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-bovi-green font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-bold text-bovi-green mb-3">We differentiate</h3>
              <p className="text-gray-600">(from others)</p>
              <p className="mt-4 text-gray-700">
                Our strategies are tailored to set your business apart from the competition, 
                highlighting your unique strengths and qualities.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform opacity-0 translate-y-4 [animation-play-state:paused] [.section-visible_&]:animate-[fadeInUp_0.5s_ease-out_0.6s_forwards]">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <span className="text-bovi-purple font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-bold text-bovi-purple mb-3">We curate</h3>
              <p className="text-gray-600">(for you)</p>
              <p className="mt-4 text-gray-700">
                We craft content and strategies that are specifically designed to 
                reach and engage your target audience effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Solutions Showcase with Animation */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">Media Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white opacity-0 [animation-play-state:paused] [.section-visible_&]:animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Print Media" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Print Media</h3>
                <p className="text-gray-700">Strategic placements in newspapers, magazines and other publications to maximize your reach.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white opacity-0 [animation-play-state:paused] [.section-visible_&]:animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital Advertising" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Advertising</h3>
                <p className="text-gray-700">Targeting your ideal audience through strategic digital campaigns and placements.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white opacity-0 [animation-play-state:paused] [.section-visible_&]:animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Radio Broadcasting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Radio Broadcasting</h3>
                <p className="text-gray-700">Engaging audio campaigns that reach listeners through popular radio stations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Line Section with Animation */}
      <section className="section-padding bg-bovi-blue text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">Bottom Line</h2>
          <p className="text-2xl font-light max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">When we say, we do.</p>
        </div>
      </section>

      {/* Media Channels Section with Animation */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">Media Channels We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {['Print', 'Radio', 'Television', 'Digital', 'Social Media'].map((channel, index) => (
              <div 
                key={channel} 
                className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 opacity-0 [animation-play-state:paused] [.section-visible_&]:animate-[fadeIn_0.5s_ease-out_forwards]" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <p className="font-semibold text-lg">{channel}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center opacity-0 [animation-play-state:paused] [.section-visible_&]:animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            <Link 
              to="/services" 
              className="px-6 py-3 bg-bovi-blue text-white rounded-md hover:bg-bovi-lightBlue transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center"
            >
              Explore All Services <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pan India Presence with Animation */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">Pan India Presence</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] [animation-play-state:paused] [.section-visible_&]:animate-running">
            We currently operate through our Bangalore, Delhi, Mumbai and Goa locations 
            providing a pan India presence to our clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Bangalore', 'Delhi', 'Mumbai', 'Goa'].map((location, index) => (
              <div 
                key={location} 
                className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 opacity-0 [animation-play-state:paused] [.section-visible_&]:animate-[fadeIn_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${0.15 * (index + 1)}s` }}
              >
                <p className="font-medium">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
