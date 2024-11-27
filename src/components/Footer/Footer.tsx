import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate(); // React Router'ın useNavigate hook'u

  // Ürünlere tıklanırsa ilgili bölümüne kaydırma işlemi
  const handleProductClick = (productId: string) => {
    navigate("/"); // Home sayfasına yönlendir
    setTimeout(() => {
      const targetElement = document.getElementById(productId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
      }
    }, 0); // Kaydırmayı hemen gerçekleştiriyoruz
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Hakkımızda */}
          <div className="flex justify-center items-center h-full">
            <img
              src="/assets/logo-1.png"
              alt="Şirket Logosu"
              className="w-64 h-auto"
            />
          </div>

          {/* Bağlantılar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Ürünlerimiz */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ürünlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => handleProductClick("balya-makineleri")}
                >
                  Balya Makineleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => handleProductClick("patates-makineleri")}
                >
                  Patates Makineleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => handleProductClick("toprak-makineleri")}
                >
                  Toprak Hazırlama Makineleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline"
                  onClick={() => handleProductClick("yedek-parca")}
                >
                  Yedek Parça
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex justify-center sm:justify-start space-x-4 p-4">
              <a href="https://www.facebook.com/mehmet.gokce.5458" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://instagram.com/altunistarim?igshid=MzRlODBiNWFlZA==" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.google.com/maps/dir//altuni%C5%9F+tar%C4%B1m+makinalar%C4%B1/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x152a6e67498564d3:0x19f731ec0eb56074?sa=X&amp;ved=2ahUKEwiC__D804T_AhVGR_EDHcfID6IQ9Rd6BAhDEAQ" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </a>
              
              
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tüm Hakları Saklıdır.{" "}
            <span className="font-bold">Altuniş Tarım</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
