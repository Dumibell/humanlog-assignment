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
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <p className="text-2xl font-semibold">Asciinema Player Example</p>
      <CustomAsciinemaPlayer src="/cast/input.cast" />
    </div>
  );
}
