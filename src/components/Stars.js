import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars=3.9, reviewCount=12}) => {
  const starArray = Array.from({length:5}, (_, index) => {
    const number = index + 0.5;
    return (<span key={index}> {stars >= (index + 1) ?  <BsStarFill /> : stars >=(number) ? <BsStarHalf/>: <BsStar/> } </span>)
  })
  return (
    <Wrapper>
      <div className="stars">
        {starArray}
      </div>
      <div className="reviews">({reviewCount} customer reviews)</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
