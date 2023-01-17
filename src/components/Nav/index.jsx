import Burguer from './Burguer';
import { GoPrimitiveDot } from 'react-icons/go'
import { Bolded, Nav }  from './stylesHeader';
import logo from './logomy.png'

function Header() {
  return (
      <Nav>
        <div className="logo">
          <img src={ logo } />
        </div>
        <Burguer />
      </Nav>
  )
}

export default Header;