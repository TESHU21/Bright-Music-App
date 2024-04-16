import styled from "styled-components";
export const SongsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Header1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  margin-bottom: 10px;
  margin-top: 5px;
  &:hover {
    cursor: default;
    transform: translateY(-5px);
    border: 2px solid green;
    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
  }
`;
export const CreateButton = styled.button`
  background-color: gray;
  border: none;
  color: white;
  padding: 8px 4px;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  border-radius: 4px;
  align-self: flex-end;

  margin-left: 70px;

  justify-content: center;
  align-items: center;
  align-self: center;
  &:hover {
    background-color: #45a049;
  }
`;
export const Header2 = styled.h2`
  align-self: flex-start;
  flex-wrap: nowrap;
  font-size: 35px;
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: bold; /* Apply bold */
`;
export const SongsCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 5px;
  justify-content: center;
  align-items: center;

  // Border Closed
`;
export const SongCont = styled.div`
  border: 3px solid #ccc;
  padding: 10px;
  height: auto;
  width: auto;
  border-radius: 8px;
  position: relative;
  justify-content: flex-start;
  flex: 1 1 calc(25%);
  flex-grow: 0;
  max-width: 200px;
  max-height: auto;

  &:hover {
    cursor: default;
    transform: translateY(-5px);
    border: 2px solid green;
    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
  }

  // Border Closed
`;
export const Title = styled.h3`
  max-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;

  white-space: nowrap;
  display: block;
  text-align: center;

  &:hover {
    overflow: visible;
    white-space: normal;
    max-height: 50px;
  }
`;

export const Album = styled.p`
  margin: 5px;
  font-size: 10px;
  text-align: center;
`;
export const Artist = styled.h3`
  margin: 0;
  font-size: 12px;
  text-align: center;
`;
export const IMGcon = styled.div`
  width: 100%;
  max-width: 200px;
  position: relative;
  height: auto;
  justify-content: center;
  text-align: center;
`;

export const IMG = styled.img`
  width: 100%;
  max-width: 100%;
  height: 150px;
  margin-bottom: 0;
  align-items: center;
`;
export const Language = styled.p`
  font-size: 10px;
  text-align: center;
`;
export const DeleteButton = styled.button`
  background-color: gray;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin: 5px;
  width: 50px;
  height: 25px;
  &:hover {
    background-color: red;
  }
`;

export const EditButton = styled.button`
  background-color: blue;
  color: #fff;
  background-color: gray;
  border: none;
  padding: 5px;
  margin: 5px;
  width: 50px;
  height: 25px;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;
export const ButtCon = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
`;
