import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 1.2rem;
    padding: 0.1rem 0.3rem;
    border-radius: 5px;
    margin-right: 0.6rem;

    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    /* background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400}; */
`;