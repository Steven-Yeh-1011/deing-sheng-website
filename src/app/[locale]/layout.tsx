export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "鼎陞企業有限公司 | DS ADM® — 創新・環保・品質",
  description:
    "鼎陞企業成立於2006年，專業代理化工原料、保溫材料及商用設備。提供ADM系列、戊烷、真空絕熱板、冷凍庫板、霜淇淋機、萬能蒸烤箱等產品。",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${notoSansTC.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0f1423] text-gray-200 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
