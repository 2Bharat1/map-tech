const HeroSection = () => {
    return (
      <>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between py-20">
            <div class="md:w-1/2 space-y-6">
              <h1 class="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Crafting the future with code
              </h1>
              <p class="text-xl text-gray-600 max-w-lg">
                "In the world of software, craftsmanship isn't just about writing
                code—it's about shaping tomorrow's possibilities." <br />
                <span class="text-xs italic text-green-600">
                  - M.A.P technology
                </span>
              </p>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="px-8 py-4 bg-purple-800 text-white rounded-full font-medium hover:bg-blue-900 transition-colors shadow-md"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  class="px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
  
            <div class="md:w-1/2 mt-12 md:mt-0 animate-float">
              <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full max-w-lg"
              >
                <rect
                  x="50"
                  y="50"
                  width="300"
                  height="200"
                  rx="20"
                  fill="#1e293b"
                  filter="url(#shadow)"
                />
  
                <rect
                  x="70"
                  y="80"
                  width="150"
                  height="20"
                  rx="4"
                  fill="#38bdf8"
                />
                <rect
                  x="70"
                  y="110"
                  width="220"
                  height="20"
                  rx="4"
                  fill="#f472b6"
                  opacity="0.8"
                />
                <rect
                  x="70"
                  y="140"
                  width="180"
                  height="20"
                  rx="4"
                  fill="#a78bfa"
                  opacity="0.7"
                />
                <rect
                  x="70"
                  y="170"
                  width="200"
                  height="20"
                  rx="4"
                  fill="#fbbf24"
                  opacity="0.6"
                />
  
                <circle cx="320" cy="70" r="8" fill="#ec4899" />
                <circle cx="340" cy="70" r="8" fill="#22d3ee" />
                <circle cx="360" cy="70" r="8" fill="#a3e635" />
  
                <defs>
                  <filter id="shadow" x="0" y="0" width="500" height="500">
                    <feOffset result="offOut" in="SourceGraphic" dx="4" dy="4" />
                    <feGaussianBlur
                      result="blurOut"
                      in="offOut"
                      stdDeviation="4"
                    />
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default HeroSection;
  