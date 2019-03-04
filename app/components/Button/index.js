/**
 *
 * Button
 *
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

import buttonStyles from './buttonStyles';
import buttonThemes from './buttonThemes';

import { hideOn } from '../../utils/helpers';
import Icon from '../Icon';

function Button(props) {
  const { onClick, ...newProps } = props;// eslint-disable-line
  // const A = styled(Link)`${buttonStyles}`;

  const InnerWrapper = styled.div`${buttonStyles}`;
  // const StyledLink = styled(Link)`${buttonStyles}`;
  // const StyledDiv = styled.div`${buttonStyles}`;
  // const StyledButton = styled.button`${buttonStyles}`;

  const Wrapper = styled.div`
    margin: ${props.margin ? props.margin : '0'};
    text-align: ${props.centred ? 'center' : 'left'};
    ${props.expanded && 'width:100%;'}
    & > * {
      ${props.expanded && 'width:100%;'}
    }
    ${hideOn}
  `;

  const StyledIcon = styled(Icon)`
    position: absolute;
    left: 10px;
    top: calc(50% - 14px);
  `;
  // const button = (props.href) ? (
  //   <a href={props.href}>
  //     <InnerWrapper {...props} padding={props.icon && '5px 16px 5px 40px'}>
  //       {props.icon && <StyledIcon size={24} name={props.icon} />}
  //       {Children.toArray(props.children)}
  //     </InnerWrapper>
  //   </a>
  // ) : (
  //   <Link to={props.to ? props.to : '#'}>
  //     <InnerWrapper {...props} padding={props.icon && '5px 16px 5px 40px'}>
  //       {props.icon && <StyledIcon size={24} name={props.icon} />}
  //       {Children.toArray(props.children)}
  //     </InnerWrapper>
  //   </Link>
  // );
  const StyledDiv = styled.div``;
  const MyLink = props.fake ? StyledDiv : Link;
  const button = (
    <MyLink to={props.to ? props.to : '#'}>
      <InnerWrapper {...newProps} >
        {props.icon && <StyledIcon size={24} name={props.icon} />}
        {Children.toArray(props.children)}
      </InnerWrapper>
    </MyLink>
  );

  // const button = (
  //   <A href={props.href} onClick={props.onClick}>
  //     {Children.toArray(props.children)}
  //   </A>
  // );

  // if (props.to) {
  //   if (props.to.toLowerCase().includes('http://') || props.to.toLowerCase().includes('http://')) {
  //     button = (
  //       <A href={props.to} onClick={props.onClick}>
  //         {Children.toArray(props.children)}
  //       </A>
  //     );
  //   } else {
  //     button = (
  //       <StyledLink to={props.to}>
  //         {Children.toArray(props.children)}
  //       </StyledLink>
  //     );
  //   }
  // }
  // if (props.fake) {
  //   button = (
  //     <StyledDiv>
  //       {Children.toArray(props.children)}
  //     </StyledDiv>
  //   );
  // }
  // if (props.submit) {
  //   button = (
  //     <StyledButton type="submit">
  //       {Children.toArray(props.children)}
  //     </StyledButton>
  //   );
  // }
  // if (props.submit && props.type === 'disabled') {
  //   button = (
  //     <StyledButton disabled type="submit">
  //       {Children.toArray(props.children)}
  //     </StyledButton>
  //   );
  // }

  // const btn = button;
  return (
    <Wrapper {...props} >
      <ThemeProvider theme={props.type ? buttonThemes[props.type] : buttonThemes.primary}>
        {button}
      </ThemeProvider>
    </Wrapper>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  // component: PropTypes.string,
  // href: PropTypes.string,
  // onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  margin: PropTypes.string,
  centred: PropTypes.bool,
  expanded: PropTypes.bool,
  icon: PropTypes.string,
  fake: PropTypes.bool,
  // fake: PropTypes.bool,
  // submit: PropTypes.bool,
};

export default styled(Button)`${hideOn}`;
