import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { topCategories, getSubCategoriesByParent } from "@/data/products";
import HeroBanner from "@/components/HeroBanner";
import WorldMap from "@/components/WorldMap";

export default function HomePage() {
  const tHome = useTranslations("home");
  const tHero = useTranslations("hero");
  const locale = useLocale() as "zh-TW" | "en";

  return (
    <>
      {/* Hero Banner Carousel */}
      <HeroBanner />

      {/* Service Regions — World Map */}
      <section className="py-14 bg-[#0f1423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-white mb-10">
            {tHome("regionsTitle")}
          </h2>
          <WorldMap />
        </div>
      </section>

      {/* About Summary */}
      <section className="py-14 bg-[#131829]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {tHome("aboutTitle")}
          </h2>
          <p className="text-gray-400 leading-relaxed text-base mb-8">
            {tHome("aboutSummary")}
          </p>
          <Link
            href={`/${locale}/about`}
            className="text-accent-yellow hover:text-accent-yellow-light font-semibold transition-colors"
          >
            {tHero("learnMore")} &rarr;
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14 bg-[#0f1423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            {tHome("productsTitle")}
          </h2>

          <div className="space-y-12">
            {topCategories.map((top) => {
              const subs = getSubCategoriesByParent(top.id);
              return (
                <div key={top.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{top.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{top.name[locale]}</h3>
                      <p className="text-sm text-gray-500">{top.description[locale]}</p>
                    </div>
                    <div className="flex-1 h-px bg-gray-700 ml-4" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {subs.map((sub) => (
                      <Link
                        key={sub.id}
                        href={`/${locale}/products/${top.id}/${sub.id}`}
                        className="group block p-4 bg-[#1a2035] rounded-xl border border-gray-700/50 hover:border-accent-red hover:bg-[#1f2640] transition-all duration-200 text-center"
                      >
                        <span className="text-3xl block mb-2">{sub.icon}</span>
                        <h4 className="text-sm font-bold text-gray-300 group-hover:text-accent-yellow transition-colors">
                          {sub.name[locale]}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
