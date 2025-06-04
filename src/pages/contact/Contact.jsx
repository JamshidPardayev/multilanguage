import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div id="contact" className="bg-gray-100 p-10 max-md:px-3">
      <h2 className="text-[36px] text-black text-center font-bold">
        {t("contactName")}
      </h2>
      <div className="max-w-[1200px] mx-auto mt-10 bg-[#5855E7] p-[50px] max-md:p-4 rounded-2xl text-white flex justify-between gap-5 max-sm:flex-col">
        <div>
          <h3 className="text-[34px] font-medium">{t("contactTitle")}</h3>
          <p className="flex  items-center gap-2 mt-3"><p className="w-[20px] h-[20px] rounded-[3px] bg-[#A23AC1]"></p>{t("contactAddress")}</p>
          <p className="flex  items-center gap-2 mt-3"><p className="w-[20px] h-[20px] rounded-[3px] bg-[#A23AC1]"></p>+998970020771</p>
          <p className="flex  items-center gap-2 mt-3"><p className="w-[20px] h-[20px] rounded-[3px] bg-[#A23AC1]"></p>{t("contactNumber")}</p>
          <img src="school.png" alt="schoolImg" className="w-[450px] h-[338px] mt-6"/>
        </div>
        <div>
          <h3 className="text-[36px] text-white font-bold">{t("contactTitle1")}</h3>
          <p className="py-6">{t("contactDesc")}</p>
          <form action="" className="flex flex-col gap-y-[25px]">
            <input type="text" className="h-[45px] text-gray-900 px-3 bg-white rounded-[5px] outline-none" placeholder={t("contactNamePl")}/>
            <input type="text" className="h-[45px] text-gray-900 px-3 bg-white rounded-[5px] outline-none"  placeholder={t("contactSurnamePl")}/>
            <textarea name="" id="" className="h-[200px] text-gray-900 p-3 bg-white rounded-[5px] outline-none"  placeholder={t("contactNmPl")}></textarea>
            <button className="bg-white text-black h-[45px] rounded-[10px] font-bold hover:bg-gray-300 duration-300 cursor-pointer">{t("contactButton")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
