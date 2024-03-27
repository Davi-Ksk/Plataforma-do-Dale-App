// index.jsx da página Home

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { Container } from "./styles";
import { Card } from "../../components/Card";
import { MultiSelect } from "../../components/MultiSelect";
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [gcTrailFilter, setGcTrailFilter] = useState("");
  const [educationLevelFilter, setEducationLevelFilter] = useState("");
  const [hardSkillsFilter, setHardSkillsFilter] = useState("");
  const [softSkillsFilter, setSoftSkillsFilter] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
      card.name.toLowerCase().includes(searchValue.toLowerCase()) &&
      card.gcTrail.toLowerCase().includes(gcTrailFilter.toLowerCase()) &&
      card.educationLevel.toLowerCase().includes(educationLevelFilter.toLowerCase()) &&
      card.hardSkills.some(skill => skill.description.toLowerCase().includes(hardSkillsFilter.toLowerCase())) &&
      card.softSkills.some(skill => skill.description.toLowerCase().includes(softSkillsFilter.toLowerCase()))
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/students');
      setCards(response.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue.trim() === "" && gcTrailFilter.trim() === "" && educationLevelFilter.trim() === "" && hardSkillsFilter.trim() === "" && softSkillsFilter.trim() === "") {
      setFilteredCards([]);
    } else {
      filterCards();
    }
  }, [searchValue, gcTrailFilter, educationLevelFilter, hardSkillsFilter, softSkillsFilter]);

  const handleProfile = (id) => {
    navigate(`students/profile/${id}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFilter = () => {
    setIsSidebarFilterOpen(!isSidebarFilterOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const closeFilter = () => {
    setIsSidebarFilterOpen(false);
  };

  const handleGcTrailFilterChange = (gcTrailFilter) => {
    setGcTrailFilter(gcTrailFilter);
  };

  const handleEducationLevelFilterChange = (educationLevelFilter) => {
    setEducationLevelFilter(educationLevelFilter);
  };

  const handleHardSkillsFilterChange = (hardSkillsFilter) => {
    setHardSkillsFilter(hardSkillsFilter);
  };

  const handleSoftSkillsFilterChange = (softSkillsFilter) => {
    setSoftSkillsFilter(softSkillsFilter);
  };

  return (
    <Container>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        showSearchInput={true}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
        handleEnterPress={handleEnterPress}
        showRightMenu={true}
        toggleFilter={toggleFilter}
      />

      {isSidebarFilterOpen && (
        <MultiSelect 
          handleGcTrailFilterChange={handleGcTrailFilterChange} 
          handleEducationLevelFilterChange={handleEducationLevelFilterChange}
          handleHardSkillsFilterChange={handleHardSkillsFilterChange}
          handleSoftSkillsFilterChange={handleSoftSkillsFilterChange}
        />
      )}

      {searchValue.trim() === "" && gcTrailFilter.trim() === "" && educationLevelFilter.trim() === "" && hardSkillsFilter.trim() === "" && softSkillsFilter.trim() === "" ? (
        cards.map((card) => (
          <Card
            key={String(card.id)}
            data={card}
            hardSkills={card.hardSkills}
            softSkills={card.softSkills}
            onClick={() => handleProfile(card.id)}
          />
        ))
      ) : (
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














