
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient section-padding min-h-[80vh] flex flex-col justify-center">
        <div className="container mx-auto">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">We don't just create,</span>
              <br />we engineer success.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              BOVI Media is a cohesive network of creative minds driven by innovation, 
              delivering comprehensive media strategies and solutions for your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-bovi-blue text-white rounded-md hover:bg-bovi-lightBlue transition-colors flex items-center"
              >
                Learn More <ChevronRight size={16} className="ml-1" />
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 border border-bovi-blue text-bovi-blue rounded-md hover:bg-bovi-blue hover:text-white transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Value Proposition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
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
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
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
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
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

      {/* Bottom Line Section */}
      <section className="section-padding bg-bovi-blue text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Bottom Line</h2>
          <p className="text-2xl font-light max-w-2xl mx-auto">When we say, we do.</p>
        </div>
      </section>

      {/* Media Channels Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Media Channels We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {['Print', 'Radio', 'Television', 'Digital', 'Social Media'].map((channel) => (
              <div key={channel} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-semibold text-lg">{channel}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="px-6 py-3 bg-bovi-blue text-white rounded-md hover:bg-bovi-lightBlue transition-colors inline-flex items-center"
            >
              Explore All Services <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pan India Presence */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pan India Presence</h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            We currently operate through our Bangalore, Delhi, Mumbai and Goa locations 
            providing a pan India presence to our clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Bangalore', 'Delhi', 'Mumbai', 'Goa'].map((location) => (
              <div key={location} className="p-4 border rounded-lg bg-white shadow-sm">
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
