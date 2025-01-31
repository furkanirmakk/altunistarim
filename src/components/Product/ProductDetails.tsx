import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  dimensions: { name: string; value: string }[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart",
    description:
      "‘’Biçerdöver montajlı askılı balya makinesi’’ SMART biçerdöver ile biçilen buğday, arpa gibi hayvan yemi olarak kullanılan hububat saplarının biçildiği sırada, tarlaya dökülmeden direkt olarak makinenin sap havuzu dökülmektedir. Bu sapların aşağı doğru bir yaba yardımı ile içine bastırıldığı bir balya tüneli ve tünel içerisinde bulunan sap itici ile sıkıştırılarak balya haline getirilmesi sağlanmaktadır.",
    images: [
      "/assets/balya/5.png",
      "/assets/balya/1.png",
      "/assets/yedek/ELEK.png",
      "/assets/yedek/ROTOR1.png",
    ],
    dimensions: [
      { name: "Toplam uzunluk", value: "4000 mm" },
      { name: "Toplam genişlik", value: "2000 mm" },
      { name: "Ağırlık", value: "1000 kg" },
      { name: "Devir sayısı", value: "450-550 min-1" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
      { name: "Çalışma sistemi", value: "Kayış kasnak" },
    ],
  },
  {
    id: 2,
    name: "Baler B",
    description:
      "“Biçerdöver Arkası Balya Makinesi” BALER-B modeli, üç ipli prizmatik bir balya makinesi olarak tasarlanmıştır. Bu makine, buğday, arpa ve benzeri tahıl saplarını bir parçalayıcı üniteden geçirerek işler ve ardından bir ip bağlama ünitesiyle bağlayıp balya haline getirir. Makine, biçerdöverin arkasının alt kısmına monte edilerek biçerdöverle birlikte çalışır ve biçerdövere şase yardımıyla bağlanır. Saplar, sırasıyla helezonik toplama düzeni, bantlı toplama düzeni ve balya yapma ünitesine bant yardımıyla gönderilir. Balya odasının genişliği ve yüksekliği sabit olup, balyanın uzunluğu 400 ile 1800 mm arasında ayarlanabilir",
    images: ["/assets/balya/1.png", "/assets/balya/2.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "6200 mm" },
      { name: "Toplam genişlik", value: "2600 mm" },
      { name: "Ağırlık", value: "2700 kg" },
      { name: "Devir sayısı", value: "450-550 min-1" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 3,
    name: "Baler T",
    description:
      "“Traktör Arkası Balya Makinesi” BALER-T modeli, üç ipli prizmatik bir balya makinesi olarak tasarlanmıştır. Bu makine, buğday, arpa ve benzeri tahıl saplarını bir parçalayıcı üniteden geçirerek işler ve ardından bir ip bağlama ünitesi ile bağlayıp balya haline getirir. Çeki demiri aracılığıyla traktöre bağlanan bu balya makinesi, traktörün kuyruk milinden aldığı güçle çalışır. 191 cm genişliğinde iç içe tırmıklara sahip olan bu makine, ortadan pistonlu bir yapıdadır. Traktörün tekerlek izi üzerinde çekilen makine, dar alanlarda yüksek manevra kabiliyetine sahiptir.",
    images: ["/assets/balya/1.png", "/assets/balya/2.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000 mm" },
      { name: "Toplam genişlik", value: "2200 mm" },
      { name: "Ağırlık", value: "2100 kg" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 4,
    name: "Baler A",
    description:
      "Baler A, kompakt tasarımıyla küçük ölçekli çiftlikler için uygundur.",
    images: ["/assets/yedek/yedekparca.jpg", "/assets/yedek/another-image.jpg"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000 mm" },
      { name: "Toplam genişlik", value: "2200 mm" },
      { name: "Ağırlık", value: "2100 kg" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 5,
    name: "Baler C",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000 mm" },
      { name: "Toplam genişlik", value: "2200 mm" },
      { name: "Ağırlık", value: "2100 kg" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 6,
    name: "Patates Hasat Makinesi",
    description:
      "Traktörün üç nokta askı düzenine asılan makine, kuyruk milinden tahrik edilmektedir. Zincir palet üzerine 4 ayrı palet şeklinde tasarlanmıştır. Kazıcı bıçakların toprağa dalarak üzerine aldığı yumru ve toprak kütlesi eleme düzenine aktarılıp, yumrular topraktan temizlenir ve makinenin arkasındaki elenmiş toprak üzerine bırakılır.",
    images: ["/assets/patates/4.png", "/assets/balya/4.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "4000 mm" },
      { name: "Toplam genişlik", value: "3200 mm" },
      { name: "Traktör Gücü", value: "110 hp" },
      { name: "Çalışma sistemi", value: "Şaft" },
      { name: "Bıçak derecesi", value: "25" },
      { name: "İş derinliği", value: "Ayarlanabilir" },
    ],
  },
  {
    id: 7,
    name: "pat2",
    description: "Baler B, modern tarım için ideal bir çözümdür.",
    images: ["/assets/balya/1.png", "/assets/balya/2.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 8,
    name: "pat3",
    description: "Baler T, üstün performans ve kolay kullanım sağlar.",
    images: ["/assets/balya/3.png", "/assets/balya/4.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 9,
    name: "pat4",
    description:
      "Baler A, kompakt tasarımıyla küçük ölçekli çiftlikler için uygundur.",
    images: ["/assets/yedek/yedekparca.jpg", "/assets/yedek/another-image.jpg"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 10,
    name: "AYÇİÇEK HASAT TABLASI",
    description:
      "Üstün performansını bütün ayçiçeği çeşitlerinde göstermekte ve Ayçiçeği sapları ile başlıklarının boyutuna bakılmaksızın bütün ürünlerde sorunsuz bir şekilde kullanılmaktadır. Ayçiçeği Hasat Tablası performansı yüksek tutularak, ürünleri kolay ve kayıpsız bir şekilde tarladan kaldırması amaçlamaktadır. Fabrikamızda,6,7 ve 8 sıralı Ayçiçek Hasat Tablası üretimi bulunmaktadır.",
    images: ["/assets/toprak/6.png", "/assets/balya/6.png"],
    dimensions: [
      { name: "Düşük ürün kaybı", value: "yüksek verim" },
      { name: "Kolay kullanım", value: "" },
      { name: "Tüm biçerlere uyumludur", value: "" },
      { name: "Hiçbir aparata ihtiyaç duymadan hızlı kurulum", value: "" },
      {
        name: "Yatık ve düşük verimli bitkilerde dahi kolay ve zengin hasat imkanı",
        value: "",
      },
    ],
  },
  {
    id: 11,
    name: "toprak2",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 12,
    name: "toprak3",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 13,
    name: "yedek1",
    description:
      "Baler A, kompakt tasarımıyla küçük ölçekli çiftlikler için uygundur.",
    images: ["/assets/yedek/yedekparca.jpg", "/assets/yedek/another-image.jpg"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 14,
    name: "yedek2",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 15,
    name: "yedek3",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000" },
      { name: "Toplam genişlik", value: "2200" },
      { name: "Ağırlık", value: "2100" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  {
    id: 16,
    name: "yedek4",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: [
      "/assets/balya/5.png",
      "/assets/balya/3.png",
      "/assets/balya/5.png",
      "/assets/balya/3.png",
    ],
    dimensions: [
      { name: "Toplam uzunluk", value: "5000 mm" },
      { name: "Toplam genişlik", value: "2200 mm" },
      { name: "Ağırlık", value: "2100 kg" },
      { name: "Traktör Gücü", value: "50 hp" },
      { name: "Tipi", value: "3 İpli" },
      { name: "Balya Ağırlığı", value: "25 kg" },
      { name: "Balya Boyu", value: "400-1800 arası" },
    ],
  },
  // Diğer ürünler...
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [animationClass, setAnimationClass] = useState<string>("");

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Ürün bulunamadı!</h1>
      </div>
    );
  }

  const goToPrevious = () => {
    setAnimationClass("image-prev"); // Soldan sağa kayma animasyonu
    setSelectedImageIndex(
      selectedImageIndex === 0
        ? product.images.length - 1
        : selectedImageIndex - 1
    );
  };

  const goToNext = () => {
    setAnimationClass("image-next"); // Sağdan sola kayma animasyonu
    setSelectedImageIndex(
      selectedImageIndex === product.images.length - 1
        ? 0
        : selectedImageIndex + 1
    );
  };

  return (
    <div>
      <HomeNavbar />
      <div className="p-4 sm:p-8 lg:p-16">
        <div className="flex items-center justify-center">
          <div className="w-32 h-1 bg-gray-800 ml-4 rounded"></div>
          <h1 className="text-4xl p-16 text-center font-bold text-gray-800 ">
            {product.name}
          </h1>
          <div className="w-32 h-1 bg-gray-800 mr-4 rounded"></div>
        </div>

        {/* Slayt gösterisi kısmı */}
        <div className="relative w-[100%] sm:w-[85%] md:w-[70%] xl:w-[60%] mx-auto">
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border-2 border-gray-600">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className={`w-full h-auto object-cover rounded shadow image-transition ${animationClass}`}
              onAnimationEnd={() => setAnimationClass("")} // Animasyon tamamlandığında sınıfı temizle
            />

            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
            >
              &#10094;
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-6 mt-8 bg-gradient-to-r from-[#A8782E] via-[#D1A54C] to-[#D89A45] rounded-xl shadow-lg">
          
          {/* Ürün açıklaması */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ürün Hakkında
            </h2>
            <p className="text-lg text-gray-800 mt-6 max-w-lg">
              {product.description}
            </p>
          </div>

          {/* Genel Ölçüler */}

          <div className="pl-0 sm:pl-48">
            <h2 className="text-2xl font-semibold text-gray-800 sm:text-left text-center sm:pl-8">
              Genel Ölçüler
            </h2>

            {/* Tablo Başlıkları ve Veriler */}
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full table-auto bg-transparent border-collapse">
                <thead>
                  <tr className="text-left border-b-2 border-gray-300">
                    <th className="px-4 py-2 text-lg font-semibold text-gray-800">
                      Ölçü
                    </th>
                    <th className="px-4 py-2 text-lg font-semibold text-gray-800">
                      Değer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.dimensions.map((dimension, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="px-4 py-2 text-gray-800">
                        {dimension.name}
                      </td>
                      <td className="px-4 py-2 text-gray-800">
                        {dimension.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
