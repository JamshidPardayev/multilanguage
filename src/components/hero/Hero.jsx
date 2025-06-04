import { t } from "i18next";
import React from "react";
import { Trans } from "react-i18next";
const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-3 h-[442px] border overflow-hidden flex justify-between items-center">
      <div className="w-[50%]">
        <h1 className="text-[36px] text-black">
          <Trans
            i18nKey="heroTitle"
            components={[<span className="text-[#6347EB] font-bold" />]}
          />
        </h1>
        <p className="text-black mt-4">{t("heroDescription")}</p>
        <div className="flex gap-4 mt-6">
          <button>{t("heroButton1")}</button>
          <button>{t("heroButton2")}</button>
        </div>
      </div>
      <div className="w-[50%] flex items-end h-[442px] relative">
        <img src="./people1.svg" alt="people" className=" w-full  absolute z-20"/>
        <p className="h-[400px] w-[400px] bg-gray-200 absolute z-0 top-1/3 left-1/2 transform -translate-x-1/3 rounded-full"></p>

      </div>
    </div>
  );
};

export default Hero;
