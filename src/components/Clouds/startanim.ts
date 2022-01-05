export function start (ref: HTMLDivElement, amount: number): void {
  const dropamount: number = amount;
  let i = 0;
  
  while (i < dropamount) {
    const drop: HTMLElement = document.createElement('i');

    const posY: number = Math.floor(Math.random() * ref.offsetHeight);
    const delay: number = Math.random() * -100;
    const duration: number = Math.random() * (13 - 10) + 10;

    drop.style.top = `${posY}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;
    ref.appendChild(drop);
    i++;
  }
}