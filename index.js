// Remember to import the data and Dog class!

import { dogs } from "./data.js";

const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");

function getDog(dogs) {
  const newDog = dogs.shift();
  dogs.push(newDog);
  return newDog;
}

function render(obj) {
  document.getElementById("HTMLContainer").innerHTML = `
  <img src="${obj.avatar}" class="section-one-img" />
  <div class="head-parent">
    <h3 class="heading">${obj.name}, ${obj.age}</h3>
    <p class="explaination">${obj.bio}</p>
    `;
}

likeBtn.addEventListener("click", () => {
  const likeBadge = document.getElementById("badge-like");

  setTimeout(() => {
    likeBadge.style.display = "block";
  }, 500);

  setTimeout(() => {
    likeBadge.style.display = "none";
    render(getDog(dogs));
  }, 1500);
});

dislikeBtn.addEventListener("click", () => {
  const dislikeBadge = document.getElementById("badge-nope");
  setTimeout(() => {
    setTimeout(() => {
      dislikeBadge.style.display = "block";
    }, 500);
  });

  setTimeout(() => {
    dislikeBadge.style.display = "none";
    render(getDog(dogs));
  }, 1500);
});

render(getDog(dogs));
