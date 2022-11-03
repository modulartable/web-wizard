const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("navBar");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");



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