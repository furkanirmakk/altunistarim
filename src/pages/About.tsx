import React from "react";
import { useTranslation } from "react-i18next";
import HomeNavbar from "../components/Navbar/HomeNavbar";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      <div className=" py-20">
        <div className="container mx-auto px-4">
          {/* Başlık */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">
              {t("aboutpage.title")}
            </h2>
            <p className="text-lg text-gray-600 ">{t("aboutpage.intro")}</p>
          </div>

          {/* İçerik */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            {/* Sol Taraf - Metin */}
            <div className="flex flex-col justify-center bg-gray-100 p-4">
              <h3 className="text-center text-2xl font-semibold text-gray-800 mb-4">
                {t("aboutpage.whoWeAreTitle")}
              </h3>
              <p className="text-lg text-gray-600 mb-6 ml-10">
                {t("aboutpage.whoWeAreText")}
              </p>

              <p className="text-lg text-gray-600 ml-10">
                Sektördeki en iyi hizmeti sunan ve sürdürülebilir büyüme
                sağlayan bir şirket olmayı hedefliyoruz. Yenilikçi yaklaşımımız
                ve güçlü değerlerimizle geleceğe yön veriyoruz.
              </p>
            </div>

            {/* Sağ Taraf - Video */}
            <div className="flex justify-center items-center">
              <video
                src="../../assets/bicer-dover-video2.mp4" // Video dosyasının yolu
                className="rounded-lg shadow-lg w-full bg-gray-100"
                autoPlay
                loop
                muted
              />
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="mt-16 text-center  ">
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

export default About;
