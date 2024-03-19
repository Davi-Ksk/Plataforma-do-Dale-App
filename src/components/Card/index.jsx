import { Container } from "./styles";
import { PiStarFourFill, PiLinkedinLogo,   } from "react-icons/pi";
import { Tag } from "../../components/Tag";
import { useNavigate } from 'react-router-dom';

import { useEffect } from "react";
import { useState } from 'react';

export function Card({ data, onClick, ...rest}) {


    // useEffect(() => {
        
    //     // async function fetchStudents() {
    //     //     const response = await api.get(`/studenrs?title=${search}&tags=${tagsSelected}`);
    //     //     setNotes(response.data);
    //     // }

    //     fetchNotes();


    return (
        <Container onClick={onClick}>
            {/* <div className="icons">
                <PiStarFourFill />
            </div> */}

            <img src={data.profilePicture} alt="" />

            <div className="name-age">
                {/* <h1 id="name">Davi Kraieski da Silva Sauro</h1><p id="age">, 21</p> */}
                <h1 id="name">{data.name}</h1><p id="age">, {data.age}</p>
            
            
            </div>
            {/* <p id="city">Porto Alegre, RS</p> */}
            <p id="city">{data.city}</p>

            <div className="education">
                <p id="gc-trail">{data.gcTrail}</p>
                <p id="education-level">{data.educationLevel}</p>
                <p id="course">{data.courseInstitution}</p>
                <p id="course-completion">{data.yearOfCourseCompletion}</p>
            </div>

            {/* <div className="tags-container">
                <p>Habilidades</p>

                    { 
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />) 
                    }

                        {/* <Tag title="Marketing de conteúdo" />
                        <Tag title="Conhecimento em ferramentas de design (Adobe XD, Sketch, Figma)" />
                        

            </div>
             
            <div className="tags-container">
                <p>Competências</p>

                    { 
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />) 
                    }
 
            </div>
            */}

            <div className="links">
                <a href={data.linkedin} target="_blank">
                    <PiLinkedinLogo />
                </a>
            </div>

        </Container>
    );
}