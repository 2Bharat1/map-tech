import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Man Bahadur Roka",
    role: "Business Consultant",
    image: "../../../member_2.jpeg",
    bio: "Experienced business strategist with expertise in market analysis and growth planning.",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Nishan Roka",
    role: "IT Consultant",
    image: "../../../member_1.jpeg",
    bio: "Technology expert specializing in digital transformation and system architecture.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Edward Amaral",
    role: "Project Manager",
    image: "../../../member_3.jpeg",
    bio: "Dedicated project leader with a track record of delivering complex projects on time.",
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-purple-700">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented professionals combine expertise and passion to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-purple-100 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="bg-white text-blue-700 p-2 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <FaLinkedin className="text-lg" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className="bg-white text-blue-400 p-2 rounded-full shadow-md hover:bg-blue-400 hover:text-white transition-colors duration-300"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <FaTwitter className="text-lg" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        className="bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition-colors duration-300"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role || "Team Member"}</p>
                  <p className="text-gray-600 text-sm">{member.bio || "Team member at our company."}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Value Proposition */}
        <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90 rounded-2xl"></div>
          <div className="relative p-8 md:p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-lg mb-6">
              We manage and execute projects with our in-house designers and developers based in 
              <span className="font-bold"> Kathmandu, Nepal</span>, ensuring high-quality development. 
              Our team delivers <span className="font-bold">cost-effective solutions</span> while maintaining global standards.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-white text-purple-700 font-medium py-3 px-6 rounded-full hover:bg-purple-50 transition-colors duration-300"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;