export const palette = {
  primary: {
    main: "#845EB3",
    light: "#C3A6E7",
    dark: "#471487",
    bright: "#8428F6",
    accent: "#FAF5FF",
  },
  secondary: {
    main: "#00105E",
    light: "#99BBFF",
    dark: "#0A0A4A",
    bright: "#395AFF",
    accent: "#F0F5FF",
  },
  green: {
    main: "#217D40",
    light: "#91E2A8",
    dark: "#124428",
    bright: "#31B657",
    accent: "#EDFCF4",
  },
  red: {
    main: "#D91143",
    light: "#FFA3BA",
    dark: "#6D0821",
    accent: "#FFF0F4",
  },
  yellow: {
    main: "#E5CE1E",
    light: "#FFECB3",
    dark: "#544D00",
    accent: "#FCFBED",
  },
  gray: {
    main: "#74748A",
    light: "#F4F4F6",
    dark: "#CFCFD1",
    bright: "#F7F7FA",
  },
  black: {
    main: "#08081A",
    light: "#74748A",
  },
  white: {
    main: "#FEFEFE",
  },
  background: { paper: "#FEFEFE", default: "#fff" },
};

const boxShadows = {
  button: {
    hover: "0px 2px 6px 0px #4714872B",
    danger: "0px 2px 6px 0px #6D08212B",
  },
  dropdown: {
    main: "0px 2px 8px 0px #08081A1A",
  },
  modal: {
    main: "0px 4px 12px 0px #0000001A",
  },
  snackbar: {
    main: "0px 2px 2px 0px #0000000F",
  },
  navigation: {
    main: "0px 2px 6px 0px #00105E14",
  },
  topbar: {
    main: "0px 1px 4px 0px #08081A0A",
  },
};

export const antdThemeConfig = {
  // cssVar: true,
  hashed: false,
  token: {
    // Color settings
    colorError: palette.red.main,
    colorErrorActive: palette.red.dark,
    colorErrorBg: palette.red.accent,
    colorErrorBgActive: palette.red.light,
    colorErrorBorder: palette.red.main,

    colorSuccess: palette.green.main,
    colorSuccessActive: palette.green.dark,
    colorSuccessBg: palette.green.accent,
    colorSuccessBgActive: palette.green.accent,
    colorSuccessBorder: palette.green.main,

    colorWarning: palette.yellow.main,
    colorWarningActive: palette.yellow.dark,
    colorWarningBg: palette.yellow.accent,
    colorWarningBgActive: palette.yellow.accent,
    colorWarningBorder: palette.yellow.main,

    colorLink: palette.secondary.bright,
    colorLinkHover: palette.secondary.main,
    colorLinkActive: palette.secondary.dark,

    colorPrimary: palette.primary.main,
    colorPrimaryHover: palette.primary.dark,
    colorPrimaryActive: palette.primary.dark,
    colorPrimaryBg: palette.primary.accent,
    colorPrimaryBgHover: palette.primary.dark,
    colorPrimaryBorder: palette.primary.bright,
    colorPrimaryBorderHover: palette.primary.dark,
    colorPrimaryTextActive: palette.primary.main,
    colorPrimaryTextHover: palette.primary.dark,

    colorText: palette.black.main,
    colorTextDisabled: palette.gray.main,
    colorTextSecondary: palette.gray.main,
    colorTextTertiary: palette.gray.main,

    // Box Shadow setting
    boxShadowTertiary: boxShadows.topbar.main,

    // Typography settings
    fontFamily: "Inter, Poppins, sans-serif",
    lineHeight: 1.4,
    lineHeightLG: 1.4,
    lineHeightSM: 1.4,

    // Font sizes
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeHeading1: 32,
    fontSizeHeading2: 24,
    fontSizeHeading3: 20,
    fontSizeHeading4: 18,

    //Heights
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,

    // Border radius
    borderRadiusBase: 6,
    borderRadius: 6,
    borderRadiusLG: 8,
    borderRadiusSM: 6,

    lineWidthFocus: 1,
    linkHoverDecoration: "underline",

    // Spacing settings (for paddings/margins)
    paddingXS: 6,
    paddingSM: 8,
    paddingMD: 12,
    paddingLG: 20,
    paddingXL: 24,
    paddingXXL: 32,

    marginXS: 12,

    // Custom Variable in Theme
    palette,
  },
  components: {
    Button: {
      fontWeight: 600,
      // Padding settings
      paddingInline: 20,
      paddingInlineLG: 20,
      paddingInlineSM: 10,
      paddingBlock: 10,
      paddingBlockLG: 12,
      paddingBlockSM: 8,

      // Text Sizes
      contentFontSizeSM: 12,
      contentFontSize: 14,

      //  Button shadows
      defaultShadow: boxShadows.button.hover,
      primaryShadow: boxShadows.button.hover,
      dangerShadow: boxShadows.button.danger,

      textTextActiveColor: palette.primary.main,
      textTextColor: palette.primary.main,
      textTextHoverColor: palette.primary.dark,

      //   Default button Color
      defaultColor: palette.primary.main,
      defaultHoverColor: palette.primary.dark,
      defaultBorderColor: palette.primary.light,
      defaultHoverBorderColor: palette.primary.light,
      defaultHoverBg: palette.primary.accent,

      //   Danger button Color
      dangerColor: palette.white.main,

      borderColorDisabled: "transparent",
    },

    Input: {
      paddingBlock: 8,
      paddingInline: 10,
    },

    InputNumber: {
      paddingBlock: 8,
      paddingInline: 10,
    },

    TextArea: {
      paddingBlock: 8,
      paddingInline: 10,
    },

    DatePicker: {
      paddingBlock: 8,
      paddingInline: 10,
    },

    RangePicker: {
      paddingBlock: 8,
      paddingInline: 10,
    },

    Table: {
      headerBg: palette.gray.light,
      borderColor: "#e8e8eb",
      rowExpandedBg: palette.secondary.accent,
      rowHoverBg: palette.secondary.accent,
      rowSelectedBg: palette.secondary.accent,
      headerSplitColor: palette.gray.dark,
      headerBorderRadius: 6,
      cellPaddingBlockMD: 13,
      cellPaddingInlineMD: 16,
      stickyScrollBarBg: palette.gray.light,
    },

    Tag: {},

    Typography: {
      titleMarginTop: 15,
      titleMarginBottom: 10,
    },

    Modal: {
      titleFontSize: 20,
    },

    Anchor: {
      linkPaddingBlock: 6,
      linkPaddingInlineStart: 14,
    },
  },

  overrides: {},

  // Dark mode settings
  darkTheme: {
    token: {
      backgroundColor: "#08081A", // General Dark
      colorText: "#FEFEFE", // General Light
    },
  },
};
