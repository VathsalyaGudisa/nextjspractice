import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/Login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
