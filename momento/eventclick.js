
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const title = document.querySelector("h2");


const superEventHandler = {
  mouseon() {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  mouseout() {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  resized() {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  
  rightclick() {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseover", superEventHandler.mouseon)
title.addEventListener("mouseout", superEventHandler.mouseout)
window.addEventListener("resize", superEventHandler.resized)
window.addEventListener("contextmenu", superEventHandler.rightclick)
