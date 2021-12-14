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
  blue: '#003159',
  paragraph: '#020202',
  gray: '#5C5E60',
  lightGray: '#5C5E60',
  white: '#FFFFFF',
};

const theme: Theme = {
  breakpoints,
  palette: {
    primaryPalette,
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
