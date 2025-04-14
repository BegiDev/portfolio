"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "uz" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button onClick={toggleLanguage} variant={'ghost'} className="w-[38px] h-[38px] md:w-[45px] md:h-[45px] border-2 rounded-full flex items-center justify-center">
        {i18n.language === "en" ? "uz" : "en"}
    </Button>
  );
}
