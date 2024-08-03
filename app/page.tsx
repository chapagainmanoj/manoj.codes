import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="duration-500 text-zinc-400 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        manoj.codes
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="max-w-md animate-fade-in justify-center items-center">
        <div className="p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-lg text-zinc-400 mb-6">Hey people 👋</h2>
            <p className="text-sm text-zinc-400">
              Have a special affection with .py, .js, .ts, .tsx, .git*, .yaml, .sh, .toml, .conf
              <br />
              Let's build something cool together! 🚀
            </p>
          </div>
        </div>
      </div>
      <a href="/ManojChapagain-Resume.pdf" target="_blank" className="mt-6 text-zinc-400 text-sm hover:text-zinc-300 py-2 inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Resume</span>
      </a>
    </div>
  );

}
