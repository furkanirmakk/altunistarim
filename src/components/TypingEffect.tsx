import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState(""); // Ekranda görünen metin
  const fullText = "19983'Den Bu Yana Hizmetinizdeyiz"; // Tam metin
  const typingSpeed = 100; // Harf başına milisaniye

  useEffect(() => {
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(currentIndex)); // Metni doğru ekle
        currentIndex++;
      } else {
        clearInterval(typingInterval); // Yazma tamamlanınca durdur
      }
    };

    const typingInterval = setInterval(type, typingSpeed);
    return () => clearInterval(typingInterval); // Temizleme işlemi
  }, [fullText]);

  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-black -translate-y-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-press-start bg-white bg-opacity-70 px-4 py-2 rounded">
        {text}
      </h1>
    </div>
  );
};

export default TypingEffect;
