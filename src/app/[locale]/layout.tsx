import { Inter, Montserrat } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";
import { locales } from "@/i18n.config";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import useTextDirection from "../../hooks/useTextDirection";
import OutletLayout from "@/layouts/OutletLayout";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const dir = useTextDirection();

  return (
    <html lang={locale} dir={dir}>
      <body className={montserrat.className}>
        <OutletLayout>{children}</OutletLayout>
      </body>
    </html>
  );
}
