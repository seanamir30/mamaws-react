import {useEffect, useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

type item = {
  price: number,
  title: String,
  quantity: number,
}

export type cart = {
  id: String,
  api_v1_item_id: String,
  quantity: number,
  api_v1_item: item

}

const Cart = () => {
  const { user } = useSelector((store: RootState) => store.user);
  const { cartItems } = useSelector((store: RootState) => store.cartItems);

  console.log(cartItems)
    
    const getTotal = (arr: cart[]) => {
      let total = 0
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].quantity*arr[i].api_v1_item.price
      }
      return total
    }

  return (
    <div>
      {cartItems.map((item)=>(
          <div>
            <div>title: {item.api_v1_item.title}</div>
            <div>quantity: {item.quantity}</div>
            <div>item: {item.quantity * item.api_v1_item.price}</div>
          </div>
        ))}

      total: {getTotal(cartItems)}
    </div>
  )
}

export default Cart