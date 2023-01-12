import styled from 'styled-components'

export const SectionWorks = styled.div`
    height: 100vh;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0F193B;
    padding: 0px 150px ;

    @media (max-width: 768px) {
        padding: 0px 0px;
    }
`

export const H1 = styled.h1`
    color: #8892B0;
    padding-bottom: 30px;
    font-size: 25px;
`

export const WorksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: blueviolet;
    height: 70vh;
    width: 900px;
`