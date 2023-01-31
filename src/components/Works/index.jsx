/* eslint-disable jsx-a11y/alt-text */
import { SectionWorks, WorksContainer, H1, H2, Box, ContentDiv, ContainerBorder } from './works.ts'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Bolded } from '../Nav/stylesHeader'

const Works = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },[])

  return (
    <SectionWorks id="works">
        <H1 data-aos="fade-up"> Alguns Projetos Em Que Trabalhei </H1>
        <H2 data-aos="fade-up"> Vindo de uma Galaxia não muito distante</H2>
        <WorksContainer >
            <Box data-aos="fade-up">
              <ContainerBorder>
              <img src="https://etgeekera.files.wordpress.com/2015/11/fallout-4-please-stand-by.jpg"/>
                <ContentDiv >
                  <h3>Coming Soon <Bolded>.</Bolded></h3>
                  <h4>Work in Progress</h4>
                </ContentDiv>
              </ContainerBorder>
            </Box>
            <Box data-aos="fade-up">
              <ContainerBorder>

                <ContentDiv>
                  <h3>Coming Soon <Bolded>.</Bolded></h3>
                  <h4>Work in Progress</h4>
                </ContentDiv>
                <img src="https://etgeekera.files.wordpress.com/2015/11/fallout-4-please-stand-by.jpg"/>
              </ContainerBorder>
            </Box>
            <Box data-aos="fade-up">
              <ContainerBorder>
                <img src="https://etgeekera.files.wordpress.com/2015/11/fallout-4-please-stand-by.jpg"/>
                <ContentDiv>
                  <h3>Coming Soon <Bolded>.</Bolded></h3>
                  <h4>Work in Progress</h4>
                </ContentDiv>
              </ContainerBorder>
            </Box>

        </WorksContainer>
    </SectionWorks>
  )
}

export default Works
