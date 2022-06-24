import { RiHeart3Fill, RiMoreFill, RiPlayCircleFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../../features/PlaylistSlice/index";
import SongRow from "../SongRow/index";
import "./index.css";

const MiddleBody = () => {
  const playlist = useSelector(selectPlaylist);
  return (
    <div className="middleBody__container">
        <section className="middleBoddy__container__icons">
          <RiPlayCircleFill className="middleBoddy__container__icons__playButton" />
          <RiHeart3Fill className="middleBoddy__container__icons__favButton" />
          <RiMoreFill className="middleBoddy__container__icons__moreButton" />
        </section>
        <section className="middleBody__container__songs">
          {playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))}
        </section>
    </div>
  );
};

export default MiddleBody;
