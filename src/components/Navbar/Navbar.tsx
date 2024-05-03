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
          <Link className="font-semibold" href={"/news"}>NEWS</Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/projects"}>PROJECTS</Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/admin-projects"}>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
