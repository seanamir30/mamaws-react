import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CatalogCard from '../components/CatalogCard'
import { Link } from 'react-router-dom';

const ShopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    padding-bottom: 8rem;

    .addItem{
        display: flex;
        justify-content: flex-end;
        padding-bottom: 2rem;
        .addButton{
            display: flex;
            justify-content: center;
            background: white;
            width: 6rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 0.3rem;
            
        }
    }
`;


const SubWrapper = styled.div`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* height: calc(100vh - 11.3rem);
    overflow: hidden; */
`;

const ShopNav = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin-right: 3rem;

    .categories-container{
        border-radius: 0.625rem;
        text-align: center;
        background: rgba(255, 255, 255, 0.35);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .header {
        background: white;
        border-radius: 0.625rem 0.625rem 0 0;
        font-weight: bold;
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
        height: 25rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

const Catalog = styled.div`
    width: 70rem;
    height: 51.8rem;
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
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 95rem;
    padding-left: 12rem;
    padding-right: 12rem;
`



const Shop = () => {
    const [items, setItems] = useState([{
        title: 'asdfasdf',
        price: 123,
        sold: 9038281703921,
        description: 'askljdhasjkdhjkasdas',
    }])

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/api/v1/items`)
      .then(res =>{
        setItems(res.data)
      })
    }, [])
    
  return (
    <ShopWrapper>
        <Container>
            <div className="addItem">
                <Link to='/add-item' className='addButton'>Add Item</Link>
            </div>
            <SubWrapper>
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
            </SubWrapper>
        </Container>
                       
    </ShopWrapper>  
  )
}

export default Shop