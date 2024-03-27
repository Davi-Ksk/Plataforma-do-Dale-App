import React, { useState } from "react";

export const MultiSelect = ({ handleGcTrailFilterChange, handleEducationLevelFilterChange, handleHardSkillsFilterChange, handleSoftSkillsFilterChange }) => {
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
    <div className="container">
      <input
        type="text"
        value={gcTrailValue}
        onChange={handleGcTrailInputChange}
        placeholder="Filtrar por GC Trail"
        className="input"
      />
      <input
        type="text"
        value={educationLevelValue}
        onChange={handleEducationLevelInputChange}
        placeholder="Filtrar por Nível de Educação"
        className="input"
      />
      <input
        type="text"
        value={hardSkillsValue}
        onChange={handleHardSkillsInputChange}
        placeholder="Filtrar por Hard Skills"
        className="input"
      />
      <input
        type="text"
        value={softSkillsValue}
        onChange={handleSoftSkillsInputChange}
        placeholder="Filtrar por Soft Skills"
        className="input"
      />
    </div>
  );
};








