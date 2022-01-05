import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: -40px;
`;

export const RoseContainer = styled.span`
  span:nth-child(2) {
    transform: rotate(-40deg);
  }
  span:nth-child(3) {
    background-color: #dc4b6f;
    width: 40px;
    height: 30px;
    border-radius: 30px 0px 0px 30px;
    transform: rotate(0deg);
    z-index: -1;
    margin: 0;
  }
  span:nth-child(4) {
    background-color: #c6244c;
    transform: rotate(-50deg);
    margin-top: 10px;
  }
  span:nth-child(5) {
    margin-top: 10px;
    transform: rotate(-80deg);
  }
`;

export const Petal = styled.span`
  background: #d52d58;
  width: 35px;
  height: 40px;
  position: absolute;
  border-radius: 0px 30px 0px 30px;
  margin-left: 10px;
  margin-top: -20px;
  z-index: 1;
`;

export const GoldPartOne = styled.span`
  width: 30px;
  height: 50px;
  border-radius: 30px;
  background-color: #d7c53b;
  position: relative;
  left: 45px;
  top: 15px;
  z-index: 2;
`;

export const BlackPart = styled.span`
  width: 230px;
  height: 40px;
  background-color: #151515;
  border-radius: 30% 30% 30% 30%;
  position: relative;
  left: 40px;
  top: 15px;
  z-index: 1;
`;

export const GoldPartTwo = styled.span`
  width: 40px;
  height: 50px;
  border-radius: 30px;
  background-color: #d7c53b;
  position: relative;
  left: 15px;
  top: 15px;
`;

export const FullCable = styled.span`
  width: 100%;
  height: 30px;
  border-radius: 10px 40% 40% 10px;
  background-color: #d7c53b;
  position: relative;
  top: 15px;
`;