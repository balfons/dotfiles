module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: 'Fira Code, Menlo, "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#009688',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'UNDERLINE',

    // color of the text
    foregroundColor: '#ECEFF1',

    // terminal background color
    backgroundColor: '#1e1e1e',

    // border color (window, tabs)
    borderColor: '#222d32',

    // custom css to embed in the main window
    css: `
      .hyper_main {
        border: 4px solid #171717 !important;
      }
      .header_header {
        background: #171717 !important;
        top: 4px;
        left: 4px;
        right: 4px;
      }
      .tab_tab, .tabs_borderShim {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid #009688;
        font-weight: 700;
      }
      .splitpane_divider {
        background-color: #171717 !important;
        border-width: 4px !important;
      }
    `,

    // custom css to embed in the terminal window
    // Current styles: background for nano commands and heading
    // Enable font ligatures: currently off
    termCSS: `
      // x-screen x-row { font-variant-ligatures: contextual; }
    `,

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#263238',
      red: '#FF5252',
      green: '#9CCC65',
      yellow: '#fee94e',
      blue: '#2b98f0',
      magenta: '#b38bfc',
      cyan: '#68b6f3',
      white: '#ECEFF1',
      lightBlack: '#617d8a',
      lightRed: '#fc625d',
      lightGreen: '#9CCC65',
      lightYellow: '#fee94e',
      lightBlue: '#2b98f0',
      lightMagenta: '#b38bfc',
      lightCyan: '#68b6f3',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    // 'hyperline'
    // 'hyper-john'
    // 'hyper-simple-vibrancy'
    // 'hyper-statusline'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
