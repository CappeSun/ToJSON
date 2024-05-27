"use strict";
const inputFields = {
  console: ["inpName", "inpYear", "inpBrand", "inpType"],
  game: ["inpName", "inpYear", "inpConsoles", "inpGenres", "inpDevelopers"],
  track: [
    "inpName",
    "inpYear",
    "inpGame",
    "inpDurationMin",
    "inpDurationSec",
    "inpComposer",
    "inpArranger",
  ],
};
const typeOfEntry = document.getElementById("typeOfEntry");
const inpType = document.getElementById("inpType");
typeOfEntry.addEventListener("change", () => {
  const selectedValue = typeOfEntry.value;
  const fieldsToShow = inputFields[selectedValue];
  document.querySelectorAll("input").forEach((input) => {
    input.style.display = "none";
  });
  inpType.style.display = "none";
  if (selectedValue) {
    fieldsToShow.forEach((field) => {
      const input = document.getElementById(field);
      if (input) {
        input.style.display = "block";
      }
    });
    if (selectedValue === "console") {
      inpType.innerHTML = "";
      ["home", "handheld", "hybrid", "vr"].forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        inpType.appendChild(optionElement);
      });
      inpType.style.display = "block";
    }
  }
});
