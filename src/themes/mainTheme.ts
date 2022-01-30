const color = {
  primary: '#367EC0',
  primaryDark: '#3C8CD5',
  white: '#FFFFFF',
  black: '#000000',
};

const size = {
  xs: 4,
  s: 8,
  sm: 10,
  m: 16,
  ml: 20,
  l: 24,
}

const typography = {
  textSmall: {
    fontFamily: 'montserrat-regular, sans-serif',
    fontFamilyBold: 'montserrat-medium, sans-serif',
    fontSize: 16,
    lineHeight: 20,
  },
  button: {
    fontFamily: 'montserrat-medium, sans-serif',
    fontFamilyBold: 'montserrat-semibold, sans-serif',
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
      padding: `${size.sm}px ${size.m}px`,
      borderRadius: `${size.s}px`,
      typography: typography.button,
      backgroundColor: color.primary,
      color: color.white,
      hover: {
        backgroundColor: color.primaryDark,
      },
      active: {
        backgroundColor: color.primaryDark,
      },
    },
  },
  mainView: {
    backgroundColor: color.white,
  },
};

export default mainTheme;
