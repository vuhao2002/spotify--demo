import { useState, createContext } from "react";
import DataSongs from "./data/songs.json";

const Songs = createContext();

function ChangMusicProvider({ children }) {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (index) => {
    const song = DataSongs[index];
    if (!song) {
      setSong(DataSongs[0]);
    } else {
      setSong(song);
    }
  };
  const handleScrollIntoView = (index) => {
    const song_active = document.querySelectorAll(".listSong-body")[index];
    setTimeout(() => {
      song_active.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 300);
  };
  var value = {
    DataSongs,
    song,
    handleSetSong,
    handleScrollIntoView,
  };
  return <Songs.Provider value={value}>{children}</Songs.Provider>;
}

export { Songs, ChangMusicProvider };
