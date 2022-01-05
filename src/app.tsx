import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './assets/GlobalStyles';
import Wrapper from './components/Wrapper/styles';
import TaktBaton from './components/TaktBaton/index';

import Header from './app/Header/index';
import AnimeInfosSection from './app/AnimeInfosSection/index';
import MyOpinion from './app/MyOpinion/index';
import AutoplayTrailler from './app/AutoplayTrailler/index';
import Footer from './app/Footer/index';

window.onload = () => {
  function App (): JSX.Element {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <TaktBaton />
          <AnimeInfosSection />
          <TaktBaton />
          <AutoplayTrailler />
          <TaktBaton />
          <MyOpinion />
          <TaktBaton />
          <Footer />
        </Wrapper>
      </React.Fragment>
    );
  }
  ReactDOM.render(<App/>, document.querySelector('.destiny-root'));
};