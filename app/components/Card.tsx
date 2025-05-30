import { ProductsType } from "../Types/productsType"
import {toast} from "react-toastify"
import { GiWorld } from "react-icons/gi";
import { GiVillage } from "react-icons/gi";
import Image from "next/image";

interface CardProps {
  item: ProductsType;
}

export default function Card({item}: CardProps) {
  const whatsappLink = `https://wa.me/+221771046122`; // Construct WhatsApp link
  
  return (
    
    <div className="bg-white rounded-lg shadow-md p-4 relative z-[50px] flex flex-col justify-between gap-2">
      <img src={item.image} alt={item.name} className="w-full object-cover mb-4 rounded-md"/>
        <p className="text-[12px] text-gray-900 flex items-center gap-2">
          <span className="font-bold flex items-center">
            <GiWorld/>
          <span>Lieu:</span></span>
          <span>{item.zone}</span>
          </p>

        <p className="text-[12px] text-gray-900 flex items-center gap-2">
          <span className="font-bold flex items-center">
            <GiVillage/>
          <span>Pieces:</span></span>
          <span>{item.piece}</span>
        </p>
        
        <p className="text-[14px] text-gray-400">
          {item.desc}
        </p>

        <p className="bg-orange-400 text-white font-bold mt-2 absolute top-2 right-2 p-4 rounded-full">
          {item.price} Frs CFA / Journée
        </p>
        
        <button
  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse"
  onClick={() => {
    // Option 1: Using Toast Notification for information
    toast.info("Le numéro de téléphone (+221 77 104 61 22) a été copié dans le presse-papier. Veuillez passer l'appel manuellement.");

    // Option 2: Using window.open for a suggestion (less secure)
    // window.open("tel:+221771046122"); // This might not work on all browsers

    // Option 3: User prompt with a link (More secure)
    if (confirm("Voulez-vous appeler le +221 77 104 61 22 ?")) {
      window.location.href = "tel:+221771046122";
    }
  }}
>
  Appeler le propriétaire
</button>
    <div>
      {/* WhatsApp chat button */}
    <a 
        href={whatsappLink}
        className="whatsapp-link relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image 
          src="/whatsapp.jpg"
          alt="WhatsApp"
          width={40}
          height={40}
          className="whatsapp-icon z-50"/>
      </a>
    </div>
    
    </div>
 
  )


}
