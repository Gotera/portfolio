import { Ul, Bolded } from './stylesHeader';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <Link
          to='about'
          smooth={true}
          duration={1000}
        >
          <Bolded>Sobre</Bolded>
        </Link>
      </motion.li>

      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <Link
          to='works'
          smooth={true}
          duration={1000}
        >
          Trabalhos
        </Link>
      </motion.li>

      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        <Link
          to='contact'
          smooth={true}
          duration={1000}
        >
          Contato
        </Link>
      </motion.li>


      <a href='https://drive.google.com/file/d/1F79vtjNhh67SNBdXf29znYzs5UrJWIVj/view?usp=sharing'
      target="_blank"
      rel="noreferrer"
      >
        <button class="button-23" role="button">Resumo</button>
      </a>

    </Ul>
  )
}

export default RightNav