import React from 'react'
import { Ul, Bolded } from './stylesHeader';

const RightNav = ({ open }) => {
  return (
    <Ul open={ open }>
        <li><Bolded>Home</Bolded></li>
        <li>About</li>
        <li>Contact</li>
    </Ul>
  )
}

export default RightNav