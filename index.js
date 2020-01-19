window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "rgb(96, 211, 148, 0.7)",
    "rgb(211, 96, 96, 0.7)",
    "rgb(192, 96, 211, 0.7)",
    "rgb(211, 209, 96, 0.7)",
    "rgb(96, 107, 211, 0.7)",
    "rgb(96, 194, 211, 0.7)"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
