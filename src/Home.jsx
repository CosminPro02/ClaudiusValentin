import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Home() {
  const slides = [
    "https://www.shipenergy.com/wp-content/uploads/2022/09/european-truck-flat-700x467.jpg",
    "https://www.3d-models.com/media/cache/full_thumb/th/5f/0d/66/5f0d6690db73d529709155.jpeg",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/european-truck-on-the-road-free-photo.jpg?w=2210&quality=70",
    "https://media.motorvlog.ro/sites/10/2024/02/Sprinter_eSprinter-3-scaled.jpeg"
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  function IndexPlus() {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }

  function IndexMinus() {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  }

  return (
    <>
      <div className="w-full py-8 px-6 relative flex flex-col items-center lg:flex-row xl:h-[700px]">
  
        <div className="relative w-full lg:w-1/2 h-64 md:h-96 xl:h-[600px] rounded-2xl bg-center bg-cover duration-500" 
             style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
          
         
          <div
            onClick={IndexMinus}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full text-2xl cursor-pointer backdrop-blur-lg text-white p-2"
          >
            <BsChevronLeft size={30} />
          </div>
          <div
            onClick={IndexPlus}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full text-2xl cursor-pointer backdrop-blur-lg text-white p-2"
          >
            <BsChevronRight size={30} />
          </div>
        </div>


        <div className="w-full lg:w-1/2 p-4 lg:p-8 mt-4 lg:mt-0 text-center lg:text-left text-white text-sm md:text-base lg:text-lg">
          <p>
            Claudius Valentin este gata să ofere soluții logistice complete, rapide și de încredere pentru afaceri din toate industriile. Cu o experiență solidă și o flotă extinsă de vehicule echipate pentru diverse tipuri de mărfuri, ne angajăm să transportăm produsele clienților noștri în siguranță, la timp și cu maximă eficiență.
          </p>
          <br />
          <p>
            Oferim servicii de transport intern și internațional. Ne adaptăm nevoilor fiecărui client prin soluții personalizate și optimizăm fiecare rută pentru a minimiza costurile și a crește rapiditatea. Prioritatea noastră este satisfacția și siguranța clienților, motiv pentru care menținem standarde înalte de calitate și respectăm toate reglementările și normele din industrie.
          </p>
          <br />
          <p>
            Fie că aveți nevoie de transport pentru marfă generală, mărfuri perisabile sau produse sensibile, compania noastră este partenerul de încredere pe care vă puteți baza pentru o colaborare pe termen lung, eficientă și sigură.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
