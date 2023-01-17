import Typewriter from 'typewriter-effect'
import './typeWriterStilization.css'
import { SectionHome, HomeInformation, TitleHome }  from './stylesHomes';
import videoBg from './SpaceShuttle.mp4'

function Home() {
    return (
        <SectionHome>
            <HomeInformation>
                <TitleHome>
                    Olá, meu nome é
                </TitleHome>
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString("Orlando Medeiros")
                        .start()
                    }}
                />
            </HomeInformation>
            <video autoPlay loop muted id='myVideo' src={ videoBg } />
        </SectionHome>
    )
  }
  
  export default Home;