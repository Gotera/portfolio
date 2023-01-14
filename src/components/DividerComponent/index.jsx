import React from 'react'
import { DividerContainer } from './stylesDivider'
import videoBgDivider from './Asteroids.mp4'

const Divider = () => {
  return (
    <DividerContainer>
       <video autoPlay loop muted id='myVideoBg' src={ videoBgDivider } />
    </DividerContainer>
  )
}

export default Divider