import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HomeNavbar from "../Navbar/HomeNavbar";

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  dimensions: string[];
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
      "Toplam uzunluk (mm) : 4000",
      "Toplam genişlik (mm) : 2000",
      "Ağırlık (kg) : 1000",
      "Devir sayısı (min-1): 450-550",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
      "Çalışma sistemi: Kayış kasnak",
    ],
  },
  {
    id: 2,
    name: "Baler B",
    description:
      "“Biçerdöver Arkası Balya Makinesi” BALER-B modeli, üç ipli prizmatik bir balya makinesi olarak tasarlanmıştır. Bu makine, buğday, arpa ve benzeri tahıl saplarını bir parçalayıcı üniteden geçirerek işler ve ardından bir ip bağlama ünitesiyle bağlayıp balya haline getirir. Makine, biçerdöverin arkasının alt kısmına monte edilerek biçerdöverle birlikte çalışır ve biçerdövere şase yardımıyla bağlanır. Saplar, sırasıyla helezonik toplama düzeni, bantlı toplama düzeni ve balya yapma ünitesine bant yardımıyla gönderilir. Balya odasının genişliği ve yüksekliği sabit olup, balyanın uzunluğu 400 ile 1800 mm arasında ayarlanabilir",
    images: ["/assets/balya/1.png", "/assets/balya/2.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 6200",
      "Toplam genişlik (mm) : 2600",
      "Ağırlık (kg) : 2700",
      "Devir sayısı (min-1): 450-550",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 3,
    name: "Baler T",
    description:
      "“Traktör Arkası Balya Makinesi” BALER-T modeli, üç ipli prizmatik bir balya makinesi olarak tasarlanmıştır. Bu makine, buğday, arpa ve benzeri tahıl saplarını bir parçalayıcı üniteden geçirerek işler ve ardından bir ip bağlama ünitesi ile bağlayıp balya haline getirir. Çeki demiri aracılığıyla traktöre bağlanan bu balya makinesi, traktörün kuyruk milinden aldığı güçle çalışır. 191 cm genişliğinde iç içe tırmıklara sahip olan bu makine, ortadan pistonlu bir yapıdadır. Traktörün tekerlek izi üzerinde çekilen makine, dar alanlarda yüksek manevra kabiliyetine sahiptir.",
    images: ["/assets/balya/1.png", "/assets/balya/2.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 4,
    name: "Baler A",
    description:
      "Baler A, kompakt tasarımıyla küçük ölçekli çiftlikler için uygundur.",
    images: ["/assets/yedek/yedekparca.jpg", "/assets/yedek/another-image.jpg"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 5,
    name: "Baler C",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 6,
    name: "Patates Hasat Makinesi",
    description:
      "Traktörün üç nokta askı düzenine asılan makine, kuyruk milinden tahrik edilmektedir. Zincir palet üzerine 4 ayrı palet şeklinde tasarlanmıştır. Kazıcı bıçakların toprağa dalarak üzerine aldığı yumru ve toprak kütlesi eleme düzenine aktarılıp, yumrular topraktan temizlenir ve makinenin arkasındaki elenmiş toprak üzerine bırakılır.",
    images: ["/assets/patates/4.png", "/assets/balya/4.png"],
    dimensions: [
      "Toplam uzunluk (mm): 4000",
      "Toplam genişlik (mm): 3200",
      "Traktör Gücü (hp): 110",
      "Çalışma sistemi: Şaft",
      "Bıçak derecesi:25",
      "İş derinliği: Ayarlanabilir",
    ],
  },
  {
    id: 7,
    name: "pat2",
    description: "Baler B, modern tarım için ideal bir çözümdür.",
    images: ["/assets/balya/1.png", "/assets/balya/2.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 8,
    name: "pat3",
    description: "Baler T, üstün performans ve kolay kullanım sağlar.",
    images: ["/assets/balya/3.png", "/assets/balya/4.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 9,
    name: "pat4",
    description:
      "Baler A, kompakt tasarımıyla küçük ölçekli çiftlikler için uygundur.",
    images: ["/assets/yedek/yedekparca.jpg", "/assets/yedek/another-image.jpg"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 10,
    name: "AYÇİÇEK HASAT TABLASI",
    description:
      "Üstün performansını bütün ayçiçeği çeşitlerinde göstermekte ve Ayçiçeği sapları ile başlıklarının boyutuna bakılmaksızın bütün ürünlerde sorunsuz bir şekilde kullanılmaktadır. Ayçiçeği Hasat Tablası performansı yüksek tutularak, ürünleri kolay ve kayıpsız bir şekilde tarladan kaldırması amaçlamaktadır. Fabrikamızda,6,7 ve 8 sıralı Ayçiçek Hasat Tablası üretimi bulunmaktadır.",
    images: ["/assets/toprak/6.png", "/assets/balya/6.png"],
    dimensions: [
      "Düşük ürün kaybı, yüksek verim",
      "Kolay kullanım",
      "Tüm biçerlere uyumludur",
      "Hiçbir aparata ihtiyaç duymadan hızlı kurulum",
      "Yatık ve düşük verimli bitkilerde dahi kolay ve zengin hasat imkanı",
    ],
  },
  {
    id: 11,
    name: "toprak2",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 12,
    name: "toprak3",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 13,
    name: "yedek1",
    description:
      "Baler A, kompakt tasarımıyla küçük ölçekli çiftlikler için uygundur.",
    images: ["/assets/yedek/yedekparca.jpg", "/assets/yedek/another-image.jpg"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 14,
    name: "yedek2",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  {
    id: 15,
    name: "yedek3",
    description: "Baler C, yüksek kapasiteli işler için tasarlanmıştır.",
    images: ["/assets/balya/5.png", "/assets/balya/6.png"],
    dimensions: [
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
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
      "Toplam uzunluk (mm) : 5000",
      "Toplam genişlik (mm) : 2200",
      "Ağırlık (kg) : 2100",
      "Traktör Gücü (hp): 50",
      "Tipi: 3 İpli",
      "Balya Ağırlığı (kg):25",
      "Balya Boyu: 400-1800 arası",
    ],
  },
  // Diğer ürünler...
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Ürün bulunamadı!</h1>
      </div>
    );
  }

  const goToPrevious = () => {
    setSelectedImageIndex(
      selectedImageIndex === 0
        ? product.images.length - 1
        : selectedImageIndex - 1
    );
  };

  const goToNext = () => {
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
              className="w-full h-auto object-cover rounded shadow"
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

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 p-6 mt-8 bg-gray-100 ">
          {/* Ürün açıklaması */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              Ürün Hakkında
            </h2>
            <p className="text-lg text-center text-gray-600 mt-6">
              {product.description}
            </p>
          </div>
          {/* Genel Ölçüler */}
          <div className="pl-0 sm:pl-48">
            <h2 className="text-2xl font-semibold text-gray-800 sm:text-left text-center sm:pl-8">
              Genel Ölçüler
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-4 ">
              {product.dimensions.map((dimension, index) => (
                <li key={index}>{dimension}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
