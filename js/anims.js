.fallsdown {
  animation-name: fallsdown;
  animation-duration: 700ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  transform: translateY(-1000px);
}

@keyframes fallsdown{
  from {transform: translateY(-1000px);}
  to {transform: translateY(0);}
}