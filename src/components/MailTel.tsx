import React from "react";
import Mail from "./Mail";
import Ara from "./Ara";

const MailTel = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* İletişim Bilgileri */}
        <div className="mt-16 text-center animate__animated animate__fadeIn">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Bize Ulaşın
          </h3>
          <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeIn animate__delay-2s">
            Herhangi bir sorunuz varsa, bizimle iletişime geçmekten çekinmeyin.
          </p>
          <div className="flex justify-center space-x-4">
            <Mail />
            <Ara />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailTel;
