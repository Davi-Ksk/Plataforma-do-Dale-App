// index.jsx
import React from "react";
import { Container, Navbar, ProfileInfo, ProfileImage, Biography, Habilidades, Competencias} from "./style";
// import {Tag} from "../../components/Tag";

export function Profile() {
    return (
        <Container>
            <Navbar>
                <h1>Navegação</h1>
            </Navbar>
            <ProfileInfo>
                <ProfileImage src="https://via.placeholder.com/200" alt="Foto do Aluno" />
                <div>
                    <h2>Davi Kraieski da Silva Sauro</h2>
                    <div>
                        <p><strong className="green">//</strong><strong>Idade:</strong> 20 anos</p>
                        <p><strong className="green">//</strong><strong>Trilha:</strong> Programação</p>
                        <p><strong className="green">//</strong><strong>Cidade:</strong> Porto Alegre</p>
                    </div>
                </div>
            </ProfileInfo>
            <Biography>
                <div>
                    <h3>Biografia</h3>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ullam voluptatem officia repudiandae, voluptate praesentium laudantium totam nostrum ipsum beatae in amet nihil inventore obcaecati dolores dignissimos iure soluta fuga!</p>
                    </div>
                </div>
            </Biography>
            <Habilidades>
                <div>
                    <h3>Habilidades</h3>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ullam voluptatem officia repudiandae, voluptate praesentium laudantium totam nostrum ipsum beatae in amet nihil inventore obcaecati dolores dignissimos iure soluta fuga!</p>
                    </div>
                </div>
            </Habilidades>
            <Competencias>
                <div>
                    <h3>Competências</h3>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ullam voluptatem officia repudiandae, voluptate praesentium laudantium totam nostrum ipsum beatae in amet nihil inventore obcaecati dolores dignissimos iure soluta fuga!</p>
                    </div>
                </div>
            </Competencias>
        </Container>
    );
}


