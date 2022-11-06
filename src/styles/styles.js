import styled, { css } from "styled-components"

const Body = styled.div`
width: 80%;
margin: 20px auto;
`
const Head = styled.h1`
font-family: Ebold;
text-align: center;
@media (max-width: 520px) {
  font-size: 20px;
}
${p=>p.small&&css`
margin-top: 30px;
font-family: Elight;
`}
`

const Counter = styled.div`
margin: 30px auto;
width: 50%;
padding: 20px;
display: grid;
justify-content: center;
@media (max-width: 520px) {
  margin: 20px auto;
}
`
const Count = styled.div`
display: flex;
justify-content: space-between;
min-width: 140px;
max-width: auto;
padding: 15px 5px;
border-radius: 50px;
font-family: Ebold;
font-weight: bold;
font-size: 30px;
box-shadow: 0px 0px 3px 1px;
@media (max-width: 520px) {
  width: 100px;
  padding: 11px 2px;
  font-size: 24px;
}
`

const SVG = styled.svg`
width: 28px;
transition: all ease .3s;
cursor:pointer;
@media (max-width: 520px) {
  width: 18px;
}
`

const Reset = styled.svg`
width: 35px;
text-align: center;
margin: 15px auto;
cursor:pointer;
transition: all ease .3s;
&:hover{
  color: var(--light);
}
@media (max-width: 520px) {
  width: 25px;
  margin-bottom: 80px;
}
`

const InputCont = styled.div`
margin: 10px;
font-weight: bold;
font-size: 20px;
@media (max-width: 520px) {
  font-size: 16px;
}
`

const Input = styled.input`
background-color: white;
border: none;
outline: none;
width: 80px;
font-family: Eregular;
font-size: 20px;
color: var(--dark);
border-radius: 20px;
box-shadow: 0px 0px 3px 1px var(--dark);
text-align: center;
padding: 4px 9px;
margin-left: 10px;
@media (max-width: 520px) {
  font-size: 16px;
}
`

const Button = styled.button`
margin-left: 15px;
width: 80px;
padding: 6px 11px;
background-color: unset;
font-size: 20px;
color: var(--dark);
box-shadow: 0px 0px 3px 1px var(--dark);
border: none;
border-radius: 8px;
cursor: pointer;
font-family: Ebold;
transition: .4s;
&:hover{
  width: 150px;
  color: var(--light);
}
@media (max-width: 520px) {
  font-size: 16px;
}
`

export {Button, Input, InputCont, Reset, SVG, Count, Counter, Head, Body}