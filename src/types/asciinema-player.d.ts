declare module "asciinema-player" {
  interface PlayerOptions {
    autoplay?: boolean;
    loop?: boolean;
    preload?: boolean;
    startAt?: number | string;
    speed?: number;
    idleTimeLimit?: number;
    theme?: string;
    fit?: string;
    terminalFontSize?: string;
    terminalFontFamily?: string;
    terminalLineHeight?: number;
  }

  export function create(
    src: string | object,
    container: HTMLElement,
    options?: PlayerOptions
  ): void;
}
