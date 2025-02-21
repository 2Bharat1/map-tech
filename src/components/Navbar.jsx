const Navbar = () => {
  return (
    <>
      <nav class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            <div class="flex items-center flex-shrink-0">
                <img src="./favicon.png" alt="" height={10} width={100} />
            </div>

            <div class="hidden md:flex items-center justify-center space-x-8">
              <a
                href="/"
                class="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/about"
                class="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/our-team"
                class="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                Our team 
              </a>
              <a
                href="/projects"
                class="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                Projects
              </a>
              <a
                href="/how-we-work"
                class="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                How we work 
              </a>
             
              <a
                href="/contact"
                class="nav-link text-gray-600 font-medium transition-colors hover:text-gray-900"
              >
                Contact
              </a>
            </div>

            <div class="hidden md:flex items-center">
              <a
                href="#"
                class="inline-flex items-center px-6 py-3 rounded-full font-medium bg-purple-800 text-white hover:bg-blue-900 transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                Start Building
              </a>
            </div>

            <div class="flex items-center md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
