import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router'
import axios from 'axios'

const CatalogCardWrapper = styled.div`
    width: 17.25rem;
    height: 21.625rem;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.313rem;
    padding: 0.75rem 0.813rem;
    display: flex;
    flex-direction: column;
`

const ImageContainer = styled.div`
    height: 11.875rem;
    width: 15.625rem;
    background: #D9D9D9;
    padding-bottom: 1.125rem;
`

export type itemType = {
  id: String,
  description: String,
  price: number,
  title: String,
  quantity: number,
  sold: number,
  updated_at: String,
  created_at: String,
}

type item = {
  item: itemType
}

const CatalogCard = ({item}: item) => {
  const navigate = useNavigate()


  return (
    <CatalogCardWrapper onClick={()=>{navigate(`/items/${item.id}`)}}>
        <ImageContainer/>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>{item.sold}</p>
    </CatalogCardWrapper>
  )
}

export default CatalogCard