import { useState, useEffect } from "react";
import { BsChevronRight, BsChevronLeft, BsTruck, BsShield, BsClock } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const slides = [
    "https://www.shipenergy.com/wp-content/uploads/2022/09/european-truck-flat-700x467.jpg",
    "https://www.3d-models.com/media/cache/full_thumb/th/5f/0d/66/5f0d6690db73d529709155.jpeg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/european-truck-on-the-road-free-photo.jpg?w=2210&quality=70",
    "https://media.motorvlog.ro/sites/10/2024/02/Sprinter_eSprinter-3-scaled.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const navigate = useNavigate()

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  function IndexPlus() {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }

  function IndexMinus() {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  }

  const features = [
    {
      icon: <BsTruck className="w-8 h-8" />,
      title: (<> Profesioniști în transport <br/>   din 1997 </>),
      description: "Cu o experiență de peste 25 de ani, suntem partenerul tău de încredere în transporturi."
    },
    {
      icon: <BsShield className="w-8 h-8" />,
      title: "Transport Sigur",
      description: "Siguranță maximă pentru marfa dumneavoastră"
    },
    {
      icon: <BsClock className="w-8 h-8" />,
      title: "Livrare la Timp",
      description: "Respectăm întotdeauna termenele stabilite"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black">
      {/* Hero Background with Overlay */}
      <div className="relative w-full h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10"></div>
        <img 
          src="https://www.shipenergy.com/wp-content/uploads/2022/09/european-truck-flat-700x467.jpg" 
          className="w-full h-full object-cover"
          alt="Hero background"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white/5 to-white bg-clip-text text-transparent">
              CLAUDIUS VALENTIN
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              Soluții Logistice de Excelență
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Enhanced Image Carousel */}
          <div className="relative w-full lg:w-1/2 group">
            <div 
              className="relative h-80 md:h-96 xl:h-[500px] rounded-3xl bg-center bg-cover duration-700 ease-in-out transform hover:scale-105 shadow-2xl overflow-hidden"
              style={{ backgroundImage: `url(${slides[currentIndex]})` }}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Navigation Buttons */}
              <button
                onClick={IndexMinus}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <BsChevronLeft size={24} />
              </button>
              
              <button
                onClick={IndexPlus}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <BsChevronRight size={24} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6 text-white">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">Claudius Valentin </span> este gata să ofere <span className=" font-bold">soluții logistice complete</span>, rapide și de încredere pentru afaceri din toate industriile. Cu o experiență solidă și o flotă extinsă de vehicule echipate pentru diverse tipuri de mărfuri, ne angajăm să transportăm produsele clienților noștri în siguranță, la timp și cu maximă eficiență.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-lg leading-relaxed">
                  Oferim servicii de <span className=" font-bold">transport intern și internațional</span>. Ne adaptăm nevoilor fiecărui client prin soluții personalizate și optimizăm fiecare rută pentru a minimiza costurile și a crește rapiditatea. Prioritatea noastră este satisfacția și siguranța clienților.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <p className="text-lg leading-relaxed">
                  Fie că aveți nevoie de transport pentru marfă generală, mărfuri perisabile sau produse sensibile, compania noastră este <span className=" font-bold">partenerul de încredere</span> pe care vă puteți baza pentru o colaborare pe termen lung, eficientă și sigură.
                </p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-6">
              <button
               onClick={() => navigate('/contact')}
               className="group relative px-8 py-4 bg-gradient-to-r from-white/5 rounded-full text-white font-semibold text-lg hover:from-white/5 hover:to-white/10 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <span className="relative z-10">Solicită Ofertă</span>
              </button>
            </div>
          </div>

          
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            De Ce Să Ne Alegeți
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-8 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-black/60 rounded-full text-white mb-6  transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;