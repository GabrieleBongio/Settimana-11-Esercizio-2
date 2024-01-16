export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";

export const addFavourites = (company) => ({ type: ADD_FAVOURITES, payload: company });
export const removeFavourites = (company) => ({ type: REMOVE_FAVOURITES, payload: company });
