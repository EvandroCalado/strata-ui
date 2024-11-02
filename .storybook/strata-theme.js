import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'Strata UI',
  brandUrl: 'https://github.com/EvandroCalado',
  brandImage: './logo-dark.png',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //Colors
  colorPrimary: '#6200EE',
  colorSecondary: '#03DAC5',

  // UI
  appBg: '#121212',
  appContentBg: '#121212',
  appPreviewBg: '#121212',
  // appBorderColor: '#FFFFFF',
  appBorderRadius: 8,

  // Text colors
  // textColor: '#03DAC5',
  // textInverseColor: '#020617',
  textMutedColor: '#03DAC5',

  // Toolbar default and active colors
  // barTextColor: '#FFFFFF',
  // barSelectedColor: '#B0BEC5',
  barHoverColor: '#03DAC5',
  barBg: '#121212',
  // booleanBg: '#03DAC5',
  // booleanSelectedBg: '#03DAC5',
  // gridCellSize: 40,

  // Button colors
  // buttonBg: '#6200EE',
  // buttonBorder: '#6200EE',

  // Form colors
  inputBg: '#121212',
  // inputBorder: '#03DAC5',
  // inputTextColor: '#03DAC5',
  inputBorderRadius: 4,
});
