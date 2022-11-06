import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export default function NotFound() {
  return (
    <>
      <ErrorDiv>

        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
        </Svg>

        <Side>
          <Head>404</Head>
          <h2>LOOKS LIKE YOU'RE LOST...</h2>
          <p>The page you are looking for is not available</p>
          <Home><Link className='hover' to='/'><span>GO TO HOME</span> <Svg small xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
          </Svg>
          </Link></Home>
        </Side>

      </ErrorDiv>
    </>
  )
}

const ErrorDiv = styled.div`
margin: 30px auto;
width: 80%;
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;
@media (max-width: 500px) {
  grid-template-columns: 1fr;
 text-align: center;
}
`

const Svg = styled.svg`
width: 60%;
align-self: center;
@media (max-width: 768px) {
  width: 80%;
}
@media (max-width: 500px) {
  display: none;
}

${p=>p.small && css`
width: 24px;
@media (max-width: 768px) {
  width: 24px;
}
`}
`

const Side = styled.div`
display: grid;
grid-template-rows: 3fr .4fr 1fr auto;
justify-self: flex-start;
@media (max-width: 768px) {
  grid-template-rows: 2.5fr .4fr 1fr auto;
  font-size: small;
}

`
const Head= styled.h1`
font-size: 140px;
@media (max-width: 768px) {
  font-size: 80px;
}
`
const Home= styled.div`
font-size: 24px;
font-family: Ebold;
@media (max-width: 600px) {
  font-size: 20px;
}
`