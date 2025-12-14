const modeButton = document.getElementById("modeButton");
let isLightMode = true;

// function to toggle between dark mode and light mode
// takes in bool : if true set to dark if false set to light
function switchModes(toDark){
  if(toDark){
    modeButton.textContent = "Light Mode";
    isLightMode = false;
  } else {
    modeButton.textContent = "Dark Mode";
    isLightMode = true;
  }
}

modeButton.addEventListener("click", () => {
  console.log("test");
  switchModes(isLightMode);
});

// when page loads test the current user colour mode preference
let checkDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
console.log(checkDarkMode.matches);

// if the above test is true, user prefers dark mode
if(checkDarkMode.matches){
  isLightMode = false;
  switchModes(true);
}