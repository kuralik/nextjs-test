/* eslint-disable no-param-reassign */
// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 10
}

const counterSlice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    // increment
    incremented(state) {
      state.value++
    },
    amountAdded(state, { payload }: PayloadAction<number>) {
      state.value += payload
    }
    // decrement
    // reset
  }
})

export const { incremented, amountAdded } = counterSlice.actions
export default counterSlice.reducer
