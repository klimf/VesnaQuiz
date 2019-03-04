import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import placeholder from '../images/placeholder.png';
import { resolveStatic } from './helpers';

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';


export const palette = {
  accent: '#B940D0',
  primary: '#5395E9',
  error: '#E61247',
  errorLight: '#FF466A',
  blue: '#D8EDFD',
  sky: '#ECF7FE',
  secondary: '#EBEFF3',
  background: '#FAFAFA',
  disabled: '#D4D9DE',
  gray: '#A7ACAF',
  white: '#FFFFFF',
  black: '#333',
  light: 'rgba(255, 255, 255, 0.2)',
  hardLight: 'rgba(255, 255, 255, 0.5)',
  dark: 'rgba(0, 0, 0, 0.1)',
  hardDark: 'rgba(0, 0, 0, 0.2)',
  halfDark: 'rgba(0, 0, 0, 0.5)',
  transparent: 'transparent',
  gradientAccent: 'linear-gradient(-225deg, #FE46F4 0%, #723AAA 100%)',
  gradientBlue: 'linear-gradient(-200deg, #6362F1 0%, #3F9E82 100%)',
  gradientPurple: 'linear-gradient(-213deg,#403698 0%,#ac5eb9 100%)',
  gradientRose: 'linear-gradient(-41deg, #F16262 0%, #733F9E 100%)',
};

export const unit = 12;

export const shadow = css`
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
`;
export const bigShadow = css`
  box-shadow: 0 4px 14px 0 rgba(0,0,0,0.05);
`;
export const transition = css`
  transition: 0.3s ease;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${palette.accent};
    &:hover {
      /* color: ${palette.primary}; */
      text-decoration: underline;
    }
`;
export const StyledA = styled.a`
    text-decoration: none;
    color: ${palette.accent};
    &:hover {
      /* color: ${palette.primary}; */
      text-decoration: underline;
    }
`;

export const rounded = css`
  border-radius: 8px;
`;
export const block = css`
  background-color: ${palette.white};
  transition: 0.3s ease;
  ${rounded}
  ${shadow}
  ${(props) => !props.noHover && `
    &:hover {
      transform: scale(1.01);
      ${bigShadow}
    }`
  } 
  
`;

export const image = css`
  background: url(${(props) => {
    if (props.src) {
      return (props.src.indexOf('image/') === -1) ? props.src : resolveStatic(props.src);
    }
    return placeholder;
  }}) center no-repeat;
  background-size: cover;
`;
