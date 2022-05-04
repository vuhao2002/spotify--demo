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
  var value = {
    DataSongs,
    song,
    handleSetSong,
  };
  return <Songs.Provider value={value}>{children}</Songs.Provider>;
}

export { Songs, ChangMusicProvider };
