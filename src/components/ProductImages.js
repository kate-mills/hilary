import React, {useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const ProductImages = ({images=[],  description}) => {
  const [main, setMain ] = useState(images[0])
  return (
    <Wrapper>
      <Image
        fluid={main.fluid}
        alt={description || ""} className="main"
      />
      <div className="gallery">
        {images.map((img, index)=>{
          return(
            <img
              key={index}
              onClick={()=> setMain(images[index])}
              src={img.fluid.src}
              alt={`View ${index} of ${description}`}
              className={`${img.fluid.src===main.fluid.src ? 'active': null}`}
            />
          )  
       })}
      </div>
    </Wrapper>
  )
}

const WrapImage = styled(Image)``

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain !important;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
      object-fit: cover !important;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
        object-fit: cover !important;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
        object-fit: cover !important;
      }
    }
  }
`

export default ProductImages
