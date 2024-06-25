"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { usePathname } from "next/navigation";

export default function OutletLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      {pathname != "/en/login" &&
        pathname != "/ru/login" &&
        pathname != "/tj/login" && <Header />}
      {children}
      {pathname != "/en/login" &&
        pathname != "/ru/login" &&
        pathname != "/tj/login" && <Footer />}
    </>
  );
}
