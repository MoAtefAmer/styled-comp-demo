import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 60px;
  margin: 40px 0;
  gap: 10px;
  flex-direction: ${({ layout }) => layout || 'row'};

  & > div {
    flex: 1;
  }

  img {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }
`;
