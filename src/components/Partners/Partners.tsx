import Logo1 from "@/assets/images/XMLID_1_.svg";
import Tcell from "@/assets/images/Vector.svg";
import UCA from "@/assets/images/logo-new.png";
import MSDSP from "@/assets/images/MSDSP_logo_tjk_2022-04-14_color-01.png";
import GizLogo from "@/assets/images/Vector.png";
import PamirEnergy from "@/assets/images/logo.png";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="my-[100px]">
      <div className="wrapper">
        <h3 className="text-[24px] text-[#8D8D8D] font-bold uppercase text-center">
          Partners
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <Image src={Logo1} alt="Logo1" />
            <p className="text-[#4B4B4D] text-[18px] font-bold">Text 1</p>
          </div>
          <div>
            <Image src={Logo1} alt="Logo1" />
            <p className="text-[#4B4B4D] text-[18px] font-bold">Text 2</p>
          </div>
          <div>
            <Image src={Logo1} alt="Logo1" />
            <p className="text-[#4B4B4D] text-[18px] font-bold">Text 3</p>
          </div>
          <div>
            <Image src={Tcell} alt="Tcell" />
          </div>
          <div>
            <Image src={UCA} alt="UCA" />
          </div>
          <div>
            <Image src={MSDSP} alt="UCA" />
          </div>
          <div>
            <Image src={GizLogo} alt="UCA" />
          </div>
          <div>
            <Image src={PamirEnergy} alt="UCA" />
          </div>
        </div>
      </div>
    </section>
  );
}
