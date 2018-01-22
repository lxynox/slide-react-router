import createTheme from 'spectacle/lib/themes/default';

const colors = {
  white: "#ffffff",
  black: "#000000",
  romanSilver: "#868e96",
  blueviolet: "#8A2BE2",
  cyan: 'cyan',
  brightTurquoise: "#00e7c0"
};

const fonts = {

}

const theme = createTheme(
  {
    primary: colors.white,
    secondary: colors.black,
    tertiary: colors.brightTurquoise,
    quartenary: colors.romanSilver,
  },
  {
    primary: 'Menlo',
    secondary: 'Helvetica',
    tertiary: 'Menlo',
  }
);

export default theme;
