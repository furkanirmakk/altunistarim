import React from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import Product from "../components/Product/Product"; // Doğru yol


const Home: React.FC = () => {
  const products1 = [
    { id: 1, name: "Smart", imageUrl: "/assets/balya/5.png" },
    { id: 3, name: "Baler B", imageUrl: "/assets/balya/1.png" },
    { id: 4, name: "Baler T", imageUrl: "/assets/balya/3.png" },
    { id: 6, name: "Baler A", imageUrl: "/assets/yedek/yedekparca.jpg" },
    { id: 1, name: "Baler C", imageUrl: "/assets/balya/5.png" },
  ];
  const products2 = [
    { id: 1, name: "Balya Makineleri", imageUrl: "/assets/patates/4.png" },
    { id: 3, name: "Patates Makineleri", imageUrl: "/assets/patates/4.png" },
    { id: 3, name: "Patates Makineleri", imageUrl: "/assets/patates/4.png" },
    { id: 3, name: "Patates Makineleri", imageUrl: "/assets/patates/4.png" },
  ];
  const products3 = [
    { id: 1, name: "Hasat Tablası", imageUrl: "/assets/toprak/6.png" },
    { id: 3, name: "Patates Makineleri", imageUrl: "/assets/toprak/6.png" },
    { id: 3, name: "Patates Makineleri", imageUrl: "/assets/toprak/6.png" },
  ];
  const products4 = [
    { id: 1, name: "Elek", imageUrl: "/assets/yedek/ELEK.png" },
    { id: 3, name: "Kuyruk ", imageUrl: "/assets/yedek/Kuyruk Resim.png" },
    { id: 3, name: "Rotor", imageUrl: "/assets/yedek/ROTOR1.png" },
    { id: 3, name: "Yedek Parça", imageUrl: "/assets/yedek/yedekparca.jpg" },
  ];

  return (
    <div>
      <div
        className="bg-fixed bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url('/assets/bugday.jpg')", // Arka plan görseli
        }}
      >
        <HomeNavbar />
        <div className="flex flex-col items-center justify-center text-center text-black h-[calc(100vh-4rem)]">
          <h1 className="text-5xl font-bold">
            1983'Den Bu Yana Hizmetinizdeyiz
          </h1>
        </div>
      </div>
      <div id="balya-makineleri" className="text-center my-8 pt-20">
        <h1 className="text-3xl font-bold text-gray-800">Balya Makineleri</h1>
        <div className="w-64 h-1 bg-gray-800 mx-auto mt-2 rounded"></div>
      </div>
      <Product products={products1} />

      <div id="patates-makineleri" className="text-center my-8 pt-20">
        <h1 className="text-3xl font-bold text-gray-800">Patates Makineleri</h1>
        <div className="w-64 h-1 bg-gray-800 mx-auto mt-2 rounded"></div>
      </div>
      <Product products={products2} />

      <div id="toprak-makineleri" className="text-center my-8 pt-20">
        <h1 className="text-3xl font-bold text-gray-800">
          Toprak Hazırlama Makineleri
        </h1>
        <div className="w-64 h-1 bg-gray-800 mx-auto mt-2 rounded"></div>
      </div>
      <Product products={products3} />

      <div id="yedek-parca" className="text-center my-8 pt-20 ">
        <h1 className="text-3xl font-bold text-gray-800">Yedek Parça</h1>
        <div className="w-64 h-1 bg-gray-800 mx-auto mt-2 rounded"></div>
      </div>
      <Product products={products4} />
    </div>
  );
};

export default Home;
