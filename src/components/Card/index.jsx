import React from "react";
import { Container } from "./styles";
import { PiStarFourFill, PiLinkedinLogo } from "react-icons/pi";
import { Tag } from "../../components/Tag";
import { useNavigate } from 'react-router-dom';

export function Card({ data, onClick }) {
    const navigate = useNavigate();
  
    const handleProfileClick = () => {
      onClick(data.id);
    };
  
    return (
      <Container onClick={handleProfileClick}>
        <img src={data.profilePicture} alt="" />
        <div className="name-age">
          <h1 id="name">{data.name}</h1>
          <p id="age">, {data.age}</p>
        </div>
        <p id="city">{data.city}</p>
        <div className="education">
          <p id="gc-trail">{data.gcTrail}</p>
          <p id="education-level">{data.educationLevel}</p>
          <p id="course">{data.courseInstitution}</p>
          <p id="course-completion">{data.yearOfCourseCompletion}</p>
        </div>
        <div className="links">
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <PiLinkedinLogo />
          </a>
        </div>
      </Container>
    );
  }
