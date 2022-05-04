import { useContext, useState, useEffect } from "react";
import { Songs } from "../../Context";
import "./ListSong.css";
export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handleSongClick = (index) => {
    setIdSong(index);
    handleSetSong(index);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);

  return (
    <div className="list-songs col l-8 m-12 c-12">
      <table className="list-songs__table">
        <thead className="list-header">
          <tr className="list-header-tr">
            <th className="listSong-amount">#</th>
            <th className="listSong-title">Title</th>
            <th className="listSong-singer">Author</th>
            <th className="listSong-download">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`listSong-body ${
                idSong === index ? "listSong-body__active" : ""
              }`}
              onClick={() => handleSongClick(index)}
            >
              <td className="listSong-body-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="listSong-body-center">{song.author}</td>
              <td className="listSong-body-center">
                <a href={song.url}>
                  <i className="fa-solid fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
