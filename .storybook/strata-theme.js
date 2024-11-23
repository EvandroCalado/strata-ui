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
  colorPrimary: '#d4d4d8',
  colorSecondary: '#4b5563',

  // UI
  appBg: '#121212',
  appContentBg: '#121212',
  appPreviewBg: '#121212',
  // appBorderColor: '#FFFFFF',
  appBorderRadius: 8,

  // Text colors
  // textColor: '#4b5563',
  // textInverseColor: '#020617',
  textMutedColor: '#4b5563',

  // Toolbar default and active colors
  // barTextColor: '#FFFFFF',
  // barSelectedColor: '#B0BEC5',
  barHoverColor: '#4b5563',
  barBg: '#121212',
  // booleanBg: '#4b5563',
  // booleanSelectedBg: '#4b5563',
  // gridCellSize: 40,

  // Button colors
  // buttonBg: '#d4d4d8',
  // buttonBorder: '#d4d4d8',

  // Form colors
  inputBg: '#121212',
  // inputBorder: '#4b5563',
  // inputTextColor: '#4b5563',
  inputBorderRadius: 4,
});
