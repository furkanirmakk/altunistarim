import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

interface DesktopMenuProps {
  activeLink: string;
  handleLinkClick: (link: string) => void;
  showSubMenu: boolean;
  toggleSubMenu: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  activeLink,
  handleLinkClick,
  showSubMenu,
  toggleSubMenu,
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const navigate = useNavigate(); // Navigate hook'u

  // Ürünler menüsüne tıklanırsa alt menüyü aç/kapat
  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen); // Alt menüyü tersine çevir
  };

  // Alt menü öğesine tıklanırsa menü kapanacak ve hedefe kaydıracak
  const handleSubMenuItemClick = (item: string) => {
    setIsSubMenuOpen(false); // Menü öğesi seçildikten sonra menü kapanacak
    handleLinkClick(item);

    if (item === "balyaMakineleri") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("balya-makineleri");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }

    if (item === "patatesMakineleri") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("patates-makineleri");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }

    if (item === "toprakMakineleri") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("toprak-makineleri");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }

    if (item === "yedekParca") {
      // Balya makineleri kısmına yönlendirme ve kaydırma işlemi
      navigate("/"); // Home sayfasına yönlendirme
      setTimeout(() => {
        const targetElement = document.getElementById("yedek-parca");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Yumuşak kaydırma
        }
      }, 0); // Yönlendirme sonrası kaydırma işlemi için küçük bir bekleme süresi
    }
    
  };

  return (
    <ul className="flex space-x-6">
      <li>
        <a
          href="/"
          className="hover:underline"
          onClick={() => handleLinkClick("home")}
        >
          Ana Sayfa
        </a>
      </li>
      <li>
        <a
          href="/about"
          className="hover:underline"
          onClick={() => handleLinkClick("about")}
        >
          Hakkımızda
        </a>
      </li>

      {/* Ürünlerimiz Linki */}
      <li className="relative">
        <a
          href="#products"
          className="hover:underline"
          onClick={(e) => {
            e.preventDefault(); // Linkin sayfayı yenilemesini engelliyoruz
            handleSubMenuToggle(); // Alt menüyü aç/kapat
          }}
        >
          Ürünlerimiz
        </a>

        {/* Alt Menü (Ürünler listesi) */}
        {isSubMenuOpen && (
          <ul className="absolute left-0 mt-2 bg-white shadow-lg p-2 space-y-2 text-black w-48 z-20">
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("balyaMakineleri")}
              >
                Balya Makineleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("patatesMakineleri")}
              >
                Patates Makineleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("toprakMakineleri")}
              >
                Toprak Hazırlama Makineleri
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600"
                onClick={() => handleSubMenuItemClick("yedekParca")}
              >
                Yedek Parçalar
              </a>
            </li>
          </ul>
        )}
      </li>

      <li>
        <a
          href="/contact"
          className="hover:underline"
          onClick={() => handleLinkClick("contact")}
        >
          İletişim
        </a>
      </li>
      <LanguageSwitcher />
    </ul>
  );
};

export default DesktopMenu;
