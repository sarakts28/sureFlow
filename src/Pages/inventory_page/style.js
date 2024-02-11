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
  height: auto;
  width: 100%;
  @media screen and (min-width: 551px) {
    display: none;
  }
`;

export const TableContainer = styled.div`
  height: auto;
  width: auto;
  margin: 0px 20px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 0px 15px;
`;

export const OI_MainContainer = styled.div`
  height: 200px;
  width: auto;
  margin: 20px;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding: 0px 15px;
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;

export const OI_SubHeaderContainer = styled.div`
  margin-top: 3px;
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const OI_FirstContainer = styled.div`
  border-right: 1px solid #ececec;
  width: 12%;
  height: 120px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    heigth: auto;
    width: auto;
    border-right: none;
    margin-bottom: 20px;
    padding: 0px 10px;
  }
`;

export const OI_SecondContainer = styled.div`
  border-right: 1px solid #ececec;
  width: 25%;
  height: 120px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  @media screen and (max-width: 900px) {
    heigth: auto;
    width: auto;
    border-right: none;
    margin-bottom: 20px;
    padding: 0px 10px;
  }
`;

export const OI_LastContainer = styled.div`
  width: 25%;
  height: 120px;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  @media screen and (max-width: 900px) {
    heigth: auto;
    width: auto;
    border-right: none;
    margin-bottom: 20px;
    padding: 0px 10px;
  }
`;

export const OI_SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const styles = {
  text: {
    color: "black",
    fontSize: "18px",
    fontWeigth: "400",
    marginTop: "20px",
  },
  subText: {
    color: "#d4d4d4",
    fontSize: "16px",
    fontWeigth: "400",
    marginTop: "20px",
  },
};
