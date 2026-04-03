export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import {
  subCategories,
  getSubCategoryById,
  getTopCategoryById,
  getProductsBySubCategory,
} from "@/data/products";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return subCategories.map((sub) => ({
    topCategory: sub.parentId,
    subCategory: sub.id,
  }));
}

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ topCategory: string; subCategory: string; locale: string }>;
}) {
  const { topCategory, subCategory, locale } = await params;
  const top = getTopCategoryById(topCategory);
  const sub = getSubCategoryById(subCategory);
  if (!top || !sub || sub.parentId !== top.id) notFound();

  const products = getProductsBySubCategory(subCategory);
  const lang = locale as "zh-TW" | "en";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <nav className="mb-8 text-sm text-gray-500 flex items-center gap-2 flex-wrap">
        <Link href={`/${locale}/products`} className="hover:text-accent-yellow transition-colors">
          {lang === "zh-TW" ? "產品介紹" : "Products"}
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-gray-400">{top.name[lang]}</span>
        <span className="text-gray-600">/</span>
        <span className="text-white font-medium">{sub.name[lang]}</span>
      </nav>

      <div className="text-center mb-12">
        <span className="text-5xl mb-4 block">{sub.icon}</span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {sub.name[lang]}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">{sub.description[lang]}</p>
        <div className="mt-4 inline-block bg-accent-yellow/20 text-accent-yellow text-xs font-bold px-3 py-1 rounded-full border border-accent-yellow/30">
          {top.name[lang]}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1a2035] border border-gray-700/50 rounded-xl overflow-hidden hover:border-accent-red/40 transition-all"
          >
            {product.image && (
              <div className="w-full h-48 bg-[#131829] relative">
                <Image
                  src={product.image}
                  alt={product.name[lang]}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-bold text-white">
                  {product.name[lang]}
                </h2>
                <span className="bg-[#131829] text-accent-yellow text-xs font-mono px-2 py-1 rounded border border-gray-700/50">
                  {product.model}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {product.description[lang]}
              </p>

              {product.specs && (
                <div className="mb-3">
                  <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wide mb-1">
                    {lang === "zh-TW" ? "產品規格" : "Specifications"}
                  </h3>
                  <p className="text-sm text-gray-500">{product.specs[lang]}</p>
                </div>
              )}

              {product.features && (
                <div className="mb-3">
                  <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wide mb-1">
                    {lang === "zh-TW" ? "產品特性" : "Features"}
                  </h3>
                  <p className="text-sm text-gray-500">{product.features[lang]}</p>
                </div>
              )}

              {product.applications && (
                <div>
                  <h3 className="text-xs font-semibold text-accent-red uppercase tracking-wide mb-1">
                    {lang === "zh-TW" ? "適用範圍" : "Applications"}
                  </h3>
                  <p className="text-sm text-gray-500">{product.applications[lang]}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
