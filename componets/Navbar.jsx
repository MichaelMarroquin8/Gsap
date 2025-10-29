import React from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });
  });

  return (
    <nav>
      <div>
        <a href="#" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-8 h-8 object-contain"
          />
          <p>Cocktails</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
