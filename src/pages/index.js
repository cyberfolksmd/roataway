import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MobileHeader from '@/components/Mobile/Header/MobileHeader'; 
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Определяем мобильное устройство или нет
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    checkIsMobile(); // Проверка при первой загрузке
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Динамический импорт страниц
  const DesktopPage = dynamic(() => import("./desktop"));
  const MobilePage = dynamic(() => import("./mobile"));

  return (
    <>
      {isMobile ? <MobilePage /> : <DesktopPage />}
    </>
  );
}