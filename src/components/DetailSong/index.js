import React, { useContext } from "react";
import { Songs } from "../../Context";
import "./DetailSong.css";
export default function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="col l-4 m-0 c-0 detailSong">
      <div className="detailSong-present">Now playing</div>
      <div className="detailSong-sleep">{song.name}</div>
      <div className="detailSong-avatar">
        <img
          className="detailSong-image"
          src={song.links.images[0].url}
          alt=""
        />
      </div>
      <div className="detailSong-singer">
        <img
          className="detailSong-singer__image"
          src={song.links.images[1].url}
          alt=""
        />
        <span className="detailSong-singer__name">{song.author}</span>
      </div>
    </div>
  );
}
