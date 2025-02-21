const Aboutus = () => {
  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="about/about.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Who are we?
              </h3>
              <p className="text-gray-600 mb-6 text-justify">
                MapTech Agency is a global IT service provider working in
                collaboration with MapTech Nepal Developers, a team of highly
                skilled and experienced professionals based in Nepal. Our
                primary mission is to connect businesses from the USA, Canada,
                Europe, and Australia with top-tier Nepali developers to create
                high-quality websites and applications at significantly lower
                costs. Due to political instability, many young talents in Nepal
                seek opportunities abroad. Our goal is to retain this
                exceptional talent by providing sustainable, high-level job
                opportunities in Nepal. By choosing MapTech Agency, you are not
                only getting cost-effective and high-quality IT solutions but
                also contributing to Nepal’s economic growth and social
                development.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Innovation First
                    </h4>
                    <p className="mt-1 text-gray-600">
                      We constantly push boundaries to create cutting-edge
                      solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Customer Focus
                    </h4>
                    <p className="mt-1 text-gray-600">
                      Your success is our success. We're committed to delivering
                      value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
