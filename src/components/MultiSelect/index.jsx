import React, { useState } from "react";
import { Container, Select } from "./style";

export const MultiSelect = ({
  handleGcTrailFilterChange,
  handleEducationLevelFilterChange,
  handleHardSkillsFilterChange,
  handleSoftSkillsFilterChange,
}) => {
  const [gcTrailValue, setGcTrailValue] = useState("");
  const [educationLevelValue, setEducationLevelValue] = useState("");
  const [hardSkillsValue, setHardSkillsValue] = useState("");
  const [softSkillsValue, setSoftSkillsValue] = useState("");

  const handleGcTrailInputChange = (event) => {
    const inputValue = event.target.value;
    setGcTrailValue(inputValue);
    handleGcTrailFilterChange(inputValue.trim());
  };

  const handleEducationLevelInputChange = (event) => {
    const inputValue = event.target.value;
    setEducationLevelValue(inputValue);
    handleEducationLevelFilterChange(inputValue.trim());
  };

  const handleHardSkillsInputChange = (event) => {
    const inputValue = event.target.value;
    setHardSkillsValue(inputValue);
    handleHardSkillsFilterChange(inputValue.trim());
  };

  const handleSoftSkillsInputChange = (event) => {
    const inputValue = event.target.value;
    setSoftSkillsValue(inputValue);
    handleSoftSkillsFilterChange(inputValue.trim());
  };

  return (
    <Container>
      <Select value={gcTrailValue} onChange={handleGcTrailInputChange}>
        <option value="">Filtrar por GC Trail</option>
        <option value="Programacão">Programação</option>
        <option value="Gestão e Vendas">Gestão e Vendas</option>
        <option value="UX/UI Design">UX/UI Design</option>
        <option value="Marketing Digital">Marketing Digital</option>
      </Select>

      <Select
        value={educationLevelValue}
        onChange={handleEducationLevelInputChange}
      >
        <option value="">Filtrar por Nível de Educação</option>
        <option value="Ensino Médio em andamento">
          Ensino Médio em andamento
        </option>
        <option value="Ensino Médio completo">Ensino Médio completo</option>
        <option value="Ensino Superior em andamento">
          Ensino Superior em andamento
        </option>
        <option value="Ensino Superior completo">
          Ensino Superior completo
        </option>
      </Select>

      <Select value={hardSkillsValue} onChange={handleHardSkillsInputChange}>
        <option value="">Filtrar por Hard Skills</option>
        <option value="JavaScript">Javascript</option>
        <option value="SQL">SQL</option>
        <option value="Gestão do Tempo">Gestão do Tempo</option>
        <option value="HTML/CSS">HTMl e CSS</option>
      </Select>

      <Select value={softSkillsValue} onChange={handleSoftSkillsInputChange}>
        <option value="">Filtrar por Soft Skills</option>
        <option value="Empatia">Empatia</option>
      </Select>
    </Container>
  );
};











