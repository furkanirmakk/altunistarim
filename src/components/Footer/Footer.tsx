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
    <footer className="bg-gray-800 text-white py-10">
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
                <a href="/" className="hover:underline hover:text-footer">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline hover:text-footer">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline hover:text-footer"
                >
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
                  className="hover:underline hover:text-footer"
                  onClick={() => handleProductClick("balya-makineleri")}
                >
                  Balya Makineleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-footer"
                  onClick={() => handleProductClick("patates-makineleri")}
                >
                  Patates Makineleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-footer"
                  onClick={() => handleProductClick("toprak-makineleri")}
                >
                  Toprak Hazırlama Makineleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:text-footer"
                  onClick={() => handleProductClick("yedek-parca")}
                >
                  Yedek Parça
                </a>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">Sosyal Medya</h3>
            <div className="flex justify-center sm:justify-start space-x-4 ">
              <section className="flex justify-center items-center">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.google.com/maps/dir//altuni%C5%9F+tar%C4%B1m+makinalar%C4%B1/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x152a6e67498564d3:0x19f731ec0eb56074?sa=X&amp;ved=2ahUKEwiC__D804T_AhVGR_EDHcfID6IQ9Rd6BAhDEAQ")
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.2em"
                    viewBox="0 0 48 48"
                    stroke-width="1"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5"
                  >
                    <path
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      fill="#FFC107"
                    ></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Google
                  </span>
                </button>
              </section>

              <section className="flex justify-center items-center">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://instagram.com/altunistarim?igshid=MzRlODBiNWFlZA==")
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#a21caf] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                    stroke-width="1"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Instagram
                  </span>
                </button>
              </section>

              <section className="flex justify-center items-center">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.facebook.com/mehmet.gokce.5458")
                  }
                  className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 448 512"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                  </svg>
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-400 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                    Facebook
                  </span>
                </button>
              </section>
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
