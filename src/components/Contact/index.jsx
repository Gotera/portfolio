import React, { useEffect } from 'react'
import { Bolded } from '../Nav/stylesHeader'
import { SectionContact, SocialContainer, ToImg } from './stylesContact'
import { BsGithub, BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
        },[])
    
  return (
    <ToImg>
    <SectionContact id="contact">
        <h2 data-aos="fade-up" >
            Entre em Contato 
        </h2>
        <h2 data-aos="fade-up" > Vamos trabalhar juntos <Bolded>!</Bolded></h2>
            <SocialContainer>
                <a 
                data-aos="fade-right"
                href='https://github.com/Gotera' 
                target="_blank"
                rel='noopener noreferrer'>
                    <span>
                        <motion.h3
                            whileHover={ { scale: 1.1 } }
                            whileTap={ { scale: 0.9 } }
                        >
                            <BsGithub />
                            <h4>GitHub</h4>
                        </motion.h3>
                    </span>
                </a>

                <a 
                data-aos="fade-left"
                href='https://api.whatsapp.com/send?phone=554896891432&text=Ola,%20me%20chamo%20Orlando,%20se%20quiseres%20falar%20comigo,%20fique%20a%20vontade%20para%20me%20chamar' 
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

                <a 
                data-aos="fade-right"
                href='https://www.instagram.com/uorlandomedeiross/' 
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

                <a 
                data-aos="fade-left"
                href='https://www.linkedin.com/in/orlandomedeirosdasilva/' 
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

                <a 
                data-aos="fade-right"
                href='mailto:orlandomedeiros.junior@gmail.com' 
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
    <img src='/assets/logomyContact.png'/>
    </ToImg>
  )
}

export default Contact