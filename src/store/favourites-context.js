import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  isFavourite: (meetupId) => {}
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouritesHandler(favouriteMeetup) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  };

  function removeFavouritesHandler(meetupId) {
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
    })
  };

  function itemIsFavouritesHandler(meetupId) {
    return userFavourites.some(meetup => meetup.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouritesHandler,
    removeFavourite: removeFavouritesHandler,
    isFavourite: itemIsFavouritesHandler
  };

  return <FavouritesContext.Provider value={context}>
    { props.children }
  </FavouritesContext.Provider>
}

export default FavouritesContext;