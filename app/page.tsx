"use client";

import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col relative mt-5 h-48">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link
            href="/login"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
