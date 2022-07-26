import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:{
        email: '',
        first_name: '',
        last_name: '',
        token: '',
        is_admin: '',
        id: '',
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const  {setUser} = userSlice.actions

export default userSlice.reducer