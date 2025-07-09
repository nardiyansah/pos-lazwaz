"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src="/Lazwaz_logo.png"
          className="mx-auto"
          width={100}
          height={100}
          alt="Lazwaz Logo"
        />
      </div>
      <div className="flex flex-col relative mt-5 h-48"></div>
    </div>
  );
}
