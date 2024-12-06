"use client";

import * as AsciinemaPlayer from "asciinema-player";
import "asciinema-player/dist/bundle/asciinema-player.css";
import { useEffect, useRef } from "react";

interface CustomAsciinemaPlayerProps extends AsciinemaPlayer.PlayerOptions {
  src: string;
}

export default function CustomAsciinemaPlayer({
  src,
  autoplay = true,
  loop = true,
  ...attr
}: CustomAsciinemaPlayerProps) {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const element = document.getElementById("demo");
    if (element && !playerRef.current) {
      try {
        playerRef.current = AsciinemaPlayer.create(src, element, {
          autoplay,
          loop,
          ...attr,
        });
      } catch (error) {
        console.error("Error creating player:", error);
      }
    }
  }, [src]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div id="demo" className="border rounded shadow-sm"></div>
    </div>
  );
}
