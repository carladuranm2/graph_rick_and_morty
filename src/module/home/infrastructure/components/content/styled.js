import styled from 'styled-components';

export const WrapperContent = styled.nav`
  padding: 76px 90px;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    padding: 76px 20px;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    padding: 76px 20px;
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    padding: 76px 90px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    padding: 76px 90px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    padding: 76px 90px;
  }
`;

export const DetailCharacter = styled.div`
  display: grid;
  grid-template-columns: 38% 60%;
  grid-gap: 2%;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    grid-template-columns: 38% 60%;
    grid-gap: 2%;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-columns: 38% 60%;
    grid-gap: 2%;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 38% 60%;
    grid-gap: 2%;
  }
`;
