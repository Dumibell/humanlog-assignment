# Asciinema Player React Component

A React component wrapper for the asciinema-player that allows you to embed terminal recordings in your React applications.

## Configuration

When using this component, you can provide the following options:

### Required Options

- `src`: Path to the .cast file or cast-formatted data received from API response

### Default Settings

- `autoplay`: Set to true by default, starts playback automatically
- `loop`: Set to true by default, repeats playback continuously

All other asciinema-player options are also supported and can be passed as props to customize the player's behavior.
