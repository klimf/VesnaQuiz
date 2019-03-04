import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideOn, margin, media } from '../../utils/helpers';
import { palette } from '../../utils/constants';


function Text(props) {
  const type = {
    p: {
      size: 18,
      weight: 400,
      component: 'p',
      line: 24,
    },
    blockSubtitle: {
      size: 21,
      weight: 400,
      component: 'p',
      line: 25,
    },
    service: {
      size: 16,
      weight: 400,
      component: 'p',
      line: 16,
      margin: '8px 0',
    },
    subtitle: {
      size: 28,
      weight: 400,
      component: 'h3',
      line: 28,
    },
    mailTitle: {
      size: 21,
      weight: 400,
      component: 'h3',
      line: 28,
    },
    colorTitle: {
      size: 28,
      weight: 400,
      component: 'h3',
      line: 46,
    },
    title: {
      size: 32,
      weight: 400,
      component: 'h2',
    },
    offerTitle: {
      size: 42,
      weight: 500,
      sizeSmall: '8vw',
      component: 'h1',
      line: 42,
    },
    offerSubtitle: {
      size: 28,
      sizeSmall: '6vw',
      weight: 400,
      component: 'h2',
    },
    blockTitle: {
      size: 24,
      weight: 400,
      component: 'h3',
      line: 28,
      margin: '-4px 0 0 0',
    },
    big: {
      size: 160,
      weight: 400,
      component: 'h1',
    },
  }[props.type ? props.type : 'p'];
  const component = type.component;

  const TextBlock = styled[component]`
    position: relative;
    font-size: ${type.size}px;
    font-weight: ${type.weight};
    color: ${props.color ? props.color : palette.black};
    ${type.sizeSmall && media.small`
      font-size: ${type.sizeSmall};
    `}
    & i {
      font-style: normal;
      color: ${palette.accent}
    }
    ${type.line && `line-height: ${type.line}px;`}
    ${props.uppercase && 'text-transform: uppercase;'}
    ${props.center && 'text-align: center; width: 100%;'}
    ${props.breakWord && 'word-wrap: break-word;'}
    ${props.inline && 'display: inline;'}
    ${hideOn}
    ${margin}
    ${type.margin && `margin: ${type.margin}`}
  `;
  return (
    <TextBlock {...props}>
      {Children.toArray(props.children)}
    </TextBlock>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  color: PropTypes.string,
  center: PropTypes.bool,
  uppercase: PropTypes.bool,
  breakWord: PropTypes.bool,
  inline: PropTypes.bool,
};


export default Text;
