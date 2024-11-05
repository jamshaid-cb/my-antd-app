const palette = {
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
    dark: "#08081A",
  },
  white: {
    main: "#ffffff",
  },

  background: { paper: "#fff", default: "#fff" },
};

export const antdThemeConfig = {
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
    colorPrimaryBorder: palette.primary.main,
    colorPrimaryBorderHover: palette.primary.light,
    colorPrimaryTextActive: palette.primary.main,
    colorPrimaryTextHover: palette.primary.dark,

    // Typography settings
    fontFamily: "Poppins, sans-serif",
    lineHeight: 1.4,

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
    borderRadiusLG: 12,
    borderRadiusSM: 4,

    // Spacing settings (for paddings/margins)
    paddingXS: 4,
    paddingSM: 8,
    paddingMD: 12,
    paddingLG: 20,
    paddingXL: 24,
    paddingXXL: 32,
  },

  components: {
    Button: {
      fontWeight: 600,
      paddingInline: 15,
      paddingInlineLG: 20,
      paddingInlineSM: 10,
      textTextActiveColor: palette.primary.main,
      textTextColor: palette.primary.main,
      textTextHoverColor: palette.primary.dark,

      //   Default button
      defaultColor: palette.primary.main,
      defaultHoverColor: palette.primary.dark,
      defaultBorderColor: palette.primary.light,
      defaultHoverBorderColor: palette.primary.light,
      defaultHoverBg: palette.primary.accent,

      //   Danger button
      dangerColor: palette.white.main,
    },

    Input: {},
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
