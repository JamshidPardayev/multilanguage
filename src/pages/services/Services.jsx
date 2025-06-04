import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#5855E7] py-[60px]" id="services"> 
      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="text-[36px] text-white text-center font-bold">
          {t("serviceName")}
        </h2>
        <div className="flex justify-between my-[40px] gap-x-3 gap-y-10 max-sm:flex-col">
          <div className="max-w-[261px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./serviceImg1.png"
              alt="servicesImg"
              className="flex justify-center mx-auto border-[5px] rounded-[50%]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("servicesCartTitle1")}
            </h3>
            <p className="text-[16px] font-normal mt-3">
              {t("servicesCartDesc1")}
            </p>
          </div>

          <div className="max-w-[375px] text-center text-white mx-auto">
            <img
              src="./serviceImg2.png"
              alt="servicesImg"
              className="flex justify-center mx-auto border-[5px] rounded-[50%]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("servicesCartTitle2")}
            </h3>
            <p className="text-[16px] font-medium mt-3">
              {t("servicesCartDesc2")}
            </p>
          </div>

          <div className="max-w-[288px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./serviceImg3.png"
              alt="servicesImg"
              className="flex justify-center mx-auto border-[5px] rounded-[50%]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("servicesCartTitle3")}
            </h3>
            <p className="text-[16px] font-medium mt-3">
              {t("servicesCartDesc3")}
            </p>
          </div>
        </div>
        <div className="flex justify-evenly gap-x-5 gap-y-10 max-sm:flex-col max-sm:justify-center">
          <div className="max-w-[354px] text-center text-white max-sm:mx-auto">
            <img
              src="./serviceImg4.png"
              alt="servicesImg"
              className="flex justify-center mx-auto border-[5px] rounded-[50%]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("servicesCartTitle4")}
            </h3>
            <p className="text-[16px] font-medium mt-3">
              {t("servicesCartDesc4")}
            </p>
          </div>

          <div className="max-w-[302px] text-center text-white max-sm:mx-auto">
            <img
              src="./serviceImg5.png"
              alt="servicesImg"
              className="flex justify-center mx-auto border-[5px] rounded-[50%]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("servicesCartTitle5")}
            </h3>
            <p className="text-[16px] font-medium mt-3">
              {t("servicesCartDesc5")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
