import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    navbarOpen: boolean
    formLoading: boolean
    isFormSubmitted: boolean

}

const initialState: CounterState = {
    navbarOpen: false,
    formLoading: false,
    isFormSubmitted: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbar: (state, action: PayloadAction<boolean>) => {
            state.navbarOpen = action.payload

        },
        setFormLoading: (state, action: PayloadAction<boolean>) => {
            state.formLoading = action.payload

        },
        setFormSubmitted: (state, action: PayloadAction<boolean>) => {
            state.isFormSubmitted = action.payload
        }
    }
})

export const { setNavbar, setFormLoading, setFormSubmitted } = counterSlice.actions

export default counterSlice.reducer