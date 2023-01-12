import Burguer from './Burguer';
import { GoPrimitiveDot } from 'react-icons/go'
import { Bolded, Nav }  from './stylesHeader';

function Header() {
  return (
      <Nav>
        <div className="logo">
          Orlando <Bolded> <GoPrimitiveDot className='dot'/> </Bolded>
        </div>
        <Burguer />
      </Nav>
  )
}

export default Header;