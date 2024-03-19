import React from 'react';
import styled from 'styled-components';
import font from '../../styles/fonts';

const fontFamily = font.FONTS;


const Tag = styled.span`
    display: inline-block;
    margin-right: 5px;
    padding: 2px 5px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: ${props => props.theme.COLORS.HIGHLIGHT_300};
    font-size: 1rem;
    color: black;
    font-family: ${fontFamily.FONT_100};
    
    
`;

function CompetenciaTag({ children }) {
    return <Tag>{children}</Tag>;
}

export default CompetenciaTag;
