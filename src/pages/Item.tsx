import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9.07rem 7.625rem 24.18rem 12.813rem;
    .button {
        background: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 9.938rem;
        height: 3.188rem;
        border-radius: 0.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
 
const Item = () => {
    const [itemDetails, setItemDetails] = useState()
    const location = useLocation()
    useEffect(() => {
        axios.get(`https://${process.env.REACT_APP_API_URL}${location.pathname}`)
        .then(res=>{
            setItemDetails(res.data)
        })
    }, [location.pathname])
    

  return (
    <Container>
        <Link to='/shop' className='button'>Back</Link>
    </Container>
  )
}

export default Item