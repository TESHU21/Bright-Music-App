import React from "react";
import profile from "./profile/Devpic.jpg";
import {
  Aboutcon,
  leftabout,
  IMGcon,
  Contactcon,
  rightabout,
  IMG,
  SpanName,
  Paragraph,
} from "./aboutStyles";
import { PageContainer } from "../../shared/globalStyle";
//import "./about.css";

function About() {
  return (
    <PageContainer>
      <Aboutcon>
        <leftabout>
          <IMGcon>
            <IMG src={profile} alt="" />
          </IMGcon>
          <Contactcon>
            <h2>Contacts</h2>
            <h3>Email Adress:teshu2124@gmail.com</h3>
            <h3>Phone Number:+251(0)921670994 </h3>
            <h3>Github:https://Github.com/TESHU21</h3>
          </Contactcon>
        </leftabout>
        <rightabout>
          <h1>
            Hi,I'm <SpanName>Teshome Mosneh</SpanName> A web Developer.
          </h1>
          <Paragraph>
            I am a passionate web developer specializing in frontend
            development. My expertise lies in crafting visually stunning and
            highly functional websites. As a junior web developer, I am
            dedicated to creating user-friendly experiences that captivate and
            engage visitors.If you have any suggestion or questions regarding
            this music app please contact me.
          </Paragraph>
        </rightabout>
      </Aboutcon>
    </PageContainer>
  );
}

export default About;
