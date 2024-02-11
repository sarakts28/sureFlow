import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  @media screen and (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 550px) and (max-width: 900px) {
    width: 100%;
  }
`;

export const ButtonWidth = styled.div`
  width: auto;
  margin-right: 10px;
  @media screen and (max-width: 550px) {
    width: 100px;
  }
`;
