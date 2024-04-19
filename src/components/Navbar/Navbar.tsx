import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-[30px]">
        <li>
          <Link className="font-semibold" href={"/"}>HOME</Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/about"}>ABOUT</Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/"}>NEWS</Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/"}>PROJECTS</Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/"}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
