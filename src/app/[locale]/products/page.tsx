import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { topCategories, getSubCategoriesByParent } from "@/data/products";

export default function ProductsPage() {
  const t = useTranslations("products");
  const locale = useLocale() as "zh-TW" | "en";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        {t("title")}
      </h1>

      <div className="space-y-16">
        {topCategories.map((top) => {
          const subs = getSubCategoriesByParent(top.id);
          return (
            <section key={top.id}>
              <div className="bg-[#1a2035] rounded-xl p-8 mb-8 flex items-center gap-6 border border-gray-700/50">
                <span className="text-5xl">{top.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-accent-yellow">{top.name[locale]}</h2>
                  <p className="text-gray-400 mt-1">{top.description[locale]}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subs.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/${locale}/products/${top.id}/${sub.id}`}
                    className="group block bg-[#1a2035] border border-gray-700/50 rounded-xl overflow-hidden hover:border-accent-red transition-all duration-300"
                  >
                    <div className="bg-[#131829] p-6 text-center group-hover:bg-accent-red/20 transition-colors duration-300">
                      <span className="text-5xl block">{sub.icon}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-yellow transition-colors">
                        {sub.name[locale]}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {sub.description[locale]}
                      </p>
                      <span className="inline-block mt-3 text-accent-red font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        {t("viewDetail")} &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
