/*
Color variables light
  --background-one: rgb(3, 169, 211);
  --background-two: rgb(1, 123, 153);
  --accent-one: rgb(79, 220, 255);
  --accent-two: rgb(44, 195, 233);
  --primary: rgb(230, 230, 230);
  --text-main: hsl(229, 23%, 23%);
  --text-second: hsl(227, 10%, 46%);
  --hr: rgba(105, 110, 129, 0.2);
  --shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

Color variables dark
  --background-one: rgb(61, 0, 80);
  --background-two: rgb(38, 1, 59);
  --accent-one: rgb(99, 32, 155);
  --accent-two: rgb(76, 19, 129);
  --primary: rgb(36, 36, 36);
  --text-main: hsl(276, 100%, 89%);
  --text-second: hsl(277, 33%, 64%);
  --hr: rgba(169, 118, 189, 0.2);
  --shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.2);
*/
const bodyEl = document.querySelector(".body");
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {
  if (themeBtn.classList.contains("light")) {
    themeBtn.classList.remove("light");
    themeBtn.classList.add("dark");
    themeBtn.innerHTML = "light theme";
    bodyEl.style.backgroundImage = "url(images/dark-bg.jpg)";
    document.documentElement.style.setProperty(
      "--background-one",
      "rgba(61, 0, 80, 0.8)"
    );
    document.documentElement.style.setProperty(
      "--background-two",
      "rgba(38, 1, 59, 0.8)"
    );
    document.documentElement.style.setProperty(
      "--accent-one",
      "rgb(99, 32, 155)"
    );
    document.documentElement.style.setProperty(
      "--accent-two",
      "rgb(76, 19, 129)"
    );
    document.documentElement.style.setProperty("--primary", "rgb(36, 36, 36)");
    document.documentElement.style.setProperty(
      "--text-main",
      "hsl(276, 100%, 89%)"
    );
    document.documentElement.style.setProperty(
      "--text-second",
      "hsl(277, 33%, 64%)"
    );
    document.documentElement.style.setProperty("--hr", "rgba(169,118,189,0.2)");
    document.documentElement.style.setProperty(
      "--shadow",
      "0 0.5rem 1rem rgba(216, 153, 241,0.3)"
    );
  } else if (themeBtn.classList.contains("dark")) {
    themeBtn.classList.remove("dark");
    themeBtn.classList.add("light");
    themeBtn.innerHTML = "dark theme";
    bodyEl.style.backgroundImage = "url(images/light-bg.jpg)";
    document.documentElement.style.setProperty(
      "--background-one",
      "rgba(3, 169, 211, 0.8)"
    );
    document.documentElement.style.setProperty(
      "--background-two",
      "rgba(1, 123, 153, 0.8)"
    );
    document.documentElement.style.setProperty(
      "--accent-one",
      "rgb(79, 220, 255)"
    );
    document.documentElement.style.setProperty(
      "--accent-two",
      "rgb(44, 195, 233)"
    );
    document.documentElement.style.setProperty(
      "--primary",
      "rgb(230, 230, 230)"
    );
    document.documentElement.style.setProperty(
      "--text-main",
      "hsl(229, 23%, 23%)"
    );
    document.documentElement.style.setProperty(
      "--text-second",
      "hsl(227, 10%, 46%)"
    );
    document.documentElement.style.setProperty(
      "--hr",
      "rgba(105, 110, 129, 0.2)"
    );
    document.documentElement.style.setProperty(
      "--shadow",
      "0 0.5rem 1rem rgba(0, 0, 0, 0.2)"
    );
  }
});
