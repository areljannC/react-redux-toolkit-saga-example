import { createSlice } from '@reduxjs/toolkit'

const statsSlice = createSlice({
  name: 'stats',
  initialState: { wins: 0, losses: 0 },
  reducers: {
    incrementWins: (state) => {
      state.wins++
    },
    incrementWinsAsync: (state) => {},
    decrementWins: (state) => {
      state.wins--
    },
    incrementLosses: (state) => {
      state.losses++
    },
    decrementLosses: (state) => {
      state.losses--
    }
  }
})

export const {
  incrementWins,
  incrementWinsAsync,
  decrementWins,
  incrementLosses,
  decrementLosses
} = statsSlice.actions

export default statsSlice.reducer
