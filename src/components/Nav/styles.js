import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.4rem;
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  
  position: fixed;
`;
