
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutPage = () => {
  return (
    <>
      {/* About Hero Section with Background Image */}
      <section className="relative">
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <AspectRatio ratio={16/5} className="bg-gradient-to-r from-bovi-blue to-bovi-lightBlue opacity-80">
            <div className="absolute inset-0 bg-[url('/home_banner.png')] bg-cover bg-center mix-blend-overlay"></div>
          </AspectRatio>
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative -mt-24 md:-mt-32">
          <div className="max-w-3xl bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We value your time just as much as you do, so we'll just cut to the chase. 
              We're a <span className="font-semibold">MEDIA STRATEGIES & SOLUTIONS Agency</span>, 
              unlike any other.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are with Image */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                BOVI is a cohesive network of creative minds driven by innovation, 
                simplicity and logic. From conceptualization to curation to realization, 
                we navigate and overcome obstacles, by strategizing solutions that work.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We engineer solutions that surprise, that delight but more importantly, that work. 
                Our goal is to build comprehensive strategies for your business to be found, 
                heard and utilized.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                Bottom line: when we say, we do.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Creative team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - With Gradient Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Value Proposition</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-90"></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">We resonate</h3>
                    <p className="text-white/80 mb-4">(with you)</p>
                  </div>
                  <p className="mt-auto">
                    Understanding your business thoroughly is our first step. 
                    We align our strategies with your vision to create resonating media solutions.
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-90"></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">We differentiate</h3>
                    <p className="text-white/80 mb-4">(from others)</p>
                  </div>
                  <p className="mt-auto">
                    In a sea of similarity, we help your brand stand out. 
                    Our strategies are designed to highlight what makes your business unique.
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-lg relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-90"></div>
                <div className="relative p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">We curate</h3>
                    <p className="text-white/80 mb-4">(for you)</p>
                  </div>
                  <p className="mt-auto">
                    With precision and expertise, we curate media strategies 
                    that are tailored for your specific audience and objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section with Image */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={4/3}>
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Strategic planning session" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="bg-bovi-blue text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold">
                      01
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-4">Innovation</h3>
                    <p className="text-gray-700">
                      We constantly push the boundaries of conventional media strategies, 
                      exploring new avenues and technologies to give your brand the edge it deserves.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="bg-bovi-blue text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold">
                      02
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-4">Simplicity</h3>
                    <p className="text-gray-700">
                      In a complex media landscape, we believe in the power of clear, 
                      concise messaging that cuts through the noise and connects with your audience.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="bg-bovi-blue text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold">
                      03
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-4">Logic</h3>
                    <p className="text-gray-700">
                      Every strategy we develop is grounded in data and research, 
                      ensuring that your media investments deliver measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-bovi-blue opacity-90"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's collaborate to create media strategies that make your business stand out.
          </p>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white text-bovi-blue rounded-md hover:bg-gray-100 transition-colors inline-block font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
