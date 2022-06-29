
import FavoriteMiddleBody from "../FavoriteMiddleBody";
import FavoriteHeaderBody from "../FavoriteHeaderBody";
import Header from "../Header";

const FavoriteMainBody = () => {

  return (
    <div className="body__container">
      <Header />
      <FavoriteHeaderBody />
     <FavoriteMiddleBody />
    </div>
  );
};

export default FavoriteMainBody;
