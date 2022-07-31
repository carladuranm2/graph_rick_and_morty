import styled, {css} from 'styled-components';

export const WrapperButtonGenerate = styled.div`
display: flex;
  margin-top: 10px;
  justify-content: flex-end;
`

export const Button = styled.button`
  ${props => {
    switch (props.mode) {
      case "gradient":
        return css`
          background: linear-gradient(135deg, rgb(48, 206, 231), rgb(130, 101, 252));;
          color:  ${props.color || 'white'};
          border-radius: 5px;
          padding: 0.875rem 1rem;
          text-transform: uppercase;
          font-weight: 600;
          border: none;
          letter-spacing: 1px;
          font-size: 12px;
        `;
      default:
        return css`
          background: none;
          color: ${props.color || 'white'};
          border-radius: 5px;
          border: 1px solid rgb(130, 101, 252);
          color: rgb(130, 101, 252);
          padding: 0.625rem 1.25rem;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 12px;
        `;
    }
  }}
`;

