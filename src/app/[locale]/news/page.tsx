import { useTranslations, useLocale } from "next-intl";

interface NewsItem {
  id: string;
  date: string;
  title: { "zh-TW": string; en: string };
  summary: { "zh-TW": string; en: string };
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    date: "2025-04-01",
    title: {
      "zh-TW": "鼎陞企業網站全新改版上線",
      en: "Deing Sheng Enterprise Website Redesigned and Launched",
    },
    summary: {
      "zh-TW": "鼎陞企業全新官方網站正式上線，以嶄新面貌提供更優質的瀏覽體驗，歡迎各界先進蒞臨指教。",
      en: "The brand-new Deing Sheng Enterprise official website is now live, offering an enhanced browsing experience.",
    },
  },
  {
    id: "2",
    date: "2025-03-15",
    title: {
      "zh-TW": "新增商用設備產品線",
      en: "New Commercial Equipment Product Line Added",
    },
    summary: {
      "zh-TW": "鼎陞企業正式推出商用設備產品線，包含霜淇淋機、萬能蒸烤箱、自動烤腸機、自動飲料機、製冰機等多款專業設備。",
      en: "Deing Sheng Enterprise officially launches its commercial equipment product line.",
    },
  },
  {
    id: "3",
    date: "2023-05-23",
    title: {
      "zh-TW": "節能家電補助快把握！換新冰箱、新冷氣最高省萬元",
      en: "Energy-saving Appliance Subsidies — Save Up to NT$10,000",
    },
    summary: {
      "zh-TW": "政府推出節能家電補助方案，購買符合能效標準的冰箱、冷氣等家電可獲得最高3000元補助。",
      en: "The government has launched an energy-saving appliance subsidy program.",
    },
  },
];

export default function NewsPage() {
  const t = useTranslations("news");
  const locale = useLocale() as "zh-TW" | "en";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        {t("title")}
      </h1>

      <div className="space-y-6">
        {newsItems.map((item) => (
          <article
            key={item.id}
            className="bg-[#1a2035] border border-gray-700/50 rounded-xl p-6 hover:border-accent-red/30 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red" />
              <time className="text-sm text-accent-yellow font-mono">{item.date}</time>
            </div>
            <h2 className="text-lg font-bold text-white mb-3">
              {item.title[locale]}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.summary[locale]}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
