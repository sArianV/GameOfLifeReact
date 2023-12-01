// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

interface GlobalProps {
  colorMode: 'light' | 'dark';
}
// 3. extend the theme
const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: ({ colorMode }: GlobalProps) => ({
      body: {
        bgGradient:
          colorMode === 'light'
            ? 'linear-gradient(180deg, rgb(245, 95, 152, .6) 11.2%, rgb(254, 148, 136, .8) 100.2%);'
            : 'linear-gradient( rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)',
      },
    }),
  },
});

export default theme;
/* 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)' */
/* 'linear-gradient(180deg, rgb(245, 95, 152, .6) 11.2%, rgb(254, 148, 136, .8) 100.2%);' */
