// index.jsx
import React from "react";
import { Container, Navbar, ProfileInfo, ProfileImage, Biography, Habilidades, Competencias, EducationLevel} from "./style";
import Tags from "../../components/Tags/Tags";
export function Profile() {
    return (
        <Container>
            <Navbar>
                <h1>Navegação</h1>
            </Navbar>
            <ProfileInfo>
                <ProfileImage src="https://drive.google.com/thumbnail?id=11SySSw4RTRP0TGeh0UwZw9ZueuxyIsxh" />
                <div>
                    <h2>Eduardo Fetterman Porto da Silva</h2>
                    <div>
                        <p><strong className="green">//</strong><strong>Idade:</strong> 18 anos</p>
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
            <EducationLevel>
                <div>
                    <h3>Educação</h3>
                    <div>
                        <p><strong>Graduação:</strong> Superior - Em andamento</p>
                        <p><strong>Curso:</strong> Análise e Desenvolvimento de Sistemas</p>
                        <p><strong>Institução:</strong> Unissinos</p>
                        <p><strong>Conclusão:</strong> 2026</p>
                    </div>
                </div>
            </EducationLevel>
            <Habilidades>
                <div>
                    <h3>Habilidades</h3>
                    <div>
                    <Tags>Python</Tags>
                    <Tags>SQL</Tags>
                    <Tags>Java</Tags>
                    </div>
                </div>
            </Habilidades>
            <Competencias>
                <div>
                    <h3>Competências</h3>
                    <div>
                    <Tags>Comunicação</Tags>
                    <Tags>Liderança</Tags>
                    <Tags>Trabalho em Equipe</Tags>
                    </div>
                </div>
            </Competencias>
        </Container>
    );
}


