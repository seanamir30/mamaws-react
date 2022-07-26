import {useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const Cart = () => {
    const { user } = useSelector((store: RootState) => store.user);

    useEffect(() => {
      axios.get(`http://${process.env.REACT_APP_API_URL}/carts`)
      .then(res=> console.log(res.data))
    }, [])
    

  return (
    <div>{user.token}</div>
  )
}

export default Cart