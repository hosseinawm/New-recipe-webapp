import heroImg from "../../public/hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <img
        src={heroImg}
        alt="heroImg"
        className="absolute z-0 inset-0 h-full w-full object-cover"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg:px-8 text-center mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
            Cook Smarter,
            <span className="text-orange-600 block">Eat Better</span>
          </h1>
          <p className="text-white text-xl sm:text-2xl mb-8">
            Explore hundreds of handpicked recipes designed for every taste and
            occasion. Whether you’re a beginner or a seasoned cook, you’ll find
            something inspiring to make today.
          </p>

          <div className="flex gap-4 justify-center items-center mb-12">
            <button className="text-white bg-orange-400 hover:bg-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
              Recipes
            </button>
            <button className="text-white border border-orange-400 hover:border-orange-500 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
