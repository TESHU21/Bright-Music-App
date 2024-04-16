import styled from "styled-components";
export const PageContainer = styled.div`
  width: calc(92%);
  height: calc(99%);
  overflow: auto;
  background-color: hsl(324, 33%, 97%);
  /* background-color:white; */
  border-radius: 30px;
  /* background-color: #ede5f0; */
  opacity: 1;
  background-image: repeating-radial-gradient(
      circle at center left,
      transparent 0,
      white 100px
    ),
    repeating-linear-gradient(white, #f8f4f6);
`;
