import "./styles.css";
import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function App() {
  useEffect(() => {
    const container = document.querySelector(".container");
    for (var i = 0; i <= 25; i++) {
      const blocks = document.createElement("div");
      blocks.classList.add("block");
      container.appendChild(blocks);
    }
  }, []);

  useEffect(() => {
    function animateBlocks() {
      anime({
        targets: ".block",
        translateX: () => {
          return anime.random(-700, 700);
        },
        translateY: () => {
          return anime.random(-500, 500);
        },
        scale: () => {
          return anime.random(1, 5);
        },
        easing: "linear",
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks
      });
    }

    animateBlocks();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h2>
          <span>Trying Animations</span> <br /> AnimeJs
        </h2>
      </div>
    </div>
  );
}
