import { palette } from '../../../utils/constants';
import TintInst from '../../../images/TintInst.jpg';

const buttonThemes = {
  border: {
    bg: palette.transparent,
    borderColor: palette.white,
    textColor: palette.white,
    shadow: 'none',
    bgHover: palette.white,
    textColorHover: palette.black,
    borderColorHover: palette.transparent,
    shadowHover: 'none',
    transformHover: 'none',
  },
  action: {
    bg: 'linear-gradient(-180deg, #9BE305 0%, #5CB000 100%)',
    textColor: palette.white,
    shadow: '0 2px 0 0 #2E6900',
    bgHover: 'linear-gradient(-180deg, #9BE305 0%, #5CB000 100%)',
    textColorHover: palette.white,
    shadowHover: '0 3px 0 0 #2E6900',
    transformHover: 'translateY(-1px)',
    noBorder: true,
  },
  primary: {
    bg: palette.primary,
    textColor: palette.white,
    shadow: 'none',
    bgHover: palette.primary,
    textColorHover: palette.white,
    shadowHover: `0 2px 4px 0 ${palette.hardDark}`,
    transformHover: 'translateY(-1px)',
    noBorder: true,
  },
  bigAction: {
    bg: palette.error,
    textColor: palette.white,
    shadow: 'none',
    bgHover: palette.errorLight,
    textColorHover: palette.white,
    shadowHover: `0 2px 4px 0 ${palette.hardDark}`,
    transformHover: 'translateY(-1px)',
    noBorder: true,
    isBig: true,
  },
  secondary: {
    bg: palette.secondary,
    textColor: palette.black,
    shadow: 'none',
    bgHover: palette.secondary,
    textColorHover: palette.accent,
    shadowHover: `0 2px 4px 0 ${palette.hardDark}`,
    transformHover: 'translateY(-1px)',
    noBorder: true,
  },
  disabled: {
    bg: palette.secondary,
    textColor: palette.gray,
    shadow: 'none',
    bgHover: palette.secondary,
    textColorHover: palette.gray,
    shadowHover: 'none',
    transformHover: 'none',
    inActive: true,
    noBorder: true,
  },
  inst: {
    bg: `url(${TintInst}) center center`,
    textColor: palette.white,
    shadow: 'none',
    bgColorHover: palette.secondary,
    bgImageHover: TintInst,
    textColorHover: palette.white,
    shadowHover: `0 2px 4px 0 ${palette.hardDark}`,
    transformHover: 'translateY(-1px)',
    noBorder: true,
  },
};

export default buttonThemes;
