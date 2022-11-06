import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Home() {
  return (
    <>
    <Helmet>
      <title>Counter App - AltSchool Africa Second Semester Examination </title>
      <meta name="description" content=" Setup a custom counter hook with increment, decrement, reset, setValue functions with a valid UI and Implement a combination of states with a useReducer that implements a counter with the four evident features in the custom hook -  increment, decrement, reset, setValue." />
      <link rel="canonical" href="https://counter-app-alpha-one.vercel.app/" />
    </Helmet>
    <Body>
      <Head>AltSchool Africa Second Semester Examination</Head>
      <div>
        <Ques>Question 2:</Ques>
        <P className="p">
          Setup a custom counter hook with increment, decrement, reset, setValue functions with a valid UI and Implement a combination of states with a useReducer that implements a counter with the four evident features in the custom hook -  increment, decrement, reset, setValue. Implement a page for the <Link to={'/counter1'}>custom hook</Link>, <Link to={'/counter2'}>useReducer</Link>, <Link to={'/non-existing-url'}>404</Link>, and a page to test <Link to={'/errorBoundary'}>error boundary</Link> and good SEO.
        </P>
      </div>
    </Body>
    </>
    
  )
}

const Body = styled.div`
width: 80%;
margin: 50px auto;

@media (max-width: 868px) {
 margin:30px auto;
}
@media (max-width: 520px) {
 margin:10px auto;
 width: 90%;
}

`

const Head = styled.h1`
font-family: Ebold;
text-align: center;
text-shadow: 0.5px 0.5px 2px black;
@media (max-width: 520px) {
font-size: 20px;
}
`
const Ques = styled.h2`
margin-top: 80px;
text-align: center;
@media (max-width: 868px) {
  margin-top: 50px;
}
@media (max-width: 520px) {
font-size: 14px;
}
`
const P = styled.p`
font-family: Elight;
color: white;
margin: 20px auto;
width: 70%;
text-align: justify;
font-size: 18px;
line-height: 26px;

@media (max-width: 520px) {
  width: 90%;
  margin: 10px auto;
  font-size: 12px;
  line-height: 20px;
}
`