import styled from "styled-components";

export const pagecontainer = styled.div`
  width: calc(92%);
  height: calc(99%);
  overflow: auto;
  background-color: hsl(319, 59%, 90%);
  border-radius: 30px;
  background-color: #ede5f0;
  opacity: 1;
  background-image: repeating-radial-gradient(
      circle at center left,
      transparent 0,
      white 100px
    ),
    repeating-linear-gradient(#f7f9fb55, #f8f4f6);
`;

export const Header1 = styled.h2`
  text-align: center;
  font-size: 3.4rem;
  color: green;
  margin-top: 40px;
  margin-bottom: 50px;
  @media screen and (max-width: 660px) {
    margin-bottom: 5px;
    font-size: 20px;
  }
`;
export const HomeCont = styled.div`
  margin: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

export const HomeText = styled.p`
  margin-left: 40px;
  position: relative;
  margin-top: 150px;

  width: 80%;
  line-height: 2.4;
  font-weight: 400;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  @media (max-width: 600px) {
    margin-top: 10px;
    line-height: 1.5;
    margin-left: 0;
    font-size: 16px;
  }
`;

export const IMGcon = styled.div`
  max-width: 100%;
  height: auto;
  @media (max-width: 660px) {
    text-align: center;
  }
`;
export const IMG = styled.img`
  border-radius: 10px;
  height: 360px;
  width: auto;
  background-color: none;
  position: relative;
  right: 30px;
  @media (max-width: 660px) {
    height: 200px;
    width: auto;
    text-align: center;
  }
`;
