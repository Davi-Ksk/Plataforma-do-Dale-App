import { Container } from "./styles";
import { PiDotOutlineFill } from "react-icons/pi";

export function Tag({ title, ...rest }) {
    return (
        <Container {...rest}>
            <PiDotOutlineFill />
            {title}
        </Container>
    );
}