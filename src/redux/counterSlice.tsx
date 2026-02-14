import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    navbarOpen: boolean

}

const initialState: CounterState = {
    navbarOpen: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbar: (state, action: PayloadAction<boolean>) => {
            state.navbarOpen = action.payload

        }
    }
})

export const { setNavbar } = counterSlice.actions

export default counterSlice.reducer