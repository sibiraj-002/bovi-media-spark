
import React from 'react';

const ServicesPage = () => {
  const serviceCategories = [
    {
      name: "Print Media",
      description: "Strategic placement in newspapers, magazines and other print publications to reach your target audience.",
      services: ["Newspaper Advertising", "Magazine Features", "Brochures & Catalogs", "Print Campaign Management"]
    },
    {
      name: "Radio",
      description: "Engaging audio advertisements and sponsorships across local and national radio stations.",
      services: ["Radio Spot Advertising", "Show Sponsorships", "Live Promotions", "Script Writing & Production"]
    },
    {
      name: "Television",
      description: "Impactful visual storytelling through strategic television advertising placements.",
      services: ["TV Commercial Production", "Channel Partnerships", "Program Sponsorships", "Media Buying & Planning"]
    },
    {
      name: "Digital",
      description: "Comprehensive online strategies to enhance your digital presence and reach.",
      services: ["Website Development", "SEO & SEM", "Display Advertising", "Content Marketing"]
    },
    {
      name: "Social Media",
      description: "Building and managing your brand presence across relevant social platforms.",
      services: ["Social Media Strategy", "Content Creation", "Community Management", "Paid Social Campaigns"]
    }
  ];

  return (
    <>
      {/* Services Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-700">
              Our forte lies in innovative thinking and concise delivering/execution. 
              We offer all-round solutions and strategies for your business.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What We Offer</h2>
            <p className="text-lg text-gray-700 mb-6">
              We understand that every business, like yours, is unique and requires fastidious nurturing. 
              Our myriad of services is aimed at creating unique solutions specific to your business.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We believe that success lies in the minutest of details, which is why we always let our work do the talking.
            </p>
            <p className="text-lg text-gray-700">
              With a combined experience of over 70 years in the media industry, Bovi Media will be able to 
              help you prioritise your spends, plan sustainable media solutions and flawlessly execute them.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Media Solutions We Provide</h2>
          
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={category.name} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center bg-white rounded-lg overflow-hidden shadow-sm`}>
                <div className="md:w-2/5 bg-gradient-to-br from-bovi-blue to-bovi-lightBlue h-full flex items-center justify-center p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center">{category.name}</h3>
                </div>
                <div className="md:w-3/5 p-8">
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  <h4 className="font-semibold mb-3">Our {category.name} Services Include:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.services.map(service => (
                      <li key={service} className="flex items-baseline">
                        <span className="text-bovi-blue mr-2">•</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bovi-blue/20 hidden md:block"></div>
              
              <div className="space-y-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold mb-3">1. Discover</h3>
                    <p className="text-gray-700">
                      We begin by understanding your business, goals, target audience, 
                      and current media presence thoroughly.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-bovi-blue rounded-full flex items-center justify-center z-10 text-white font-bold">1</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    {/* Empty for alignment */}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    {/* Empty for alignment */}
                  </div>
                  <div className="w-12 h-12 bg-bovi-blue rounded-full flex items-center justify-center z-10 text-white font-bold">2</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-3">2. Strategize</h3>
                    <p className="text-gray-700">
                      Based on our findings, we develop a comprehensive media strategy 
                      tailored specifically to your business objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold mb-3">3. Execute</h3>
                    <p className="text-gray-700">
                      We implement the strategy across selected media channels, 
                      managing all aspects of production and placement.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-bovi-blue rounded-full flex items-center justify-center z-10 text-white font-bold">3</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    {/* Empty for alignment */}
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    {/* Empty for alignment */}
                  </div>
                  <div className="w-12 h-12 bg-bovi-blue rounded-full flex items-center justify-center z-10 text-white font-bold">4</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    <h3 className="text-xl font-bold mb-3">4. Analyze</h3>
                    <p className="text-gray-700">
                      We continuously monitor campaign performance, collecting data 
                      and insights to measure effectiveness.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-bold mb-3">5. Optimize</h3>
                    <p className="text-gray-700">
                      Based on analysis, we refine and optimize your media strategy 
                      to ensure maximum ROI and effectiveness.
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-bovi-blue rounded-full flex items-center justify-center z-10 text-white font-bold">5</div>
                  <div className="md:w-1/2 md:pl-12 md:text-left">
                    {/* Empty for alignment */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan India Coverage */}
      <section className="section-padding bg-bovi-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pan India Coverage</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            We currently operate through our Bangalore, Delhi, Mumbai and Goa locations 
            providing comprehensive pan India presence to our clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Bangalore', 'Delhi', 'Mumbai', 'Goa'].map((location) => (
              <div key={location} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="font-medium text-lg">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
