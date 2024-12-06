declare module "asciinema-player" {
  interface PlayerOptions {
    autoplay?: boolean;
    loop?: boolean;
    preload?: boolean;
    startAt?: number | string;
    speed?: number;
    idleTimeLimit?: number;
    theme?: string;
    fit?: "width" | "height" | "both" | "none" | false;
    controls: boolean | "auto";
    markers: number[];
    pauseOnMarkers: boolean;
    terminalFontSize?: "small" | "medium" | "big";
    terminalFontFamily?: string;
    terminalLineHeight?: number;
  }

  export function create(
    src: string | object,
    container: HTMLElement,
    options?: PlayerOptions
  ): void;
}
