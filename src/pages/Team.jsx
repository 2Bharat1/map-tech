import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Man Bahadur Roka",
    role: "Business Consultant",
    image: '../../../member_2.jpeg',
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Nishan Roka",
    role: "IT Consultant",
    image: '../../../member_1.jpeg',
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Edward Amaral",
    image: '../../../member_3.jpeg',
    linkedin: "#",
    twitter: "#",
  },
];

const Team = () => {
  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Meet Our <span className="text-purple-700">Team</span>
        </h2>

        

        {/* Team Members - Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 w-72"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role || "Team Member"}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} className="text-blue-700 hover:text-blue-900 transition">
                    <FaLinkedin className="text-xl" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} className="text-blue-500 hover:text-blue-700 transition">
                    <FaTwitter className="text-xl" />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} className="text-gray-800 hover:text-gray-900 transition">
                    <FaGithub className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Highlighted Text */}
        <p className="text-gray-700 mt-10 text-lg max-w-3xl mx-auto mb-10 font-semibold bg-yellow-100 p-4 rounded-lg shadow-md">
          We manage and execute projects with our in-house designers and developers based in 
          <span className="text-purple-700 font-bold"> Kathmandu, Nepal</span>, ensuring high-quality development. 
          Our team delivers <span className="text-purple-700 font-bold">cost-effective solutions</span> while maintaining global standards.
        </p>
      </div>
    </section>
  );
};

export default Team;
