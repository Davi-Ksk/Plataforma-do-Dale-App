import { Container } from "./styles.js";
import { Card } from "../../components/Card";
import { api } from '../../services/api';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Home() {

  const [cards, setCard] = useState([]);
  const navigate = useNavigate();

  function handleProfile(id) {
      navigate(`/profile/${id}`);
  }

  useEffect(() => {
    async function fetchStudents() {
      const response = await api.get('/students');
      setCard(response.data);
    }
    fetchStudents();
  }, []);

  return (
    <Container>
        {
          cards.map(card => (
            <Card
              key={String(card.id)}
              data={card}
              onClick={() => handleProfile(card.id)}
            />

          ))

        }
    </Container>
  )
}