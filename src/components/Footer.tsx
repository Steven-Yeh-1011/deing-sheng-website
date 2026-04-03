import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gradient-to-b from-gray-200 to-gray-300 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-center md:text-left">
            <p>{t("copyright")}</p>
            <p className="text-xs mt-1">{t("address")} &nbsp;&nbsp; Tel:{t("tel")} &nbsp; Fax:{t("fax")}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="DS ADM" width={40} height={30} className="h-8 w-auto" />
            <span className="text-xs text-gray-500">{t("brand")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
