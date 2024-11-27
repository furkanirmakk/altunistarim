import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";

const Contact: React.FC = () => {
  return (
    <div>
      <HomeNavbar />

      <div className="bg-white text-gray-900 min-h-screen py-16">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center">
          {/* Başlık ve İletişim Bilgileri */}
          <div className="text-center mb-12 max-w-2xl">
            <h2 className="text-4xl font-semibold mb-4">İletişim</h2>
            <p className="text-lg text-gray-600">
              Bize aşağıdaki bilgiler üzerinden ulaşabilirsiniz.
            </p>
          </div>

          {/* İletişim Bilgileri */}
          <div className="flex flex-col justify-center items-center mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                İletişim Bilgileri
              </h3>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-center space-x-3 justify-center">
                  <i className="fas fa-envelope w-5 h-5 text-gray-600"></i>
                  <span>
                    <strong>Email:</strong> altunistarim@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <i className="fas fa-phone-alt w-5 h-5 text-gray-600"></i>
                  <span>
                    <strong>Telefon:</strong> +90 532 264 9196
                  </span>
                </li>
                <li className="flex items-center space-x-3 justify-center">
                  <i className="fas fa-map-marker-alt w-5 h-5 text-gray-600"></i>
                  <span>
                    <strong>Adres:</strong> Acıgöl Organize Sanayi Bölgesi 1.
                    Cadde No:8 ACIGÖL/NEVŞEHİR
                  </span>
                </li>
              </ul>
            </div>
          </div>
    
          {/* Google Maps Haritası */}
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1560.148005158312!2d34.509217163599516!3d38.54999327191223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a0a75430b14c1%3A0xe439e41edb656fab!2zQWPEsWfDtmwgT3NiIE3DvGTDvHJsw7zEn8O8!5e0!3m2!1str!2str!4v1732579390172!5m2!1str!2str"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Bize Ulaşın
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Herhangi bir sorunuz varsa, bizimle iletişime geçmekten
              çekinmeyin.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:altunistarim@gmail.com"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all"
              >
                E-posta Gönder
              </a>
              <a
                href="tel:+905322649196"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-all"
              >
                Ara
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
