const date = new Date();

const colorizer = (col1, col2) =>
  (document.body.style.backgroundImage = `linear-gradient(90deg, ${col1}, ${col2})`);

date.getHours() >= 6
  ? colorizer("darkblue, lightblue")
  : date.getHours() >= 15
  ? colorizer("lightblue", "wheat")
  : date.getHours() >= 18
  ? colorizer("darkred", "darkblue")
  : colorizer("darkblue", "grey");
