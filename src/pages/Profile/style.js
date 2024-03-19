// style.js
import styled from "styled-components";
import font from '../../styles/fonts';

const fontFamily = font.FONTS;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const Navbar = styled.nav`
    background-color: black;
    width: 100%;
    padding: 10px 0;
    text-align: center;

    h1 {
        color: white;
        font-family: ${fontFamily.FONT_100};
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 20px;
    text-align: left;

    h2 {
        font-family: ${fontFamily.FONT_100};
        text-align: center;
        margin-bottom: 40px;
    }

    > div {
        text-align: left;
        width: 90%;
    }

    p {
        font-family: ${fontFamily.FONT_100};
        margin: 5px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    strong {
        margin-right: 5px;
    }

    strong.green {
        color: ${props => props.theme.COLORS.HIGHLIGHT_300};
    }
`;

export const ProfileImage = styled.img`
    width: 200px;
    max-width: 200px;
    height: 200px;
    object-fit: cover; /* Mantém a proporção da imagem */
    object-position: top; /* Enquadra a imagem para cima */
    border-radius: 50%;
    margin-bottom: 15px;
    border: 1px solid;
`;

export const Biography = styled.p`
    font-family: ${fontFamily.FONT_100};
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    max-width: 350px;
    word-wrap: break-word;

    h3 {
        font-family: ${fontFamily.FONT_100};
        text-align: left;
        margin-bottom: 20px;
    }
`;

export const Habilidades = styled.p`
    font-family: ${fontFamily.FONT_100};
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    max-width: 350px;
    word-wrap: break-word;

    h3 {
        font-family: ${fontFamily.FONT_100};
        text-align: left;
        margin-bottom: 20px;
    }

    p {
        border: 1px solid;
        border-radius: 6px;
    }
`;

export const Competencias = styled.p`
    font-family: ${fontFamily.FONT_100};
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    max-width: 350px;
    word-wrap: break-word;

    h3 {
        font-family: ${fontFamily.FONT_100};
        text-align: left;
        margin-bottom: 20px;
    }

    p {
        border: 1px solid;
        border-radius: 6px;
    }
`;

export const EducationLevel = styled.p`
    font-family: ${fontFamily.FONT_100};
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    max-width: 350px;
    word-wrap: break-word;

    h3 {
        font-family: ${fontFamily.FONT_100};
        text-align: left;
        margin-bottom: 20px;
    }
`;