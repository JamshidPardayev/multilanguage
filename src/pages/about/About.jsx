import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos"
const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      id="about"
      className="max-w-[1200px] mx-auto px-3 py-[60px] flex justify-between gap-4 max-md:flex-col"
    >
      <h2 className="text-[36px] font-semibold text-center hidden max-md:block">
        {t("aboutTitle")}
      </h2>

      <div
        data-aos="zoom-in"
        className="w-[50%] m-3 max-md:w-[80%] max-sm:w-[100%] max-md:mx-auto"
      >
        <img
          src="./school.png"
          alt="school"
          className="shadow-[0px_2px_4px_10px_#dbdbdb] w-full h-full"
        />
      </div>
      <div
        data-aos="zoom-in"
        className="w-[50%]  max-md:w-[80%] max-md:mx-auto max-sm:w-[100%]"
      >
        <h2 className="text-[36px] font-semibold max-md:hidden">
          {t("aboutTitle")}
        </h2>
        <p className="text-[20px] max-lg:text-[18px] mt-5">
          {t("aboutDescription")}
        </p>
        <p className="text-[20px] max-lg:text-[18px] mt-5">
          {t("aboutSection")}
        </p>
      </div>
    </div>
  );
};

export default About;
