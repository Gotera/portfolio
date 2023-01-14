import styled from 'styled-components'

export const SectionAbout = styled.div`
    height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0F193B;
    padding: 0px 150px;

    @media (max-width: 768px) {
        padding: 0px 0px;
    }

`
export const AboutContainer = styled.div`
    height: auto;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        padding: 0px 0px;
    }
`

export const AboutInformation = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    font-size: 20px;
    line-height: 1.3;
    color: #8892B0;
`

export const TextAbout = styled.p`
    width: 510px;
    padding-bottom: 30px;
`

export const AboutPhoto = styled.div`
    width: 300px;
    height: 300px;
    background-color: black;

    justify-content: center;
    align-items: center;
`

export const H1 = styled.h1`
    padding-bottom: 30px;
`

export const Bolded = styled.b`
    color: #1a41dc;
    font-family: 'Roboto','Nunito', sans-serif;
`

export const Refer = styled.a`
    color: #1a41dc;
    text-decoration: none;
`

// glowing color: 0A1954