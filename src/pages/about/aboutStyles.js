import styled from "styled-components";

export const Aboutcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 70px;
  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;
export const leftabout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 660px) {
    height: 25%;
    width: auto;
  }
`;
export const IMGcon = styled.div`
  height: auto;
  width: 100%;
  margin-top: 40px;
  text-align: center;
`;
export const IMG = styled.img`
  width: 120px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;

  transition: all 0.4s ease-in-out;
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0);
  }
`;
export const Contactcon = styled.div`
  text-align: center;

  h2 {
    color: green;
    justify-content: center;
  }
  h3 {
    font-size: medium;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin-right: 20px;
    justify-self: center;
    @media screen and (max-width: 660px) {
      font-size: small;
    }
  }
`;
export const rightabout = styled.div`
  justify-content: center;
  padding-right: 8rem;
  h1 {
    font-size: 3rem;
  }
`;
export const SpanName = styled.span`
  color: green;
`;
export const Paragraph = styled.p`
  margin: 2rem 0;
  line-height: 2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: medium;
  &:hover {
    padding: 10px;
    border-radius: 8px;
    cursor: default;
    transform: translateY(-5px);
    border: 3px solid green;
    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
  }
`;
