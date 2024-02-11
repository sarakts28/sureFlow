import styled from "styled-components";

export const DesktopContainer = styled.div`
  display: flex;
  background-color: #dadada;
  height: 100vh;
  flex-direction: row;
  width: 100%;

  @media screen and (min-width: 1000px) and (max-width: 1050px) {
    height: auto;
  }

  @media screen and (min-width: 600px) and (max-width: 850px) {
    height: auto;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const MobContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dadada;
  height: 100vh;
  width: 100%;
  @media screen and (min-width: 551px) {
    display: none;
  }
`;
