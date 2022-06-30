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
