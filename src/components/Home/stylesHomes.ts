import styled from 'styled-components'

export const SectionHome = styled.div`
    height: 85vh;
    color: #A730CA;
    /* background-color: #5F1B72; */
    padding: 235px 150px;
    background-image: url('/assets/home/Asteroids.mp4');
    background-size: cover;

    @media (max-width: 768px) {
        padding: 200px 25px;
    }
`

export const HomeInformation = styled.div`
    display: inline-block;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const TitleHome = styled.h1`
    font-size: 16px;
`





