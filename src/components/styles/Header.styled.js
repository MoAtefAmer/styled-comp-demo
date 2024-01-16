import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  background-color: ${({ theme }) => theme.colors.header};

  /* You can nest  */
  /* h1{
        color:red;
    } */

  /* &:hover{
        background-color: black;
    } */
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const StyledLogo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  /* width: 100%;
  height: 100%;
  object-fit: cover; */

  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
