import styled from 'styled-components';

export const WrapperCharacterInfoItem = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: ${props => props.borderBottom ? '1px' : '0px'} solid rgb(236, 237, 239);
  margin-top: ${props => props.marginTop ? '10px' : '0px'};
  padding-bottom: 10px;
`;
