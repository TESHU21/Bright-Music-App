import { useSelector, useDispatch } from "react-redux";

import store from "../../store";
import MyForm from "../../components/MyForm";
import SongList from "../../components/songList";
import { isOpen } from "../../features/slice/modalSlice";
import { PageContainer } from "../../shared/globalStyle";

const Playlist = () => {
  const songs = useSelector((store) => store.songs);
  const { isOpen, isupdating } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <PageContainer>
      {isOpen && <MyForm />}
      {<SongList />}
    </PageContainer>
  );
};

export default Playlist;
