import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoMdCall, IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="min-h-[143px] bg-[#5855E7] relative">
      <div className="flex justify-between items-center min-h-[143px] max-w-[1200px] mx-auto px-3">
        <a href="#">
          <img
            src="./logo.svg"
            alt="logo"
            className="max-lg:h-[100px] max-sm:h-[80px]"
          />
        </a>

        <nav>
          <ul className="flex gap-5 text-white font-medium max-lg:text-[15px] max-md:hidden">
            <li>
              <a
                href="#about"
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav1")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav2")}
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav3")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav4")}
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 max-md:gap-6">
          <div className="text-white flex items-center">
            <img src={t("flag")} alt="flag" className="h-[12px] mr-1" />
            <select
              onChange={changeLanguage}
              className="cursor-pointer bg-transparent text-white outline-none"
              defaultValue={i18n.language}
            >
              <option value="ru" className="text-black">
                RU
              </option>
              <option value="uz" className="text-black">
                UZ
              </option>
              <option value="en" className="text-black">
                EN
              </option>
            </select>
          </div>
          <a href="#footer">
            <button className="px-3 py-1 rounded-[5px] bg-white text-black font-medium cursor-pointer hover:bg-gray-300 duration-300 max-md:hidden">
              {t("navButton")}
            </button>
          </a>
          <a href="#footer">
            <IoMdCall className="text-[26px] text-white hover:text-gray-300 cursor-pointer duration-300 hidden max-md:block" />
          </a>
          <IoMdMenu
            className="text-[30px] text-white hover:text-gray-300 cursor-pointer duration-300 hidden max-md:block"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#5855E7] text-white flex flex-col items-center justify-center z-50 transition-all duration-300">
          <IoMdClose
            className="absolute top-5 right-5 text-[35px] cursor-pointer hover:text-gray-300 hover:rotate-180 duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
          <ul className="text-2xl space-y-6 text-center font-semibold">
            <li>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav1")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav2")}
              </a>
            </li>
            <li>
              <a
                href="#classes"
                onClick={() => setIsMenuOpen(false)}
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav3")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="relative before:absolute before:left-0 before:bottom-[-3px] before:h-[2px] before:bg-gray-300 before:w-[0%] hover:before:w-[100%] duration-300 before:duration-300"
              >
                {t("navbar.nav4")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
