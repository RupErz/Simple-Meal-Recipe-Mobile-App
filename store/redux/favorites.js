// A file to manage logical operations for our Redux storage
import { createSlice } from '@reduxjs/toolkit';

const favortesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: [],
    },
    reducers: { // Function to change our state
        // Every method auto get latest state as a first parameter
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id); // This fcn take an object with props name 'id'
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
})

export const addFavorite = favortesSlice.actions.addFavorite;
export const removeFavorite = favortesSlice.actions.removeFavorite;
export default favortesSlice.reducer;