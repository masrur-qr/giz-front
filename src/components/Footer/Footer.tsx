import Link from "next/link";
import Logo from "../Logo/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#C30F08] text-white py-[50px]">
      <div className="wrapper__page">
        <div className="flex items-center justify-between">
          <div>
            <Logo />
            <p>© 2024 All rights reserved.</p>
          </div>
          <div>
            <div className="flex items-center gap-10 mb-3">
              <Link className="text-[18px] font-bold" href={"/"}>
                Home
              </Link>
              <Link className="text-[18px] font-bold" href={"/"}>
                News
              </Link>
            </div>
            <div className="flex items-center gap-10">
              <Link className="text-[18px] font-bold" href={"/"}>
                About
              </Link>
              <Link className="text-[18px] font-bold" href={"/"}>
                Projects
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-[18px] font-bold">Contacts</h4>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
            <br />
            <a href="tel:+992 (00) 000 00-00">+992 (00) 000 00-00</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
