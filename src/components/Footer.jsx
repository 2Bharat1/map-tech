import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Map Tech Agency.</h3>
            <p className="text-gray-400 text-sm">
              Driving innovation through cutting-edge technology and creative
              solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/home" },
                { name: "Projects", path: "/projects" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/how-we-work" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400 flex justify-center md:justify-start items-center">
                <FaMapMarkerAlt className="mr-3 text-gray-300" />
                123 Innovation Street, Tech City
              </p>
              <p className="text-gray-400 flex justify-center md:justify-start items-center">
                <FaEnvelope className="mr-3 text-gray-300" />
                contact@techinnovators.com
              </p>
              <p className="text-gray-400 flex justify-center md:justify-start items-center">
                <FaPhone className="mr-3 text-gray-300" />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 M.A.P. Tech Agency All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
