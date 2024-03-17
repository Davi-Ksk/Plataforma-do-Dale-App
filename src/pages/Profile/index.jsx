// index.jsx
import React from "react";
import { Container, Navbar, ProfileInfo, ProfileImage } from "./style";

export function Profile() {
    return (
        <Container>
            <Navbar>
                <h1>Navegação</h1>
            </Navbar>
            <ProfileInfo>
                <ProfileImage src="../../assets/images/" alt="Foto do Aluno" />
                <div>
                    <h2>Nome do Aluno</h2>
                    <div>
                        <p><strong>Idade:</strong> 20 anos</p>
                        <p><strong>Formação:</strong> Ensino Médio</p>
                        <p><strong>Curso:</strong> Programação</p>
                        <p><strong>Contato:</strong> exemplo@email.com</p>
                    </div>
                </div>
            </ProfileInfo>
        </Container>
    );
}

