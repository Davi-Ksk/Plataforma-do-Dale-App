import styled from "styled-components"; 

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
`;