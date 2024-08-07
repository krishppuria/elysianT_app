import {extendTheme} from 'native-base';

import {COLORS} from '../../src/constants/colors';

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: COLORS.BLUE_COLOR,
      100: COLORS.BLUE_COLOR,
      200: COLORS.BLUE_COLOR,
      300: COLORS.BLUE_COLOR,
      400: COLORS.BLUE_COLOR,
      500: COLORS.BLUE_COLOR,
      600: COLORS.BLUE_COLOR,
      700: COLORS.BLUE_COLOR,
      800: COLORS.BLUE_COLOR,
      900: COLORS.BLUE_COLOR,
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: COLORS.BLUE_COLOR,
    },
  },
  config: {
    // Changing initialColorMode to 'light'
    initialColorMode: 'light',
  },
  fontConfig: {
    Lato: {
      400: {
        normal: 'Lato-Regular',
      },
    },
  },
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Lato',
    body: 'Lato',
    mono: 'Lato',
  },
  components: {
    Button: {
      baseStyle: {
        _disabled: {
          bg: COLORS.GRAY_COLOR, // Background color when disabled
          _text: {
            color: COLORS.GRAY_COLOR, // Text color when disabled
          },
        },
      },
    },
  },
});

export default theme;
