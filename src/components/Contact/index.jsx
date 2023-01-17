import React from 'react'
import { Bolded } from '../Nav/stylesHeader'
import { SectionContact, SocialContainer } from './stylesContact'
import { BsGithub, BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>

    <SectionContact id="contact">
        <h2>
            Entre em Contato <Bolded>!</Bolded>
        </h2>
        <h2> Vamos trabalhar juntos</h2>
            <SocialContainer >
                <a href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                        <motion.h3
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                        >
                            <BsGithub />
                            <h4>Git Hub</h4>
                        </motion.h3>
                    </span>
                </a>

                <a href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                    <motion.h3
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                        >
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                    </motion.h3>
                    </span>
                </a>

                <a href='https://www.instagram.com/uorlandomedeiross/' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                    <motion.h3
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                        >
                        <BsInstagram />
                        <h4>Instagram</h4>
                    </motion.h3>
                    </span>
                </a>

                <a href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>    
                    <motion.h3
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                        >
                            <BsLinkedin/>
                            <h4>Linkedin</h4>
                        </motion.h3>
                    </span>
                </a>

                <a href='mailto:orlandomedeiros.junior@gmail.com' 
>
                    <span>    
                    <motion.h3
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                        >
                            <AiOutlineMail/>
                            <h4>Email</h4>
                        </motion.h3>
                    </span>
                </a>
            
            </SocialContainer>
    </SectionContact>
    </>
  )
}

export default Contact