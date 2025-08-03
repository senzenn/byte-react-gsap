"use client";

const ServicesSection = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-array-bold text-4xl md:text-6xl lg:text-8xl mb-8">
          Magic tricks are our jam,
        </h2>
        <p className="font-author-medium text-xl md:text-2xl text-pink-300 mb-16">
          but we're also really good at:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="service-card p-8 border border-pink-300 rounded-lg hover:bg-pink-300 hover:text-black transition-all duration-300">
            <h3 className="font-array-bold text-2xl mb-4">Web Development</h3>
            <p className="font-author-medium">
              Custom websites that work like magic
            </p>
          </div>

          <div className="service-card p-8 border border-pink-300 rounded-lg hover:bg-pink-300 hover:text-black transition-all duration-300">
            <h3 className="font-array-bold text-2xl mb-4">E-commerce</h3>
            <p className="font-author-medium">
              Online stores that convert visitors to customers
            </p>
          </div>

          <div className="service-card p-8 border border-pink-300 rounded-lg hover:bg-pink-300 hover:text-black transition-all duration-300">
            <h3 className="font-array-bold text-2xl mb-4">Accessibility</h3>
            <p className="font-author-medium">Inclusive design for everyone</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
