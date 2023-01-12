import Typewriter from 'typewriter-effect'
import './typeWriterStilization.css'
import { SectionHome, HomeInformation, TitleHome, Bolded }  from './stylesHomes';
import videoBg from './SpaceShuttle.mp4'

function Home() {
    return (
        <SectionHome>
            <HomeInformation>
                <TitleHome>
                    Hi, my name is 
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