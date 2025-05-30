import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/');
  }

 
  function handleContact() {
    navigate('/contact');
  }

  return (
    <>
            <div className="mt-8 flex flex-col md:flex-row items-center w-full m-auto text-white ">
        <p className="ml-4 text-3xl md:text-6xl titlu">Claudius Valentin</p>
        <div className="flex gap-4 md:gap-8 mt-4 md:mt-0 ml-auto mr-8 text-xl md:text-2xl cursor-pointer">
          <p onClick={handleHome} className="hover:text-gray-500">Home</p>
          <p onClick={handleContact} className="hover:text-gray-500">Contact</p>
        </div>
      </div>
    </>
  );
}

export default Nav;
