import BigLogo from "@/assets/images/Frame 28763.svg";
import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <div className="wrapper__page">
        <div className="flex items-center justify-center my-[100px]">
          <Image src={BigLogo} alt="BigLogo" />
        </div>
        <div className="flex flex-col justify-start items-start gap-5 mb-[148px]">
          <p className="text-[18px] text-justify">
            Association of Entrepreneurs of GBAO (hereafter "AE of GBAO") has
            been established on 26th July 2023 to strengthen the economic
            opportunities of entrepreneurs, provide financial education and the
            basics of entrepreneurship to its members, access to financial and
            economic opportunities for the development of entrepreneurship in
            the region.
          </p>
          <p className="text-[18px] text-justify">
            The "AE of GBAO" fulfills its purpose by performing the following
            tasks: create development opportunities for members of the
            association, support the members of the association to participate
            at national and international professional fairs and exhibitions,
            organize internships for businesses both at national and
            international levels, organize competitions and other events related
            business promotion and as well establish networks and develop
            cooperations with other associations nationally and internationally.
            Besides these, the AE includes international and national on raising
            the awareness of entrepreneurs.
          </p>
          <p className="text-[18px] text-justify">
            The Association started its first activity by organizing the Pamir
            Invest Forum in August 2023. This event has brought together local
            and foreign investors. The "AE of GBAO" has organized the Pamir
            Invest Forum 2023 in close cooperation with the regional government
            of GBAO and with financial support from international donor
            organizations, operating in the territory of the Republic of
            Tajikistan such as GIZ, USAID, OSCE, Tcell and EBRD.
          </p>
          <p className="text-[18px] text-justify">
            The participants of the Pamir Invest Forum included business and
            government representatives of the People's Republic of China, Taj
            Korea Company, LLC Sarez Capital, the Deputy Minister of Economic
            Development of the Russian Federation, the Ambassador of the United
            States of America in Tajikistan, and many others.
          </p>
          <p className="text-[18px] text-justify">
            The theme of the Forum included three main potential economic
            sectors of the GBAO region where more than 34 business plans were
            presented. The areas for possible investment included the mining
            sector, the development of the tourism industry in the region, and
            establishment of industrial enterprises, and the processing of local
            products in the field of agriculture.
          </p>
          <p className="text-[18px] text-justify">
            PURPOSE AND RESPONSIBILITIES OF THE ASSOCIATION
          </p>
          <p className="text-[18px] text-justify">
            2.1. Strengthening the economic capabilities of entrepreneurs,
            financial training and the basics of entrepreneurship, and access to
            financial and economic opportunities for the development of
            entrepreneurship.
          </p>
          <p className="text-[18px] text-justify">
            2.2. The Association realizes its goal by performing the following
            tasks:
          </p>
          <p className="text-[18px] text-justify">
            - Raising capital for the development of members’ businesses through
            government investments, development partners, philanthropists, and
            membership fees of association members;
          </p>
          <p className="text-[18px] text-justify">
            - Providing development opportunities to members of the Association;
          </p>
          <p className="text-[18px] text-justify">
            - Ensuring the participation of members of the Association in
            national and international professional fairs and exhibitions;
          </p>
          <p className="text-[18px] text-justify">
            - Organization of training for members of the association throughout
            the region, republic, and outside the republic;
          </p>
          <p className="text-[18px] text-justify">
            - Organization of competitions for members of the Association;
          </p>
          <p className="text-[18px] text-justify">
            - Cooperation with other Associations, including international and
            republican ones, to raise awareness of entrepreneurs;
          </p>
          <p className="text-[18px] text-justify">
            - Organization of vocational training courses for people with a
            profession; 
          </p>
          <p className="text-[18px] text-justify">
            - Implementation of business development programs;
          </p>
          <p className="text-[18px] text-justify">
            - Perform other tasks that do not contradict the legislation of the
            Republic of Tajikistan.
          </p>
          <p className="text-[18px] text-justify">
            2.3. To carry out activities that require a special permit
            (license), the association has the right to carry out such
            activities only from the moment such a special permit (license) is
            received and is terminated upon expiration of its validity period.
          </p>
        </div>
        <About />
        <Partners />
      </div>
    </main>
  );
}
