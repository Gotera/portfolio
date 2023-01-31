import React, { useState } from 'react';
import RightNav from './RightNav';
import { StyledBurguer } from './stylesHeader';

const Burguer = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurguer open={ open } onClick={() => setOpen(!open)}>
        <div ></div>
        <div ></div>
        <div ></div>
      </StyledBurguer> 
      <RightNav open={ open }/>
    </>
  )
}

export default Burguer