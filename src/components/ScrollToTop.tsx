import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Sayfa en üstten başlasın
  }, [pathname]); // Her path değişiminde çalışır

  return null;
};

export default ScrollToTop;
