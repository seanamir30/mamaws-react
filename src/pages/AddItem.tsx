import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


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
        background: rgba(255, 255, 255, 0.2);
    }

    .stockRow {
        display: flex;
        justify-content: end;
    }

    .itemStock {
        background: rgba(255, 255, 255, 0.2);
    }

    .itemDescription {
        height: 15rem;
        background: rgba(255, 255, 255, 0.2);
    }

    .itemPrice {
        background: rgba(255, 255, 255, 0.2);
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
    const [inputTitle, setInputTitle] = useState<String>('')
    const [inputQuantity, setInputQuantity] = useState<String>()
    const [inputDescription, setInputDescription] = useState<String>('')
    const [inputPrice, setInputePrice] = useState<String>()
    const navigate = useNavigate()

    const item = {
        "title": inputTitle,
        "quantity": inputQuantity,
        "description": inputDescription,
        "price": inputPrice,
        "sold": 0,
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}/items`, {item: item})
        .then(()=>navigate(`/shop`))
    }

    return (
        <Container>
            <div className='backContainer'><Link to='/shop' className='back'>Back</Link></div>
            <div className='baseCard'>
                <div className='itemBaseCard'>
                    <div className='itemCard'></div>
                </div>

                <form className='item' onSubmit={(e)=>{handleSubmit(e)}}>
                    <input type="text" placeholder='title' onChange={(e)=>{setInputTitle(e.target.value)}} value={String(inputTitle)} className='itemName'/>
                    <div className='stockRow'>
                        <input type="number" placeholder='quantity' onChange={(e)=>{setInputQuantity(e.target.value)}} value={String(inputQuantity)} className='itemStock'/>
                    </div>
                        
                    <textarea placeholder='description' onChange={(e)=>{setInputDescription(e.target.value)}} value={String(inputDescription)} className='itemDescription'/>
                    <div className='row'>
                        <input type="number" placeholder='price' onChange={(e)=>{setInputePrice(e.target.value)}} value={String(inputPrice)} className='itemPrice'/>
                        <button type="submit" className='addToCart'>Add Item</button>
                    </div>
                </form>
            </div>
        </Container>


    )
}

export default Item