import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 320px;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const MobMenuContainer = styled.div`
  width: 50px;
  @media screen and (min-width: 551px) {
    display: none;
  }
`;
export const BottomMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 30vh;
  @media screen and (min-width: 551px) and (max-width: 950px) {
    height: 50vh;
  }
`;

export const Heading = styled.h1`
  display: flex;
  padding: 0px 30px;
  color: #1677ff;
  font-size: 32px;
  @media screen and (max-width: 551px) {
    padding: 0px 20px;
    font-size: 28px;
  }
`;

export const MenuContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const styles = {
  menuItem: {
    fontSize: "14px",
    marginTop: "20px",
    fontWeight: 600,
    display: "flex",
    justidyContent: "center",
    alignItems: "center",
  },
  iconItem: { marginRight: "10px" },
};
