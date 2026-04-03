"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const tFooter = useTranslations("footer");

  const inputClass = "w-full bg-[#131829] border border-gray-700/50 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 focus:ring-2 focus:ring-accent-red focus:border-accent-red outline-none transition";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        {t("title")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-6">{t("formTitle")}</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{t("company")}</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{t("name")} <span className="text-accent-red">*</span></label>
                <input type="text" required className={inputClass} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{t("country")}</label>
                <input type="text" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{t("email")} <span className="text-accent-red">*</span></label>
                <input type="email" required className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t("address")}</label>
              <input type="text" className={inputClass} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{t("phone")}</label>
                <input type="tel" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">{t("fax")}</label>
                <input type="text" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t("subject")} <span className="text-accent-red">*</span></label>
              <input type="text" required className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">{t("message")} <span className="text-accent-red">*</span></label>
              <textarea rows={5} required className={`${inputClass} resize-y`} />
            </div>
            <button type="submit" className="bg-accent-red hover:bg-accent-red-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors">
              {t("submit")}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-6">{t("info")}</h2>
          <div className="bg-[#1a2035] rounded-xl p-6 space-y-4 border border-gray-700/50">
            <div>
              <h3 className="font-semibold text-accent-yellow text-sm mb-1">Email</h3>
              <a href={`mailto:${tFooter("email")}`} className="text-gray-300 hover:text-accent-yellow text-sm transition-colors">
                {tFooter("email")}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-accent-yellow text-sm mb-1">TEL</h3>
              <p className="text-gray-400 text-sm">{tFooter("tel")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-yellow text-sm mb-1">FAX</h3>
              <p className="text-gray-400 text-sm">{tFooter("fax")}</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent-yellow text-sm mb-1">Address</h3>
              <p className="text-gray-400 text-sm">{tFooter("address")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
