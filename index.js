const skills = document.querySelector("#skills");
const skill = document.querySelectorAll(".skill");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0;
let totalSkills = skill.length;

leftArrow.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = totalSkills - 1;
  }
  skills.style.transform = `translateX(-${index * 100}%)`;
});

rightArrow.addEventListener("click", function () {
  index++;
  if (index > totalSkills - 1) {
    index = 0;
  }
  skills.style.transform = `translateX(-${index * 100}%)`;
});
