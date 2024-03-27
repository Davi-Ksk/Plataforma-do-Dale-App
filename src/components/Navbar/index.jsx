// Navbar/index.jsx

import React from "react";
import {
  Container,
  LeftMenu,
  RightMenu,
  SearchInput,
  Input,
  MenuButton,
  RightMenuButton,
  Sidebar,
  CloseButton,
} from "./styles";

const Navbar = ({
  isSidebarOpen,
  toggleSidebar,
  showSearchInput,
  searchValue,
  handleSearchChange,
  handleEnterPress,
  showRightMenu,
  toggleFilter,
}) => {
  return (
    <Container>
      <LeftMenu>
        <MenuButton onClick={toggleSidebar}></MenuButton>
        {showSearchInput && (
          <SearchInput>
            <Input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyPress={handleEnterPress}
              placeholder="Pesquisar"
            />
          </SearchInput>
        )}
      </LeftMenu>

      {showRightMenu && (
        <RightMenu>
          <RightMenuButton onClick={toggleFilter}></RightMenuButton>
        </RightMenu>
      )}

      {isSidebarOpen && (
        <Sidebar>
          <CloseButton onClick={toggleSidebar}>X</CloseButton>
        </Sidebar>
      )}
    </Container>
  );
};

export default Navbar;


