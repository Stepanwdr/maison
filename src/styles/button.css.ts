import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

const btnBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.55rem',
  border: 'none',
  cursor: 'none',
  fontFamily: vars.font.sans,
  fontWeight: '400',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  transition: 'all 0.12s',
  position: 'relative',
  overflow: 'hidden',
  userSelect: 'none',
});

export const button = recipe({
  base: btnBase,

  variants: {
    variant: {
      /* filled gold 3D */
      fill: {
        background: `linear-gradient(145deg, ${vars.color.champ2}, ${vars.color.champ})`,
        color: vars.color.white,
        borderRadius: '6px',
        boxShadow: `5px 5px 0px ${vars.color.champ3}, 7px 7px 12px ${vars.shadow.dk2}, -3px -3px 8px ${vars.shadow.lt2}`,
        transform: 'translate(-2px, -2px)',
        ':hover': {
          boxShadow: `6px 6px 0px ${vars.color.champ3}, 10px 10px 20px ${vars.shadow.dk2}, -4px -4px 12px ${vars.shadow.lt2}`,
          transform: 'translate(-3px, -3px)',
          background: `linear-gradient(145deg, ${vars.color.champ2}, ${vars.color.champ2})`,
        },
        ':active': {
          transform: 'translate(2px, 2px)',
          boxShadow: `2px 2px 0px ${vars.color.champ3}, 3px 3px 8px ${vars.shadow.dk2}`,
        },
      },
      /* ghost neumorphic 3D */
      ghost: {
        background: vars.color.bg,
        color: vars.color.text2,
        borderRadius: '6px',
        boxShadow: `5px 5px 0px rgba(164,152,132,0.5), 7px 7px 12px ${vars.shadow.dk}, -3px -3px 8px ${vars.shadow.lt}`,
        transform: 'translate(-2px, -2px)',
        ':hover': {
          color: vars.color.champ,
          boxShadow: `6px 6px 0px rgba(164,152,132,0.55), 10px 10px 18px ${vars.shadow.dk}, -4px -4px 12px ${vars.shadow.lt}`,
          transform: 'translate(-3px, -3px)',
        },
        ':active': {
          transform: 'translate(2px, 2px)',
          boxShadow: `2px 2px 0px rgba(164,152,132,0.4), 3px 3px 8px ${vars.shadow.dk}`,
        },
      },
      /* flat nm */
      flat: {
        background: vars.color.bg,
        color: vars.color.text3,
        borderRadius: vars.radius.pill,
        boxShadow: `4px 4px 10px ${vars.shadow.dk}, -4px -4px 10px ${vars.shadow.lt}`,
        ':hover': {
          color: vars.color.champ,
          boxShadow: `5px 5px 12px ${vars.shadow.dk}, -5px -5px 12px ${vars.shadow.lt}`,
        },
        ':active': {
          boxShadow: `inset 3px 3px 7px ${vars.shadow.dk}, inset -3px -3px 7px ${vars.shadow.lt}`,
          transform: 'translateY(1px)',
        },
      },
    },
    size: {
      sm: { fontSize: '0.64rem', padding: '0.5rem 1.1rem' },
      md: { fontSize: '0.72rem', padding: '0.88rem 2rem' },
      lg: { fontSize: '0.78rem', padding: '1.05rem 2.2rem', width: '100%', justifyContent: 'center' },
    },
  },

  defaultVariants: {
    variant: 'fill',
    size: 'md',
  },
});
