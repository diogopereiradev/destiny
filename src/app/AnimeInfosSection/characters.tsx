import React, { useEffect, useRef } from 'react';
import {
  CardsContainer,
  Card,
  CardCharacterImage,
  CardCharacterName,
  CardCharacterFunction
} from './styles';

function CharactersItems (): JSX.Element {
  const sliderRef = useRef(null) as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ref: HTMLDivElement = sliderRef.current;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    ref.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - ref.offsetLeft;
      scrollLeft = ref.scrollLeft;
    });
    ref.addEventListener('mouseleave', () => isDown = false);
    ref.addEventListener('mouseup', () => isDown = false);
    ref.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - ref.offsetLeft;
      const walk = (x - startX) * 3;
      ref.scrollLeft = scrollLeft - walk;
    });
  }, []);
  return (
    <CardsContainer ref={sliderRef}>
      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/13/446964.jpg" alt="asahina-takt-character"/>
        <CardCharacterName>Takt</CardCharacterName>
        <CardCharacterFunction>Main</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrb6usJVt09FA6pTHdKUZ1ePRKdYPAFhR7QyLfa5klwab9AzpEcNhhuHAzuEJVCJejqE&usqp=CAU" alt="destiny-character"/>
        <CardCharacterName>Destiny</CardCharacterName>
        <CardCharacterFunction>Main</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/3/453363.jpg" alt="schneider-anna-character"/>
        <CardCharacterName>Anna</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/10/453362.jpg" alt="titan-character"/>
        <CardCharacterName>Titan</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/2/453357.jpg" alt="heaven-character"/>
        <CardCharacterName>Heaven</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/10/460851.jpg" alt="lenny-character"/>
        <CardCharacterName>Lenny</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/2/453358.jpg" alt="hell-character"/>
        <CardCharacterName>Hell</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/3/453361.jpg" alt="sagan-character"/>
        <CardCharacterName>Sagan</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/3/453360.jpg" alt="schindler-character"/>
        <CardCharacterName>Schindler</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>

      <Card>
        <CardCharacterImage src="https://cdn.myanimelist.net/images/characters/15/460852.jpg" alt="newscaster-character"/>
        <CardCharacterName>Newscaster</CardCharacterName>
        <CardCharacterFunction>Supporting</CardCharacterFunction>
      </Card>
    </CardsContainer>
  );
}
export default CharactersItems;