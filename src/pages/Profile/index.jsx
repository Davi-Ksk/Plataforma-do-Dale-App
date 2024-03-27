// index.jsx (Profile)

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStudentData } from "./api";
import { Container, ProfileInfo, ProfileImage, Biography, Habilidades, Competencias, EducationLevel } from "./style";
import Navbar from "../../components/Navbar"; // Importando o Navbar
import Tags from "../../components/Tags/Tags";

export function Profile() {
    
    const [studentData, setStudentData] = useState(null);
    const { studentId } = useParams();

    useEffect(() => {
        fetchStudentData(studentId)
            .then(data => setStudentData(data))
            .catch(error => console.error('Erro ao buscar dados do aluno:', error));
    }, [studentId]);

    if (!studentData) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Navbar /> {/* Adicionando o Navbar aqui */}
            <Container>
                <ProfileInfo>
                    <ProfileImage src={studentData.profilePicture} />
                    <div>
                        <h2>{studentData.name}</h2>
                        <div>
                            <p><strong className="green">//</strong><strong>Idade:</strong> {studentData.age} anos</p>
                            <p><strong className="green">//</strong><strong>Trilha:</strong> {studentData.gcTrail}</p>
                            <p><strong className="green">//</strong><strong>Cidade:</strong> {studentData.city}</p>
                        </div>
                    </div>
                </ProfileInfo>
                <Biography>
                    <div>
                        <h3>Biografia</h3>
                        <div>
                            <p>{studentData.biography}</p>
                        </div>
                    </div>
                </Biography>
                <EducationLevel>
                    <div>
                        <h3>Educação</h3>
                        <div>
                            <p><strong>Graduação:</strong> {studentData.educationLevel}</p>
                            <p><strong>Curso:</strong> {studentData.course}</p>
                            <p><strong>Instituição:</strong> {studentData.courseInstitution}</p>
                            <p><strong>Conclusão:</strong> {studentData.yearOfCourseCompletion}</p>
                        </div>
                    </div>
                </EducationLevel>
                <Habilidades>
                    <div>
                        <h3>Habilidades</h3>
                        <div>
                            {studentData.hardSkills.map(skill => (
                                <Tags key={skill.id}>{skill.description}</Tags>
                            ))}
                        </div>
                    </div>
                </Habilidades>
                <Competencias>
                    <div>
                        <h3>Competências</h3>
                        <div>
                            {studentData.softSkills.map(skill => (
                                <Tags key={skill.id}>{skill.description}</Tags>
                            ))}
                        </div>
                    </div>
                </Competencias>
            </Container>
        </>
    );
}



