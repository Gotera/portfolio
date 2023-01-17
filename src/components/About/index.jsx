import { SectionAbout, AboutInformation, AboutPhoto, AboutContainer, TextAbout, H1, Bolded, Refer, ContainerPhoto }  from './stylesAbout.ts';
import aboutBox from './IMG0201220WA0002.jpg'

function About() {
  return (
    
    <SectionAbout id='about'>
      <AboutContainer>
        <AboutInformation>
          <H1>
            Sobre Mim <Bolded>.</Bolded>
          </H1>
          <TextAbout>
            Olá! Meu nome é Orlando Medeiros da Silva e eu adoro criar coisas para a internet. Desde criança sempre me interessei em jogos, musicas, séries e filmes, por estar muito conectado a essa "realidade" virtual, me surgiu a vontade de bisbilhotar esse mundo gigantesco que se chama programação <Bolded>- eu detestei -</Bolded>
          </TextAbout>

          <TextAbout>
            Depois de um tempo, refletindo sobre <Bolded><Refer href='https://github.com/Gotera'> minhas aventuras </Refer></Bolded> nesse vasto mundo da tecnologia e acreditando ter tomado o caminho errado em alguma parte desta longa jornada, decidi dar outra chance. Dessa vez olhando por outro ponto de vista e tomando diferentes decisões.
          </TextAbout>

          <TextAbout>
            E hoje... Aqui estou. Expandindo meus horizontes, aprendendo cada dia mais coisas, carregando o aprendizado de diversas experiências e me aventurando cada vez mais.
          </TextAbout>
        </AboutInformation>

        <ContainerPhoto>

          <div className='AboutPhoto'>
            {/* <img src={ aboutBox } alt="My Face"/> */}
          </div>
          <div className="box"/>

        </ContainerPhoto>

        
      </AboutContainer>
    </SectionAbout>
    
  )
}

export default About;