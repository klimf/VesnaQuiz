import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { palette } from '../../utils/constants';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  margin: 0;
  ${hideOn}
`;
const Backing = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  background-color: ${palette.white};
  box-shadow: 0 2px 4px 0 ${palette.dark};
  border-radius: 4px;
  ${hideOn}
`;
const Content = styled.div`
  position: relative;
  padding: ${(props) => props.padding ? props.padding : '20px'};
  border-radius: 4px;
  overflow: hidden;
`;

function Block(props) {
  return (
    <Wrapper {...props} >
      <Backing noAll={props.noBack} />
      <Content {...props}>
        {Children.toArray(props.children)}
      </Content>
    </Wrapper>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  noBack: PropTypes.bool,
};

export default Block;
