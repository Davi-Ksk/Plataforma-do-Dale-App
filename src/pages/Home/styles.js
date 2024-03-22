import styled from "styled-components"; 
import filterIMG from "../../assets/images/filter_icon.png";
import menuIMG from "../../assets/images/menu_icon.png";

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

export const Navbar = styled.nav`
  background-color: black;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1; 

  font-family: 'Montserrat', sans-serif;

`;

export const Input = styled.input`
  width: 200px; 
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  font-family: 'Montserrat', sans-serif;

`;

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  margin-right: 40px; 
  background-image: url(${menuIMG});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  flex-shrink: 0; /* Não encolhe */
`;

export const RightMenuButton = styled.button`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  margin-left: 20px; 
  background-image: url(${filterIMG});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: black;
  color: white;
  padding: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;








