import React from 'react'
import { Bolded } from '../Nav/stylesHeader'
import { SectionContact, SocialContainer } from './stylesContact'
import { BsGithub, BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  return (
    <SectionContact>
        <h2>
            Entre em Contato <Bolded>!</Bolded>
        </h2>
        <h2> Vamos trabalhar juntos</h2>
            <SocialContainer >
                <a href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                        <h3>
                            <BsGithub />
                            <h4>Git Hub</h4>
                        </h3>
                    </span>
                </a>

                <a href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                    <h3>
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                    </h3>
                    </span>
                </a>

                <a href='https://www.instagram.com/uorlandomedeiross/' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                    <h3>
                        <BsInstagram />
                        <h4>Instagram</h4>
                    </h3>
                    </span>
                </a>

                <a href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>    
                        <h3>
                            <BsLinkedin/>
                            <h4>Linkedin</h4>
                        </h3>
                    </span>
                </a>
            
            </SocialContainer>
    </SectionContact>
  )
}

export default Contact