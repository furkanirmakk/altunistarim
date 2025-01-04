import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";

const Contact: React.FC = () => {
  return (
    <div>
      <HomeNavbar />

      <div className="bg-white text-gray-900 min-h-screen py-16">
        <div className="container mx-auto px-4 pt-2 flex flex-col md:flex-row justify-center items-center">
          {/* Sol Kısım: İletişim Bilgileri */}
          <div className="w-full h-[500px] md:w-1/3 px-6 py-8 bg-gradient-to-r from-[#A8782E] via-[#D1A54C] to-[#D89A45] rounded-xl shadow-lg">
      <div className="text-center mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-semibold text-[#F8D89A] mb-6 animate__animated animate__fadeIn animate__delay-1s">
          İletişim
        </h2>
        <p className="text-lg md:text-xl text-[#F1E0A3] opacity-90 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Bize aşağıdaki bilgiler üzerinden ulaşabilirsiniz.
        </p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#F8D89A] mb-6 animate__animated animate__fadeIn animate__delay-3s">
          İletişim Bilgileri
        </h3>
        <ul className="space-y-6 text-lg md:text-xl text-[#F1E0A3] opacity-90">
          <li className="flex items-center space-x-4 justify-center group hover:text-yellow-400 transition-all duration-300">
            <i className="fas fa-envelope text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-[#F8D89A] group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300"></i>
            <span className="text-sm sm:text-xl md:text-2xl">
              <strong>Email:</strong> altunistarim@gmail.com
            </span>
          </li>
          <li className="flex items-center space-x-4 justify-center group hover:text-yellow-400 transition-all duration-300">
            <i className="fas fa-phone-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-[#F8D89A] group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300"></i>
            <span className="text-sm sm:text-xl md:text-2xl">
              <strong>Telefon:</strong> +90 532 264 9196
            </span>
          </li>
          <li className="flex items-center space-x-4 justify-center group hover:text-yellow-400 transition-all duration-300">
            <i className="fas fa-map-marker-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-[#F8D89A] group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-300"></i>
            <span className="text-sm sm:text-xl md:text-2xl">
              <strong>Adres:</strong> Acıgöl Organize Sanayi Bölgesi 1. Cadde
              No:8 ACIGÖL/NEVŞEHİR
            </span>
          </li>
        </ul>
      </div>
    </div>

          {/* Sağ Kısım: Harita */}
          <div className="w-full md:w-2/3 mb-8 md:mb-0 flex justify-center items-center">
  <div className="w-10/12 h-[500px] bg-gradient-to-r from-[#A8782E] via-[#D1A54C] to-[#D89A45] rounded-xl shadow-lg p-4">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.148005158312!2d34.509217163599516!3d38.54999327191223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a0a75430b14c1%3A0xe439e41edb656fab!2zQWPEsWfDtmwgT3NiIE3DvGTDvHJsw7zEn8O8!5e0!3m2!1str!2str!4v1732579390172!5m2!1str!2str"
      width="100%"
      height="100%"
      allowFullScreen={true}
      loading="lazy"
      title="Google Maps"
      className="rounded-xl shadow-xl"
    ></iframe>
  </div>
</div>
        </div>


        
        <div>
          <MailTel />
        </div>
      </div>
    </div>
  );
};

export default Contact;
