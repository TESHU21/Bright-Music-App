import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from "../../features/songsState";
import store from "../../features/store";
import "../../shared/global.css";

const Playlist = () => {
  const songs = useSelector((store) => store.songs.songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);
  console.log(songs);
  return <div className="page-container">Hello World</div>;
};

export default Playlist;
