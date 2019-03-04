import styled from 'styled-components';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const Space = styled.div`
  width:100%;
  ${(props) => props.smart && media.small`height: 64px;`}
  height: ${(props) => props.size * (props.inPx ? 1 : unit)}px;
  ${hideOn}
`;

export default Space;
