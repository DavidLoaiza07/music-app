import { RiHeart3Fill, RiMoreFill, RiPlayCircleFill } from "react-icons/ri";
import FavoriteRow from "../FavoriteRow";

const FavoriteMiddleBody = () => {
  return (
    <div className="middleBody__container">
      <section className="middleBoddy__container__icons">
      </section>
      <section className="middleBody__container__songs">
        <FavoriteRow />
      </section>
    </div>
  );
};

export default FavoriteMiddleBody;
