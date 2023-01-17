import { Ul, Bolded } from './stylesHeader';
import { motion } from 'framer-motion'

const RightNav = ({ open }) => {
  return (
    <Ul open={ open }>
        <motion.li
          whileHover={ { scale: 1.1 } }
          whileTap={ { scale: 0.9 } }>
          <a href='#about'>
            <Bolded>Sobre</Bolded>
          </a>
        </motion.li>

        <motion.li          
          whileHover={ { scale: 1.1 } }
          whileTap={ { scale: 0.9 } }>
          <a href='#works'>Trabalhos</a>
        </motion.li>
        
        <motion.li          
          whileHover={ { scale: 1.1 } }
          whileTap={ { scale: 0.9 } }>
          <a href='#contact'>Contato</a>
        </motion.li>

        <motion.li         
          whileHover={ { scale: 1.1 } }
          whileTap={ { scale: 0.9 } }>
          <a className='LastA' href='#'>
            <button class="button-23" role="button">Resumo</button>
          </a>
        </motion.li>
    </Ul>
  )
}

export default RightNav