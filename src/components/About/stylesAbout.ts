import styled from 'styled-components'

export const SectionAbout = styled.div`
    height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0F193B;
    padding: 0px 150px;
    z-index: 3;

    @media only screen and (max-width: 768px) {
        max-width: 100vh;
        height: 1100px;
        padding: 30px;
    }
`
export const AboutContainer = styled.div`
    height: auto;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 1200px;

    }
`

export const AboutInformation = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    font-size: 20px;
    line-height: 1.3;
    color: #8892B0;
    z-index: 3;

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
        width: 300px;
        height: 300px;

    .AboutPhoto {
        width: 300px;
        height: 300px;
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
        border: 3px solid #1a41dc;
        background-color: #0F193B;
    }

    @media (max-width: 768px) {
        width: 250px;
        height: 250px;

        .AboutPhoto {
            width: 250px;
            height: 250px;
        
        img {
            width: 250px;
            height: 250px;
        }
    }
    .box {
        width: 250px;
        height: 250px;
        margin: 10px;
    }
    }

`

export const H1 = styled.h1`
    padding-bottom: 30px;
    z-index: 3;
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