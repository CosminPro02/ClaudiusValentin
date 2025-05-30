import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Contact(){
    return(
        <>
        <p className="text-white text-center text-2xl mt-16  "></p>

        <div className="items-center  mt-[50px] mx-5  border backdrop-blur-xl">
            
            
            <div className="p-6 text-lg text-white ">
            
           
            <div className="flex gap-5 items-center p-2">
           
            <p className=" ">Prodan Valentin</p>
            </div>

           
            <div className="flex gap-5 items-center p-2">
            <FaPhoneVolume></FaPhoneVolume> 
            <p className=""> 07123456778 </p>
            </div>

            <div className="flex gap-5 items-center p-2">
            <MdOutlineEmail></MdOutlineEmail>
            <p>claudiusvalentin@gmail.com</p>
            </div>

            <div className="flex gap-5 items-center p-2">
            <IoLocationSharp></IoLocationSharp>
            <p>Braşov , Strada Lucernei nr.3</p>
            </div>
            
            </div>
        </div>

      
        
        </>
        
    );
}
export default Contact