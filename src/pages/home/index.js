import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import store from "../../store";
//import "../../shared/global.css";
import MusicLogo from "./music.jpg";
import MusicUser from "./music2.png";
import { HomeCont, HomeText, UserImage, IMG, IMGcon, Header1 } from "./home";
import { PageContainer } from "../../shared/globalStyle";

const Home = () => {
  return (
    <PageContainer>
      <Header1>Bright Music App</Header1>
      <HomeCont>
        <HomeText>
          Unleash the power of music with our revolutionary app. Discover,
          connect, and immerse yourself in an endless symphony of melodies.
          Welcome to a world where rhythm reigns supreme.
        </HomeText>
        <IMGcon>
          <IMG src={MusicLogo} alt="" />
        </IMGcon>
      </HomeCont>
    </PageContainer>
  );
};

export default Home;
