import { useState } from "react"
import { Reset, SVG, Count, Counter, Head, Body } from '../styles/styles'
import { Helmet } from "react-helmet-async";

export default function ErrorBoundary() {

  const [value, setValue] = useState(0)

  //throw error
  if (value > 5) {
    throw new Error('error')
  }

  const increment = () => {
    setValue(prev => prev + 1)
  }

  const decrement = () => {
    if (value <= 0) return
    setValue(prev => prev - 1)
  }

  const reset = () => {
    setValue(0)
  }

  const disable = value <= 0

  return (
    <>
      <Helmet>
        <title>Counter App | Error boundary testing page - AltSchool Africa Second Semester Examination</title>
        <meta name="description" content=" Setup a custom counter hook with increment, decrement, reset, setValue functions with a valid UI and Implement a combination of states with a useReducer that implements a counter with the four evident features in the custom hook -  increment, decrement, reset, setValue." />
        <link rel="canonical" href="https://counter-app-alpha-one.vercel.app/errorBoundary" />
      </Helmet>

      <Body>
        <Head>Error Boundary Counter</Head>
        <Head small>Warning! This counter cannot exceed 5</Head>
        <Counter>
          <Count>
            <SVG className={disable ? 'disable' : 'hover'} onClick={decrement} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </SVG>
            <div>{value}</div>
            <SVG onClick={increment} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="hover">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </SVG>
          </Count>
          <Reset onClick={reset} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="hover">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </Reset>
        </Counter>
      </Body>
    </>


  )
}
