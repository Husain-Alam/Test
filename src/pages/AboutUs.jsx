import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaCogs, FaUtensils, FaUser } from 'react-icons/fa';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Engr. Ariez Khan',
      phone: '+923117183156',
      linkedin: 'engr-ariez-khan',
      email: '01-133212-019@student.bahria.edu.pk',
      image: '/team/ariez.jpg'
    },
    {
      name: 'Engr. Husain Alam',
      phone: '+923355577775',
      linkedin: 'husainalam',
      email: '01-133212-131@student.bahria.edu.pk',
      image: '/team/husain.jpg' // Add team member images to public/team folder
  
    },
    {
      name: 'Engr. Sheheryar Ali',
      phone: '+923112027212',
      linkedin: 'm-sheheryar-ali',
      email: '01-133212-124@student.bahria.edu.pk',
      image: '/team/sheheryar.jpg'
    }
  ];

  const features = [
    {
      title: 'Automated Cooking',
      description: 'Delivers consistent, high-quality results.',
      icon: <FaCogs className="w-12 h-12 text-primary" />
    },
    {
      title: 'Enhanced Hygiene',
      description: 'Reduces contamination risks with minimal human contact.',
      icon: <FaUtensils className="w-12 h-12 text-primary" />
    },
    {
      title: 'User-Friendly Interface',
      description: 'Allows real-time monitoring and customization.',
      icon: <FaUser className="w-12 h-12 text-primary" />
    }
  ];

  const supervisor = {
    name: 'Dr. Junaid Imtiaz',
    title: 'Associate Professor',
    education: [
      'PhD, Hanyang Univeristy, South Korea',
      'MS, University of Leicester, United Kingdom'
    ],
    department: 'Department of Electrical Engineering',
    university: 'Bahria University',
    campus: 'H-11 Campus'
  };

  return (
    <div className="min-h-screen">
      {/* About Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">About Us</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-primary-dark">
              We are final-year Electrical Engineering students from Bahria School of
              Engineering and Applied Sciences. Passionate about innovation, we’re 
              committed to applying AI, IoT, and robotics to tackle modern culinary 
              challenges, as shown in our Automated Culinary Machine project. 
              Our goal is to redefine food automation through advanced engineering 
              solutions and contribute to industry advancements.
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
          <p className="text-lg text-gray-700 mb-12">
            Our AI Based Food Factory leverages AI, IoT, and robotics to streamline every aspect of meal
            preparation, from ingredient storage to cooking. Designed for the evolving needs of high-demand
            kitchens, it offers a comprehensive automation solution for enhanced efficiency and consistency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gradient-to-br from-primary via-primary-light to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-primary">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{member.name}</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-primary-dark hover:text-primary"
                  >
                    <FaPhone className="mr-2" /> {member.phone}
                  </a>
                  <a
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-dark hover:text-primary truncate"
                  >
                    <FaLinkedin className="mr-2 flex-shrink-0" /> {member.linkedin}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-primary-dark hover:text-primary truncate"
                  >
                    <FaEnvelope className="mr-2 flex-shrink-0" /> {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supervisor Section */}
      <div className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-primary">{supervisor.name}</h1>
              <h2 className="text-lg font-semibold text-gray-800">{supervisor.title}</h2>
              
              <div className="space-y-1 text-sm text-gray-700">
                {supervisor.education.map((edu, index) => (
                  <p key={index}>{edu}</p>
                ))}
              </div>

              <div className="space-y-1 mt-3">
                <h3 className="text-base font-semibold text-gray-800">{supervisor.department}</h3>
                <p className="text-sm text-gray-700">{supervisor.university}</p>
                <p className="text-sm text-gray-700">{supervisor.campus}</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/dr-junaid.jpg"
                alt={supervisor.name}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
