import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Playing.css";
import { Songs } from "../../Context";
export default function Playing() {
  const { song, handleSetSong, handleScrollIntoView } = useContext(Songs);
  const handleClickNext = () => {
    handleScrollIntoView(song.id + 1);
    handleSetSong(song.id + 1);
  };

  const handleClickPrevious = () => {
    handleScrollIntoView(song.id - 1);
    handleSetSong(song.id - 1);
  };

  const handleLoop = () => {
    handleSetSong(song.id);
  };

  return (
    <div>
      <AudioPlayer
        src={song.url}
        className="music-player"
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleClickNext}
        onloop={handleLoop}
      />
    </div>
  );
}
