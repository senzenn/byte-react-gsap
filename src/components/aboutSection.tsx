"use client";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col justify-center items-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-array-bold text-4xl md:text-6xl mb-8">
          Meet Your Techie BFFs
        </h2>

        <p className="font-author-medium text-lg md:text-xl leading-relaxed mb-8">
          We partner with creative agencies to craft awe-inspiring online
          experiences. With a mixture of friendly collaboration and savvy
          know-how, we deliver custom web development solutions that look, feel,
          and work like magic.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-16">
          <div className="team-member text-center">
            <div className="w-32 h-32 bg-pink-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-array-bold text-xl">Creative Developer</h3>
            <p className="font-author-medium text-pink-300">
              Making magic happen
            </p>
          </div>

          <div className="team-member text-center">
            <div className="w-32 h-32 bg-pink-300 rounded-full mx-auto mb-4"></div>
            <h3 className="font-array-bold text-xl">Frontend Wizard</h3>
            <p className="font-author-medium text-pink-300">
              Pixel perfect designs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
