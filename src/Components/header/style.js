import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100px;
  background-color: white;
  width: 100%;
  margin-left: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  @media screen and (min-width: 550px) and (max-width: 1050px) {
    padding: 10px 30px;
  }
`;

export const NotificationContainer = styled.div`
  width: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 550px) and (max-width: 1050px) {
    width: 10%;
  }
`;
