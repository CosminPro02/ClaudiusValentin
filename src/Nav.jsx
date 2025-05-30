import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between ">

      <p 
        onClick={() => navigate('/')} 
        className="text-2xl md:text-4xl font-bold cursor-pointer text-white hover:text-gray-300 transition-colors"
      >
        Claudius Valentin
      </p>

 
      <div className="flex gap-6 text-lg md:text-xl font-medium text-white">
        <p
          onClick={() => navigate('/servici')}
          className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-300"
        >
          Servicii
        </p>
        <p
          onClick={() => navigate('/contact')}
          className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-300"
        >
          Contact
        </p>
      </div>
    </nav>
  );
}

export default Nav;
