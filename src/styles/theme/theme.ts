import { Palette, Theme } from './theme.types';

const breakpoints = {
  maxWidth: 1182,
  fhd: 1920,
  largeDesktop: 1140,
  desktop: 992,
  tablet: 768,
  mobile: 320,
};

const primaryPalette: Palette = {
  '100': '#F2F2F2',
  '200': '',
  '300': '#0396A6',
  '400': '#73A2BF',
  '500': '#5D7CA6',
  '600': '#115D8C',
  '700': '#11538C',
  '800': '#023059',
};

const secondaryPalette: Palette = {
  '100': '#F2F2F2',
  '200': '#A6A6A6',
  '300': '#737373',
  '400': '#404040',
  '500': '#0D0D0D',
  '600': '',
  '700': '',
  '800': '',
};

const theme: Theme = {
  breakpoints,
  palette: {
    primaryPalette,
    secondaryPalette,
  },
  media: {
    small: `screen and (min-width: ${breakpoints.mobile}px)`,
    mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
    largeDesktop: `screen and (min-width: ${breakpoints.largeDesktop}px)`,
    extraLargeDesktop: `screen and (min-width: ${breakpoints.fhd}px)`,
  },
};

export default theme;