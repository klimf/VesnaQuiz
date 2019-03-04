import styled from 'styled-components';
import { hideOn, media } from '../../utils/helpers';

const Content = styled.div`
  max-width: ${(props) => props.width ? props.width : 64}em;
  margin: 0 auto;
  padding: ${(props) => props.noSpace ? '0 16px' : '0px 6px 0'};
  ${(props) => props.full && `
    height: 100%;
    padding-top: 0 !important;
  `}
  /* min-height: 100%; */
  overflow: hidden;
  ${hideOn}
  /* ${media.medium`padding: 0 16px`}
  ${media.large`padding: 0 16px`} */
  /* ${media.small`
  `} */
  ${media.medium`
    padding: ${(props) => props.noSpace ? '0 16px' : '16px 16px 0'};
    &.fix-w {
    min-width: 1024px;
    float: left;
    }
  `}
  ${media.large`
    padding: ${(props) => props.noSpace ? '0 16px' : '26px 16px 0'};
  `}
  ${(props) => props.text && `
    padding-left: 10px;
    padding-right: 10px;
  `}
  ${(props) => props.flex && `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-top: 0;
  `}

`;

export default Content;
