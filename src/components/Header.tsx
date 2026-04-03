"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLocale = locale === "zh-TW" ? "en" : "zh-TW";
  const otherLocaleLabel = locale === "zh-TW" ? "EN" : "中文";
  const pathnameWithoutLocale = pathname.replace(/^\/(zh-TW|en)/, "") || "/";
  const switchLocalePath = `/${otherLocale}${pathnameWithoutLocale}`;

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/products`, label: t("products") },
    { href: `/${locale}/news`, label: t("news") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header
      className="relative z-50 overflow-hidden"
      style={{
        background: "linear-gradient(to right, #FF4A00 0%, #FF6919 20%, #FFCFAB 50%, #FFE8D8 75%, #FFFCFB 100%)",
      }}
    >
      {/* Swoosh curve overlay */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        style={{ height: "40%" }}
      >
        <path d="M0,40 Q400,0 800,20 Q1200,40 1440,10 L1440,40 Z" fill="#192040" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-1 shrink-0">
            <Image
              src="/logo.png"
              alt="Deing Sheng Logo"
              width={160}
              height={120}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Language switch — top right */}
          <div className="hidden md:flex items-center gap-1 text-sm text-gray-500 absolute top-1 right-4">
            <Link href={switchLocalePath} className="hover:text-accent-red transition-colors">
              {otherLocaleLabel}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0 mt-2">
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-accent-red"
                      : "text-gray-600 hover:text-accent-red"
                  }`}
                >
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Mobile: language + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href={switchLocalePath}
              className="px-2 py-1 text-xs font-bold border border-gray-400 rounded text-gray-600 hover:text-accent-red"
            >
              {otherLocaleLabel}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded text-gray-600 hover:text-accent-red"
              aria-label="Toggle menu"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-gray-900 border-t border-white/10 relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 text-sm font-medium text-gray-300 hover:bg-gray-800 ${
                pathname === link.href ? "text-accent-yellow bg-gray-800" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={switchLocalePath}
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-accent-yellow hover:bg-gray-800 border-t border-white/10"
          >
            {otherLocaleLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
