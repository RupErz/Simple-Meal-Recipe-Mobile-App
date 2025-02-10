import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {

    },
    removeFavorite: (id) => {

    },

});

function FavoritesContextProvider({ children }) {
    // A list of mealId
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        // Updating based on previous state snapshot.
        setFavoriteMealIds((current) => [...current, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds((current) => current.filter((mealId) => mealId !== id));
    }

    // Passing our values to the context provider.
    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }


    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;