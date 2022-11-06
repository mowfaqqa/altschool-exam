import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


export default function Navbar() {

  const [hamburger, setHamburger] = useState(true)

  return (
    <div>
      <Nav>
        <Link to={'/'}><Logo src='/alt.png' alt="logo" /></Link>
        <Navs className='navs'>
          <NavLink to='/' end className={({ isActive }) => (isActive && 'link')}>Home</NavLink>

          <NavLink to='/counter1' className={({ isActive }) => (isActive && 'link')}>Counter 1</NavLink>

          <NavLink to='/counter2' className={({ isActive }) => (isActive && 'link')}>Counter 2</NavLink>

          <NavLink to='/errorBoundary' className={({ isActive }) => (isActive && 'link')}>Error Boundary</NavLink>

        </Navs>

        {hamburger ? (<Svg onClick={() => setHamburger(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </Svg>) : <Svg onClick={() => setHamburger(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </Svg>}
      </Nav>

      {<Hnavs className={hamburger ? 'hnavs noshow' : 'hnavs show'}>
        <NavLink to='/' end className={({ isActive }) => (isActive && 'hlink')} onClick={() => setHamburger(true)}>Home</NavLink>

        <NavLink to='/counter1' className={({ isActive }) => (isActive && 'hlink')} onClick={() => setHamburger(true)}>Counter 1</NavLink>

        <NavLink to='/counter2' className={({ isActive }) => (isActive && 'hlink')} onClick={() => setHamburger(true)}>Counter 2</NavLink>

        <NavLink to='/errorBoundary' className={({ isActive }) => (isActive && 'hlink')} onClick={() => setHamburger(true)}>Error Boundary</NavLink>
      </Hnavs>}

    </div>
  )
}

const Logo = styled.img`
width: 120px;
height: 68px;
@media (max-width: 868px) {
  width: 100px;
  height: 57px;
}
@media (max-width: 520px) {
 width: 80px;
 height: 45.5px;
}
`
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 40px 30px;
z-index: 1;
position: relative;
@media (max-width: 868px) {
  padding: 25px 15px;
}
@media (max-width: 520px) {
  padding: 20px 10px;
}
`
const Navs = styled.div`
display: flex;
flex-basis: 50%;
justify-content: space-around;
font-size: 19px;
font-family: Ebold;
align-self: flex-end;

@media (max-width: 868px) {
  display: none;
}
`
const Hnavs = styled.div`
position: fixed;
top: 0;
left: 0;
padding-top: 120px;
height: 100%;
width: 100%;
z-index: 0;
backdrop-filter: blur(5px);
display: none;
grid-template-rows: repeat(4,70px);
text-align: center;
font-size: 24px;
transition: .5s;
font-family: Ebold;
@media (max-width: 868px) {
  display: grid;
}
@media (max-width: 520px) {
  font-size: 18px;
  grid-template-rows: repeat(4,50px);
}
`
const Svg = styled.svg`
width: 35px;
display: none;
cursor: pointer;
@media (max-width: 868px) {
  display: unset;
}
@media (max-width: 520px) {
  width: 30px;
}
`