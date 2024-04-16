import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal, openUpdateForm } from "../features/slice/modalSlice";
import { deleteSongSlice } from "../features/slice/songs";
import { setSongSlice } from "../features/slice/song";
import { DELETE_SONG_BY_ID, GET_SONGS } from "../features/type";
import { IconButton } from "@mui/material";
import styled from "styled-components";

import {
  SongsContainer,
  SongsCont,
  SongCont,
  Title,
  Album,
  Header1,
  Header2,
  IMGcon,
  IMG,
  Artist,
  Language,
  EditButton,
  DeleteButton,
  ButtCon,
  CreateButton,
} from "./songListStyle";

const SongList = () => {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, [dispatch]);

  //console.log(songs);
  return (
    <SongsContainer>
      <Header1>
        <Header2>Your Music Collection</Header2>
        <CreateButton
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Add Song
        </CreateButton>
      </Header1>

      <SongsCont>
        {songs.map((song) => (
          <SongCont key={song.id}>
            <Title>Title:{song.title}</Title>
            <Album>Song No::{song.albumno}</Album>
            {
              <IMGcon>
                <IMG src={song.albumimage} alt="Album Image" />
              </IMGcon>
            }

            <Artist>Artist :{song.artist}</Artist>
            <Language>{song.language} Music</Language>
            <ButtCon>
              <DeleteButton
                edge="end"
                aria-label="delete"
                onClick={() =>
                  dispatch({ type: DELETE_SONG_BY_ID, id: song.id })
                }
              >
                Delete
              </DeleteButton>
              <EditButton
                onClick={() => {
                  dispatch(setSongSlice(song)) && dispatch(openModal());
                }}
              >
                Edit
              </EditButton>
            </ButtCon>
          </SongCont>
        ))}
      </SongsCont>
    </SongsContainer>
  );
};

export default SongList;
