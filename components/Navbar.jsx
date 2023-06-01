import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showBars, setShowBars] = useState();

  return (
    <>
      <nav>
        <Link href="/" className="logo text-2xl font-bold ml-28">
          All The Way Go
        </Link>
        <div className="bars">
          <i class="fa-solid fa-bars" onClick={() => setShowBars(prev => !prev)}></i>
        </div>
        {showBars && (
          <div className="responsive-links">
            <ul className="grid">
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </ul>
          </div>
        )}
        {!showBars && (
          <div className="links">
            <ul className="flex gap-8">
              <Link href="/posts">Posts</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </ul>
          </div> 
        )}
        <div className="hr border-b border-b-gray-400 w-10/12 ml-20 mt-5"></div>
      </nav>  
    </>
  );
}

export default Navbar;
