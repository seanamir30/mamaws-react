import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { itemType } from '../components/CatalogCard'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 9rem;
    padding-bottom: 25rem;

    .backContainer {
        display: flex;
        width: 65rem;
        align-items: start;
        margin-bottom: 3rem;
    }

    .back {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 8rem;
        height: 2.5rem;
        border-radius: 0.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .baseCard {
        display: flex;
        background: rgba(255, 255, 255, 0.35);
        width: 65rem;
        height: 32rem;
        background: rgba(255, 255, 255, 0.35);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding:3rem 3rem;
        align-items: center;
    }

    .itemBaseCard {
        min-width: 16rem;
        height: 25rem;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .itemCard{
        width: 14rem;
        height: 23rem;
        background: #D9D9D9;
    }

    .item {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        min-width: 16rem;
        height: 25rem;
        padding-left: 4rem;
    }

    .itemName {
        font-weight: bolder;
        font-size: 1.8rem;
    }

    .itemSold {
    }

    .itemStock {
    }

    .itemDescription {
        height: 15rem;
    }

    .itemPrice {
    }

    .addToCart {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 8rem;
        height: 2.5rem;
        border-radius: 0.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }
    
`
 
const Item = () => {
    const [itemDetails, setItemDetails] = useState<itemType>()
    const location = useLocation()
    useEffect(() => {
        axios.get(`https://${process.env.REACT_APP_API_URL}${location.pathname}`)
        .then(res=>{
            setItemDetails(res.data)
        })
    }, [location.pathname])
    

  return (
    <Container>
        <div className='backContainer'><Link to='/shop' className='back'>Back</Link></div>
        <div className='baseCard'>
            <div className='itemBaseCard'>
                <div className='itemCard'></div>
            </div>

            <div className='item'>
                <div className='itemName'>{itemDetails?.title}</div>
                <div className='row'>
                    <div className='itemSold'>{itemDetails?.sold?`${itemDetails?.sold} Sold`: <></>}</div>
                    <div className='itemStock'>{itemDetails?.quantity} Stock</div>
                </div>
                    
                <div className='itemDescription'>{itemDetails?.description}</div>
                <div className='row'>
                    <div className='itemPrice'>₱{itemDetails?.price}</div>
                    <Link to='#' className='addToCart'>Add to Cart</Link>
                </div>
            </div>
        </div>
    </Container>


  )
}

export default Item