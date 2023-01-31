import styled from 'styled-components'

export const SectionHome = styled.div`
    height: 85vh;
    color: #A730CA;
    padding: 235px 150px;
    background-size: cover;

    video{
        width: 100%;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -2;
    }

    .Typewriter {    
        font-size: 80px;
        color: #FFFFFE;
}

    @media (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        padding: 255px 30px;


        .Typewriter {  
            font-size: 35px;
            width: 200px;
        }

        video {
            width: 100%; 
            height: 100vh;
            z-index: -4;
            object-fit: cover;
            position: absolute;
            object-position: 66% 200px;
        }
    }
`

export const HomeInformation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const TitleHome = styled.h1`
    font-size: 16px;
    color: #193FD5;
`




