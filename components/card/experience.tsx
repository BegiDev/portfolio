'use client';

import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation('common');

  return (
    <div className="mt-[80px] space-y-6">
      <h1 className="text-4xl text-black dark:text-white font-söhne font-extrabold">
        {t("title")}
      </h1>

      <div className="bg-muted/50 dark:bg-muted rounded-2xl p-5 md:p-7 shadow-sm hover:shadow-md transition">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">{t("position")}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {t("period")}
            </p>
          </div>

          <Badge className="mt-3 md:mt-0 w-fit">{t("duration")}</Badge>
        </div>

        <ul className="list-disc pl-5 mt-4 text-gray-700 dark:text-gray-300 space-y-1 text-[15px] leading-relaxed">
          <li>{t("point1")}</li>
          <li>{t("point2")}</li>
          <li>{t("point3")}</li>
          <li>{t("point4")}</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
