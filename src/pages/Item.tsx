import { useEffect, useState, FormEvent } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { itemType } from '../components/CatalogCard'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

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
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const { user } = useSelector((store: RootState) => store.user);
    const location = useLocation()
    const navigate = useNavigate()

    const [inputTitle, setInputTitle] = useState<String>()
    const [inputQuantity, setInputQuantity] = useState<String>()
    const [inputDescription, setInputDescription] = useState<String>()
    const [inputPrice, setInputPrice] = useState<String>()
    const [itemId, setItemId] = useState<String>()
    const [sold, setSold] = useState<number>()

    const item = {
        "title": inputTitle,
        "quantity": inputQuantity,
        "description": inputDescription,
        "price": inputPrice,
        "sold": sold,
    }

    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_API_URL}${location.pathname}`)
        .then(res=>{
            setItemDetails(res.data)
            setInputTitle(res.data.title)
            setInputQuantity(res.data.quantity)
            setInputDescription(res.data.description)
            setInputPrice(res.data.price)
            setSold(res.data.sold)
            setItemId(res.data._id.$oid)
        })
    }, [location.pathname, isEditMode])

    const handleDelete = (id?: String) => {
        axios.delete(`http://${process.env.REACT_APP_API_URL}/items/${id}`)
        .then(response =>{
          navigate('/shop')
        })
      }
    
      const handleSubmit = (id?: String, e?: FormEvent) => {
        e?.preventDefault()
        console.log(item)
        axios.patch(`http://${process.env.REACT_APP_API_URL}/items/${id}`, {item: item})
        .then((res)=>{
            console.log(res.data)
            setIsEditMode(false)
        })
      }

      const handleAddToCart = (e?: FormEvent) => {
        e?.preventDefault()
        axios.post(`http://${process.env.REACT_APP_API_URL}/cart`, {
            cart: {
                item_id: itemId,
                user_id: user.id,
            }
        },{
            headers: {
                Authorization: user.token
            }
        })
      }

  return (
    <Container>
        <div className='backContainer'><Link to='/shop' className='back'>Back</Link></div>
        <button className='bg-white' onClick={()=>{handleDelete(itemDetails?._id.$oid)}}>delete</button>
        <button className='bg-white' onClick={()=>{setIsEditMode(!isEditMode)}}>edit</button>
        <div className='baseCard'>
            <div className='itemBaseCard'>
                <div className='itemCard'></div>
            </div>

            <form className='item' onSubmit={(e)=>{handleSubmit(itemDetails?._id.$oid,e)}}>
                <div className='itemName'>{isEditMode ?  <input type="text" placeholder='title' onChange={(event)=>{setInputTitle(event.target.value)}} value={String(inputTitle)} className='itemName'/> : itemDetails?.title}</div>
                <div className='row'>
                    <div className='itemSold'>{itemDetails?.sold?`${itemDetails?.sold} Sold`: <></>}</div>
                    <div className='itemStock'>{isEditMode ? <input type="number" placeholder='quantity' onChange={(event)=>{setInputQuantity(event.target.value)}} value={String(inputQuantity)} className='itemStock'/> : itemDetails?.quantity} Stock</div>
                </div>
                    
                <div className='itemDescription'>{isEditMode ? <textarea placeholder='description' onChange={(event)=>{setInputDescription(event.target.value)}} value={String(inputDescription)} className='itemDescription'/> : itemDetails?.description}</div>
                <div className='row'>
                    <div className='itemPrice'>₱{isEditMode ? <input type="number" placeholder='price' onChange={(event)=>{setInputPrice(event.target.value)}} value={String(inputPrice)} className='itemPrice'/> : itemDetails?.price}</div>
                    {isEditMode ? <button className='bg-white'>Done</button> : <button onClick={(e)=>{handleAddToCart(e)}} className='addToCart'>Add to Cart</button>}
                </div>
            </form>
        </div>
    </Container>


  )
}

export default Item