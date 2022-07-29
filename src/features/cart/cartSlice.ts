import { createSlice } from '@reduxjs/toolkit'
import { cart } from '../../pages/Cart'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [] as cart[]
}

const userSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        setCartItems(state, action: PayloadAction<cart[]>) {
            state.cartItems = action.payload
        }
    }
})

export const  {setCartItems} = userSlice.actions

export default userSlice.reducer