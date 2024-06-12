import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ru", "tj"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  "en": "English",
  "ru": "Russian",
  "tj": "Tajik",
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales }
);
