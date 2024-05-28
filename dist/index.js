const typeOfEntry = document.getElementById("typeOfEntry");
const inpName = document.getElementById("inpName");
const inpYear = document.getElementById("inpYear");
const inpBrand = document.getElementById("inpBrand");
const inpType = document.getElementById("inpType");
const inpConsoles = document.getElementById("inpConsoles");
const inpGenres = document.getElementById("inpGenres");
const inpDevelopers = document.getElementById("inpDevelopers");
const inpGame = document.getElementById("inpGame");
const inpDurationMin = document.getElementById("inpDurationMin");
const inpDurationSec = document.getElementById("inpDurationSec");
const inpComposer = document.getElementById("inpComposer");
const inpArranger = document.getElementById("inpArranger");
const inpPretty = document.getElementById("inpPretty");
const outputField = document.getElementById("outputField");
const generateBtn = document.getElementById("generateBtn");
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
updateInpDisplay(); // Init fields on page load or reload
/*generateBtn.addEventListener("click", () => {
  const selectedValue = typeOfEntry.value as keyof InputFields;
  const fieldsToShow = inputFields[selectedValue];
  const result: Record<string, string | number> = {};

  fieldsToShow.forEach((field) => {
    const input = document.getElementById(field) as HTMLInputElement;
    let value: string | number = input.value;

    // Convert to int if the input is a year, duration, or other number type
    if (
      (field as string).includes("Year") ||
      (field as string).includes("DurationMin") ||
      (field as string).includes("DurationSec")
    ) {
      value = parseInt(value, 10);
    }

    result[field] = value;
  });

  if (selectedValue === "console") {
    result["type"] = inpType.value;
  }

  console.log(result);

  outputField.value = JSON.stringify(result, null, 2);
});*/
generateBtn.addEventListener('click', () => generateJSON()); // Generate JSON on button click
inpPretty.addEventListener('change', () => generateJSON()); // Also generate JSON on pretty print update
typeOfEntry.addEventListener('change', () => updateInpDisplay()); // Update fields on changed entry type