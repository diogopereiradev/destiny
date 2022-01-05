import './types';
import React from 'react';
import {
  Container,
  LeftLogo,
  RightLogosContainer,
  RightLogo
} from './styles';

import Taktopdestinylogo from '../../assets/images/taktopdestinylogo.png';
import DenaLogo from '../../assets/images/logo-dena.svg';
import MappaLogo from '../../assets/images/logo-mappa.svg';
import MadhouseLogo from '../../assets/images/logo-madhouse.svg';
import BandaiNamcoLogo from '../../assets/images/logo-bandainamco.png';

function Footer (): JSX.Element {
  return (
    <Container>
      <LeftLogo src={Taktopdestinylogo} alt="takt-op-destiny-logo"/>
      <RightLogosContainer>
        <RightLogo src={DenaLogo} alt="dena-logo" />
        <RightLogo src={BandaiNamcoLogo} alt="bandai-namco-logo" />
        <RightLogo src={MappaLogo} alt="mappa-logo" />
        <RightLogo src={MadhouseLogo} alt="madhouse-logo" />
      </RightLogosContainer>
    </Container>
  );
}

export default Footer;