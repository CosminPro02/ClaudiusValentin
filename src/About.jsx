import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

function Contact(){
   
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   
   const handleSubmit = (e) => {
       e.preventDefault();
       // Handle form submission logic here
       console.log({ name, email, message });
   };
   
    return(
        <div className="min-h-screen bg-gradient-to-br p-4">
            {/* Header */}
            <div className="flex flex-col justify-center items-center pt-12 pb-8">
                <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4 text-center">
                    Contact
                </h1>
                <p className="text-gray-300 text-lg text-center max-w-md md:text-2xl md:max-w-4xl">
                    Pentru informații suplimentare completați formularul sau contactaţine direct
                </p>
            </div>
         
           <div className="grid  md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="mt-8 p-8 bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl max-w-2xl mx-auto border border-white/20 md:w-[500px] ">
                <div className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-white block text-sm font-medium flex items-center gap-2">
                            <FaUser className="text-white" />
                            Nume
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Introduceți numele dvs."
                            required
                            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="text-white block text-sm font-medium flex items-center gap-2">
                            <MdOutlineEmail className="text-white" />
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="exemplu@email.com"
                            required
                            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <label className="text-white block text-sm font-medium">
                            Mesaj
                        </label>
                        <textarea
                            name="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Scrieți mesajul dvs. aici..."
                            required
                            className="w-full p-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-black/50 to-gray hover:from-gray hover:to-black/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-white/10 focus:ring-offset-2 focus:ring-offset-transparent"
                        >
                            Trimite Mesajul
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="mt-12 max-w-2xl mx-auto">
                
                
                <div className="p-8 ">
                    <div className="space-y-6">
                     
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-black/25 rounded-full flex items-center justify-center">
                                <FaUser className="text-gray-300 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm font-medium">Nume</p>
                                <p className="text-white text-lg font-semibold">Prodan Valentin</p>
                            </div>
                        </div>

                   
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-green-600/30 rounded-full flex items-center justify-center">
                                <FaPhoneVolume className="text-green-300 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm font-medium">Telefon</p>
                                <p className="text-white text-lg font-semibold">07123456778</p>
                            </div>
                        </div>

                  
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center">
                                <MdOutlineEmail className="text-blue-300 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm font-medium">Email</p>
                                <p className="text-white text-lg font-semibold">claudiusvalentin@gmail.com</p>
                            </div>
                        </div>

                   
                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                            <div className="w-12 h-12 bg-red-600/30 rounded-full flex items-center justify-center">
                                <IoLocationSharp className="text-red-300 text-xl" />
                            </div>
                            <div>
                                <p className="text-gray-300 text-sm font-medium">Adresă</p>
                                <p className="text-white text-lg font-semibold">Brașov, Strada Lucernei nr.3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Contact;