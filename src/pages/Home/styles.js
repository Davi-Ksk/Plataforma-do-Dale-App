import styled from "styled-components"; 

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 3.2rem;

  font-family: 'Montserrat', sans-serif;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
`;







