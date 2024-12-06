# Asciinema Player React Component

A React component wrapper for the asciinema-player that allows you to embed terminal recordings in your React applications.

## Props

The component accepts all options from asciinema-player plus:

- `src` (required): Path to the .cast file or cast-formatted data received from API response
- `autoplay` (default: true): Automatically start playback
- `loop` (default: true): Loop the playback
- All other asciinema-player options are supported
