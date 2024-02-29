import backOfCard from "./back.png";
import { useFlip } from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, flip] = useFlip();

  return (
    <img
      src={!isFlipped ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
