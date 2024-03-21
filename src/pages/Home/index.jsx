// index.jsx

import { useState } from "react";
import { Container, Navbar, LeftMenu, RightMenu, SearchInput, Input, MenuButton, RightMenuButton, Sidebar, CloseButton } from "./styles.js"; // Importando os estilos necessários
import { Card } from "../../components/Card";
import { MultiSelect } from "../../components/MultiSelect";

import { api } from '../../services/api';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Filter } from "../../components/Filter";

export function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para controlar se a barra lateral está aberta
  const [isSidebarFilterOpen, setIsSidebarFilterOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      filterCards();
    }
  };

  const filterCards = () => {
    const filtered = cards.filter((card) =>
      card.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    async function fetchStudents() {
      const response = await api.get('/students');
      setCards(response.data);
    }
    fetchStudents();
  }, []);

  useEffect(() => {
    if (searchValue.trim() === "") {
      setFilteredCards([]);
    } else {
      filterCards();
    }
  }, [searchValue]);

  const handleProfile = (id) => {
    navigate(`students/profile/${id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Alternando entre aberto e fechado
  };

  const toggleFilter = () => {
    setIsSidebarFilterOpen(!isSidebarFilterOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Fechar a barra lateral
  };

  const closeFilter = () => {
    setIsSidebarFilterOpen(false);
  };

  // Função para lidar com a ação do botão de menu da direita
  const handleFilterMenu = () => {
   setIs
  };


  return (

    // <Container>
    //   <MultiSelect />
    // </Container>

    <Container>

      <Navbar>
        
        <LeftMenu>
          <MenuButton onClick={toggleSidebar}></MenuButton> {/* Botão para abrir e fechar a barra lateral */}
          <SearchInput>
            <Input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              onKeyPress={handleEnterPress}
              placeholder="Pesquisar "
            />
          </SearchInput>
        </LeftMenu>

        <RightMenu>
          <RightMenuButton onClick={toggleFilter}></RightMenuButton>
        </RightMenu>

      </Navbar>


      {isSidebarOpen && (
        <Sidebar>
          <CloseButton onClick={closeSidebar}>X</CloseButton>
          {/* Conteúdo do menu aqui */}
        </Sidebar>
      )}


      {isSidebarFilterOpen && (
        <MultiSelect />
          // <CloseButton onClick={closeFilter}>X</CloseButton>
      )}


      {searchValue.trim() === "" ? (
        // Se a barra de pesquisa estiver vazia, exibir todos os cards
        cards.map((card) => (
          <Card
            key={String(card.id)}
            data={card}
            onClick={() => handleProfile(card.id)}
          />
        ))
      ) : (
        // Caso contrário, exibir os cards filtrados
        filteredCards.map((card) => (
          <Card
            key={String(card.id)}
            data={card}
            onClick={() => handleProfile(card.id)}
          />
        ))
      )}
    </Container>
  );
}







