"use client";

import dynamic from "next/dynamic";

const CustomAsciinemaPlayer = dynamic(
  () => import("@/components/CustomAsciinemaPlayer"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="flex items-center h-screen">
      <div className="w-screen flex flex-col items-center min-h-[400px] gap-10">
        <p className="text-2xl font-semibold">Asciinema Player Example</p>
        <CustomAsciinemaPlayer src="/cast/input.cast" />
      </div>
    </div>
  );
}
