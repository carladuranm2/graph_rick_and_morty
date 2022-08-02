import styled from 'styled-components';

export const WrapperCardInfo = styled.div`
  background-color: #ffffff;
  box-shadow: rgb(136 152 170 / 15%) 0px ${props => props.top ? '2rem' : "0px"} 2rem 0px;
  border-bottom: ${props => props.borderBottom ? '1px' : '0px'} solid rgb(236, 237, 239);
  padding: 20px;
  width: ${props => props.width ? '100%' : ''}
`;