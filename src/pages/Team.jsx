import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Man Bahadur Roka",
    role: "Business Consultant",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Nishan Roka",
    role: "IT Consultant",
    linkedin: "#",
    twitter: "#",
  },
  
];

const Team = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Meet Our <span className="text-purple-700">Team</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          A team of passionate professionals dedicated to delivering top-tier digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>

              <div className="flex justify-center gap-4 mt-4">
                {/* <a href={member.linkedin} className="text-blue-700 hover:text-blue-900 transition">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href={member.twitter} className="text-blue-500 hover:text-blue-700 transition">
                  <FaTwitter className="text-xl" />
                </a>
                <a href={member.github} className="text-gray-800 hover:text-gray-900 transition">
                  <FaGithub className="text-xl" />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
