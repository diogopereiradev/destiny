import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 160px;
  background-color: #00171f74;
  margin-top: -10px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const LeftLogo = styled.img`
  width: 250px;
  margin-top: 20px;

  @media screen and (max-width: 850px) {display: none;}
`;

export const RightLogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 15px;
`;

export const RightLogo = styled.img`
  width: 100px;

  @media screen and (max-width: 550px) {width: 80px;}
`;