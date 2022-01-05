import './interfaces';
import React, { useEffect, useRef } from 'react';
import { Container } from './styles';
import { start } from './startanim';

function Clouds(props: CloudsProps): JSX.Element {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ref: HTMLDivElement = containerRef.current;

    window.onresize = () => {
      ref.textContent = '';
      start(ref, props.amount);
    };
    start(ref, props.amount);
  }, []);
  return <Container ref={containerRef} {...props}/>;
}
export default Clouds;