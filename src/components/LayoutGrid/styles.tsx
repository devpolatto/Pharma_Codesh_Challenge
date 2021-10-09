import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 320px auto;
    grid-template-rows: 75px auto;
    // SB -> SideBar
    // HR -> Header
    // MN -> Main
    grid-template-areas: 
        'SB HR'
        'SB MN';
    height: 100vh;
    width: 100vw;
 
`;