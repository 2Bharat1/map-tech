import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Map Tech Agency.</h3>
            <p className="text-gray-400 text-sm">
              Driving innovation through cutting-edge technology and creative
              solutions.
            </p>
            <div className="flex justify-start space-x-4 mt-4">
              <a
                href="https://www.facebook.com/MapTech.Agency"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/MapTech.Agency"
                className="text-gray-300 hover:text-white"
              >
                <FaInstagram className="text-2xl" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Canada Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Canada Office</h3>
              <div className="space-y-3">
                <p className="text-gray-400 flex justify-start">
                  <FaMapMarkerAlt className="mr-3 text-gray-300" />
                  <a
                    href="https://www.google.com/maps?q=905+4727+Sheppard+Ave+E,+Scarborough,+ON+M1S+5B3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500"
                  >
                    905 - 4727 Sheppard Ave E, Scarborough, ON Zip Code: M1S 5B3
                  </a>
                </p>
                <p className="text-gray-400 flex justify-start">
                  <FaEnvelope className="mr-3 text-gray-300" />
                  <a href="mailto:info@maptech.agency" className="text-gray-500">
                    info@maptech.agency
                  </a>
                </p>
                <p className="text-gray-400 flex justify-start">
                  <FaPhone className="mr-3 text-gray-300" />
                  <a href="tel:+14379977191" className="text-gray-500">
                    +1 (437) 997-7191
                  </a>
                </p>
              </div>
            </div>

            {/* Nepal Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Nepal Office</h3>
              <div className="space-y-3">
                <p className="text-gray-400 flex justify-start">
                  <FaMapMarkerAlt className="mr-3 text-gray-300" />
                  <span className="text-gray-500">Kathmandu, Nepal</span>
                </p>
                <p className="text-gray-400 flex justify-start">
                  <FaEnvelope className="mr-3 text-gray-300" />
                  <a href="mailto:info@maptech.agency" className="text-gray-500">
                    info@maptech.agency
                  </a>
                </p>
                <p className="text-gray-400 flex justify-start">
                  <FaPhone className="mr-3 text-gray-300" />
                  <a href="tel:+9779851033907" className="text-gray-500">
                    +977-9851033907
                  </a>
                </p>
              </div>
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
