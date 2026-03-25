import { style, globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

/* ── Neumorphism shadow helpers ── */
export const nmOut = style({
  boxShadow: `8px 8px 18px ${vars.shadow.dk}, -8px -8px 18px ${vars.shadow.lt}`,
});
export const nmOutSm = style({
  boxShadow: `4px 4px 10px ${vars.shadow.dk}, -4px -4px 10px ${vars.shadow.lt}`,
});
export const nmOutXs = style({
  boxShadow: `2px 2px 6px ${vars.shadow.dk}, -2px -2px 6px ${vars.shadow.lt}`,
});
export const nmIn = style({
  boxShadow: `inset 5px 5px 12px ${vars.shadow.dk}, inset -5px -5px 12px ${vars.shadow.lt}`,
});
export const nmInSm = style({
  boxShadow: `inset 3px 3px 7px ${vars.shadow.dk}, inset -3px -3px 7px ${vars.shadow.lt}`,
});

/* ── Card base ── */
export const card = style({
  background: vars.color.bg,
  borderRadius: vars.radius.lg,
  boxShadow: `8px 8px 18px ${vars.shadow.dk}, -8px -8px 18px ${vars.shadow.lt}`,
  overflow: 'hidden',
  transition: 'box-shadow 0.3s, transform 0.3s',
  ':hover': {
    boxShadow: `12px 12px 26px ${vars.shadow.dk}, -12px -12px 26px ${vars.shadow.lt}`,
    transform: 'translateY(-5px)',
  },
});

/* ── Section ── */
export const section = style({
  padding: `${vars.space.section} 3.5rem`,
  background: vars.color.bg,
});

export const sectionDk = style({
  padding: `${vars.space.section} 3.5rem`,
  background: vars.color.bgDk,
});

/* ── Typography ── */
export const serifTitle = style({
  fontFamily: vars.font.serif,
  fontWeight: '300',
  color: vars.color.text,
  lineHeight: '1.1',
});

export const eyebrow = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.6rem',
  fontSize: '0.6rem',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  color: vars.color.champ,
  marginBottom: '0.5rem',
});

export const goldText = style({
  color: vars.color.champ,
});

/* ── Input ── */
export const inputWrap = style({
  background: vars.color.bg,
  boxShadow: `inset 3px 3px 7px ${vars.shadow.dk}, inset -3px -3px 7px ${vars.shadow.lt}`,
  borderRadius: '6px',
  padding: '0.65rem 1rem',
  transition: 'box-shadow 0.2s',
});

/* ── Pill tag ── */
export const pill = style({
  fontSize: '0.57rem',
  padding: '0.2rem 0.6rem',
  background: vars.color.bg,
  boxShadow: `2px 2px 6px ${vars.shadow.dk}, -2px -2px 6px ${vars.shadow.lt}`,
  borderRadius: vars.radius.pill,
  color: vars.color.text3,
});
