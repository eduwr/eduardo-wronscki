import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    darkBlue: '#222831',
    cyan: '#00ADB5',
    darkPurple: '#393546',
    lightGrey: '#eeeeee',
    lightGreyTransparency: 'rgba(238, 238, 238, 0.6)',
  },
  fontSize: {
    large: '36px',
    big: '26px',
    medium: '20px',
    small: '18px',
    tiny: '16px',
  },
  dropShadow: {
    circles: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.3))',
    icons: {
      hover: 'drop-shadow(0 5px 4px rgba(0, 0, 0, 0.5))',
      active: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.8))',
    },
  },
  layoutDivisors: {
    maxWidth: '680px',
    maxHeight: '480px',
  },
};

export default theme;
