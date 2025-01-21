import React from "react";
import { useTranslation } from "react-i18next";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import BackgroundVideo2 from "../components/BackgroundVideo2";
import MailTel from "../components/MailTel";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {/* Navbar */}
      <HomeNavbar />

      <div>
        <BackgroundVideo2 />
      </div>
      <MailTel />
      
    </div>
  );
};

export default About;
