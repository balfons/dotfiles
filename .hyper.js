// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // choose either `'stable'` for receiving highly polished,
    // or `'canary'` for less polished but more frequent updates
    updateChannel: 'stable',

    // default font size in pixels for all tabs
    fontSize: 16,

    // font family with optional fallbacks
    fontFamily: 'Fira Code, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // default font weight: 'normal' or 'bold'
    fontWeight: 'normal',

    // font weight for bold characters: 'normal' or 'bold'
    fontWeightBold: 'bold',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#97979b',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#97979b',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'UNDERLINE',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#eff0eb',

    // terminal background color
    // opacity is only supported on macOS
    backgroundColor: '#282a36',

    // terminal selection color
    selectionColor: 'rgba(248,28,229,0.3)',

    // border color (window, tabs)
    borderColor: '#222430',

    // custom CSS to embed in the main window
    css: `
      header {border-bottom: 2px solid #222430;}

      .header_header {
        background: #222430 !important;
        top: 4px;
        left: 4px;
        right: 4px;
      }

      .tab_active {
        background: #282a36;
      }

      .tab_textInner {
        font-weight: 700;
        opacity: .5;
      }
      .tab_textActive .tab_textInner {
        opacity: 1;
      }

      .tabs_nav {height: 32px;}

      .tab_tab, .tabs_borderShim {border: 0;}

      .splitpane_divider {
        background-color: #222430 !important;
        border-width: 4px !important;
      }

      .term_fit:not(.term_term) {opacity: 1 !important;}
    `,

    // custom CSS to embed in the terminal window
    termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#263238',
      red: '#ff6159',
      green: '#29ce42',
      yellow: '#ffbd2e',
      blue: '#57c7ff',
      magenta: '#ff4db5',
      cyan: '#9aedfe',
      white: '#f1f1f0',
      lightBlack: '#686868',
      lightRed: '#ff6159',
      lightGreen: '#29ce42',
      lightYellow: '#ffbd2e',
      lightBlue: '#57c7ff',
      lightMagenta: '#ff4db5',
      lightCyan: '#9aedfe',
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // PowerShell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    // quickEdit: true,

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
    hyperBorder: {
      borderColors: ['#ff4db5', '#ffbd2e'],
      // borderColors: ['#ff6ac1', '#f3f99d'],
      borderWidth: '2px'
    },
    hyperlinks: {
      clickAction: 'ignore',
      defaultBrowser: false
    },

    opacity: 0.98 // hyper-opacity
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    "hyperlayout",
    "hyperborder",
    "hyperlinks",
    "hyper-opacity",
    // "hyper-simple-vibrancy"
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  },
};