import styled from "styled-components";
export const Fields = styled.div``;
export const SubFields = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DeleteButton = styled.button`
  background-color: gray;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin: 5px;
  border-radius: 4px;
  width: 60px;
  height: 35px;
  &:hover {
    background-color: red;
  }
`;

export const SubmitButton = styled.button`
  background-color: blue;
  color: #fff;
  background-color: gray;
  border: none;
  padding: 5px;
  margin: 5px;
  border-radius: 4px;
  width: 60px;
  height: 35px;
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
export const Header1 = styled.div`
  font-size: 25px;
  margin: 20px;
  color: #333;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
`;
