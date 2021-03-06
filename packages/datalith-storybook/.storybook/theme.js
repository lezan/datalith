import { create } from '@storybook/theming'
import Logo from './logo-lettering.svg'

export default create({
  base: 'light',

  // // Color palette
  // colorPrimary: '', // primary color
  colorSecondary: '#082e3a', // secondary color

  // // UI
  // appBg: '',
  // appContentBg: '',
  // appBorderColor: '',
  // appBorderRadius: 2,

  // // Fonts
  fontBase: '"Titillium Web", sans-serif',
  fontCode: 'Menlo, monospace',

  // // Text colors
  // textColor: '',
  // textInverseColor: '',

  // // Toolbar default and active colors
  // barTextColor: '',
  // barSelectedColor: '',
  // barBg: '',

  // // Form colors
  // inputBg: '',
  // inputBorder: '',
  // inputTextColor: '',
  // inputBorderRadius: 2,

  // Brand logo/text
  brandImage: Logo,
  brandTitle: 'datalith',
})
