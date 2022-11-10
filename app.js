const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const accordions = document.querySelectorAll(".accordion");

console.log(accordions);

//Toggle the mobile hamburger nav animations onClick
const animateBurger = () => {
  //Toggles the transition classes on each line of the hamburger
  line1.classList.toggle("line-1-transition");
  line2.classList.toggle("line-2-transition");
  line3.classList.toggle("line-3-transition");

  //Toggles the navBar to display
  navBar.classList.toggle("navBarToggle");
};

//Listen for clicks on the hambuger nav to trigger the animate function
hamburger.addEventListener("click", animateBurger);

//Add event listener to all accordions to toggle the active class
for (i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");

    //Toggle the display status of the accordion's accompanying panel
    let panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = "1em";
      
    }

  });
}
