import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";

const About: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Başlık */}
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600">
              Biz, kaliteli hizmet ve müşteri memnuniyetini ön planda tutarak
              sektördeki en iyilerden biri olmayı hedefliyoruz.
            </p>
          </div>

          {/* İçerik */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Taraf - Metin */}
            <div className="flex flex-col justify-center">
              <h3 className="text-center text-2xl font-semibold text-gray-800 mb-4">
                Biz Kimiz ?
              </h3>
              <p className="text-lg text-gray-600 mb-6 ml-10">
                1983 yılında Nevşehir’de kurularak tornacılık sektöründe
                faaliyetine başlamıştır. Kısa zamanda çok hızlı bir gelişme
                kaydederek tarım makineleri alanına yönelip patates ekim ve
                söküm makinalarının üretimine başlamıştır. Sonradan ürün
                yelpazesini genişleterek Patoz Makinesi, Balya Makinesi, Römork,
                Ayçiçek ve Mısır tablası gibi ağırlıklı olarak harman-hasat
                grubunda kullanılmakta olan tarım makinelerinin üretimine
                başlamıştır. Bugün, profesyonel takımımız tarımsal ekipmanlar
                alanında 40 yıllık birikimi, sürekli gelişen ve ilerleyen
                performans ve üretimi ile 2000 m2 kapalı, 8000 m2 açık alanda
                hizmet sunmaktadır. Firmamız ISO 9001:2015, ISO 14001:2015,
                ISO/IEC 27001:2013, ISO 45001:2018 Kalite Yönetim Sistemine
                sahip olup, ürün ve hizmetlerini güvence altına almıştır.
              </p>
              
              <p className="text-lg text-gray-600 ml-10">
                Sektördeki en iyi hizmeti sunan ve sürdürülebilir büyüme
                sağlayan bir şirket olmayı hedefliyoruz. Yenilikçi yaklaşımımız
                ve güçlü değerlerimizle geleceğe yön veriyoruz.
              </p>
            </div>

            {/* Sağ Taraf - Görsel */}
            <div className="flex justify-center items-center">
              <img
                src="/assets/balya/5.png"
                alt="Hakkımızda Görseli"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Bize Ulaşın
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Herhangi bir sorunuz varsa, bizimle iletişime geçmekten
              çekinmeyin.
            </p>
            <a
              href="mailto:altunistarim@gmail.com"
              className="bg-gray-800 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all"
            >
              E-posta Gönder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
