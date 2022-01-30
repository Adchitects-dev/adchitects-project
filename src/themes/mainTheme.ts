const color = {
  primary: '#DAC2F2',
  secondary: '#5EDC4B',
  white: '#FFFFFF',
  whiteSecondary: '#F1F0F0',
  whiteTrietary: '#989898',
  black: '#231E1E',
};

const size = {
  xs: 4,
  s: 8,
  sm: 10,
  m: 16,
  ml: 20,
  l: 24,
  xl: 32,
};

const typography = {
  textExtraSmall: {
    fontFamily: 'inter-regular, sans-serif',
    fontFamilyBold: 'inter-medium, sans-serif',
    fontSize: 14,
    lineHeight: 22,
  },
  textSmall: {
    fontFamily: 'inter-regular, sans-serif',
    fontFamilyBold: 'inter-medium, sans-serif',
    fontSize: 16,
    lineHeight: 24,
  },
  textMedium: {
    fontFamily: 'inter-regular, sans-serif',
    fontFamilyBold: 'inter-medium, sans-serif',
    fontSize: 24,
    lineHeight: 40,
  },
  textBig: {
    fontFamily: 'inter-regular, sans-serif',
    fontFamilyBold: 'inter-medium, sans-serif',
    fontSize: 40,
    lineHeight: 56,
  },
  textExtraBig: {
    fontFamily: 'inter-regular, sans-serif',
    fontFamilyBold: 'inter-medium, sans-serif',
    fontSize: 48,
    lineHeight: 64,
  },
  button: {
    fontFamily: 'inter-regular, sans-serif',
    fontFamilyBold: 'inter-medium, sans-serif',
    fontSize: 18,
    lineHeight: 22,
  },
};

const mainTheme = {
  color,
  size,
  typography,
  button: {
    default: {
      padding: `${size.sm}px 64px`,
      borderRadius: `${size.l}px`,
      typography: typography.textSmall,
      backgroundColor: color.primary,
      color: color.black,
      hover: {
        backgroundColor: color.primary,
      },
      active: {
        backgroundColor: color.primary,
      },
    },
  },
  input: {
    padding: `14px ${size.xl}px`,
    borderRadius: size.l,
    typography: typography.textSmall,
    backgroundColor: color.whiteSecondary,
    color: color.black,
  },
  mainView: {
    backgroundColor: color.white,
  },
};

export default mainTheme;
