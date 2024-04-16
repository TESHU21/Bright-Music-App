import { useDispatch, useSelector } from "react-redux";
import { setSongSlice } from "../features/slice/song";
import { addSongSlice, editSongSlice } from "../features/slice/songs";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_SONG, UPDATE_SONG_BY_ID } from "../features/type";
import { useState } from "react";
import { closeModal } from "../features/slice/modalSlice";
import { Input, Label, Form } from "./MyFormStyle";
import {
  Fields,
  InputFields,
  SubFields,
  DeleteButton,
  SubmitButton,
  ButtCon,
  Header1,
} from "./FormCss";
import { colors } from "@mui/material";
const MyForm = () => {
  const song = useSelector((state) => state.song);
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setSongSlice({ ...song, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    const isFormValid =
      song.title &&
      song.artist &&
      song.albumno &&
      song.albumimage &&
      song.language;

    if (!isFormValid) {
      alert("Please fill in all the fields.");
      return; // Stop the submit action
    }
    song.id === 0
      ? dispatch({ type: CREATE_SONG, song: { ...song, id: nanoid(8) } })
      : dispatch({ type: UPDATE_SONG_BY_ID, song });
    // Check if all required fields are filled
    dispatch(
      setSongSlice({
        id: 0,
        albumno: "",
        title: "",
        artist: "",
        albumimage: "",
        language: "",
      })
    );
  };
  const handleCancel = (e) => {
    dispatch(closeModal());
    dispatch(
      setSongSlice({
        id: 0,
        albumno: "",
        title: "",
        artist: "",
        albumimage: "",
        language: "",
      })
    );
  };
  return (
    <Form>
      <Header1>Song Adding and Editing Form</Header1>
      <Fields>
        <InputFields>
          <Label>
            Song Title <span style={{ color: "red" }}>*</span>
          </Label>
          <Input
            onChange={handleChange("title")}
            placeholder="Enter title"
            name="Title"
            value={song.title}
            fullWidth
            required
          />
        </InputFields>

        <InputFields>
          <Label>
            Artist Name <span style={{ color: "red" }}>*</span>
          </Label>
          <Input
            onChange={handleChange("artist")}
            placeholder="Enter Artist Name"
            value={song.artist}
            fullWidth
            required
          />
        </InputFields>
        <SubFields>
          <InputFields>
            <Label>
              Album No <span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              onChange={handleChange("albumno")}
              placeholder="Enter Album Number"
              value={song.albumno}
              fullWidth
              required
            />
          </InputFields>
          <InputFields>
            <Label>
              Language:<span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              onChange={handleChange("language")}
              placeholder="Enter Music Language"
              value={song.language}
              fullWidth
              required
            />
          </InputFields>
        </SubFields>
        <InputFields>
          <Label>
            Album Image Link <span style={{ color: "red" }}>*</span>
          </Label>
          <Input
            onChange={handleChange("albumimage")}
            placeholder="Paste image link here"
            value={song.albumimage}
            fullWidth
            required
          />
        </InputFields>
      </Fields>
      <ButtCon>
        <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
        <DeleteButton onClick={() => handleCancel()}>Cancel</DeleteButton>
      </ButtCon>
    </Form>
  );
};
export default MyForm;
