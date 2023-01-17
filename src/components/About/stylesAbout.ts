import styled from 'styled-components'

export const SectionAbout = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0F193B;
    padding: 0px 150px;

    @media only screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
        padding: 30px;
    }

`
export const AboutContainer = styled.div`
    height: auto;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const AboutInformation = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    font-size: 20px;
    line-height: 1.3;
    color: #8892B0;

    @media only screen and (max-width: 768px) {
        padding-right: 0px;
        font-size: 18px;
    }
`

export const TextAbout = styled.p`

    padding-bottom: 25px;

    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 30px;
    }
`

export const ContainerPhoto = styled.div`
    .AboutPhoto {
        width: 300px;
        height: 300px;
        background-color: black;
        position: absolute;
        
        img {
            width: 300px;
            height: 300px;
        }
    }

    .box {
        width: 300px;
        height: 300px;
        margin: 45px;
        border: 1px solid red;
        background-color: pink;
    }
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