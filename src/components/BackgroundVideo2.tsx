import React from "react";

const BackgroundVideo2 = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/bicer-dover-video2.mp4" // Video dosyasının yolu
        autoPlay
        loop
        muted
      />
      {/* Video üzerine yazıyı ekliyoruz */}
      <div
        className="absolute top-1/2   transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-6  rounded-md max-w-lg shadow-lg 
sm:left-1/2 sm:-translate-x-1/2 md:left-1/3 lg:left-1/4"
      >
        <h1 className="text-2xl text-center font-bold mb-4">Hakkımızda</h1>
        <p className="text-center text-sm sm:text-sm md:text-md lg:text-lg leading-relaxed">
          1983 yılında Nevşehir’de kurularak tornacılık sektöründe faaliyetine
          başlamıştır. Kısa zamanda çok hızlı bir gelişme kaydederek tarım
          makineleri alanına yönelip patates ekim ve söküm makinalarının
          üretimine başlamıştır. Sonradan ürün yelpazesini genişleterek Patoz
          Makinesi, Balya Makinesi, Römork, Ayçiçek ve Mısır tablası gibi
          ağırlıklı olarak harman-hasat grubunda kullanılmakta olan tarım
          makinelerinin üretimine başlamıştır. Bugün, profesyonel takımımız
          tarımsal ekipmanlar alanında 40 yıllık birikimi, sürekli gelişen ve
          ilerleyen performans ve üretimi ile 2000 m2 kapalı ve 8000 m2 açık
          alanda hizmet sunmaktadır.
          <br /> <br />
          Firmamız ISO 9001: 2015, ISO 14001: 2015, ISO/IEC 27001: 2013, ISO
          45001: 2018 Kalite Yönetim Sistemine sahip olup, ürün ve hizmetlerini
          güvence altına almıştır.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo2;
