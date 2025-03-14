import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Nepal petrol lube website",
    category: "CMS",
    image: "/ecomm__site.png",
    link: "https://nepalpetrolube.com/",
  },
  
  {
    title: "nepaltoursdestination",
    category: "CMS",
    image: "newsportal_site.png",
    link: "https://nepaltoursdestination.com/",
  },
  {
    title: "Manakamana Treks",
    category: "CMS",
    image: "order__site.png",
    link: "https://manakamanaexpedition.com/",
  },
];

const OurProjects = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our <span className="text-purple-700">Projects</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          We take pride in delivering cutting-edge solutions for businesses worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-purple-700 font-medium text-sm mt-2">{project.category}</p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    className="text-purple-700 flex items-center gap-1 hover:underline"
                  >
                    View Project <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
