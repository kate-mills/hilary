import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import defaultImg from '../../images/interesting.jpg'

export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
      <BackgroundWrapper>
    <BackgroundImage className={styleClass} fluid={img}>
      <p className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </p>
      {children}
    </BackgroundImage>
        </BackgroundWrapper>
  )
}

BackgroundSection.defaultProps = {
  title: 'default title',
  styleClass: 'default-background',
  fluid: defaultImg,
}

const BackgroundWrapper = styled.div`
  height: ${props => props.height || `100px`};
  &:hover{
    cursor: pointer;
  }
`
