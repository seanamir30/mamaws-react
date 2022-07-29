import {useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Cart = () => {
    const { user } = useSelector((store: RootState) => store.user);

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_URL}/api/v1/carts`,{ headers: {
        Authorization : user.token
      }})
      .then(res=> console.log(res.data))
    }, [])
    

  return (
    <div></div>
  )
}

export default Cart