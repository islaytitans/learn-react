import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {
  const favouritesContext = useContext(FavouritesContext);

  const itemIsFavourite = favouritesContext.isFavourite(props.id);

  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
      favouritesContext.removeFavourite(props.id);
    } else {
      favouritesContext.addFavourite({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite ? "Remove from favourites" : "Add to favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
