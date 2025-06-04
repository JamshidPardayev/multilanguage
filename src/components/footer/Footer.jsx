import React from "react";
import { useTranslation } from "react-i18next";
import { IoLogoInstagram } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div id="footer" className="min-h-[160px] bg-[#5855E7]">
      <div className="max-w-[1200px] mx-auto px-3 py-7  flex justify-between gap-5 flex-wrap items-center min-h-[160px]">
        <img src="./logo.svg" alt="logo" />
        <div className="text-white">
          <p>{t("footerContact")}</p>
          <p>+998971970771</p>
          <p>+998970020771</p>
        </div>

        <div className="text-white">
          <p>{t("footerIcons")}</p>
          <div className="flex text-3xl gap-4 text-white mt-2">
            <PiTelegramLogo className="cursor-pointer hover:text-blue-300 duration-300" />
            <IoLogoInstagram className="cursor-pointer hover:text-blue-300 duration-300" />
            <LuFacebook className="cursor-pointer hover:text-blue-300 duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
