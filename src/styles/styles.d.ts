import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      cyan: string;
      darkPurple: string;
      lightGrey: string;
      lightGreyTransparency: string;
    };
    fontSize: {
      large: string;
      big: string;
      medium: string;
      small: string;
      tiny: string;
    };
    dropShadow: {
      circles: string;
    };
    layoutDivisors: {
      maxWidth: string;
    };
  }
}
