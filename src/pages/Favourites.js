import { useContext } from "react";

import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritesPage() {
  const favouritesContext = useContext(FavouritesContext);

  let content;

  if (favouritesContext.totalFavourites === 0) {
      content = <p>You've not chosen any favourites</p>
  } else {
    content = <MeetupList meetups={favouritesContext.favourites} />
  }

  return (
    <section>
      <h1>My favorites</h1>
      { content }
    </section>
  );
}

export default FavouritesPage;
