import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CatalogCard from '../components/CatalogCard'

const ShopWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 14rem 7.625rem 24.18rem 12.813rem;
    /* align-items: center; */
    /* height: calc(100vh - 11.3rem);
    overflow: hidden; */
`;

const ShopNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin-right: 3.375rem;
    .categories-container{
        border-radius: 0.625rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.35);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .header {
        background: white;
        border-radius: 0.625rem 0.625rem 0 0;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
    }
    .categories{
        padding-top: 1rem;
        padding-bottom: 1rem;
        .category {
            height: 2.813rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }

    .book-now {
        border-radius: 0.625rem;
        background: white;
        height: 27rem;
        margin-top: 4.688rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

const Catalog = styled.div`
    width: 76.188rem;
    height: 56.56rem;
    overflow: auto;
    border-radius: 0.625rem;
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 3rem 3.75rem;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-around;
    gap: 5rem;


`

const Shop = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      axios.get(`https://${process.env.REACT_APP_API_URL}/items`)
      .then(res =>{
        setItems(res.data)
      })
    }, [])
    
  return (
    <ShopWrapper>
        <ShopNav>
            <div className='categories-container'>
                <div className='header'>CATEGORY</div>
                <div className='categories'>
                    <div className='category'>Balloons</div>
                    <div className='category'>Banners</div>
                    <div className='category'>Gender Reveal Box</div>
                    <div className='category'>Gift Wrappers</div>
                    <div className='category'>Table and Chairs</div>
                    <div className='category'>Decorative Curtains</div>
                    <div className='category'>Cake Toppers</div>
                </div>
            </div>
            <div className='book-now'>
                BOOK<br/> PARTY<br/> NOW
            </div>
        </ShopNav>
        <Catalog>
            {items.map((item)=>(
                <CatalogCard item={item}/>
            ))}
        </Catalog>
    </ShopWrapper>  
  )
}

export default Shop