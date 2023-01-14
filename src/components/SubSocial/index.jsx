import { BsGithub, BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { SubSocial, SubLine } from './stylesSubSocial'

const Line = () => {
  return (
    <SubSocial>
        <ul>
            <li>
                <a 
                    href='https://www.linkedin.com/in/orlandomedeirosdasilva/' 
                    target="_blank"
                    rel='noopener noreferrer'>
                    <BsLinkedin />
                </a>
            </li>

            <li>
                <a 
                    href='https://api.whatsapp.com/send?phone=554896891432&text=Ola,%20me%20chamo%20Orlando,%20se%20quiseres%20falar%20comigo,%20fique%20a%20vontade%20para%20me%20chamar' 
                    target="_blank"
                    rel='noopener noreferrer'>
                    <BsWhatsapp />
                </a>
                    
            </li>
            <li>
                <a 
                    href='https://www.instagram.com/uorlandomedeiross/' 
                    target="_blank"
                    rel='noopener noreferrer'>
                    <BsInstagram />
                </a>
                        
            </li>
            <li>
                <a 
                    href='https://github.com/Gotera' 
                    target="_blank"
                    rel='noopener noreferrer'>
                    <BsGithub />
                </a>
            </li>
        </ul>
        <SubLine />
    </SubSocial>
  )
}

export default Line