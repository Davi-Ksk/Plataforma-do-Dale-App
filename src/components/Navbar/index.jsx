import React from "react";
import { Container, LeftMenu, RightMenu, SearchInput, Input, MenuButton, RightMenuButton, Sidebar, CloseButton } from "./styles"; // Importando os estilos necessários

const Navbar = ({ isSidebarOpen, toggleSidebar, searchValue, handleSearchChange, handleEnterPress, toggleFilter }) => {
  return (
    <Container>
      <LeftMenu>
        <MenuButton onClick={toggleSidebar}></MenuButton>
        <SearchInput>
          <Input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyPress={handleEnterPress}
            placeholder="Pesquisar"
          />
        </SearchInput>
      </LeftMenu>

      <RightMenu>
        <RightMenuButton onClick={toggleFilter}></RightMenuButton>
      </RightMenu>

      {isSidebarOpen && (
        <Sidebar>
          <CloseButton>X</CloseButton>
        </Sidebar>
      )}
    </Container>
  );
};

export default Navbar;
