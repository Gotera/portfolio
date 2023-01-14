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
    padding-bottom: 30px;

    @media (max-width: 768px) {
        padding: 0px 0px;
    }
`

export const H1 = styled.h1`
    color: #8892B0;
    padding-top: 20px;
    font-size: 40px;
`

export const H2 = styled.h2`
    color: #8892B0;
    padding-top: 5px;
    padding-bottom: 30px;
    font-size: 15px;
`

export const WorksContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Box = styled.div`
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 5px;


    img {
        object-fit: cover;
        width: 300px;
    }

    &:nth-child(1) {
        display: flex;
    }

    &:nth-child(2) {
        display: flex;
        justify-content: end;
    }

    &:nth-child(3) {
        display: flex;
        border: 1px solid red;
    }
`

export const ContentDiv = styled.div`
    padding: 8px;
    background-color: #0C142F;
    
    h3 {
        color: #8892B0;
    }

    h4 {
        padding-top: 10px;
        font-size: 15px;
        color: #8892B0;
    }
`