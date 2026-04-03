import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { topCategories, getSubCategoriesByParent } from "@/data/products";
import DsAdmLogo from "@/components/DsAdmLogo";
import WorldMap from "@/components/WorldMap";

export default function HomePage() {
  const tHome = useTranslations("home");
  const tHero = useTranslations("hero");
  const locale = useLocale() as "zh-TW" | "en";

  return (
    <>
      {/* Hero — deep blue starfield with DS ADM® and curved road arcs */}
      <section
        className="relative text-white overflow-hidden"
        style={{ background: "linear-gradient(160deg, #19264E 0%, #0C1540 50%, #0a0e1a 100%)" }}
      >
        {/* Curved road/arc lines — like the original */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <path d="M200,480 Q500,300 900,100" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <path d="M250,490 Q550,310 950,110" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
        </svg>
        {/* Star particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${1 + (i % 2)}px`,
                height: `${1 + (i % 2)}px`,
                left: `${(i * 31 + 7) % 100}%`,
                top: `${(i * 19 + 5) % 100}%`,
                opacity: 0.1 + (i % 4) * 0.06,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <DsAdmLogo />
            </div>
            <p className="text-lg md:text-2xl tracking-[0.25em] font-light text-white/70 mb-8">
              創新 ・ 環保 ・ 品質
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-10 max-w-xl mx-auto">
              {tHero("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/products`}
                className="inline-block bg-accent-red hover:bg-accent-red-dark text-white font-semibold px-8 py-3 rounded transition-colors"
              >
                {tHero("cta")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="inline-block border border-accent-yellow/60 text-accent-yellow hover:bg-accent-yellow hover:text-gray-900 font-semibold px-8 py-3 rounded transition-colors"
              >
                {tHero("learnMore")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Regions — World Map on dark bg */}
      <section className="py-14 bg-[#0f1423]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-white mb-10">
            {tHome("regionsTitle")}
          </h2>
          <WorldMap />
        </div>
      </section>

      {/* About Summary — dark card */}
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

      {/* Product Categories — dark theme */}
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
