import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 15vh;
  color: #FFFFFE;
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    align-items: center;
    display: flex;
    padding: 18px 0;
  }

  img {
    width: 250px;
  }

    @media only screen and (max-width: 768px) {
      height: 100%;
      width: 100%;
      padding: 0 0px;
      align-items: center;
      display: flex;

      img {
        width: 200px;
      }
  }
`;

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  z-index: 8;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  li {
    padding: 18px 10px;

    a {
      text-decoration: none;
      color: #8892B0;
    }
  }

 
.button-23 {
  background-color: black;
  color: #1A41DC;
  border: 1px solid #1A41DC;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 13px 23px;
  text-decoration: none;
  width: auto;
  box-shadow: pink 1px solid;
}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0F193B;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 7;

    li {
      color: #fff;
    }
  }
`

export const StyledBurguer = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 15px;
  z-index: 9;
  display: none;
  visibility: visible;
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#143232' : '#80CCC8'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 9;
    
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

  @media (max-width: 768px) {

    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

export const Bolded = styled.b`
    color: #1a41dc;
    font-family: 'Roboto','Nunito', sans-serif;
`



