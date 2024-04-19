// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <main>
      <h1>Home Page</h1>
      <h1>{page.home.title}</h1>
      <About />
      <Partners />
    </main>
  );
}
