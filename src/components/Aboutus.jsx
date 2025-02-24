const Aboutus = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto md:text-center mb-16">
            <span className="text-purple-800 font-semibold tracking-wide uppercase">
              About Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Innovating the Future of Technology
            </h2>
            <p className="text-lg text-gray-600">
              We're a passionate team of innovators, developers, and dreamers
              working to transform the way people interact with technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:text-center">
              <div className="text-4xl font-bold text-purple-800 mb-2">
                500+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="md:text-center">
              <div className="text-4xl font-bold text-purple-800 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="md:text-center">
              <div className="text-4xl font-bold text-purple-800 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/about_2/about.jpg"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6 text-justify">
                We aim to create sustainable, highly skilled job opportunities
                for Nepali IT professionals while fostering economic growth and
                technological advancement in Nepal. By partnering with us, you
                are investing in high-quality IT solutions and making a
                meaningful impact on the lives of underprivileged children
                through education and healthcare support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
