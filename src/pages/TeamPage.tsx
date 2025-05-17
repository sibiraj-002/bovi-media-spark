
import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Suresh Sanyasi",
      role: "Director",
      description: "An established Sales and Marketing Leader with progressive experience and expertise of over 35+ years in formulating business successes across brands and products locally and global markets.",
      highlights: [
        "Keen sense of formulating key sales strategies resulting in creating competitive advantage and driving revenue",
        "Innate ability to leverage opportunities for Organic and inorganic growth",
        "A highly successful people leader who is able to engage, retain and continuously motivate people to leverage their potential",
        "Intuitive and Innovative with clear vision and a strong sense of managing relationships resulting in sustained customer patronage and profitability"
      ],
      lastPosition: "National Sales Director of Radio Indigo",
      achievements: [
        {
          name: "The Purvarkanka indigo and Blues Festival",
          description: "Ideation, sponsorship and execution on a profitable basis"
        },
        {
          name: "International Jazz & Blues Festival",
          description: "Two days of the ultimate Blues-Rock experience!"
        },
        {
          name: "Cirkus Indigo",
          description: "A two-day dance music festival that'll bear witness to a cornucopia of international EDM stars like Norman Doray, Stefano Noferini, Daddy's Groove, Justin Prime, Jack Beats, Kid Crème and so many more"
        },
        {
          name: "The Indigo All Stars Party",
          description: "The best NYE in Bangalore with the stars in true Indigo style with your favourite RJs - Michelle, Nathan, Shagufta, Melodee and Sriram, while DJ Ivan plays a stellar set and also indulge in Marriott's unlimited F&b this New Year Eve"
        }
      ],
      expertise: "Media – Print, Radio, IPS, Events, Etc."
    },
    {
      name: "Arun Murthy Rao",
      role: "Director",
      description: "Accomplished marketing & business development leader offering over 30+ years of experience driving revenue through brand building and maintaining client relationships.",
      highlights: [
        "Creative and dynamic marketer with proven expertise in consistently penetrating new markets to ensure sustainable revenue growth",
        "Leverages exemplary communication and in-person meetings to establish presence and build a positive brand while fostering continuous client engagement"
      ]
    }
  ];

  return (
    <>
      {/* Team Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-gray-700">
              Meet the experienced leaders behind BOVI Media, with over 70 years of combined experience in the media industry.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="max-w-5xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 items-start">
                  <div className="lg:w-1/3">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-bovi-blue to-bovi-lightBlue flex items-center justify-center text-white">
                      <h2 className="text-4xl font-bold">{member.name.split(" ")[0]}<br />{member.name.split(" ")[1]}</h2>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
                    <p className="text-xl text-bovi-blue mb-6">{member.role}</p>
                    
                    <p className="text-gray-700 mb-6">{member.description}</p>
                    
                    {member.highlights && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
                        <ul className="space-y-3">
                          {member.highlights.map((highlight, i) => (
                            <li key={i} className="flex">
                              <span className="text-bovi-blue mr-3">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {member.lastPosition && (
                      <p className="font-medium mb-6">
                        Last held Position: "{member.lastPosition}"
                      </p>
                    )}
                    
                    {member.achievements && (
                      <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-4">Claim to Fame</h3>
                        <div className="space-y-4">
                          {member.achievements.map((achievement) => (
                            <div key={achievement.name} className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-bold mb-2">{achievement.name}</h4>
                              <p className="text-gray-700">{achievement.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {member.expertise && (
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Body of work</h3>
                        <p>{member.expertise}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="section-padding bg-bovi-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Combined Experience of Over 70 Years</h2>
          <p className="text-xl max-w-3xl mx-auto">
            With our extensive experience in the media industry, Bovi Media will be able to help you 
            prioritise your spends, plan sustainable media solutions and flawlessly execute them.
          </p>
        </div>
      </section>

      {/* Contact Us Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Work With Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Ready to start a project with us? Our team of experienced professionals is ready to help you achieve your media goals.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-4 text-left">
              <div>
                <p className="font-medium">Suresh Sanyasi - Director</p>
                <p>M: <a href="tel:+919900142919" className="text-bovi-blue hover:underline">+91 9900142919</a></p>
                <p>E: <a href="mailto:suresh.sanyasi@bovimedia.com" className="text-bovi-blue hover:underline">suresh.sanyasi@bovimedia.com</a></p>
              </div>
              
              <div className="pt-4 border-t">
                <p className="font-medium">Blue Oxygen Ventures Inc.</p>
                <p>19/6, 6th Main Road Vinayaka Nagar (off old airport Road)</p>
                <p>Bangalore – 560017</p>
                <p className="mt-2">Reg Address: 59, Sunkalpet Main Road Bangalore – 560002.</p>
                <p className="mt-2">
                  <a href="https://www.bovimedia.com" target="_blank" rel="noopener noreferrer" className="text-bovi-blue hover:underline">www.bovimedia.com</a>
                </p>
              </div>
              
              <p className="pt-4 border-t font-medium">Bangalore | Goa | Mumbai | Delhi</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
