import React from "react";
import { useTranslation } from "react-i18next";

const Class = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 py-[60px]" id="classes">
      <div className="max-w-[1200px] mx-auto px-3">
        <h2 className="text-[36px] text-black text-center font-bold">
          {t("classesName")}
        </h2>
        <div className="flex justify-between my-[40px] gap-x-3 gap-y-10 max-sm:flex-col">
          <div className="max-w-[310px] bg-[#5855E7] rounded-[15px] p-[20px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./classImg1.png"
              alt="classImg"
              className="flex justify-center mx-auto rounded-[6px]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("classesNumber1")}
            </h3>
            <p className="text-[16px] font-normal mt-3">{t("classesAge1")}</p>
            <p className="text-[16px] font-normal mt-3">{t("classesDesc1")}</p>
            <button className="bg-white text-[#6347EB] hover:bg-gray-300 duration-300 cursor-pointer px-4 py-1 rounded-[5px] font-medium mt-3">
              {t("classesButton")}
            </button>
          </div>
          <div className="max-w-[310px] bg-[#5855E7] rounded-[15px] p-[20px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./classImg2.png"
              alt="classImg"
              className="flex justify-center mx-auto rounded-[6px]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("classesNumber2")}
            </h3>
            <p className="text-[16px] font-normal mt-3">{t("classesAge2")}</p>
            <p className="text-[16px] font-normal mt-3">{t("classesDesc2")}</p>
            <button className="bg-white text-[#6347EB] hover:bg-gray-300 duration-300 cursor-pointer px-4 py-1 rounded-[5px] font-medium mt-3">
              {t("classesButton")}
            </button>
          </div>

          <div className="max-w-[310px] bg-[#5855E7] rounded-[15px] p-[20px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./classImg3.png"
              alt="classImg"
              className="flex justify-center mx-auto rounded-[6px]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("classesNumber3")}
            </h3>
            <p className="text-[16px] font-normal mt-3">{t("classesAge3")}</p>
            <p className="text-[16px] font-normal mt-3">{t("classesDesc3")}</p>
            <button className="bg-white text-[#6347EB] hover:bg-gray-300 duration-300 cursor-pointer px-4 py-1 rounded-[5px] font-medium mt-3">
              {t("classesButton")}
            </button>
          </div>
        </div>
        <div className="flex justify-evenly gap-x-5 gap-y-10 max-sm:flex-col max-sm:justify-center">
          <div className="max-w-[310px] bg-[#5855E7] rounded-[15px] p-[20px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./classImg4.png"
              alt="classImg"
              className="flex justify-center mx-auto rounded-[6px]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("classesNumber4")}
            </h3>
            <p className="text-[16px] font-normal mt-3">{t("classesAge4")}</p>
            <p className="text-[16px] font-normal mt-3">{t("classesDesc4")}</p>
            <button className="bg-white text-[#6347EB] hover:bg-gray-300 duration-300 cursor-pointer px-4 py-1 rounded-[5px] font-medium mt-3">
              {t("classesButton")}
            </button>
          </div>

          <div className="max-w-[310px] bg-[#5855E7] rounded-[15px] p-[20px] min-w-[190px] text-center text-white mx-auto">
            <img
              src="./classImg5.png"
              alt="classImg"
              className="flex justify-center mx-auto rounded-[6px]"
            />
            <h3 className="text-[22px] font-medium mt-4">
              {t("classesNumber5")}
            </h3>
            <p className="text-[16px] font-normal mt-3">{t("classesAge5")}</p>
            <p className="text-[16px] font-normal mt-3">{t("classesDesc5")}</p>
            <button className="bg-white text-[#6347EB] hover:bg-gray-300 duration-300 cursor-pointer px-4 py-1 rounded-[5px] font-medium mt-3">
              {t("classesButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
