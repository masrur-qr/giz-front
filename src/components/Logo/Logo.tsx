import LogoIcon from "@/assets/images/Frame 28762.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src={LogoIcon} alt="LogoIcon" />
    </div>
  );
}
