import { Container } from "./styles";
import { PiFunnelSimple, PiList } from "react-icons/pi";

export function Nav() {
  return (
    <Container>
      <PiList size={24} />
      <PiFunnelSimple size={24} />
    </Container>
  );
}