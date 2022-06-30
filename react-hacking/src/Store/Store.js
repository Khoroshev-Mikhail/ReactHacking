import { configureStore, createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
    name: 'countSlice',
    initialState: {
        Component1: 1,
        Component1__2: 12,
        Component1__2__3: 123,
        Component2: 2,
        Component2__2: 22,
    },
    reducers: {
        Counter_Component1: (state) => ({...state, Component1: state.Component1 + 1}),
        Counter_Component1__2: (state) => ({...state, Component1__2: state.Component1__2 + 1}),
        Counter_Component1__2__3: (state) => ({...state, Component1__2__3: state.Component1__2__3 + 1}),
        Counter_Component2: (state) => ({...state, Component2: state.Component2 + 1}),
        Counter_Component2__2: (state) => ({...state, Component2__2: state.Component2__2 + 1}),
    }
})
export const {nextCount} = countSlice.actions
export const {Counter_Component1, Counter_Component1__2, Counter_Component1__2__3, Counter_Component2, Counter_Component2__2} = countSlice.actions

const store = configureStore({
    reducer: {
        counts: countSlice.reducer
    }
})
export default store