export default function Servicii() {
     
    const servici = [
        {
            title: "Transport National şi Internaţional",
            description:"Asigurăm servicii de transport rutier de marfă atât pe teritoriul României, cât și în toată Europa. Oferim soluții flexibile și rapide pentru nevoile tale logistice, indiferent de distanță.",
        },
        {
            title: "Transport Prelata/Sprinter 3,5 tone",
            description:"Ideal pentru livrări rapide și eficiente, autoutilitarele noastre de 3,5 tone sunt perfecte pentru transportul de marfă cu volum mic sau mediu. Acestea oferă flexibilitate, acces facil în zone urbane și livrare expres."
        },
        {
            title: "Transport TIR",
            description:"Flota noastră de camioane TIR este pregătită pentru transporturi de mare capacitate, interne și internaționale. Respectăm standardele europene și oferim monitorizare GPS și timpi de tranzit exacți."
        },
        {
            title: "Depozit de tranzit",
            description:"Oferim descarcare de marfa non-stop in depozitul nostru si livrare pe raza judetului Brasov"
        },
        {
            title: "Transport Marfă în Regim de Grupaj",
            description:"Pentru transporturi de marfă care nu ocupă un camion complet, oferim servicii de grupaj. Astfel, costurile sunt optimizate și livrarea se face eficient, în condiții sigure și cu trasabilitate completă.",
        },
        {
            title: "Transport Marfă în Regim de Camion Complet (FTL)",
            description:"Punem la dispoziție camioane complete pentru transporturi dedicate, directe, fără opriri intermediare. Ideal pentru volume mari sau livrări urgente care necesită o soluție logistică exclusivă.",
  },

    ];

    
    return(
        <>
            <div className="mt-20 flex flex-col">
              <h1 className="text-white text-4xl sm:text-6xl font-bold mb-4 text-center ">Lista de Servici</h1>
                <p className="text-gray-300 text-lg text-center justify-center  md:text-2xl ">Oferim cel mai bun raport pret calitate</p>
                <div className="mt-5 p-5">
                    {servici.map((sericiu , index) =>(
                        <div key={index} className="p-5 backdrop-blur-sm bg-white/5 mb-5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:transform">
                            <h2 className="text-white mb-4 md:text-2xl font-bold">{sericiu.title}</h2>
                            <h3 className="text-white leading-relaxed md:text-xl">{sericiu.description}</h3>
                        </div>
                    ))}

                </div>
            </div>
        </>
     );
}