import React from "react";
import { Trans, useTranslation } from "react-i18next";
import AOS from "aos";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-3 min-h-[442px] overflow-hidden  flex justify-between max-md:justify-center items-center max-md:min-h-[442px]">
        <div data-aos="flip-up" className="w-[50%] max-md:w-[80%] max-sm:w-[100%] text-center p-10 max-sm:p-6">
          <h1 className="text-[36px] text-black font-semibold leading-[100%] max-lg:text-[32px]">
            <Trans
              i18nKey="heroTitle"
              components={[<span className="text-[#6347EB] font-bold" />]}
            />
          </h1>
          <p className="text-black text-[18px] mt-[25px]">
            {t("heroDescription")}
          </p>
          <div className="flex gap-4 mt-[35px] justify-center">
            <button className="w-[150px] h-[40px] rounded-[10px] bg-[#6347EB] text-white text-[20px] hover:border-[3px] hover:bg-transparent hover:border-[#6347EB] hover:text-black font-medium cursor-pointer duration-300">
              {t("heroButton1")}
            </button>
            <button className="w-[150px] h-[40px] border-[3px] border-[#6347EB] rounded-[10px] font-medium text-[19px] hover:bg-[#6347EB] hover:text-white duration-300 cursor-pointer ">
              {t("heroButton2")}
            </button>
          </div>
        </div>
        <div data-aos="flip-up" className="w-[50%] max-md:w-[100%] overflow-hidden flex items-end h-[442px] relative max-md:hidden">
          <img
            src="./people1.svg"
            alt="people"
            className=" w-full absolute z-20"
          />
          <p className="h-[400px] w-[400px] bg-gray-200 absolute z-0 top-1/3 left-1/2 transform -translate-x-1/3 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
