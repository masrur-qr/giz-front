import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="bg-[#C30F08] text-white py-[50px]">
      <div className="wrapper__page flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
