import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 15vh;
  color: #FFFFFE;
  /* background-color: #FFFFFE;
  border-bottom: 2px solid #47B2AC; */
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    align-items: center;
    display: flex;
    padding: 18px 0;
  }

  .dot {
    
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

export const StyledBurguer = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#143232' : '#80CCC8'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const Bolded = styled.b`
    color: #1a41dc;
    font-family: 'Roboto','Nunito', sans-serif;
`



