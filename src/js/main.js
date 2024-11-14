import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// SCROLL HORINZONTAL

gsap.registerPlugin(ScrollTrigger);
gsap.to(".slider-container", {
  x: "-81.5%", // chaque élément .slider-item vaut 20% de .slider-container, on veut donc bouger la position x de -76% pour faire apparaitre le dernier élément: chaque élément a besoin de 20% pour apparaitre pleinement sur l'écran.
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    scrub: 1,
    pin: true,
  },
});

// EPEE WRAP

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container-wrap",
      start: "top top",
      scrub: true,
      pin: true,
    },
  })
  .to("#bulle-1", {
    //La position que la bulle va prendre, c'est mieux de mettre en pourcentage afin de garantir une meilleure responsivité
    left: "10%",
    top: "1%",
    opacity: 1, // rendre visible
  })
  .to("#bulle-2", {
    left: "60%",
    top: "19%",
    opacity: 1,
  })
  .to("#bulle-3", {
    left: "10%",
    top: "35%",

    opacity: 1,
  })
  .to("#bulle-4", {
    left: "5%",
    top: "60%",
    opacity: 1,
  })
  .to("#bulle-5", {
    left: "60%",
    top: "60%",
    opacity: 1,
  })
  .to("#bulle-6", {
    left: "50%",
    top: "8%",
    opacity: 1,
  })
  .to("#bulle-7", {
    left: "20%",
    top: "55%",
    opacity: 1,
  });

// PARRALAX
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container", // Élément déclencheur : quand cet élément atteint le point de début défini, l'animation commence
      start: "top top", // L'animation démarre quand le haut de .parallax-container atteint le haut de la fenêtre
      scrub: true, // Rend l'animation fluide et synchronisée avec le défilement
      pin: true, // "Pin" fixe l'élément dans la fenêtre pendant que l'animation se déroule
    },
  })
  .to("#element-3", {
    y: "50%", // Déplace l'élément vers le bas
    x: "-10%", // Déplace l'élément vers la gauche
  })
  .to(
    "#element-1",
    {
      y: "-40%",
    },
    0
  )
  .to(
    "#element-2",
    {
      y: "-100%",
      x: "5%",
    },
    0
  )
  .to(
    "#element-4",
    {
      y: "30%",
    },
    0
  );
