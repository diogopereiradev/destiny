export function start (ref: HTMLDivElement, amount: number): void {
  const dropamount: number = amount;
  let i = 0;

  while (i < dropamount) {
    const drop: HTMLElement = document.createElement('i');

    const posX: number = Math.floor(Math.random() * ref.offsetWidth);
    const delay: number = Math.random() * -20;
    const duration: number = Math.random() * (8 - 4) + 4;

    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;
    ref.appendChild(drop);
    i++;
  }
}