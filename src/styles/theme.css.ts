import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    bg:      '#EDE6D8',
    bgLt:    '#F5F0E6',
    bgDk:    '#E0D8C8',
    bgMd:    '#E8E0CE',
    champ:   '#C4A26A',
    champ2:  '#DAB87C',
    champ3:  '#A07848',
    beige:   '#D4C4A8',
    warm:    '#F8F2E4',
    text:    '#2C2820',
    text2:   '#5A5248',
    text3:   '#8A8278',
    white:   '#FFFFFF',
  },
  shadow: {
    dk:  'rgba(164,152,132,0.58)',
    lt:  'rgba(255,252,244,0.96)',
    dk2: 'rgba(140,100,50,0.45)',
    lt2: 'rgba(255,248,230,0.9)',
  },
  font: {
    serif: "'Cormorant Garamond', Georgia, serif",
    sans:  "'Jost', sans-serif",
  },
  space: {
    xs:  '0.25rem',
    sm:  '0.5rem',
    md:  '1rem',
    lg:  '1.5rem',
    xl:  '2rem',
    xxl: '3rem',
    section: '5rem',
  },
  radius: {
    sm:  '3px',
    md:  '5px',
    lg:  '8px',
    pill:'100px',
  },
});
