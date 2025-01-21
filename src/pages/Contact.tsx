import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import MailTel from "../components/MailTel";

const Contact: React.FC = () => {
  return (
    <div>
      <HomeNavbar />

      <div className="bg-white w-full min-h-screen py-32 ">
        <div className="container mx-auto px-4 pt-2 flex flex-col md:flex-row justify-center items-center">
          {/* Sol Kısım: İletişim Bilgileri */}
          <div className="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-full md:w-1/2 h-[500px] bg-gradient-to-r from-gray-900 via-gray-600 to-[#D89A45] rounded-xl">
            <div className="group-hover:-top-3 bg-transparent -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:top-60 bg-transparent top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:-left-12 bg-transparent top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
            <div className="group-hover:-top-44 bg-transparent top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
            <div className="group-hover:left-44 bg-transparent top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
            <div className="group-hover:-left-2 bg-transparent -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
            <div className="group-hover:top-44 bg-transparent top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
            <div className="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap-2 flex justify-center">
              <div className="text-center mb-8">
                <span className="text-neutral-50 text-center font-bold text-xl italic">
                  İletişim
                </span>
                <p className="text-neutral-300 text-center">
                  Bize aşağıdaki bilgiler üzerinden ulaşabilirsiniz.
                </p>
              </div>

              <div className="text-center mb-8">
                <ul className="space-y-6 text-lg md:text-xl text-neutral-300 opacity-90">
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-envelope text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      altunistarim@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-phone-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      +90 532 264 9196
                    </span>
                  </li>
                  <li className="flex items-center space-x-4 justify-center group transition-all duration-300">
                    <i className="fas fa-map-marker-alt text-3xl sm:text-4xl md:text-5xl w-10 h-10 text-neutral-50 transition-all duration-300"></i>
                    <span className="text-sm sm:text-xl md:text-2xl">
                      Acıgöl Organize Sanayi Bölgesi 1. Cadde No:8
                      ACIGÖL/NEVŞEHİR
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sağ Kısım: Harita */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center">
            <div className="w-10/12 h-[500px] bg-gradient-to-r from-gray-900 via-gray-600 to-[#D89A45] rounded-xl shadow-lg p-4">
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
      </div>

      <div>
        <MailTel />
      </div>
    </div>
  );
};

export default Contact;
