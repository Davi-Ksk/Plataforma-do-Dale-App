import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./style.css";
import { api } from '../../services/api';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// import { Container } from "./style";


const animatedComponents = makeAnimated();

// hardSkills [ hardSkills ] = useState([]);

const trails = [

  { value: "PROGRAMACAO", label: "Programacão" },
  { value: "UX_UI_DESIGN", label: "UX/UI Design" },
  { value: "MARKETING_DIGITAL", label: "Marketing Digital" },
  { value: " GESTAO_E_VENDAS", label: "Gestão Vendas" }

];

const educationLevels = [
  
  { value: "MEDIO_EM_ANDAMENTO", label: "Ensino Médio em andamento" },
  { value: "MEDIO_COMPLETO", label: "Ensino Médio completo" },
  { value: "MARKETING_DIGITAL", label: "Ensino Superior em andamento" },
  { value: "SUPERIOR_COMPLETOS", label: "Ensino Superior completo" },
  { value: "POS_GRADUACAO_EM_ANDAMENTO", label: "Pós Graduação em andamento" },
  { value: "POS_GRADUACAO_COMPLETO", label: "Pós Graduação completo" }
]

const hardSkills = [

  { value: "NODEJS", label: "Node.js" },
  { value: "JAVA", label: "Java" },
  { value: "REACTJS", label: "React.js" },

  // useEffect(() => {
  //   async function fetchHardSkills() {
  //     const response = await api.get('/skills/hard');
  //     setCards(response.data);
  //   }
  //   fetchStudents();
  // }, []),

]

const softSkills = [

  { value: "COMUNICACAO", label: "Comunicação" },
  { value: "ENGENHARIA_REDES", label: "Inteligência emocional" },
  { value: "REACTJS", label: "Trabalho em equipe" },

  // useEffect(() => {
  //   async function fetchHardSkills() {
  //     const response = await api.get('/skills/hard');
  //     setCards(response.data);
  //   }
  //   fetchStudents();
  // }, []),

]

export const MultiSelect = () => {
  const [selectedTrails, setSelectedTrails] = useState([]);
  const [selectedEducationLevels, setSelectedEducationLevels] = useState([]);
  const [selectedHardSkills, setSelectedHardSkills] = useState([]);
  const [selectedSoftSkills, setSelectedSoftSkills] = useState([]);

  const handleSelect = () => {
    console.log(selectedTrails);
    console.log(selectedEducationLevels);
    console.log(selectedHardSkills);
    console.log(selectedSoftSkills);
  };

  return (
    <div className="container">
        <Select
          // defaultValue={[options[0], options[0]]}
          components={animatedComponents}
          options={trails}
          onChange={(item) => setSelectedTrails(item)}
          className="select"
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          isLoading={false}
          isRtl={false}
          closeMenuOnSelect={false}
        />
  
        <Select
          components={animatedComponents}
          isMulti
          options={educationLevels}
          onChange={(item) => setSelectedEducationLevels(item)}
          className="select"
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          isLoading={false}
          isRtl={false}
          closeMenuOnSelect={false}
        />
  
        <Select
          components={animatedComponents}
          isMulti
          options={hardSkills}
          onChange={(item) => setSelectedHardSkills(item)}
          className="select"
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          isLoading={false}
          isRtl={false}
          closeMenuOnSelect={false}
        />
  
        <Select
          components={animatedComponents}
          isMulti
          options={softSkills}
          onChange={(item) => setSelectedSoftSkills(item)}
          className="select"
          isClearable={true}
          isSearchable={true}
          isDisabled={false}
          isLoading={false}
          isRtl={false}
          closeMenuOnSelect={false}
        />
      
      <button className ="btn" onClick={handleSelect}>Filtrar</button>
    
    </div>

  );
};