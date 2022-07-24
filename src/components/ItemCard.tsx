import React from 'react'
import styled from 'styled-components'

const ItemCardWrapper = styled.div`
    width: 17.25rem;
    height: 21.625rem;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.313rem;
    padding: 0.75rem 0.813rem;
`

const ImageContainer = styled.div`
    height: 11.875rem;
    width: 15.625rem;
    background: #D9D9D9;
    padding-bottom: 1.125rem;
`

const ItemCard = () => {
  return (
    <ItemCardWrapper>
        <ImageContainer/>

    </ItemCardWrapper>
  )
}

export default ItemCard