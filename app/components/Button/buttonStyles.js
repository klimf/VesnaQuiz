import { css } from 'styled-components';
import { media } from '../../utils/helpers';
import { palette } from '../../utils/constants';
import themes from './buttonThemes';

const defaultStyle = css`
  min-width: 36px;
  max-width: 100%;
  ${(props) => props.expanded && 'width:100%;'}
  ${(props) => props.right && 'float:right;'}
  height: ${(props) => props.theme.isBig ? 42 : 36}px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: ${(props) => props.padding ? props.padding : '5px 18px'};
  text-align: center;
  justify-content: center;
  text-decoration: none;
  /* text-transform: uppercase; */
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: ${(props) => props.theme.isActive ? 'pointer' : 'default'};
  outline: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
  ${(props) => !props.theme.noBorder && `border: 2px solid ${props.theme.borderColor}; padding: 3px 16px;`}
  /* background-color: ${(props) => props.theme.bgColor};
  background-image: ${(props) => props.theme.bgImage}; */
  background: ${(props) => props.theme.bg};
  background-size: cover;
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.shadow};
  transition: 0.2s ease;
  ${(props) => props.theme.isBig && `
    padding: 8px 16px;
    font-size: 18px;
    transition: none;
  `}
  ${(props) => props.icon && 'padding-left: 40px;'}

  &[disabled] {
    background: ${themes.disabled.bg};
    color: ${palette.black};
    &:hover {
      background: ${themes.disabled.bgHover};
      color: ${palette.black};
      box-shadow: ${themes.disabled.shadowHover};
      transform: ${themes.disabled.transformHover};
    }
  }

  &:hover {
    /* background-color: ${(props) => props.theme.bgColorHover};
    background-image: ${(props) => props.theme.bgImageHover}; */
    background: ${(props) => props.theme.bgHover};
    color: ${(props) => props.theme.textColorHover};
  ${(props) => !props.theme.noBorder && `border: 2px solid ${props.theme.borderColorHover}; padding: 3px 16px;`}
    box-shadow: ${(props) => props.theme.shadowHover};
    transform: ${(props) => props.theme.transformHover};
  }
  
  ${media.small`
    &:hover {
      box-shadow: ${(props) => props.theme.shadow};
      transform: none;
    }
    height: 42px;
    font-size: 18px;
    padding: ${(props) => props.padding ? props.padding : ('7px 18px')};
    ${(props) => props.icon && 'padding-left: 40px;'}
  `}
`;

// defaultStyle.defaultProps = {
//   theme: {
//     bgColor: palette.transparent,
//     borderColor: palette.black,
//     textColor: palette.black,
//     shadow: 'none',
//     bgColorHover: palette.black,
//     textColorHover: palette.white,
//     borderColorHover: palette.black,
//     shadowHover: 'none',
//   },
// };

export default defaultStyle;
