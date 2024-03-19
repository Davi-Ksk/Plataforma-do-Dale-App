import { Container } from "./styles";
import { PiStarFourFill, PiLinkedinLogo,   } from "react-icons/pi";
import { Tag } from "../../components/Tag";

import { useState } from 'react';

export function Card() {
    return (
        <Container>
            <div className="icons">
                <PiStarFourFill />
            </div>

            <img src="https://drive.google.com/thumbnail?id=1yOoL5tDu-M7tzz0KZ4d7w9ifPrDCpulg" alt="" />

            <div className="name-age">
                <h1 id="name">Davi Kraieski da Silva Sauro</h1><p id="age">, 21</p>
            </div>
            <p id="city">Porto Alegre, RS</p>

            <div className="education">
                <p id="gc-trail">Programação</p>
                <p id="education-level">Ensino Superior Incompleto</p>
                <p id="course">Análise e desenvolvimento de Sistemas</p>
            </div>

            <div className="tags-container">
                <p>Habilidades</p>
                <div className="tags">
                    <Tag title="Marketing de conteúdo" />
                    <Tag title="Conhecimento em ferramentas de design (Adobe XD, Sketch, Figma)" />
                </div>
            </div>
            <div className="tags-container">
                <p>Competências</p>
                <div>
                <Tag title="Marketing de conteúdo" />
                    <Tag title="Conhecimento em ferramentas de design (Adobe XD, Sketch, Figma)" />
                </div>
            </div>

            <div className="links">
                <PiLinkedinLogo />
            </div>

        </Container>
    );
}