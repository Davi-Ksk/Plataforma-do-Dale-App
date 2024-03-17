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
    }

    > div {
        text-align: left;
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
`;

export const ProfileImage = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 50%;
    margin-bottom: 20px;
`;

