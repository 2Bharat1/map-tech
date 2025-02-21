const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 text-white py-12 p-40">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">Map Tech Agency.</h3>
              <p class="text-gray-400 text-sm">
                Driving innovation through cutting-edge technology and creative
                solutions.
              </p>
              <div class="flex space-x-4 mt-4">
                <a href="#" class="text-gray-300 hover:text-white">
                  <i class="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-white">
                  <i class="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-white">
                  <i class="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-4">Contact Us</h3>
              <div class="space-y-3">
                <p class="text-gray-400 flex items-center">
                  <i class="fas fa-map-marker-alt mr-3 text-gray-300"></i>
                  123 Innovation Street, Tech City
                </p>
                <p class="text-gray-400 flex items-center">
                  <i class="fas fa-envelope mr-3 text-gray-300"></i>
                  contact@techinnovators.com
                </p>
                <p class="text-gray-400 flex items-center">
                  <i class="fas fa-phone mr-3 text-gray-300"></i>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-700 mt-8 pt-6 text-center">
            <p class="text-gray-500 text-sm">
              © 2024 Tech Innovators Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
