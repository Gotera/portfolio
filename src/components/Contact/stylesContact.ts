import styled from "styled-components";

export const SectionContact = styled.div`
    height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0F193B;
    padding: 0px 150px;
    

    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 0px 0px;
    }

    h2:nth-child(1){
        color: #8892B0;
        font-size: 40px;
    }
    h2:nth-child(2){
        color: #8892B0;
        padding-bottom: 30px;
    }
    h3{
        display: flex;
    }
    h4 {
        padding-left: 4px;
    }
`

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a{
        padding-top: 8px;
        text-decoration: none;
        color: #8892B0;
        font-size: 20px;
    }
    a:hover {
        color: #1a41dc;
    }

`

