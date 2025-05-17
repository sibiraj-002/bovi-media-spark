
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ServicesPage = () => {
  const serviceCategories = [
    {
      name: "Print Media",
      description: "Strategic placement in newspapers, magazines and other print publications to reach your target audience.",
      services: ["Newspaper Advertising", "Magazine Features", "Brochures & Catalogs", "Print Campaign Management"],
      imageSrc: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Radio",
      description: "Engaging audio advertisements and sponsorships across local and national radio stations.",
      services: ["Radio Spot Advertising", "Show Sponsorships", "Live Promotions", "Script Writing & Production"],
      imageSrc: "https://images.unsplash.com/photo-1593078165899-c7d2ac0d6aea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Television",
      description: "Impactful visual storytelling through strategic television advertising placements.",
      services: ["TV Commercial Production", "Channel Partnerships", "Program Sponsorships", "Media Buying & Planning"],
      imageSrc: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Digital",
      description: "Comprehensive online strategies to enhance your digital presence and reach.",
      services: ["Website Development", "SEO & SEM", "Display Advertising", "Content Marketing"],
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Social Media",
      description: "Building and managing your brand presence across relevant social platforms.",
      services: ["Social Media Strategy", "Content Creation", "Community Management", "Paid Social Campaigns"],
      imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      {/* Services Hero Section with Background Image */}
      <section className="relative">
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <AspectRatio ratio={16/5} className="bg-gradient-to-r from-bovi-blue to-bovi-lightBlue opacity-80">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay"></div>
          </AspectRatio>
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative -mt-24 md:-mt-32">
          <div className="max-w-3xl bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-700">
              Our forte lies in innovative thinking and concise delivering/execution. 
              We offer all-round solutions and strategies for your business.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section with Image */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
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
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Media strategy planning" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories with Images */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Media Solutions We Provide</h2>
          
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={category.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className={`md:w-2/5 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                    <AspectRatio ratio={4/3} className="h-full">
                      <img 
                        src={category.imageSrc} 
                        alt={category.name} 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className={`md:w-3/5 p-8 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'} flex flex-col justify-center`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{category.name}</h3>
                    <p className="text-gray-700 mb-6">{category.description}</p>
                    <div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process with Background Image */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-fixed bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
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

      {/* Pan India Coverage with Map Background */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535540878298-a155e4a4b920?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-bovi-blue opacity-90"></div>
        <div className="container mx-auto text-center relative z-10 px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold mb-8 text-white">Pan India Coverage</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-white/90">
            We currently operate through our Bangalore, Delhi, Mumbai and Goa locations 
            providing comprehensive pan India presence to our clients.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Bangalore', 'Delhi', 'Mumbai', 'Goa'].map((location) => (
              <div key={location} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <p className="font-medium text-lg text-white">{location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
