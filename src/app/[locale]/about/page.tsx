import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {t("title")}
        </h1>
        <p className="text-accent-yellow font-semibold text-lg">{t("companyName")}</p>
        <p className="text-gray-500 mt-1">{t("established")}</p>
      </div>

      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-[#1a2035] rounded-xl p-8 md:p-12 border border-gray-700/50">
          <p className="text-gray-300 leading-relaxed text-lg">{t("intro")}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-1 h-8 bg-accent-red rounded-full" />
          {t("philosophy")}
        </h2>
        <div className="bg-[#1a2035] border-l-4 border-accent-yellow rounded-r-xl p-6">
          <p className="text-gray-300 text-lg italic">{t("philosophyContent")}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-1 h-8 bg-accent-red rounded-full" />
          {t("offices")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a2035] border border-gray-700/50 rounded-xl p-6 hover:border-accent-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent-red text-white text-xs font-bold px-2 py-1 rounded">HQ</span>
              <h3 className="text-lg font-bold text-white">{t("headquarters")}</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-accent-yellow mt-0.5">&#9679;</span>
                {t("headquartersAddress")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-yellow mt-0.5">&#9679;</span>
                TEL: {t("headquartersTel")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-yellow mt-0.5">&#9679;</span>
                FAX: {t("headquartersFax")}
              </li>
            </ul>
          </div>
          <div className="bg-[#1a2035] border border-gray-700/50 rounded-xl p-6 hover:border-accent-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-accent-yellow text-gray-900 text-xs font-bold px-2 py-1 rounded">CN</span>
              <h3 className="text-lg font-bold text-white">{t("shanghaiOffice")}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-3">{t("shanghaiName")}</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-accent-yellow mt-0.5">&#9679;</span>
                {t("shanghaiAddress")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-yellow mt-0.5">&#9679;</span>
                TEL: {t("shanghaiTel")}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
